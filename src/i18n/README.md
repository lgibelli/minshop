# Translations (i18n)

minshop renders every customer-facing and admin string through a small,
dependency-free translator in `src/i18n/`. English is the source language; the
bundled locales are listed in `LOCALES` in `src/i18n/core.ts`.

## Choosing languages

Build-time, in `src/store.config.ts`:

```ts
export const storeOverrides: DeepPartial<SiteConfig> = {
  locale: 'pl',       // storefront, storefront APIs, emails, and price/date formatting
  adminLocale: 'en',  // optional: the admin's default (falls back to `locale`)
};
```

The store locale is build-time and store-wide, like currency: product names,
descriptions, and pages are written in one language. Each admin browser can
switch the admin language from the sidebar; the choice is stored in a cookie.

## Writing translatable code

A new English message needs its `pl` and `it` entries in the same change:
`npm test` fails on an incomplete bundled translation.


Catalogs live in `src/i18n/messages/<locale>/<area>.ts`. Every key is prefixed by
its area (`checkout.placeOrder`), so the files never collide. `core.ts` binds
the catalogs; the formatting itself (`format.ts`) has no catalog imports, for
code that must not pull every locale into its import graph.

- **Astro pages and components:** `const { t } = Astro.locals.i18n;` then
  `{t('cart.empty')}`, `placeholder={t('search.placeholder')}`.
- **Storefront themes and controls** never read request context: they take an
  optional `i18n` prop and resolve it with `storefrontI18n(Astro.props.i18n)`
  (English when absent). See CUSTOMIZING.md → Text and translations.
- **Params:** `'Hello {name}'` → `t('account.greeting', { name })`.
- **Plurals:** `{ one: '{count} item', other: '{count} items' }` →
  `t('cart.items', { count })`. Translations add the CLDR forms their language
  needs (Polish: `one`, `few`, `many`, `other`).
- **Markup inside a sentence:** keep it in the message and render with
  `<Fragment set:html={th('checkout.terms', { href })} />`. `th()` HTML-escapes
  every param; catalogs are trusted source, so the markup itself is not escaped.
- **Pure modules** (form parsers, presentation builders) take an `I18n` parameter
  that defaults to `enI18n`, so their unit tests keep asserting English.
- **Outside a request** (emails sent from a webhook or the cron): `storeI18n()`
  from `src/i18n`.
- **Client-side scripts** can't call `t()`: render the strings into `data-*`
  attributes on the element the script owns and read them from the dataset.
- **Prices and dates:** `formatPrice(cents, currency, i18n.intl)` and
  `formatDate(value, opts, timeZone, i18n.intl)`; the locale defaults to the
  store's.

Don't translate log lines, thrown internal errors that never reach a person,
URL slugs, CSS classes, or the MCP server.

## Adding a language

1. Copy `src/i18n/messages/en/` to `src/i18n/messages/<code>/` and translate the
   values. Type each file as `satisfies Catalog`. At runtime a missing key
   falls back to English, but `npm test` requires every bundled translation to
   be complete (every key, every plural form the language needs) with the same
   `{placeholders}` as English.
2. Add the code to `LOCALES` in `src/i18n/core.ts` with its native label and
   the BCP 47 tag Intl should format with (`'de-DE'`).
