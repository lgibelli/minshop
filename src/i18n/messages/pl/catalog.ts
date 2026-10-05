import type { Catalog } from '../../core';

export const catalog = {
  // Catalog list defaults (src/features/products/ProductList.astro).
  'catalog.list.eyebrow': 'Sklep',
  'catalog.list.heading': 'Wszystkie produkty',

  // Storefront sort options (src/features/products/sort.ts).
  'catalog.sort.newest': 'Najnowsze',
  'catalog.sort.price': 'Cena',
  'catalog.sort.name': 'Nazwa',
} satisfies Catalog;
