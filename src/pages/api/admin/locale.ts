import type { APIRoute } from 'astro';
import { ADMIN_LOCALE_COOKIE, isLocale } from '../../../i18n/index.ts';

const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Remember this browser's admin language, then return to the page it came from.
 * Only admin paths are accepted as the destination, so this can't be used as an
 * open redirect.
 */
export const POST: APIRoute = async ({ request, cookies, redirect, url }) => {
  const form = await request.formData();
  const locale = form.get('locale');
  const next = String(form.get('next') ?? '');
  if (isLocale(locale)) {
    cookies.set(ADMIN_LOCALE_COOKIE, locale, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: url.protocol === 'https:',
      maxAge: ONE_YEAR,
    });
  }
  const safeNext = /^\/admin(\/|\?|$)/.test(next) ? next : '/admin';
  return redirect(safeNext, 303);
};
