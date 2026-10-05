import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import {
  getOrder,
  getOrderByPublicId,
  fulfillOrder,
  unfulfillOrder,
  type ShippingAddress,
  resolveInventoryException,
} from '../../../../features/orders/db';
import { getSecret } from '../../../../features/secrets/store';
import { setSetting } from '../../../../features/settings/db';
import {
  carrierCodeFor,
  fetchLabelRates,
  findTransactionForRate,
  getShipmentRates,
  parseParcelForm,
  purchaseLabel,
  type ShipFrom,
} from '../../../../features/shipping/labels.ts';
import {
  claimPurchase,
  discardLabelAttempt,
  forceDiscardLabelAttempt,
  getLabelRecord,
  isPurchaseStale,
  markLabelFailed,
  markLabelUncertain,
  recordPurchased,
  recordQuote,
  recordRefundedAttempt,
} from '../../../../features/shipping/labelStore';
import { queueNotification } from '../../../../features/email/outboxStore';
import {
  recordExternalRefund,
  syncProviderRefund,
  voidRecordedRefund,
  acknowledgeRefundReview,
  refundableCents,
  openReviewIfOverRefunded,
  getRefundByPublicId,
} from '../../../../features/refunds/db';
import { sendRefundNotice } from '../../../../features/refunds/notify';
import { getEmailProvider } from '../../../../features/email';
import { reissueGuestAccess } from '../../../../features/orders/guestAccess.ts';
import { deliverOrderNotifications } from '../../../../features/email/outbox';
import { getStoreSettings } from '../../../../features/settings/db';
import { shouldSendCustomerOrderEmail } from '../../../../features/email/orderPolicy';
import { getPaymentProvider, type PaymentMethod } from '../../../../features/payments';
import { formatPrice } from '../../../../config';
import { parseOrderOrLegacyPublicId, parsePublicId } from '../../../../features/ids/publicId';

export const prerender = false;

// POST /api/admin/orders/:id — fulfill, unfulfill, refund, or reissue the guest
// link. :id is the order public ID (ord_ or a preserved legacy shape); numeric
// row ids are not accepted.
export const POST: APIRoute = async ({ request, params, redirect, locals }) => {
  const { i18n } = locals;
  const { t } = i18n;
  const publicId = parseOrderOrLegacyPublicId(params.id, 'order');
  const existing = publicId ? await getOrderByPublicId(env.DB, publicId) : null;
  if (!existing) return new Response(t('adminOrders.errors.notFound'), { status: 404 });
  const id = existing.id;

  const form = await request.formData();
  const action = String(form.get('_action'));
  const back = redirect(`/admin/orders/${publicId}`, 303);

  if (action === 'unfulfill') {
    await unfulfillOrder(env.DB, id);
    return back;
  }

  const fail = (msg: string) =>
    redirect(`/admin/orders/${publicId}?error=${encodeURIComponent(msg)}`, 303);
  const notice = (msg: string) =>
    redirect(`/admin/orders/${publicId}?notice=${encodeURIComponent(msg)}`, 303);
  const cents = () => {
    const raw = String(form.get('amount') ?? '').trim();
    // Merchants type dollars; everything downstream is cents.
    const n = Math.round(Number(raw) * 100);
    return Number.isFinite(n) ? n : NaN;
  };
  const admin = String(form.get('_admin') ?? '') || null;
  const note = String(form.get('note') ?? '').trim() || null;
  const reason = String(form.get('reason') ?? '').trim() || null;

  if (action === 'resolve_inventory_exception') {
    const exceptionId = parsePublicId(form.get('exception_id'), 'inventoryException');
    if (!exceptionId) return fail(t('adminOrders.api.invalidInventoryException'));
    const resolved = await resolveInventoryException(env.DB, id, exceptionId);
    return resolved
      ? notice(t('adminOrders.api.inventoryReconciled'))
      : fail(t('adminOrders.api.inventoryAlreadyResolved'));
  }

  // Rotate the guest access token and email the customer the replacement link.
  // The token itself NEVER appears in admin output — the queued customer email
  // is the only delivery path. Reissue applies to settled orders with a
  // revocable registry token; anything else is refused with a reason.
  if (action === 'reissue_link') {
    if (!existing.email) {
      return fail(t('adminOrders.api.reissueNoEmail'));
    }
    if (!shouldSendCustomerOrderEmail(existing.payment_method)) {
      return fail(t('adminOrders.api.reissueDemo'));
    }
    if (!existing.public_id?.startsWith('ord_')) {
      // A legacy order's guest link IS its preserved public ID — there is no
      // registry token to rotate.
      return fail(t('adminOrders.api.reissueLegacy'));
    }
    // Rotation kills every old link the instant it lands, so refuse up front
    // when no email provider could deliver the replacement — otherwise the
    // customer would lose access with nothing on the way.
    if (!(await getEmailProvider(await getStoreSettings(env.DB)))) {
      return fail(t('adminOrders.api.reissueEmailOff'));
    }
    // Atomic: rotates the token AND queues the versioned
    // guest-link-reissue:<generation> notification in one D1 batch; refuses
    // unsettled checkouts (and unknown registry rows).
    const reissued = await reissueGuestAccess(env.DB, existing.public_id);
    if (!reissued) {
      return fail(t('adminOrders.api.reissueUnsettled'));
    }
    try {
      await deliverOrderNotifications(env.DB, id, new URL(request.url).origin);
    } catch (err) {
      // The row stays queued; the piggyback sweep will retry it.
      console.error('Guest-link reissue delivery failed:', err);
    }
    return notice(t('adminOrders.api.reissued'));
  }

  // Refund through the provider. Moves money.
  if (action === 'refund') {
    const order = await getOrder(env.DB, id);
    if (!order?.provider_session_id) return back;

    // Local guards first, before building a provider client: constructing one
    // throws when the rail isn't fully configured, and a request we were going
    // to reject anyway shouldn't surface as a 500 with no explanation.
    //
    // A refund already recorded by hand makes a full provider refund ambiguous:
    // we would be asking the provider for the whole total while part of it has
    // already gone back another way. The merchant should refund the remainder
    // in the provider's own dashboard, which syncs back automatically.
    if (order.external_refunded_cents > 0) {
      return fail(t('adminOrders.api.refundManualExists'));
    }
    if (refundableCents(order) <= 0) return fail(t('adminOrders.api.refundAlreadyFull'));

    try {
      // NULL predates payment_method and was always Stripe. Falling through to
      // the store's CURRENT default would send a legacy card refund at whatever
      // rail happens to be configured now.
      const provider = await getPaymentProvider(
        (order.payment_method ?? 'stripe') as PaymentMethod,
      );
      if (!provider.refund) {
        return fail(t('adminOrders.api.refundUnsupported'));
      }
      await provider.refund(order.provider_session_id);
    } catch (err) {
      return fail(t('adminOrders.api.refundFailed', { error: (err as Error).message }));
    }
    // Absolute, not additive: the provider now holds the full total. The
    // charge.refunded webhook that follows reports the same number and is
    // therefore a no-op rather than a second refund.
    const synced = await syncProviderRefund(env.DB, {
      orderId: id,
      cumulativeRefundedCents: order.amount_total_cents,
      provider: order.payment_method ?? 'stripe',
      idempotencyKey: `admin:provider-refund:${id}:${order.amount_total_cents}`,
      reason: reason ?? 'Full refund issued from minshop',
      createdBy: admin,
    });
    // Precisely because that webhook is a no-op, it will not mail the customer
    // either — so this path has to. Whichever of the two recognises the money
    // first sends exactly one notice.
    if (synced.ok && synced.advanced) {
      await sendRefundNotice(id, synced.deltaCents, new URL(request.url).origin);
    }
    return back;
  }

  // Record money already returned outside the provider. Moves no money.
  if (action === 'record_refund') {
    const order = await getOrder(env.DB, id);
    if (!order) return fail(t('adminOrders.api.orderNotFound'));
    const amount = cents();
    if (!Number.isFinite(amount) || amount <= 0) {
      return fail(t('adminOrders.api.refundAmountRequired'));
    }

    const result = await recordExternalRefund(env.DB, {
      orderId: id,
      amountCents: amount,
      // Same order + amount + note submitted twice is a double-click, not two
      // refunds. A merchant who really means two identical refunds can add a
      // distinguishing note.
      idempotencyKey: `manual:${id}:${amount}:${note ?? ''}`,
      kind: order.payment_method === 'demo' ? 'demo' : 'manual_external',
      provider: order.payment_method,
      reason,
      note,
      createdBy: admin,
    });

    if (!result.ok) {
      if (result.reason === 'duplicate') {
        return fail(t('adminOrders.api.refundDuplicate'));
      }
      if (result.reason === 'insufficient_balance') {
        return fail(
          t('adminOrders.api.refundOverBalance', {
            amount: formatPrice(refundableCents(order), undefined, i18n.intl),
          }),
        );
      }
      if (result.reason === 'invalid_amount') return fail(t('adminOrders.api.refundAmountRequired'));
      return fail(t('adminOrders.api.refundNotAllowed'));
    }
    // sendRefundNotice applies the demo rule itself, so demo orders stay silent.
    await sendRefundNotice(id, amount, new URL(request.url).origin);
    return back;
  }

  // Reconcile a refund the merchant made in the provider's own dashboard, for
  // when the webhook never arrived. Absolute: this is the provider's total.
  if (action === 'sync_refund') {
    const order = await getOrder(env.DB, id);
    if (!order) return fail(t('adminOrders.api.orderNotFound'));
    const amount = cents();
    if (!Number.isFinite(amount) || amount < 0) return fail(t('adminOrders.api.syncAmountRequired'));
    if (amount > order.amount_total_cents) {
      return fail(t('adminOrders.api.syncOverTotal'));
    }

    const result = await syncProviderRefund(env.DB, {
      orderId: id,
      cumulativeRefundedCents: amount,
      provider: order.payment_method ?? 'stripe',
      idempotencyKey: `admin:sync:${id}:${amount}`,
      providerRefundId: String(form.get('provider_refund_id') ?? '').trim() || null,
      reason: reason ?? 'Synced by hand from the provider dashboard',
      createdBy: admin,
    });

    if (!result.ok) return fail(t('adminOrders.api.syncNotAllowed'));
    if (!result.advanced) {
      return fail(t('adminOrders.api.syncDuplicate'));
    }
    // The provider total can be individually valid yet exceed the order once
    // added to what was recorded by hand. The generated aggregate clamps, so
    // without this the conflict would be absorbed silently — the webhook path
    // has always checked, and this path must too.
    const conflict = await openReviewIfOverRefunded(env.DB, id);
    await sendRefundNotice(id, result.deltaCents, new URL(request.url).origin);
    if (conflict) {
      return fail(t('adminOrders.api.syncConflict'));
    }
    return back;
  }

  // Correct a mistaken manual entry. Moves no money. The form submits the
  // refund's public ID (rfnd_ or a preserved legacy UUID); resolution happens
  // here at the boundary and the ledger write stays integer.
  if (action === 'void_refund') {
    const refundPublicId = parseOrderOrLegacyPublicId(form.get('refund_id'), 'refund');
    const target = refundPublicId ? await getRefundByPublicId(env.DB, refundPublicId) : null;
    if (!target || target.order_id !== id) return fail(t('adminOrders.api.invalidRefund'));
    const result = await voidRecordedRefund(env.DB, {
      refundId: target.id,
      idempotencyKey: `void:${target.id}`,
      reason,
      createdBy: admin,
    });
    if (!result.ok) {
      return fail(
        result.reason === 'duplicate'
          ? t('adminOrders.api.voidDuplicate')
          : t('adminOrders.api.voidNotAllowed'),
      );
    }
    return back;
  }

  if (action === 'review_refund') {
    await acknowledgeRefundReview(env.DB, id, admin);
    return back;
  }

  /** Attempt outbox delivery of the shipped notice; true iff an email will go. */
  const queueShippedDelivery = async (orderId: number): Promise<boolean> => {
    const settings = await getStoreSettings(env.DB);
    const order = await getOrder(env.DB, orderId);
    const willEmail =
      !!order?.email &&
      shouldSendCustomerOrderEmail(order.payment_method) &&
      !!(await getEmailProvider(settings));
    if (willEmail) {
      try {
        await deliverOrderNotifications(env.DB, orderId, new URL(request.url).origin, settings);
      } catch (err) {
        // Row stays queued; the piggyback sweep retries it.
        console.error('Shipped-notification delivery failed:', err);
      }
    }
    return willEmail;
  };

  // ── Shipping labels ────────────────────────────────────────────────────────
  // Buying moves money on the merchant's Shippo account, so every step runs
  // through the shipping_labels state machine: one row per order, conditional
  // claims, and an explicit human gate for ambiguous outcomes. The shipment id
  // is NEVER taken from the request — only from this order's own row.

  if (action === 'label_discard') {
    // Quotes and definitively-failed attempts only. A SUBMITTED purchase may
    // still be completing at Shippo — only reconciliation can settle those.
    return (await discardLabelAttempt(env.DB, id))
      ? notice(t('adminOrders.api.labelDiscarded'))
      : fail(t('adminOrders.api.labelNothingToDiscard'));
  }

  if (action === 'label_force_discard') {
    // The risk-bearing override, chosen by a human who has read what it costs:
    // deleting a submitted attempt ends the single-shot guarantee for this
    // order — if the lost request completes after all, its label will exist
    // only at Shippo. Reconciliation is always the safe path; this exists for
    // attempts whose POST plausibly never left the building.
    return (await forceDiscardLabelAttempt(env.DB, id))
      ? notice(t('adminOrders.api.labelForceDiscarded'))
      : fail(t('adminOrders.api.labelNothingToForceDiscard'));
  }

  // Ask Shippo what actually happened to a submitted-but-unsettled attempt.
  // This is the ONLY path that reopens (proven no purchase → 'failed') or
  // durably records (found a SUCCESS transaction → same guarded completion as
  // a live purchase) an ambiguous attempt.
  if (action === 'label_reconcile') {
    const token = await getSecret(env.DB, 'shippo_api_key');
    if (!token) return fail(t('adminOrders.api.shippoTokenMissing'));
    const record = await getLabelRecord(env.DB, id);
    const settleable =
      record &&
      record.claim_token &&
      record.rate_id &&
      (record.status === 'uncertain' || (record.status === 'purchasing' && isPurchaseStale(record)));
    if (!record || !settleable) {
      return fail(t('adminOrders.api.labelNothingToReconcile'));
    }

    // Provider/service/amount come from the shipment's own rate list — the
    // transaction record does not carry them.
    const rates = await getShipmentRates(token, record.shipment_id, i18n);
    const rate = rates.ok ? rates.value.find((r) => r.rateId === record.rate_id) : null;
    const outcome = await findTransactionForRate(
      token,
      record.rate_id!,
      rate?.provider ?? record.provider ?? 'Carrier',
      i18n,
    );
    if (!outcome.ok) return fail(t('adminOrders.api.reconcileFailed', { error: outcome.error }));

    if (outcome.value.state === 'pending') {
      return fail(t('adminOrders.api.reconcilePending'));
    }
    if (outcome.value.state === 'refunded') {
      // Bought, then refunded at the provider: record the original transaction
      // for the audit trail; only that recording reopens quoting.
      const refFound = outcome.value.label;
      const audited = await recordRefundedAttempt(env.DB, id, record.claim_token!, {
        transactionId: refFound.transactionId,
        provider: refFound.provider,
        service: rate?.service ?? record.service ?? '',
        amountCents: rate?.amountCents ?? record.amount_cents ?? 0,
        trackingNumber: refFound.trackingNumber,
        labelUrl: refFound.labelUrl,
        carrierCode: carrierCodeFor(refFound.provider),
      });
      if (!audited) return fail(t('adminOrders.api.reconcileRaced'));
      return notice(
        t('adminOrders.api.reconcileRefunded', { transaction: refFound.transactionId }),
      );
    }
    if (outcome.value.state === 'none') {
      const failed = await markLabelFailed(
        env.DB,
        id,
        record.claim_token!,
        t('adminOrders.api.reconcileNoneStored'),
      );
      if (!failed) {
        return fail(t('adminOrders.api.reconcileRaced'));
      }
      return notice(t('adminOrders.api.reconcileNone'));
    }
    const found = outcome.value.label;
    const recorded = await recordPurchased(env.DB, id, record.claim_token!, {
      transactionId: found.transactionId,
      provider: found.provider,
      service: rate?.service ?? record.service ?? '',
      amountCents: rate?.amountCents ?? record.amount_cents ?? 0,
      trackingNumber: found.trackingNumber,
      labelUrl: found.labelUrl,
      carrierCode: carrierCodeFor(found.provider),
    });
    if (!recorded.recorded) {
      return fail(t('adminOrders.api.reconcileRaced'));
    }
    if (!recorded.orderFulfilled) {
      return notice(t('adminOrders.api.reconcileUnfulfilled', { tracking: found.trackingNumber }));
    }
    await queueShippedDelivery(id);
    return notice(t('adminOrders.api.reconcileFulfilled', { tracking: found.trackingNumber }));
  }

  if (action === 'label_rates' || action === 'buy_label') {
    const token = await getSecret(env.DB, 'shippo_api_key');
    if (!token) return fail(t('adminOrders.api.shippoTokenMissing'));
    if (!existing.ship_address) return fail(t('adminOrders.api.noShippingAddress'));
    let raw: ShippingAddress;
    try {
      raw = JSON.parse(existing.ship_address) as ShippingAddress;
    } catch {
      return fail(t('adminOrders.api.addressUnreadable'));
    }
    // The snapshot's fields are nullable (provider shapes vary); a label needs
    // the essentials, so refuse with the gap named rather than 500 at Shippo.
    if (!raw.name || !raw.line1 || !raw.city || !raw.postal || !raw.country) {
      return fail(t('adminOrders.api.addressIncomplete'));
    }
    const shipTo = {
      name: raw.name,
      line1: raw.line1,
      line2: raw.line2,
      city: raw.city,
      state: raw.state,
      postal: raw.postal,
      country: raw.country,
      email: existing.email,
    };

    if (action === 'label_rates') {
      const from: ShipFrom = {
        name: String(form.get('from_name') ?? '').trim(),
        street1: String(form.get('from_street1') ?? '').trim(),
        city: String(form.get('from_city') ?? '').trim(),
        state: String(form.get('from_state') ?? '').trim(),
        zip: String(form.get('from_zip') ?? '').trim(),
        country: String(form.get('from_country') ?? '').trim().toUpperCase(),
      };
      if (!from.name || !from.street1 || !from.city || !from.zip || from.country.length !== 2) {
        return fail(t('adminOrders.api.shipFromIncomplete'));
      }
      // Domestic only, for now: an international label needs a customs
      // declaration (contents, values, phone numbers) this flow does not
      // collect, so Shippo would refuse or the parcel would stall at export.
      if (from.country !== shipTo.country.toUpperCase()) {
        return fail(
          t('adminOrders.api.internationalUnsupported', { country: shipTo.country.toUpperCase() }),
        );
      }
      const settings = await getStoreSettings(env.DB);
      const parsed = parseParcelForm(
        {
          length: String(form.get('parcel_length') ?? ''),
          width: String(form.get('parcel_width') ?? ''),
          height: String(form.get('parcel_height') ?? ''),
          weight: String(form.get('parcel_weight') ?? ''),
        },
        settings.weightUnit,
        i18n,
      );
      if (!parsed.parcel) return fail(parsed.error ?? t('adminOrders.api.parcelInvalid'));

      // Remember for next time regardless of whether a label gets bought.
      await setSetting(env.DB, 'ship_from', JSON.stringify(from));
      await setSetting(
        env.DB,
        'parcel_default',
        JSON.stringify({
          length: parsed.parcel.length,
          width: parsed.parcel.width,
          height: parsed.parcel.height,
        }),
      );

      const rates = await fetchLabelRates(
        token,
        from,
        shipTo,
        parsed.parcel,
        settings.weightUnit,
        existing.public_id,
        i18n,
      );
      if (!rates.ok) return fail(rates.error);
      // The quote binds to THIS order in D1. Refusal means a purchase is in
      // progress, done, or the order is no longer labelable (unpaid, fulfilled,
      // pickup) — nothing was charged either way.
      if (!(await recordQuote(env.DB, id, rates.value.shipmentId))) {
        return fail(t('adminOrders.api.quoteRefused'));
      }
      return back;
    }

    // buy_label — the claim flips this order's quote to 'purchasing'; exactly
    // one concurrent submit wins, and the shipment bought from is the row's.
    const rateId = String(form.get('rate') ?? '').trim();
    if (!rateId) return fail(t('adminOrders.api.pickRate'));
    const claim = await claimPurchase(env.DB, id, rateId);
    if (!claim) {
      return fail(t('adminOrders.api.noOpenQuote'));
    }
    const rates = await getShipmentRates(token, claim.shipmentId, i18n);
    if (!rates.ok) {
      await markLabelFailed(env.DB, id, claim.claimToken, rates.error);
      return fail(rates.error);
    }
    const rate = rates.value.find((r) => r.rateId === rateId);
    if (!rate) {
      await markLabelFailed(env.DB, id, claim.claimToken, t('adminOrders.api.rateGoneStored'));
      return fail(t('adminOrders.api.rateGone'));
    }

    const bought = await purchaseLabel(token, rate.rateId, rate.provider, existing.public_id, i18n);
    if (!bought.ok) {
      if (bought.uncertain) {
        // The charge MAY have landed. Park it — never auto-retry a purchase —
        // and point the merchant at the dashboard record (tagged with the
        // order id via metadata) before they explicitly discard.
        await markLabelUncertain(env.DB, id, claim.claimToken, bought.error);
        return fail(t('adminOrders.api.purchaseUncertain', { error: bought.error }));
      }
      await markLabelFailed(env.DB, id, claim.claimToken, bought.error);
      return fail(bought.error);
    }

    // One batch: label row, guarded fulfillment, label URL, and the durable
    // shipped-notification row. A crash after the charge can no longer leave a
    // paid label unrecorded, and the email survives via the outbox sweep.
    const recorded = await recordPurchased(env.DB, id, claim.claimToken, {
      transactionId: bought.value.transactionId,
      provider: rate.provider,
      service: rate.service,
      amountCents: rate.amountCents,
      trackingNumber: bought.value.trackingNumber,
      labelUrl: bought.value.labelUrl,
      carrierCode: carrierCodeFor(bought.value.provider),
    });
    if (!recorded.recorded) {
      // This attempt was superseded (its lease expired and it was discarded)
      // while Shippo processed it — the label exists ONLY at Shippo. Nothing
      // here was touched, by design; the charge still needs human eyes.
      return fail(
        t('adminOrders.api.purchaseSuperseded', {
          tracking: bought.value.trackingNumber,
          order: String(existing.public_id),
        }),
      );
    }
    if (!recorded.orderFulfilled) {
      // The charge is real and saved, but the order refused fulfillment — it
      // was refunded or otherwise changed state while the provider call was in
      // flight. No shipped email was queued. Say so — pretending this
      // succeeded is how paid labels get lost.
      return fail(
        t('adminOrders.api.purchaseUnfulfilled', { tracking: bought.value.trackingNumber }),
      );
    }
    const willEmail = await queueShippedDelivery(id);
    return notice(
      t(willEmail ? 'adminOrders.api.purchasedEmailQueued' : 'adminOrders.api.purchasedNoEmail', {
        provider: rate.provider,
        service: rate.service,
        tracking: bought.value.trackingNumber,
      }),
    );
  }

  // Fulfill
  const carrier = String(form.get('carrier') ?? '').trim() || null;
  const trackingNumber = String(form.get('tracking_number') ?? '').trim() || null;
  if (!(await fulfillOrder(env.DB, id, carrier, trackingNumber))) {
    return fail(t('adminOrders.api.fulfillBlocked'));
  }

  // Durable shipped notice: queue + attempt now; a failed send is retried by
  // the outbox sweep instead of vanishing into a log line. Demo orders and
  // orders without an email are marked skipped by the deliverer itself.
  await queueNotification(env.DB, id, 'order-shipped');
  try {
    await deliverOrderNotifications(env.DB, id, new URL(request.url).origin);
  } catch (err) {
    console.error('Shipped-notification delivery failed:', err);
  }

  return back;
};
