import type { Catalog } from '../../core';

export const cart = {
  // /cart
  'cart.page.title': 'Koszyk',
  'cart.page.heading': 'Twój koszyk',
  'cart.page.empty': 'Twój koszyk jest pusty.',
  'cart.page.continueShopping': 'Kontynuuj zakupy',
  'cart.line.each': '{price} / szt.',
  'cart.line.outOfStock': 'Brak w magazynie',
  'cart.line.onlyAvailable': {
    one: 'Dostępna tylko {count} sztuka',
    few: 'Dostępne tylko {count} sztuki',
    many: 'Dostępnych tylko {count} sztuk',
    other: 'Dostępne tylko {count} sztuki',
  },
  'cart.line.quantity': 'Ilość',
  'cart.line.update': 'Aktualizuj',
  'cart.line.remove': 'Usuń',
  'cart.summary.subtotal': 'Wartość produktów',
  'cart.summary.unavailable': 'Składanie zamówień jest chwilowo niedostępne.',
  'cart.summary.shipTo': 'Dostawa do',
  'cart.summary.setUp': 'Skonfiguruj',

  // The cart drawer (/partials/cart)
  'cart.drawer.checkout': 'Przejdź do kasy',
  'cart.drawer.viewFullCart': 'Zobacz cały koszyk',

  // POST /api/cart
  'cart.error.chooseVariant': 'Wybierz: {label}.',
  'cart.error.variantFallback': 'wariant',
} satisfies Catalog;
