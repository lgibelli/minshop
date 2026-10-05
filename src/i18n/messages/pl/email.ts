import type { Catalog } from '../../core';

/**
 * Transactional email. HTML bodies insert these as written (no escaping of the
 * message itself), so keep them free of `<`, `>` and `&` unless they are markup.
 */
export const email = {
  // Shared receipt lines and buttons
  'email.totals.shipping': 'Dostawa',
  'email.totals.discount': 'Rabat',
  'email.totals.tax': 'Podatek',
  'email.totals.total': 'Razem',
  'email.text.shipping': 'Dostawa: {amount}',
  'email.text.discount': 'Rabat: -{amount}',
  'email.text.tax': 'Podatek: {amount}',
  'email.text.total': 'Razem: {amount}',
  'email.text.viewOrder': 'Zobacz swoje zamówienie: {url}',
  'email.button.viewOrder': 'Zobacz zamówienie',

  // Customer receipt
  'email.confirmation.subject': 'Twoje zamówienie nr {num} w sklepie {store}',
  'email.confirmation.heading': 'Dziękujemy za zamówienie',
  'email.confirmation.subheading':
    'Zamówienie nr {num} zostało potwierdzone. Napiszemy ponownie, gdy wyślemy paczkę.',
  'email.confirmation.textThanks': 'Dziękujemy za zamówienie!',
  'email.confirmation.textOrder': 'Zamówienie nr {num}, {store}',
  'email.confirmation.downloadReady': 'Twój plik jest gotowy do pobrania.',
  'email.confirmation.footer': 'Masz pytania dotyczące zamówienia? Po prostu odpowiedz na tę wiadomość.',

  // Store-owner "new order" notification
  'email.notification.subject': 'Nowe zamówienie nr {id} w sklepie {store}',
  'email.notification.heading': 'Nowe zamówienie nr {id}',
  'email.notification.subheading': '{amount} od {email}',
  'email.notification.unknownAddress': 'nieznanego adresu',
  'email.notification.identifiers': 'Identyfikatory zamówienia',
  'email.notification.orderNumber': 'Zamówienie nr {id}',
  'email.notification.shipTo': 'Adres dostawy',
  'email.notification.viewInAdmin': 'Zobacz w panelu',
  'email.notification.textHeading': 'Nowe zamówienie nr {id}',
  'email.notification.textPublicId': 'Publiczny ID: {publicId}',
  'email.notification.textCustomer': 'Klient: {email}',
  'email.notification.textShipTo': 'Adres dostawy:',
  'email.notification.textViewInAdmin': 'Zobacz w panelu: {url}',

  // "Your order has shipped"
  'email.shipped.subject': 'Twoje zamówienie nr {num} w sklepie {store} zostało wysłane',
  'email.shipped.heading': 'Twoje zamówienie jest w drodze',
  'email.shipped.subheading': 'Zamówienie nr {num} zostało wysłane.',
  'email.shipped.tracking': 'Numer przesyłki',
  'email.shipped.trackPackage': 'Śledź przesyłkę',
  'email.shipped.orderDetails': 'Szczegóły zamówienia:',
  'email.shipped.textShipped': 'Twoje zamówienie nr {num} zostało wysłane!',
  'email.shipped.textCarrier': 'Przewoźnik: {carrier}',
  'email.shipped.textTracking': 'Numer przesyłki: {number}',
  'email.shipped.textTrackIt': 'Śledź przesyłkę: {url}',

  // Refund notice
  'email.refunded.subjectFull': 'Zwrot środków za zamówienie nr {num} w sklepie {store}',
  'email.refunded.subjectPartial': 'Częściowy zwrot środków za zamówienie nr {num} w sklepie {store}',
  'email.refunded.headingFull': 'Zwróciliśmy środki za Twoje zamówienie',
  'email.refunded.headingPartial': 'Zwrot środków jest w drodze',
  'email.refunded.subheading': 'Zamówienie nr {num}',
  'email.refunded.refund': 'Zwrot środków',
  'email.refunded.refunded': 'Zwrócono',
  'email.refunded.totalRefunded': 'Łącznie zwrócono',
  'email.refunded.stillPaid': 'Pozostała opłacona kwota',
  'email.refunded.timingCard':
    'Zwroty na kartę pojawiają się zwykle w ciągu 5–10 dni roboczych, w zależności od banku.',
  'email.refunded.timingOther': 'Środki zostały zwrócone tą samą metodą płatności, której użyto przy zakupie.',
  'email.refunded.textFull': 'Zwróciliśmy środki za Twoje zamówienie nr {num}.',
  'email.refunded.textPartial': 'Zwróciliśmy część środków za zamówienie nr {num}.',
  'email.refunded.textRefunded': 'Zwrócono: {amount}',
  'email.refunded.textTotalSoFar': 'Łącznie zwrócono dotąd: {amount}',
  'email.refunded.textStillPaid': 'Pozostała opłacona kwota: {amount}',

  // Guest-link reissue
  'email.reissue.subject': 'Nowy link do zamówienia w sklepie {store} (nr {num})',
  'email.reissue.heading': 'Nowy link do Twojego zamówienia',
  'email.reissue.subheading': 'Nowy link do zamówienia nr {num}.',
  'email.reissue.body': 'Linki z wcześniejszych wiadomości już nie działają – od teraz używaj tego.',
  'email.reissue.footer':
    'Jeśli prośba o nowy link nie pochodziła od Ciebie, możesz zignorować tę wiadomość.',
  'email.reissue.textIntro': 'Oto nowy link do Twojego zamówienia nr {num} w sklepie {store}.',
  'email.reissue.textBody': 'Linki z wcześniejszych wiadomości już nie działają – od teraz używaj tego:',
  'email.reissue.textIgnore':
    'Jeśli prośba o nowy link nie pochodziła od Ciebie, możesz zignorować tę wiadomość;\nnowy link jak zwykle pokazuje Twoje zamówienie.',

  // Magic sign-in link
  'email.login.subject': 'Zaloguj się do sklepu {store}',
  'email.login.heading': 'Zaloguj się',
  'email.login.subheading': 'Ten link wygaśnie za 15 minut i można go użyć tylko raz.',
  'email.login.button': 'Zaloguj się',
  'email.login.fallback': 'Przycisk nie działa? Wklej ten adres do przeglądarki:',
  'email.login.footer':
    'Jeśli ta prośba nie pochodziła od Ciebie, możesz bezpiecznie zignorować tę wiadomość.',
  'email.login.textIntro': 'Kliknij, aby zalogować się do sklepu {store}:',
  'email.login.textExpiry':
    'Ten link wygaśnie za 15 minut. Jeśli prośba nie pochodziła od Ciebie, zignoruj tę wiadomość.',
} satisfies Catalog;
