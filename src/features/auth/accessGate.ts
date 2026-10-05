import { enI18n, type I18n } from '../../i18n/core';

export type AccessGateDecision =
  | { action: 'bootstrap' }
  | { action: 'deny'; message: string }
  | { action: 'verify'; token: string; teamDomain: string; aud: string };

/**
 * Decide whether a passwordless admin request may enter bootstrap or must pass
 * Cloudflare Access verification. Defining either Access variable opts the
 * deployment into fail-closed Access mode, including on the workers.dev origin
 * where the edge does not inject an assertion. Deny messages are plain-text 403
 * bodies the operator reads, so they come from `i18n`.
 */
export function accessGateDecision(
  token: string | null,
  teamDomain: string | undefined,
  aud: string | undefined,
  i18n: I18n = enI18n,
): AccessGateDecision {
  const accessConfigured = Boolean(teamDomain || aud);

  if (accessConfigured) {
    if (!teamDomain || !aud) {
      return {
        action: 'deny',
        message: i18n.t('admin.access.misconfigured'),
      };
    }
    if (!token) {
      return { action: 'deny', message: i18n.t('admin.access.required') };
    }
    return { action: 'verify', token, teamDomain, aud };
  }

  // Never trust an assertion unless this deployment has the issuer + audience
  // needed to verify it. With no assertion and no Access config, first-run
  // password bootstrap remains available.
  if (token) {
    return {
      action: 'deny',
      message: i18n.t('admin.access.notConfigured'),
    };
  }
  return { action: 'bootstrap' };
}
