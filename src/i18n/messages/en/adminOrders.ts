import type { Message } from '../../core';

export const adminOrders = {
  'adminOrders.errors.notFound': 'Not found',

  // Stored order states, shown as labels only (filters and URLs keep the codes).
  'adminOrders.status.paid': 'paid',
  'adminOrders.status.refunded': 'refunded',
  'adminOrders.status.pending': 'pending',
  'adminOrders.fulfillment.fulfilled': 'Fulfilled',
  'adminOrders.fulfillment.unfulfilled': 'Unfulfilled',

  // Filter options (features/orders/filter.ts).
  'adminOrders.filter.statusPaid': 'Paid',
  'adminOrders.filter.statusPartiallyRefunded': 'Partially refunded',
  'adminOrders.filter.statusRefunded': 'Refunded',
  'adminOrders.filter.statusPending': 'Unpaid',
  'adminOrders.filter.methodStripe': 'Card (Stripe)',
  'adminOrders.filter.methodOpennode': 'Bitcoin (OpenNode)',
  'adminOrders.filter.methodDemo': 'Demo',

  // Order list (admin/orders/index.astro).
  'adminOrders.list.matchCount': { one: '{count} order', other: '{count} orders' },
  'adminOrders.list.title': 'Orders',
  'adminOrders.list.lookupNoMatch': 'No order matches “{query}”.',
  'adminOrders.list.inventoryExceptionsTitle': {
    one: '{count} inventory exception needs attention',
    other: '{count} inventory exceptions need attention',
  },
  'adminOrders.list.inventoryExceptionsHelp':
    'These paid orders arrived after their stock holds ended. Open each order to reconcile the oversold quantity.',
  'adminOrders.list.unitsOversold': {
    one: '{count} unit oversold',
    other: '{count} units oversold',
  },
  'adminOrders.list.refundEventsTitle': {
    one: '{count} refund needs attention',
    other: '{count} refunds need attention',
  },
  'adminOrders.list.refundEventsHelp':
    'Your payment provider reported these refunds but they could not be applied. Nothing was counted against your revenue yet.',
  'adminOrders.list.conflictsWith':
    'Conflicts with <a href="{href}" class="underline">order #{ref}</a>',
  'adminOrders.list.refundErrorCurrencyMismatch': 'currency mismatch',
  'adminOrders.list.dismiss': 'Dismiss',
  'adminOrders.list.noOrderForPayment': 'No order records this payment',
  'adminOrders.list.retry': 'Retry',
  'adminOrders.list.lookupPlaceholder': 'Order # or ID',
  'adminOrders.list.lookupLabel': 'Find an order by number or ID',
  'adminOrders.list.find': 'Find',
  'adminOrders.list.exportFiltered': 'Export these',
  'adminOrders.list.exportAll': 'Export CSV',
  'adminOrders.list.filterPayment': 'Payment',
  'adminOrders.list.filterAnyPayment': 'All payments',
  'adminOrders.list.filterFulfillment': 'Fulfillment',
  'adminOrders.list.filterAnyFulfillment': 'Any fulfillment',
  'adminOrders.list.filterMethod': 'Method',
  'adminOrders.list.filterAnyMethod': 'All methods',
  'adminOrders.list.colOrder': 'Order #',
  'adminOrders.list.colPublicId': 'Public ID',
  'adminOrders.list.colEmail': 'Email',
  'adminOrders.list.colTotal': 'Total',
  'adminOrders.list.colStatus': 'Status',
  'adminOrders.list.colFulfillment': 'Fulfillment',
  'adminOrders.list.colWhen': 'When',
  'adminOrders.list.emptyFiltered': 'No orders match these filters.',
  'adminOrders.list.empty': 'No orders yet.',

  // Order detail (admin/orders/[id].astro).
  'adminOrders.detail.title': 'Order #{ref}',
  'adminOrders.detail.back': 'Back to orders',
  'adminOrders.detail.inventoryTitle': 'Inventory reconciliation required',
  'adminOrders.detail.inventoryHelp':
    'Payment arrived after the stock hold ended. The order remains paid, but these quantities could not be deducted automatically.',
  'adminOrders.detail.inventoryLine':
    '<strong>{name}</strong>: ordered {requested}, only {consumed} available at settlement ({shortfall} oversold).',
  'adminOrders.detail.inventoryItemFallback': 'Order item',
  'adminOrders.detail.markReconciled': 'Mark reconciled',
  'adminOrders.detail.status': 'Status',
  'adminOrders.detail.placed': 'Placed',
  'adminOrders.detail.email': 'Email',
  'adminOrders.detail.shipping': 'Shipping',
  'adminOrders.detail.discount': 'Discount',
  'adminOrders.detail.tax': 'Tax',
  'adminOrders.detail.total': 'Total',
  'adminOrders.detail.shipTo': 'Ship to',
  'adminOrders.detail.paymentMethod': 'Payment method',
  'adminOrders.detail.paymentReference': 'Payment reference',
  'adminOrders.detail.methodStripe': 'Card (Stripe)',
  'adminOrders.detail.methodOpennode': 'Bitcoin (OpenNode)',
  'adminOrders.detail.methodDemo': 'Demo (no charge)',
  'adminOrders.detail.fulfillment': 'Fulfillment',
  'adminOrders.detail.labelUnreconciledTitle': 'A purchased label is not reflected on this order',
  'adminOrders.detail.labelTracking': 'tracking <span class="tabular-nums">{tracking}</span>',
  'adminOrders.detail.labelTransaction':
    'Shippo transaction <code class="text-xs">{transaction}</code>',
  'adminOrders.detail.labelUnreconciledHelp':
    'The order changed state (refunded or fulfilled another way) while this label was being bought, so its tracking was not applied. The charge is real — void the label in Shippo if it won’t be used.',
  'adminOrders.detail.labelPdf': 'Label PDF',
  'adminOrders.detail.labelUncertain':
    'A label purchase for this order did not complete cleanly — it <strong>may</strong> have been charged (Shippo order reference <code class="text-xs">{ref}</code>).',
  'adminOrders.detail.labelUncertainWithError':
    'A label purchase for this order did not complete cleanly ({error}) — it <strong>may</strong> have been charged (Shippo order reference <code class="text-xs">{ref}</code>).',
  'adminOrders.detail.reconcile': 'Reconcile with Shippo',
  'adminOrders.detail.forceSummary': 'The request never reached Shippo? (risk-bearing override)',
  'adminOrders.detail.forceHelp':
    'Force-discarding abandons the single-purchase guarantee for this order: if the lost request did reach Shippo and completes later, that label will exist only in your Shippo dashboard and will not be recorded here. Reconcile first when in doubt.',
  'adminOrders.detail.forceDiscard': 'I accept the risk — force discard',
  'adminOrders.detail.shippingLabelPdf': 'Shipping label (PDF)',
  'adminOrders.detail.markUnfulfilled': 'Mark unfulfilled',
  'adminOrders.detail.buyLabelTitle': 'Buy shipping label',
  'adminOrders.detail.labelInFlight':
    'A label purchase is in progress for this order. Refresh in a moment — if it doesn’t complete within a couple of minutes it can be reconciled here.',
  'adminOrders.detail.labelUncertainReconcile':
    'A label purchase for this order did not complete cleanly — it <strong>may</strong> have been charged. Reconciling asks Shippo directly: a found label is recorded here and the order fulfilled; a confirmed no-purchase reopens rate fetching.',
  'adminOrders.detail.labelUncertainReconcileWithError':
    'A label purchase for this order did not complete cleanly ({error}) — it <strong>may</strong> have been charged. Reconciling asks Shippo directly: a found label is recorded here and the order fulfilled; a confirmed no-purchase reopens rate fetching.',
  'adminOrders.detail.labelPurchased': 'Label purchased ({provider} {service}).',
  'adminOrders.detail.labelInternational':
    'This order ships to {to} but your saved ship-from address is in {from} — international labels aren’t supported yet (they need a customs declaration). Buy the label in your Shippo dashboard, then record the tracking number below.',
  'adminOrders.detail.estimatedDays': '~{days}d',
  'adminOrders.detail.buyLabel': 'Buy label',
  'adminOrders.detail.startOver': 'Start over',
  'adminOrders.detail.buyHelp':
    'Buying charges your Shippo account, records the tracking number, and marks the order fulfilled.',
  'adminOrders.detail.buyHelpEmail': 'The customer is emailed the tracking details.',
  'adminOrders.detail.buyHelpNoEmail':
    'No customer email will be sent (demo order or no email on file).',
  'adminOrders.detail.shipFromName': 'Ship from — name',
  'adminOrders.detail.street': 'Street',
  'adminOrders.detail.city': 'City',
  'adminOrders.detail.state': 'State',
  'adminOrders.detail.postalCode': 'Postal code',
  'adminOrders.detail.country': 'Country',
  'adminOrders.detail.length': 'Length ({unit})',
  'adminOrders.detail.width': 'Width ({unit})',
  'adminOrders.detail.height': 'Height ({unit})',
  'adminOrders.detail.packedWeight': 'Packed weight ({unit})',
  'adminOrders.detail.getRates': 'Get rates',
  'adminOrders.detail.ratesHelp':
    'Address and box size are remembered for the next label. Weight is prefilled from the order’s recorded shipment weight when there is one.',
  'adminOrders.detail.carrier': 'Carrier',
  'adminOrders.detail.trackingNumber': 'Tracking #',
  'adminOrders.detail.markFulfilled': 'Mark as fulfilled',
  'adminOrders.detail.labelHistory': 'Label history ({count})',
  'adminOrders.detail.outcomePurchased': 'Purchased',
  'adminOrders.detail.outcomeRefunded': 'Refunded',
  'adminOrders.detail.outcomeFailed': 'Failed',
  'adminOrders.detail.outcomeForceDiscarded': 'Force-discarded',
  'adminOrders.detail.attemptTracking': 'Tracking {tracking}',
  'adminOrders.detail.attemptTransaction': 'Transaction <code>{transaction}</code>',
  'adminOrders.detail.customerLink': 'Customer link',
  'adminOrders.detail.reissueConfirm':
    'Email {email} a fresh order link? Every previously shared link for this order stops working immediately.',
  'adminOrders.detail.reissue': 'Email a new order link',
  'adminOrders.detail.reissueHelp':
    'Use this if the customer reports a forwarded or leaked link. The old links stop working the moment the new one is issued.',
  'adminOrders.detail.items': 'Items',
  'adminOrders.detail.colProduct': 'Product',
  'adminOrders.detail.colUnitPrice': 'Unit price',
  'adminOrders.detail.colQty': 'Qty',
  'adminOrders.detail.colLineTotal': 'Line total',
  'adminOrders.detail.noItems': 'No line items recorded for this order.',
  'adminOrders.detail.totalMismatch':
    'Note: line items total {amount} differs from the order total — verify against the payment provider.',

  // Refunds panel (features/refunds/RefundPanel.astro).
  'adminOrders.refunds.title': 'Refunds',
  'adminOrders.refunds.stateFull': 'Refunded',
  'adminOrders.refunds.statePartial': 'Partially refunded',
  'adminOrders.refunds.needsReview': 'Needs review.',
  'adminOrders.refunds.reviewCurrencyMismatch':
    'A refund arrived in a different currency than this order was charged in. The totals were left untouched.',
  'adminOrders.refunds.reviewExceedsTotal':
    'The provider’s refund total plus what was recorded here is more than the order total.',
  'adminOrders.refunds.markReviewed': 'Mark reviewed',
  'adminOrders.refunds.orderTotal': 'Order total',
  'adminOrders.refunds.throughProvider': 'Through provider',
  'adminOrders.refunds.recordedByHand': 'Recorded by hand',
  'adminOrders.refunds.totalRefunded': 'Total refunded',
  'adminOrders.refunds.refundableLeft': 'Refundable left',
  'adminOrders.refunds.net': 'Net',
  'adminOrders.refunds.kindProviderApi': 'Refunded through provider',
  'adminOrders.refunds.kindProviderSync': 'Synced from provider',
  'adminOrders.refunds.kindManualExternal': 'Recorded by hand',
  'adminOrders.refunds.kindManualReversal': 'Correction',
  'adminOrders.refunds.kindDemo': 'Demo adjustment',
  'adminOrders.refunds.kindLegacy': 'Recorded before refund history',
  'adminOrders.refunds.voided': 'Voided',
  'adminOrders.refunds.voidConfirm':
    'Void this recorded refund? This corrects minshop’s records only and moves no money.',
  'adminOrders.refunds.void': 'Void',
  'adminOrders.refunds.refundConfirm':
    'Refund {amount} through the payment provider? This sends money back to the customer.',
  'adminOrders.refunds.refundButton': 'Refund {amount} through provider',
  'adminOrders.refunds.refundHelp':
    'Sends the money back. For a partial refund, use your provider’s dashboard — it syncs back here automatically.',
  'adminOrders.refunds.recordDemoTitle': 'Mark demo order refunded',
  'adminOrders.refunds.recordTitle': 'Record a refund you already sent',
  'adminOrders.refunds.amountLabel': 'Refund amount',
  'adminOrders.refunds.notePlaceholder': 'How it was sent (internal)',
  'adminOrders.refunds.noteLabel': 'Internal note',
  'adminOrders.refunds.markRefunded': 'Mark refunded',
  'adminOrders.refunds.recordRefund': 'Record refund',
  'adminOrders.refunds.recordDemoHelp':
    'This only updates the demo order and store statistics. No money was charged or returned.',
  'adminOrders.refunds.recordHelp':
    'This only updates minshop’s records and moves no money. Send the refund from your wallet or provider first.',
  'adminOrders.refunds.syncTitle': 'Sync a refund from your provider',
  'adminOrders.refunds.syncAmountLabel': 'Total refunded at the provider',
  'adminOrders.refunds.providerRefundIdPlaceholder': 'Provider refund ID (optional)',
  'adminOrders.refunds.providerRefundIdLabel': 'Provider refund ID',
  'adminOrders.refunds.syncTotal': 'Sync total',
  'adminOrders.refunds.syncHelp':
    'Use this only if a refund you made at the provider never appeared here. Enter the <strong>total refunded so far</strong>, not just the latest amount.',

  // Order actions (api/admin/orders/[id].ts) — flash messages on the order page.
  'adminOrders.api.invalidInventoryException': 'Invalid inventory exception.',
  'adminOrders.api.inventoryReconciled': 'Inventory exception marked reconciled.',
  'adminOrders.api.inventoryAlreadyResolved':
    'That inventory exception is already resolved or does not belong to this order.',
  'adminOrders.api.reissueNoEmail':
    'This order has no customer email, so a new link cannot be delivered. Nothing was changed.',
  'adminOrders.api.reissueDemo':
    'Demo orders never email customers, so their link cannot be reissued.',
  'adminOrders.api.reissueLegacy':
    'This order predates revocable guest links and cannot be reissued.',
  'adminOrders.api.reissueEmailOff':
    'Email is not configured, so the replacement link could not be delivered. Nothing was changed.',
  'adminOrders.api.reissueUnsettled': 'Only settled orders with a guest link can be reissued.',
  'adminOrders.api.reissued':
    'The old order links no longer work. A new link is being emailed to the customer.',
  'adminOrders.api.refundManualExists':
    'This order already has a manually recorded refund. Issue the remaining amount in your payment provider’s dashboard — it will sync back here automatically.',
  'adminOrders.api.refundAlreadyFull': 'This order is already fully refunded.',
  'adminOrders.api.refundUnsupported':
    'Refunds are not supported for this payment method — return the money yourself, then use "Record refund".',
  'adminOrders.api.refundFailed': 'Refund failed: {error}',
  'adminOrders.api.orderNotFound': 'Order not found.',
  'adminOrders.api.refundAmountRequired': 'Enter a refund amount above zero.',
  'adminOrders.api.refundDuplicate': 'That refund is already recorded — nothing was changed.',
  'adminOrders.api.refundOverBalance':
    'That is more than the remaining refundable balance ({amount}).',
  'adminOrders.api.refundNotAllowed': 'This order cannot be refunded.',
  'adminOrders.api.syncAmountRequired': 'Enter the total refunded so far.',
  'adminOrders.api.syncOverTotal': 'That is more than the order total.',
  'adminOrders.api.syncNotAllowed': 'This order cannot be reconciled.',
  'adminOrders.api.syncDuplicate': 'That total is already recorded — nothing was changed.',
  'adminOrders.api.syncConflict':
    'Recorded, but the provider total plus refunds recorded here now exceeds the order total. Review the refunds on this order.',
  'adminOrders.api.invalidRefund': 'Invalid refund.',
  'adminOrders.api.voidDuplicate': 'That entry has already been voided.',
  'adminOrders.api.voidNotAllowed': 'Only manually recorded refunds can be voided.',
  'adminOrders.api.labelDiscarded': 'Label attempt discarded. You can fetch rates again.',
  'adminOrders.api.labelNothingToDiscard':
    'There is no discardable label attempt — a submitted purchase must be reconciled with Shippo instead.',
  'adminOrders.api.labelForceDiscarded':
    'Attempt force-discarded. If the original request did reach Shippo, its label will appear only in your Shippo dashboard.',
  'adminOrders.api.labelNothingToForceDiscard': 'There is no submitted attempt to force-discard.',
  'adminOrders.api.shippoTokenMissing': 'Add a Shippo API token in Settings first.',
  'adminOrders.api.labelNothingToReconcile': 'There is no unsettled label attempt to reconcile.',
  'adminOrders.api.reconcileFailed': 'Could not reconcile with Shippo: {error}',
  'adminOrders.api.reconcilePending':
    'Shippo has no settled answer yet — the purchase may still be processing or not yet visible. Try again shortly; nothing was changed.',
  'adminOrders.api.reconcileRaced':
    'The attempt changed state while reconciling — reload and check again.',
  'adminOrders.api.reconcileRefunded':
    'Shippo shows the label was purchased and then refunded (transaction {transaction}). Recorded — you can fetch rates again.',
  'adminOrders.api.reconcileNoneStored':
    'Reconciled with Shippo: the attempt terminated in ERROR without purchasing.',
  'adminOrders.api.reconcileNone':
    'Shippo explicitly reports the attempt failed without purchasing. You can fetch rates again.',
  'adminOrders.api.reconcileUnfulfilled':
    'Label {tracking} recovered from Shippo and recorded — but the order refused fulfillment (refunded or already fulfilled). Reconcile the shipment by hand.',
  'adminOrders.api.reconcileFulfilled':
    'Label {tracking} recovered from Shippo, recorded, and the order fulfilled.',
  'adminOrders.api.noShippingAddress': 'This order has no shipping address.',
  'adminOrders.api.addressUnreadable': 'This order’s shipping address could not be read.',
  'adminOrders.api.addressIncomplete':
    'This order’s shipping address is incomplete — a label needs name, street, city, postal code, and country.',
  'adminOrders.api.shipFromIncomplete':
    'Fill in the complete ship-from address (2-letter country).',
  'adminOrders.api.internationalUnsupported':
    'International labels aren’t supported yet (this order ships to {country}). Buy this label in your Shippo dashboard, then record the tracking number here.',
  'adminOrders.api.parcelInvalid': 'Check the parcel fields.',
  'adminOrders.api.quoteRefused':
    'This order can’t fetch rates right now — a label purchase already exists or the order is no longer eligible.',
  'adminOrders.api.pickRate': 'Pick a rate first.',
  'adminOrders.api.noOpenQuote':
    'No open quote to purchase — fetch rates first (or a purchase is already under way).',
  'adminOrders.api.rateGoneStored': 'Selected rate no longer offered.',
  'adminOrders.api.rateGone': 'That rate is no longer offered. Fetch rates again.',
  'adminOrders.api.purchaseUncertain':
    'Shippo’s answer was lost mid-purchase ({error}) — the label MAY have been bought. Use “Reconcile with Shippo” on this order to settle it either way.',
  'adminOrders.api.purchaseSuperseded':
    'A label ({tracking}) was purchased by an attempt that had already been discarded — it is not recorded here. Reconcile it in your Shippo dashboard (order {order}).',
  'adminOrders.api.purchaseUnfulfilled':
    'Label {tracking} was purchased and saved, but the order could not be marked fulfilled with it — it changed state meanwhile (refunded?). No customer email was sent. Reconcile by hand.',
  'adminOrders.api.purchasedEmailQueued':
    'Label purchased ({provider} {service}). Tracking {tracking} recorded. The tracking email to the customer has been queued.',
  'adminOrders.api.purchasedNoEmail':
    'Label purchased ({provider} {service}). Tracking {tracking} recorded. No customer email will be sent (demo order, no address, or email not configured).',
  'adminOrders.api.fulfillBlocked':
    'This order has a label purchase in progress or awaiting reconciliation — finish or discard that first.',

  // Unmatched refund events (api/admin/refunds.ts) — flash messages on the list.
  'adminOrders.refundEvents.missingEvent': 'Missing event.',
  'adminOrders.refundEvents.notWaiting': 'That event is no longer waiting to be reconciled.',
  'adminOrders.refundEvents.stillUnmatched':
    'Still no order matches that payment. It stays queued — you can retry again after the order’s payment ID is filled in.',
  'adminOrders.refundEvents.cannotDismiss':
    'This refund has not been matched to an order yet, so it can’t be dismissed — that would hide money that really moved. Use Retry once the order’s payment ID exists.',

  // Shippo label errors (features/shipping/labels.ts).
  'adminOrders.labels.parcelDimensions':
    'Enter the parcel’s length, width, and height as positive numbers.',
  'adminOrders.labels.parcelWeight': 'Enter the packed parcel weight as a positive number.',
  'adminOrders.labels.unreachable': 'Shippo is unreachable right now.',
  'adminOrders.labels.tokenRejected': 'Shippo rejected the API token.',
  'adminOrders.labels.unreadableBody': 'Shippo answered {status} with an unreadable body.',
  'adminOrders.labels.httpStatus': 'Shippo answered {status}.',
  'adminOrders.labels.noRates': 'No carrier offered a rate for this parcel and address.',
  'adminOrders.labels.ratesExpired': 'That rate list has expired. Fetch rates again.',
  'adminOrders.labels.purchaseFailed': 'Shippo could not purchase that label.',
  'adminOrders.labels.unexpectedShape':
    'Shippo answered with an unexpected shape; reconciliation is inconclusive.',
  'adminOrders.labels.incompletePurchased':
    'Shippo reports a purchased label but its record is incomplete; reconcile in the dashboard.',
  'adminOrders.labels.conflictingStates':
    'Shippo returned conflicting transaction states; reconciliation is inconclusive.',
  'adminOrders.labels.incompleteRefunded':
    'Shippo reports a refunded label but its record is incomplete; reconcile in the dashboard.',
  'adminOrders.labels.unknownStatus':
    'Shippo reported a transaction status this version does not recognize; reconcile in the dashboard.',

  // CSV export column headers (admin/orders/export.csv.ts). Values stay codes.
  'adminOrders.export.order': 'Order',
  'adminOrders.export.date': 'Date',
  'adminOrders.export.email': 'Email',
  'adminOrders.export.status': 'Status',
  'adminOrders.export.fulfillment': 'Fulfillment',
  'adminOrders.export.subtotal': 'Subtotal',
  'adminOrders.export.shipping': 'Shipping',
  'adminOrders.export.discount': 'Discount',
  'adminOrders.export.tax': 'Tax',
  'adminOrders.export.total': 'Total',
  'adminOrders.export.currency': 'Currency',
  'adminOrders.export.providerRefunded': 'Provider refunded',
  'adminOrders.export.externallyRefunded': 'Externally refunded',
  'adminOrders.export.totalRefunded': 'Total refunded',
  'adminOrders.export.net': 'Net',
  'adminOrders.export.refundState': 'Refund state',
  'adminOrders.export.refundReview': 'Refund review',
  'adminOrders.export.carrier': 'Carrier',
  'adminOrders.export.tracking': 'Tracking',

  // Customers (admin/customers/*).
  'adminOrders.customers.title': 'Customers',
  'adminOrders.customers.colEmail': 'Email',
  'adminOrders.customers.colOrders': 'Orders',
  'adminOrders.customers.colLifetime': 'Lifetime value',
  'adminOrders.customers.colLastOrder': 'Last order',
  'adminOrders.customers.empty': 'No customers yet.',
  'adminOrders.customers.back': 'Back to customers',
  'adminOrders.customers.summary': {
    one: '{count} order · {lifetime} lifetime',
    other: '{count} orders · {lifetime} lifetime',
  },
  'adminOrders.customers.colOrder': 'Order',
  'adminOrders.customers.colTotal': 'Total',
  'adminOrders.customers.colStatus': 'Status',
  'adminOrders.customers.colWhen': 'When',
} satisfies Record<`adminOrders.${string}`, Message>;
