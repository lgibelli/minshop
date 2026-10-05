import { normalizePageLayout, type PageLayout } from './layouts.ts';
import { enI18n, type I18n } from '../../i18n/core.ts';

const MAX_TITLE = 120;
const MAX_BODY = 100_000;

export interface PageFields {
  title: string;
  /** Raw slug as typed; '' means "derive it from the title". */
  slug: string;
  body_markdown: string;
  published: number;
  /** Always a known preset — unknown submissions fall back to the default. */
  layout: PageLayout;
}

/**
 * Parse and validate the page form. Returns either the fields or a single
 * user-facing message, matching parseProductForm's shape.
 */
export function parsePageForm(
  form: FormData,
  i18n: I18n = enI18n,
): { data: PageFields } | { error: string } {
  const title = String(form.get('title') ?? '').trim();
  if (!title) return { error: i18n.t('adminContent.form.titleRequired') };
  if (title.length > MAX_TITLE) {
    return { error: i18n.t('adminContent.form.titleTooLong', { max: i18n.number(MAX_TITLE) }) };
  }

  const body = String(form.get('body_markdown') ?? '');
  if (body.length > MAX_BODY) {
    return { error: i18n.t('adminContent.form.bodyTooLong', { max: i18n.number(MAX_BODY) }) };
  }

  return {
    data: {
      title,
      slug: String(form.get('slug') ?? '').trim(),
      body_markdown: body,
      // Checkbox: present = on. Any other truthy encoding ('1', 'true') also works.
      published: form.get('published') ? 1 : 0,
      layout: normalizePageLayout(form.get('layout')),
    },
  };
}
