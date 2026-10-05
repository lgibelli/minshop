import type { Catalog } from '../../core';

export const account = {
  // /account
  'account.page.title': 'Twoje konto',
  'account.orders.heading': 'Twoje zamówienia',
  'account.orders.signOut': 'Wyloguj się',
  'account.orders.signedInAs': 'Zalogowano jako {email}',
  'account.orders.empty': 'Nie masz jeszcze żadnych zamówień.',
  'account.orders.startShopping': 'Zacznij zakupy',
  'account.orders.reference': 'Zamówienie nr {ref}',
  // Lowercase on purpose: the list capitalizes them with CSS.
  'account.orders.statusPaid': 'opłacone',
  'account.orders.statusRefunded': 'zwrócone',
  'account.orders.statusPartiallyRefunded': 'Częściowo zwrócone',

  // /account/login
  'account.login.title': 'Logowanie',
  'account.login.heading': 'Zaloguj się',
  'account.login.expired': 'Ten link wygasł – poproś o nowy.',
  'account.login.verificationFailed': 'Weryfikacja nie powiodła się – spróbuj ponownie.',
  'account.login.invalidEmail': 'Podaj prawidłowy adres e-mail.',
  'account.login.sent':
    'Sprawdź skrzynkę – wysłaliśmy Ci jednorazowy link do logowania. Wygaśnie za 15 minut.',
  'account.login.intro':
    'Podaj swój adres e-mail, a wyślemy Ci link do logowania – bez hasła. Użyj adresu podanego przy zamówieniach, aby zobaczyć ich historię.',
  'account.login.emailPlaceholder': 'ty@example.com',
  'account.login.submit': 'Wyślij link do logowania',
} satisfies Catalog;
