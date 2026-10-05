import { enI18n, type I18n } from '../../i18n/core';
import type { StoreSettings } from './db';

export interface RuntimeCapabilities {
  vault: boolean;
  authSecret: boolean;
  images: boolean;
  emailBinding: boolean;
  ai: boolean;
  vectorize: boolean;
}

export interface SettingAvailability {
  available: boolean;
  reason?: string;
}

const hasSecret = (settings: StoreSettings, caps: RuntimeCapabilities, name: string): boolean =>
  caps.vault && settings.configuredSecrets.includes(name);

export function stripeConfigured(
  settings: StoreSettings,
  caps: RuntimeCapabilities,
): boolean {
  return (
    hasSecret(settings, caps, 'stripe_secret_key') &&
    hasSecret(settings, caps, 'stripe_webhook_secret')
  );
}

export function emailConfigured(
  settings: StoreSettings,
  caps: RuntimeCapabilities,
): boolean {
  if (!settings.emailEnabled) return false;
  return settings.emailProvider === 'cloudflare'
    ? caps.emailBinding
    : hasSecret(settings, caps, 'resend_api_key');
}

export function featureAvailability(
  key: string,
  settings: StoreSettings,
  caps: RuntimeCapabilities,
  i18n: I18n = enI18n,
): SettingAvailability {
  const { t } = i18n;
  if (key === 'discounts_enabled' || key === 'tax_enabled') {
    return stripeConfigured(settings, caps)
      ? { available: true }
      : { available: false, reason: t('adminSettings.availability.stripe') };
  }
  if (key === 'accounts_enabled') {
    if (!caps.authSecret) {
      return { available: false, reason: t('adminSettings.availability.authSecret') };
    }
    if (!emailConfigured(settings, caps)) {
      return { available: false, reason: t('adminSettings.availability.email') };
    }
  }
  if (key === 'image_optimize' && !caps.images) {
    return { available: false, reason: t('adminSettings.availability.images') };
  }
  return { available: true };
}

export function semanticSearchAvailable(caps: RuntimeCapabilities): boolean {
  return caps.ai && caps.vectorize;
}

export function lightningConfigurationError(
  backend: 'lnbits' | 'phoenixd',
  url: string,
  hasCredential: boolean,
  i18n: I18n = enI18n,
): string | null {
  const { t } = i18n;
  // Product names, not translated.
  const label = backend === 'lnbits' ? 'LNbits' : 'phoenixd';
  if (!url) return t('adminSettings.lightning.errorAddUrl', { backend: label });
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return t('adminSettings.lightning.errorInvalidUrl', { backend: label });
    }
  } catch {
    return t('adminSettings.lightning.errorInvalidUrl', { backend: label });
  }
  if (!hasCredential) {
    return backend === 'lnbits'
      ? t('adminSettings.lightning.errorAddLnbitsKey')
      : t('adminSettings.lightning.errorAddPhoenixdPassword');
  }
  return null;
}

export function turnstileConfigured(
  settings: StoreSettings,
  caps: RuntimeCapabilities,
): boolean {
  return (
    caps.vault &&
    !!settings.turnstileSiteKey &&
    settings.configuredSecrets.includes('turnstile_secret_key')
  );
}
