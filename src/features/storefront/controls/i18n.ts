/**
 * The translator storefront templates and controls render text with.
 *
 * Templates and controls never read request context, so the request's
 * translator arrives as an `i18n` prop: Layout and the routes pass
 * `Astro.locals.i18n`, and a template hands it on to the controls it composes.
 * Rendered without one (a container test, a fixture) they fall back to English,
 * so every component still renders from its model alone.
 *
 * The fallback is deliberately NOT src/i18n/core. The storefront boundary
 * checker walks every module a template can reach, once per template, and core
 * pulls in every locale's full catalog — which made the walk an order of
 * magnitude slower. This module reaches only the two English catalogs the
 * storefront speaks (both import-free for the same reason) and the pure money
 * helper. Its formatting follows core's formatMessage: CLDR plural form by
 * `count` falling back to `other`, then `{param}` interpolation.
 */
import { storefront } from '../../../i18n/messages/en/storefront';
import { common } from '../../../i18n/messages/en/common';
import { formatMoney } from '../../../money';

/** The request translator's type, named through the global Locals so that no
 *  import reaches the translator core. */
export type I18n = App.Locals['i18n'];

type Message = string | ({ other: string } & Partial<Record<Intl.LDMLPluralRule, string>>);
type Params = Record<string, string | number>;

const ENGLISH: Record<string, Message> = { ...common, ...storefront };
const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};
const plural = new Intl.PluralRules('en-US');

function render(key: string, params: Params | undefined, escape: boolean): string {
  const message = ENGLISH[key];
  if (message === undefined) return key;
  const template =
    typeof message === 'string'
      ? message
      : (message[plural.select(Number(params?.count ?? 0))] ?? message.other);
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) => {
    if (!Object.hasOwn(params, name)) return match;
    const value = String(params[name]);
    return escape ? value.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]) : value;
  });
}

const english: I18n = {
  locale: 'en',
  intl: 'en-US',
  t: (key, params) => render(key, params, false),
  th: (key, params) => render(key, params, true),
  money: (minor, currency) => formatMoney(minor, currency, 'en-US'),
  number: (value, opts) => new Intl.NumberFormat('en-US', opts).format(value),
};

/** The translator a component was handed, or English when it was given none. */
export function storefrontI18n(i18n: I18n | undefined): I18n {
  return i18n ?? english;
}
