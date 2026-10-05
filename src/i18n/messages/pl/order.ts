import type { Catalog } from '../../core';

export const order = {
  // /order/<token> (confirmation)
  'order.error.notFound': 'Nie znaleziono',
  'order.page.titleConfirmed': 'Zamówienie potwierdzone',
  'order.page.titleConfirming': 'Potwierdzamy Twoje zamówienie',
  'order.confirmed.heading': 'Dziękujemy! Twoje zamówienie zostało potwierdzone.',
  'order.confirmed.reference': 'Zamówienie nr {ref}',
  'order.confirmed.referenceWithReceipt': 'Zamówienie nr {ref} · potwierdzenie wysyłamy na adres {email}',
  'order.confirmed.item': 'Produkt',
  'order.confirmed.qty': 'Ilość',
  'order.confirmed.lineTotal': 'Wartość',
  'order.confirmed.total': 'Razem: {amount}',
  'order.confirmed.paidWith': 'Metoda płatności: {method}',
  'order.confirmed.refundedFull': 'Zwrócono {amount}.',
  'order.confirmed.refundedPartial': 'Zwrócono {amount} – pozostała opłacona kwota: {remaining}.',
  'order.confirmed.continueShopping': 'Kontynuuj zakupy',
  'order.payment.card': 'Karta',
  'order.payment.demo': 'Demo (bez opłaty)',
  'order.downloads.heading': 'Pliki do pobrania',
  'order.downloads.sizeKb': '{size} KB',
  'order.downloads.unavailableAfterRefund': 'Niedostępne po zwrocie środków',
  'order.downloads.download': 'Pobierz',
  'order.confirming.heading': 'Potwierdzamy Twoje zamówienie…',
  'order.confirming.body':
    'Płatność została przyjęta, a my zapisujemy Twoje zamówienie. Ta strona odświeży się automatycznie – zwykle trwa to tylko kilka sekund.',

  // /order/<token>/download/<item> (plain-text refusals)
  'order.download.notFound': 'Nie znaleziono',
  'order.download.unsettled': 'Płatność nie została jeszcze rozliczona.',
  'order.download.refunded': 'Pobieranie jest niedostępne, ponieważ za to zamówienie zwrócono całą kwotę.',
  'order.download.fileUnavailable': 'Plik niedostępny',

  // Carriers that have no brand name of their own
  'order.carrier.other': 'Inny',
} satisfies Catalog;
