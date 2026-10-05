/**
 * Dependency-free i18n core. Pure (no Cloudflare imports), so unit-tested modules
 * and presentation builders can take an `I18n` without touching the runtime.
 *
 * Catalogs are flat maps of `area.key` → message, one file per area under
 * `messages/<locale>/`. English is the source of truth: its keys define
 * `MessageKey`, and every other locale falls back to it key by key, so a partial
 * translation degrades to English instead of showing raw keys.
 *
 * A message is either
 *   - a string with `{param}` placeholders: 'Hello {name}', or
 *   - CLDR plural forms chosen by `params.count` through Intl.PluralRules:
 *     { one: '{count} item', other: '{count} items' } — Polish adds `few`/`many`.
 */
import { createTranslator, type Message, type Translator } from './format.ts';
import { en } from './messages/en/index.ts';
import { pl } from './messages/pl/index.ts';
import { it } from './messages/it/index.ts';

export { escapeHtml, formatMessage } from './format.ts';
export type { Message, Params, PluralMessage } from './format.ts';
export type MessageKey = keyof typeof en;
/** A translation: any subset of the English keys (missing ones fall back). */
export type Catalog = Partial<Record<MessageKey, Message>>;

interface LocaleInfo {
  /** Native name, for the admin language switcher. */
  label: string;
  /** BCP 47 tag handed to Intl for numbers, prices, and dates. */
  intl: string;
  messages: Catalog;
}

/**
 * Bundled locales. Adding one = a `messages/<code>/` folder plus one entry here.
 * `en` maps to en-US so English formatting is unchanged from before i18n.
 */
export const LOCALES = {
  en: { label: 'English', intl: 'en-US', messages: en },
  pl: { label: 'Polski', intl: 'pl-PL', messages: pl },
  it: { label: 'Italiano', intl: 'it-IT', messages: it },
} satisfies Record<string, LocaleInfo>;

export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && Object.hasOwn(LOCALES, value);
}

/** A configured locale code, or English when it isn't bundled. */
export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** The translator for one locale, typed over every catalog key. */
export interface I18n extends Translator<MessageKey> {
  locale: Locale;
}

const instances = new Map<Locale, I18n>();

/** The translator for a locale (cached: catalogs and formatters are immutable). */
export function createI18n(locale: Locale = DEFAULT_LOCALE): I18n {
  const cached = instances.get(locale);
  if (cached) return cached;
  const messages = LOCALES[locale].messages as Catalog;
  const i18n = createTranslator<MessageKey>(
    locale,
    LOCALES[locale].intl,
    (key) => messages[key] ?? (en as Catalog)[key],
  ) as I18n;
  instances.set(locale, i18n);
  return i18n;
}

/** English — the default for pure code and tests that don't pass a translator. */
export const enI18n: I18n = createI18n('en');
