import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getMediaByPublicId, deleteMediaRecord } from '../../../../features/media/db';
import { mediaUsage } from '../../../../features/media/usage';
import { describeUsage } from '../../../../features/media/text';
import { getStorage } from '../../../../features/storage';
import { parsePublicId } from '../../../../features/ids/publicId';

export const prerender = false;

// POST /api/admin/media/:id — `_action=delete` removes a library item.
// :id is the med_ public ID; numeric row ids are not accepted.
// This is the ONLY place an object leaves storage.
export const POST: APIRoute = async ({ request, params, redirect, locals }) => {
  const { i18n } = locals;
  const publicId = parsePublicId(params.id, 'media');
  if (!publicId) return new Response(i18n.t('admin.invalidId'), { status: 400 });

  const form = await request.formData();
  if (String(form.get('_action')) !== 'delete') {
    return new Response(i18n.t('admin.unknownAction'), { status: 400 });
  }

  const wantsJson = request.headers.get('accept')?.includes('application/json');
  const media = await getMediaByPublicId(env.DB, publicId);
  if (!media) return new Response(i18n.t('admin.notFound'), { status: 404 });
  const id = media.id;

  // One guarded statement: it deletes only while nothing references the row, so
  // there is no window between checking and deleting. A null result means it
  // refused — resolve usage afterwards purely to explain why.
  const deletedKey = await deleteMediaRecord(env.DB, id);
  if (!deletedKey) {
    const usage = await mediaUsage(env.DB, id);
    const message = i18n.t('adminProducts.media.stillUsed', { usage: describeUsage(usage, i18n) });
    return wantsJson
      ? new Response(JSON.stringify({ error: message }), {
          status: 409,
          headers: { 'content-type': 'application/json', 'cache-control': 'private, no-store' },
        })
      : redirect(`/admin/media?error=${encodeURIComponent(message)}`, 303);
  }

  // Row first, object second. A failed object delete leaves an invisible orphan;
  // the reverse order would leave a live row pointing at a missing file, which
  // shows as a broken image everywhere it was used.
  try {
    await getStorage().delete(deletedKey);
  } catch (err) {
    console.error(
      JSON.stringify({
        event: 'media_object_delete_failed',
        mediaId: id,
        key: deletedKey,
        message: err instanceof Error ? err.message : String(err),
      }),
    );
  }

  return wantsJson
    ? new Response(JSON.stringify({ deleted: publicId }), {
        headers: { 'content-type': 'application/json', 'cache-control': 'private, no-store' },
      })
    : redirect('/admin/media', 303);
};
