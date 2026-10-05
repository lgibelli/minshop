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
import { formatMoney } from '../money';
import { en } from './messages/en';
import { pl } from './messages/pl';
import { it } from './messages/it';

export type PluralMessage = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };
export type Message = string | PluralMessage;
export type MessageKey = keyof typeof en;
/** A translation: any subset of the English keys (missing ones fall back). */
export type Catalog = Partial<Record<MessageKey, Message>>;
export type Params = Record<string, string | number>;

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

export interface I18n {
  locale: Locale;
  /** BCP 47 tag for Intl (en-US, pl-PL, …). */
  intl: string;
  /** Translate a key. Unknown keys return the key itself (and fail typecheck). */
  t(key: MessageKey, params?: Params): string;
  /**
   * Translate a message that contains markup (catalogs are trusted source),
   * HTML-escaping every param. Render with `set:html`.
   */
  th(key: MessageKey, params?: Params): string;
  /** Integer minor units → localized price in an explicit currency. */
  money(minor: number, currency: string): string;
  /** Localized number (grouping, decimals). */
  number(value: number, opts?: Intl.NumberFormatOptions): string;
}

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
}

function interpolate(template: string, params: Params | undefined, escape: boolean): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) => {
    if (!Object.hasOwn(params, name)) return match;
    const value = String(params[name]);
    return escape ? escapeHtml(value) : value;
  });
}

// Intl constructors are expensive; one cached instance per locale/options.
const pluralRules = new Map<string, Intl.PluralRules>();
const numberFormats = new Map<string, Intl.NumberFormat>();

function pluralCategory(intl: string, count: number): Intl.LDMLPluralRule {
  let rules = pluralRules.get(intl);
  if (!rules) {
    rules = new Intl.PluralRules(intl);
    pluralRules.set(intl, rules);
  }
  return rules.select(count);
}

function numberFormat(intl: string, opts: Intl.NumberFormatOptions = {}): Intl.NumberFormat {
  const cacheKey = `${intl}|${JSON.stringify(opts)}`;
  let fmt = numberFormats.get(cacheKey);
  if (!fmt) {
    fmt = new Intl.NumberFormat(intl, opts);
    numberFormats.set(cacheKey, fmt);
  }
  return fmt;
}

/**
 * Render one message: pick the plural form for `params.count` (falling back to
 * `other`), then fill `{param}` placeholders. Unknown placeholders stay as-is.
 */
export function formatMessage(
  message: Message,
  intl: string,
  params?: Params,
  escape = false,
): string {
  if (typeof message === 'string') return interpolate(message, params, escape);
  const count = Number(params?.count ?? 0);
  const form = message[pluralCategory(intl, count)] ?? message.other;
  return interpolate(form, params, escape);
}

function render(
  locale: Locale,
  intl: string,
  key: MessageKey,
  params: Params | undefined,
  escape: boolean,
): string {
  const message = (LOCALES[locale].messages as Catalog)[key] ?? (en as Catalog)[key];
  return message === undefined ? key : formatMessage(message, intl, params, escape);
}

const instances = new Map<Locale, I18n>();

/** The translator for a locale (cached: catalogs and formatters are immutable). */
export function createI18n(locale: Locale = DEFAULT_LOCALE): I18n {
  const cached = instances.get(locale);
  if (cached) return cached;
  const intl = LOCALES[locale].intl;
  const i18n: I18n = {
    locale,
    intl,
    t: (key, params) => render(locale, intl, key, params, false),
    th: (key, params) => render(locale, intl, key, params, true),
    money: (minor, currency) => formatMoney(minor, currency, intl),
    number: (value, opts) => numberFormat(intl, opts).format(value),
  };
  instances.set(locale, i18n);
  return i18n;
}

/** English — the default for pure code and tests that don't pass a translator. */
export const enI18n: I18n = createI18n('en');
