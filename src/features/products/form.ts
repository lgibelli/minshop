import type { ProductFields } from './db';
import { enI18n, type I18n } from '../../i18n/core';
import { toMinorUnits } from '../../money';
import { toGrams, type WeightUnit } from '../shipping/weight';

export interface ProductFormOptions {
  /** Admin's display unit. Storage is always grams. */
  unit?: WeightUnit;
  /**
   * True when at least one enabled zone prices by weight with no flat fallback —
   * i.e. when a missing weight would make this product unsellable. The merchant is
   * told at the field rather than discovering it as lost checkouts.
   */
  requireWeight?: boolean;
}

/**
 * Parse + validate the scalar product form fields. Prices arrive in major units
 * (e.g. dollars) and are stored as integer minor units, scaled by the product's
 * currency (×100 for USD, ×1 for JPY). Weight arrives in the store's display unit
 * and is stored as integer grams. The image upload is handled by the endpoint, not
 * here. Returns either the clean fields or a user-facing error, in `i18n`'s language.
 */
export function parseProductForm(
  form: FormData,
  options: ProductFormOptions = {},
  i18n: I18n = enI18n,
): { data: ProductFields } | { error: string } {
  const { unit = 'g', requireWeight = false } = options;

  const name = String(form.get('name') ?? '').trim();
  if (!name) return { error: i18n.t('adminProducts.validation.nameRequired') };

  const price = Number(String(form.get('price') ?? '').trim());
  if (!Number.isFinite(price) || price < 0) {
    return { error: i18n.t('adminProducts.validation.priceInvalid') };
  }

  const stock = Number(String(form.get('stock') ?? '0').trim());
  if (!Number.isInteger(stock) || stock < 0) {
    return { error: i18n.t('adminProducts.validation.stockInvalid') };
  }

  const currency = String(form.get('currency') ?? 'usd').trim().toLowerCase() || 'usd';
  // Scale by the chosen currency's minor units (so 1000 JPY stores as 1000, not 100000).
  const price_cents = toMinorUnits(price, currency);
  const description = String(form.get('description') ?? '').trim() || null;
  // Unchecked checkboxes submit nothing, so absence means inactive.
  const active = form.get('active') != null ? 1 : 0;
  const requires_shipping = form.get('requires_shipping') != null ? 1 : 0;

  const parsedWeight = toGrams(String(form.get('weight') ?? ''), unit);
  let weight_grams: number | null = null;
  if (parsedWeight.status === 'ok') {
    weight_grams = parsedWeight.grams;
  } else if (parsedWeight.status === 'error') {
    return { error: weightFieldError(parsedWeight.reason, unit, i18n) };
  } else if (requireWeight && requires_shipping === 1 && active === 1) {
    return { error: i18n.t('adminProducts.validation.weightRequired') };
  }

  return {
    data: { name, description, price_cents, currency, stock, active, weight_grams, requires_shipping },
  };
}

function weightFieldError(
  reason: 'not_number' | 'negative' | 'precision' | 'over_limit',
  unit: WeightUnit,
  i18n: I18n,
): string {
  switch (reason) {
    case 'negative':
      return i18n.t('adminProducts.validation.weightNegative');
    case 'precision':
      return i18n.t('adminProducts.validation.weightPrecision', { unit });
    case 'over_limit':
      return i18n.t('adminProducts.validation.weightTooHeavy');
    default:
      return i18n.t('adminProducts.validation.weightNotNumber');
  }
}
