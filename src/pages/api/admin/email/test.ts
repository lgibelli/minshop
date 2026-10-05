import type { APIRoute } from 'astro';
import { getEmailProvider } from '../../../../features/email';
import { getStoreSettings } from '../../../../features/settings/db';
import { env } from 'cloudflare:workers';

export const prerender = false;

// POST /api/admin/email/test — send a one-off test email with the CURRENTLY SAVED
// email config (provider + key + from), so the owner can confirm delivery actually
// works (the only way past "binding present ≠ deliverable"). Returns JSON for the
// dashboard's inline button; falls back to a ?msg redirect without JS. The email
// goes to the admin who clicked, so it speaks the admin language like the reply.
export const POST: APIRoute = async ({ request, redirect, locals }) => {
  const { t, th } = locals.i18n;
  const form = await request.formData();
  const to = String(form.get('test_to') ?? '').trim();
  const wantsJson = request.headers.get('x-requested-with') === 'fetch';
  const done = (ok: boolean, message: string) =>
    wantsJson
      ? new Response(JSON.stringify({ ok, message }), {
          status: 200,
          headers: { 'content-type': 'application/json; charset=utf-8' },
        })
      : redirect(`/admin/settings?msg=${encodeURIComponent(message)}#email`, 303);

  if (!to || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) {
    return done(false, t('adminSettings.emailTest.invalidRecipient'));
  }
  const provider = await getEmailProvider();
  if (!provider) {
    return done(false, t('adminSettings.emailTest.notConfigured'));
  }
  const storeName =
    (await getStoreSettings(env.DB)).storeName ?? t('adminSettings.emailTest.fallbackStoreName');
  try {
    await provider.send({
      to,
      subject: t('adminSettings.emailTest.subject', { store: storeName }),
      html: th('adminSettings.emailTest.html', { store: storeName }),
      text: t('adminSettings.emailTest.text', { store: storeName }),
    });
    return done(true, t('adminSettings.emailTest.sent', { to }));
  } catch (err) {
    return done(
      false,
      t('adminSettings.emailTest.failed', {
        error: (err as Error).message || t('adminSettings.emailTest.unknownError'),
      }),
    );
  }
};
