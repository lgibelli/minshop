/**
 * Media-library text a merchant reads: upload errors, where an item is used,
 * and why an attach was refused.
 *
 * Kept apart from upload.ts, usage.ts, and db.ts on purpose. Those are loaded
 * under Node's type stripping by test/integration/media.mjs, and the translator
 * cannot load there (src/i18n/core.ts uses extensionless imports). They return
 * data and reason codes; this module turns them into words.
 */
import { enI18n, type I18n } from '../../i18n/core';
import { MAX_UPLOAD_BYTES, UPLOAD_EXTENSIONS } from './upload';
import type { AttachFailure } from './db';
import type { MediaUsage } from './usage';

/** Returns a user-facing error string if the upload is invalid, else null. */
export function validateUpload(file: File, i18n: I18n = enI18n): string | null {
  if (!UPLOAD_EXTENSIONS.has(file.type)) {
    return i18n.t('adminProducts.media.badType');
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return i18n.t('adminProducts.media.tooLarge');
  }
  return null;
}

/** The refusal from attachMediaToProduct(), in words. */
export function attachError(reason: AttachFailure, i18n: I18n = enI18n): string {
  return reason === 'already_attached'
    ? i18n.t('adminProducts.media.alreadyInGallery')
    : i18n.t('adminProducts.media.notInLibrary');
}

export interface UsageLink {
  href: string;
  label: string;
  kind: 'product' | 'page' | 'logo';
  /** Tooltip. Per-kind rather than templated: "the logo that uses this image"
   *  reads wrong, because the logo IS the use rather than a thing having one. */
  title: string;
}

/**
 * Where a media item is used, as admin links. Deleting is refused while any of
 * these exist, so the answer to "why can't I remove this?" should be one click
 * away rather than a name the admin has to go hunting for.
 */
export function usageLinks(usage: MediaUsage, i18n: I18n = enI18n): UsageLink[] {
  return [
    ...usage.products.map((p) => ({
      href: `/admin/products/${p.public_id}/edit`,
      label: p.name,
      kind: 'product' as const,
      title: i18n.t('adminProducts.media.editProduct', { name: p.name }),
    })),
    ...usage.pages.map((p) => ({
      href: `/admin/pages/${p.public_id}/edit`,
      label: p.title,
      kind: 'page' as const,
      title: i18n.t('adminProducts.media.editPage', { title: p.title }),
    })),
    // The logo is a setting, not a row, so it links to where it is chosen.
    ...(usage.logo
      ? [
          {
            href: '/admin/settings',
            label: i18n.t('adminProducts.media.storeLogo'),
            kind: 'logo' as const,
            title: i18n.t('adminProducts.media.changeLogo'),
          },
        ]
      : []),
  ];
}

/** Human-readable "why can't I delete this" message. */
export function describeUsage(usage: MediaUsage, i18n: I18n = enI18n): string {
  const parts: string[] = [];
  if (usage.products.length > 0) {
    parts.push(
      i18n.t('adminProducts.media.usageProducts', {
        count: usage.products.length,
        names: usage.products.map((p) => p.name).join(', '),
      }),
    );
  }
  if (usage.pages.length > 0) {
    parts.push(
      i18n.t('adminProducts.media.usagePages', {
        count: usage.pages.length,
        names: usage.pages.map((p) => p.title).join(', '),
      }),
    );
  }
  if (usage.logo) parts.push(i18n.t('adminProducts.media.usageLogo'));
  // "a and b and c": each further part is joined onto the phrase so far.
  return parts
    .slice(1)
    .reduce(
      (first, second) => i18n.t('adminProducts.media.usageAnd', { first, second }),
      parts[0] ?? '',
    );
}
