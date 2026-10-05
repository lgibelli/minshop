import type { Catalog } from '../../core';

export const admin = {
  'admin.language': 'Język panelu',

  // Responses shared by the admin routes.
  'admin.notFound': 'Nie znaleziono',
  'admin.invalidId': 'Nieprawidłowy identyfikator',
  'admin.unknownAction': 'Nieznana akcja',

  // AdminLayout: document title, sidebar, and the banners above every page.
  'admin.layout.pageTitle': '{title} – panel {store}',
  'admin.layout.pageTitleDefault': 'Panel {store}',
  'admin.layout.viewStore': 'Zobacz sklep',
  'admin.layout.logOut': 'Wyloguj się',
  'admin.layout.setupNudge':
    '<strong class="font-semibold">Dokończ konfigurację sklepu</strong> – nazwa sklepu, status płatności i więcej.',
  'admin.layout.demoMode':
    '<strong class="font-semibold">Nie skonfigurowano żadnej prawdziwej metody płatności.</strong> Obecnie zamówienia może przyjmować tylko <strong>Kasa demo</strong> – są one zapisywane i oznaczane jako <code class="rounded bg-amber-100 px-1 text-xs">demo</code>. Dopóki nie dodasz klucza, kupujący widzą linki do konfiguracji płatności kartą i Lightning. Kasa demo pozostaje dostępna obok prawdziwych metod płatności.',
  'admin.layout.shippingBlocked':
    '<strong class="font-semibold">Zamówienia z dostawą są zablokowane przez nieprawidłową konfigurację:</strong> {reason}',
  'admin.layout.inventoryAttention': {
    one: '<strong class="font-semibold">Stany magazynowe wymagają uwagi.</strong> {count} pozycja zamówienia została opłacona po wygaśnięciu rezerwacji towaru i nie udało się w pełni zdjąć jej ze stanu. Otwórz zamówienia, których to dotyczy, i uzgodnij stany.',
    few: '<strong class="font-semibold">Stany magazynowe wymagają uwagi.</strong> {count} pozycje zamówień zostały opłacone po wygaśnięciu rezerwacji towaru i nie udało się w pełni zdjąć ich ze stanu. Otwórz zamówienia, których to dotyczy, i uzgodnij stany.',
    many: '<strong class="font-semibold">Stany magazynowe wymagają uwagi.</strong> {count} pozycji zamówień zostało opłaconych po wygaśnięciu rezerwacji towaru i nie udało się w pełni zdjąć ich ze stanu. Otwórz zamówienia, których to dotyczy, i uzgodnij stany.',
    other:
      '<strong class="font-semibold">Stany magazynowe wymagają uwagi.</strong> {count} pozycji zamówień zostało opłaconych po wygaśnięciu rezerwacji towaru i nie udało się w pełni zdjąć ich ze stanu. Otwórz zamówienia, których to dotyczy, i uzgodnij stany.',
  },
  'admin.nav.heading': 'Panel',
  'admin.nav.toggle': 'Pokaż lub ukryj sekcje panelu',
  'admin.nav.menu': 'Menu',
  'admin.nav.dashboard': 'Pulpit',
  'admin.nav.products': 'Produkty',
  'admin.nav.orders': 'Zamówienia',
  'admin.nav.customers': 'Klienci',
  'admin.nav.categories': 'Kategorie',
  'admin.nav.pages': 'Strony',
  'admin.nav.navigation': 'Nawigacja',
  'admin.nav.shipping': 'Dostawa',
  'admin.nav.media': 'Multimedia',
  'admin.nav.settings': 'Ustawienia',

  // Dashboard (src/pages/admin/index.astro).
  'admin.dashboard.title': 'Pulpit',
  'admin.dashboard.netRevenue': 'Przychód po zwrotach',
  'admin.dashboard.refunded': 'Zwrócono {amount}',
  'admin.dashboard.orders': 'Zamówienia',
  'admin.dashboard.products': 'Produkty',
  'admin.dashboard.customers': 'Klienci',
  'admin.dashboard.recentOrders': 'Ostatnie zamówienia',
  'admin.dashboard.viewAll': 'Zobacz wszystkie',
  'admin.dashboard.noOrders': 'Brak zamówień.',
  'admin.dashboard.lowStock': 'Niski stan magazynowy',
  'admin.dashboard.stockLeft': {
    one: 'Została {count} szt.',
    few: 'Zostały {count} szt.',
    many: 'Zostało {count} szt.',
    other: 'Zostało {count} szt.',
  },
  'admin.dashboard.wellStocked': 'Stany magazynowe są w porządku.',

  // RevenueChart. The heading and summary keep their `&middot;` entity, so they
  // render through th().
  'admin.chart.heading': {
    one: 'Przychód &middot; ostatni {count} dzień',
    few: 'Przychód &middot; ostatnie {count} dni',
    many: 'Przychód &middot; ostatnie {count} dni',
    other: 'Przychód &middot; ostatnie {count} dnia',
  },
  'admin.chart.summary': {
    one: '{total} &middot; {count} zamówienie',
    few: '{total} &middot; {count} zamówienia',
    many: '{total} &middot; {count} zamówień',
    other: '{total} &middot; {count} zamówienia',
  },
  'admin.chart.ariaLabel': {
    one: 'Dzienny przychód z ostatniego {count} dnia',
    few: 'Dzienny przychód z ostatnich {count} dni',
    many: 'Dzienny przychód z ostatnich {count} dni',
    other: 'Dzienny przychód z ostatnich {count} dnia',
  },
  'admin.chart.barTitle': {
    one: '{day}: {total} · {count} zamówienie',
    few: '{day}: {total} · {count} zamówienia',
    many: '{day}: {total} · {count} zamówień',
    other: '{day}: {total} · {count} zamówienia',
  },

  // Login (src/pages/admin/login.astro).
  'admin.login.pageTitle': 'Logowanie do panelu',
  'admin.login.heading': 'Logowanie do panelu',
  'admin.login.password': 'Hasło',
  'admin.login.submit': 'Zaloguj się',
  'admin.login.verificationFailed': 'Weryfikacja nie powiodła się – spróbuj ponownie.',
  'admin.login.incorrectPassword': 'Nieprawidłowe hasło.',

  // Cloudflare Access gate (src/features/auth/accessGate.ts): plain-text 403s.
  'admin.access.misconfigured':
    'Cloudflare Access jest błędnie skonfigurowany: ustaw zarówno CF_ACCESS_TEAM_DOMAIN, jak i CF_ACCESS_AUD.',
  'admin.access.required': 'Wymagane uwierzytelnienie przez Cloudflare Access.',
  'admin.access.notConfigured':
    'Cloudflare Access nie jest skonfigurowany: ustaw CF_ACCESS_TEAM_DOMAIN i CF_ACCESS_AUD.',
  'admin.access.invalidToken': 'Nieprawidłowy token Access.',

  // Admin gate responses (src/middleware.ts): plain-text 401s for admin APIs.
  'admin.gate.authRequired': 'Wymagane uwierzytelnienie.',
  'admin.gate.notSetUp': 'Panel nie jest jeszcze skonfigurowany – najpierw dokończ /admin/setup.',
} satisfies Catalog;
