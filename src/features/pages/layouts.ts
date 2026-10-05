/**
 * Page layout presets — THE single source of truth.
 *
 * ── Adding a preset ──────────────────────────────────────────────────────────
 * Add one entry below, plus its label and hint messages in
 * src/i18n/messages/en/adminContent.ts (a missing message is a type error).
 * That is the whole change:
 *   • the editor's Layout dropdown is generated from this object
 *   • validation accepts it automatically (the union is derived from the keys)
 *   • the storefront and the admin preview both apply it
 *   • no CSS is needed — `measure` and `titleAlign` are emitted as custom
 *     properties that global.css already consumes
 *
 * A preset that needs MORE than measure + title alignment (a tinted background,
 * a different type scale) can additionally target `[data-page-layout="<key>"]`
 * in global.css. The attribute is always rendered, so that hook exists without
 * any extra wiring.
 *
 * Presets are deliberately a closed set rather than free-form width/alignment
 * controls: every combination here is one someone would actually want, which
 * keeps a merchant from building a centred title over a full-width data table.
 */

import { enI18n, type I18n, type MessageKey } from '../../i18n/core.ts';

export interface PageLayoutPreset {
  /** Message key for the editor dropdown label. */
  label: MessageKey;
  /** Message key for the one-line guidance under the dropdown. */
  hint: MessageKey;
  /** CSS length for the content column. */
  measure: string;
  /** Title alignment for the page's <h1>. */
  titleAlign: 'left' | 'center';
}

export const PAGE_LAYOUTS = {
  standard: {
    label: 'adminContent.layout.standard',
    hint: 'adminContent.layout.standardHint',
    measure: '48rem',
    titleAlign: 'left',
  },
  editorial: {
    label: 'adminContent.layout.editorial',
    hint: 'adminContent.layout.editorialHint',
    measure: '48rem',
    titleAlign: 'center',
  },
  wide: {
    label: 'adminContent.layout.wide',
    hint: 'adminContent.layout.wideHint',
    measure: '72rem',
    titleAlign: 'left',
  },
} as const satisfies Record<string, PageLayoutPreset>;

export type PageLayout = keyof typeof PAGE_LAYOUTS;

/** Matches the column default in migration 0027. */
export const DEFAULT_PAGE_LAYOUT: PageLayout = 'standard';

export const PAGE_LAYOUT_KEYS = Object.keys(PAGE_LAYOUTS) as PageLayout[];

/**
 * Editor dropdown data — generated, so a new preset needs no form change. Label
 * and hint are message keys here; render through pageLayoutOptions().
 */
export const PAGE_LAYOUT_OPTIONS = PAGE_LAYOUT_KEYS.map((key) => ({
  key,
  ...PAGE_LAYOUTS[key],
}));

/** The dropdown options with label and hint in the caller's language. */
export function pageLayoutOptions(
  i18n: I18n = enI18n,
): { key: PageLayout; label: string; hint: string }[] {
  return PAGE_LAYOUT_OPTIONS.map((option) => ({
    key: option.key,
    label: i18n.t(option.label),
    hint: i18n.t(option.hint),
  }));
}

/**
 * Coerce stored/submitted values to a known preset. Unknown values fall back to
 * the default rather than throwing: a page written by a newer build (or a preset
 * a developer later removes) must still render.
 */
export function normalizePageLayout(value: unknown): PageLayout {
  // hasOwn, not `in`: `'toString' in PAGE_LAYOUTS` is true via the prototype
  // chain, so `in` would accept it as a preset and then emit
  // `--page-measure:undefined` from a value a form can submit freely.
  return typeof value === 'string' && Object.hasOwn(PAGE_LAYOUTS, value)
    ? (value as PageLayout)
    : DEFAULT_PAGE_LAYOUT;
}

/**
 * Inline custom properties for the rendered article. global.css reads these, so
 * a preset defined purely in this file needs no stylesheet edit.
 */
export function pageLayoutStyle(layout: PageLayout): string {
  const preset = PAGE_LAYOUTS[layout];
  return `--page-measure:${preset.measure};--page-title-align:${preset.titleAlign}`;
}
