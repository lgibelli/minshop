import type { Catalog } from '../../core';

/**
 * The shopper-facing browse surfaces: the document shell, every theme's
 * templates, the storefront controls, and the catalog, search, category,
 * product, content, and 404 routes.
 */
export const storefront = {
  // Layout.astro: document title and the default meta description.
  'storefront.meta.title': '{title} – {storeName}',
  'storefront.meta.description': 'Sklep internetowy {storeName}.',

  // Layout.astro: the slide-out cart drawer.
  'storefront.cartDrawer.label': 'Koszyk',
  'storefront.cartDrawer.title': 'Twój koszyk',
  'storefront.cartDrawer.close': 'Zamknij koszyk',

  // Theme headers and the header controls.
  'storefront.header.primaryNav': 'Menu główne',
  'storefront.header.storeNav': 'Sklep',
  'storefront.header.search': 'Szukaj',
  'storefront.header.menu': 'Menu',
  'storefront.header.cart': 'Koszyk',
  'storefront.header.account': 'Konto',

  // Theme footers.
  'storefront.footer.nav': 'Stopka',

  // Navigation shared by product, category, and 404 pages.
  'storefront.nav.shop': 'Sklep',
  'storefront.nav.breadcrumb': 'Ścieżka nawigacji',
  'storefront.nav.categories': 'Kategorie',
  'storefront.nav.backToShop': 'Wróć do sklepu',

  // The catalog at / and /products (theme Catalog templates, sort control).
  'storefront.catalog.eyebrow': 'Sklep',
  'storefront.catalog.heading': 'Wszystkie produkty',
  'storefront.catalog.empty': 'Nie ma jeszcze żadnych produktów.',
  'storefront.catalog.emptyMarket': 'Na razie nic tu nie ma. Zajrzyj wkrótce.',
  'storefront.catalog.emptyStudio': 'Na ścianie jeszcze nic nie wisi.',
  'storefront.catalog.shown': {
    one: '{count} produkt',
    few: '{count} produkty',
    many: '{count} produktów',
    other: '{count} produktu',
  },
  'storefront.catalog.shownPaged': {
    one: '{count} produkt · strona {page}/{totalPages}',
    few: '{count} produkty · strona {page}/{totalPages}',
    many: '{count} produktów · strona {page}/{totalPages}',
    other: '{count} produktu · strona {page}/{totalPages}',
  },
  'storefront.catalog.sort': 'Sortuj',

  // /categories/<slug>
  'storefront.category.empty': 'W tej kategorii nie ma jeszcze produktów.',

  // Product cards, the product page, and the purchase controls.
  'storefront.product.soldOut': 'Wyprzedane',
  'storefront.product.inStock': 'Dostępny',
  'storefront.product.outOfStockShort': 'Brak',
  'storefront.product.lowStock': 'Ostatnie sztuki',
  'storefront.product.digitalDownload': 'Plik do pobrania',
  // Precedes the lowest variant price: "od 24,00 zł".
  'storefront.product.priceFrom': 'od',
  'storefront.product.share': 'Udostępnij',
  // Swapped in by the share button's script after it copies the link.
  'storefront.product.linkCopied': 'Skopiowano link',
  'storefront.product.details': 'Szczegóły',
  'storefront.product.youMayAlsoLike': 'Może Ci się spodobać',
  'storefront.product.related': 'Podobne produkty',
  // Legend for a variant group the merchant left unnamed.
  'storefront.product.option': 'Opcja',
  'storefront.product.variantSoldOut': '{variant} – wyprzedane',
  'storefront.product.addOns': 'Dodatki',
  'storefront.product.addToCart': 'Dodaj do koszyka',
  'storefront.product.buyNow': 'Kup teraz',

  // /search
  'storefront.search.label': 'Szukaj produktów',
  'storefront.search.title': 'Szukaj',
  'storefront.search.titleWithQuery': 'Szukaj: {query}',
  'storefront.search.heading': 'Znajdź coś dla siebie',
  'storefront.search.placeholder': 'Szukaj produktów…',
  'storefront.search.corrected':
    'Brak wyników dla „{query}” – pokazujemy wyniki dla <strong class="font-medium text-ink">{suggestion}</strong>.',
  'storefront.search.resultCount': {
    one: '{count} wynik dla „{query}”',
    few: '{count} wyniki dla „{query}”',
    many: '{count} wyników dla „{query}”',
    other: '{count} wyniku dla „{query}”',
  },
  'storefront.search.moreFromCategories': 'Więcej z tych kategorii',
  'storefront.search.noResults': 'Brak produktów pasujących do „{query}”. Spróbuj innego słowa.',

  // 404.astro
  'storefront.notFound.title': 'Nie znaleziono strony',
  'storefront.notFound.description': 'Strona, której szukasz, nie istnieje.',
  'storefront.notFound.eyebrow': 'Błąd 404',
  'storefront.notFound.body':
    'Strona, której szukasz, została przeniesiona, wyprzedała się albo nigdy nie istniała.',
  'storefront.notFound.searchCatalog': 'Przeszukaj katalog',

  // Plain-text 404 for a missing product, category, or content page.
  'storefront.error.notFound': 'Nie znaleziono',
} satisfies Catalog;
