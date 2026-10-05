/**
 * Runtime side of i18n: picks the locale for a request from config + cookie.
 * The translation engine itself is pure and lives in ./core.
 *
 * - Storefront, storefront APIs, and emails speak the store locale
 *   (`config.locale`, build-time like currency: product content is written in
 *   one language).
 * - The admin speaks `config.adminLocale` (default: the store locale), and each
 *   admin browser can switch it from the sidebar; the choice is a cookie.
 *
 * Middleware puts the request's translator on `Astro.locals.i18n`; code that runs
 * outside a request (emails sent from webhooks or the cron) uses storeI18n().
 */
import type { AstroCookies } from 'astro';
import { getConfig } from '../config';
import { createI18n, resolveLocale, isLocale, type I18n, type Locale } from './core';

export * from './core';

/** Cookie holding an admin browser's language choice. */
export const ADMIN_LOCALE_COOKIE = 'minshop_admin_locale';

/** The store's language: storefront pages, storefront APIs, and emails. */
export function storeLocale(): Locale {
  return resolveLocale(getConfig().locale);
}

export function storeI18n(): I18n {
  return createI18n(storeLocale());
}

/** The admin language for a browser: its cookie choice, else the configured default. */
export function adminLocale(cookieValue: string | undefined): Locale {
  if (isLocale(cookieValue)) return cookieValue;
  const config = getConfig();
  return resolveLocale(config.adminLocale ?? config.locale);
}

export function isAdminPath(pathname: string): boolean {
  return (
    pathname === '/admin' ||
    pathname.startsWith('/admin/') ||
    pathname === '/api/admin' ||
    pathname.startsWith('/api/admin/')
  );
}

/** The translator for one request: admin paths use the admin locale. */
export function requestI18n(pathname: string, cookies: AstroCookies): I18n {
  if (!isAdminPath(pathname)) return storeI18n();
  return createI18n(adminLocale(cookies.get(ADMIN_LOCALE_COOKIE)?.value));
}
