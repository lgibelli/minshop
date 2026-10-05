import type { Catalog } from '../../core';

export const checkout = {
  // Payment-method buttons on /cart and /express
  'checkout.method.stripe.label': 'Zapłać kartą',
  'checkout.method.stripe.hint': 'Visa, Mastercard, Apple Pay i inne',
  'checkout.method.stripe.setup': 'Skonfiguruj płatności kartą',
  'checkout.method.lightning.label': 'Zapłać przez Lightning ⚡',
  'checkout.method.lightning.hint': 'Natychmiast – z dowolnego portfela Lightning',
  'checkout.method.lightning.setup': 'Skonfiguruj Lightning',
  'checkout.method.opennode.label': 'Zapłać bitcoinem',
  'checkout.method.opennode.hint': 'On-chain lub Lightning (OpenNode)',
  'checkout.method.opennode.setup': 'Skonfiguruj OpenNode',
  'checkout.method.demo.label': 'Kasa demo',
  'checkout.method.demo.hint': 'Symulacja – składa prawdziwe zamówienie testowe, bez opłaty',

  // /checkout (in-app address + shipping step)
  'checkout.page.title': 'Kasa',
  'checkout.page.description': 'Podaj dane do dostawy.',
  'checkout.page.heading': 'Kasa',
  'checkout.page.summary': {
    one: 'Wartość produktów: {subtotal} · {count} produkt',
    few: 'Wartość produktów: {subtotal} · {count} produkty',
    many: 'Wartość produktów: {subtotal} · {count} produktów',
    other: 'Wartość produktów: {subtotal} · {count} produktu',
  },
  'checkout.demo.banner': '⚠️ Kasa demo – to nie jest prawdziwa płatność',
  'checkout.demo.noticeCheckout':
    'Karta nie zostanie obciążona. Dokończenie złoży prawdziwe zamówienie oznaczone jako <code class="rounded bg-amber-100 px-1">demo</code>, dzięki czemu zobaczysz cały proces.',
  'checkout.address.email': 'E-mail',
  'checkout.address.fullName': 'Imię i nazwisko',
  'checkout.address.line1': 'Adres',
  'checkout.address.line2': 'Nr mieszkania, lokalu itp. (opcjonalnie)',
  'checkout.address.city': 'Miasto',
  'checkout.address.state': 'Województwo / region',
  'checkout.address.postal': 'Kod pocztowy',
  'checkout.address.country': 'Kraj',
  'checkout.address.shipsTo': 'Wysyłamy do: {countries}',
  'checkout.address.continue': 'Przejdź do dostawy',
  'checkout.address.errorEmail': 'Podaj prawidłowy adres e-mail.',
  'checkout.address.errorName': 'Podaj imię i nazwisko.',
  'checkout.address.errorLine1': 'Podaj adres.',
  'checkout.address.errorCity': 'Podaj miasto.',
  'checkout.address.errorPostal': 'Podaj kod pocztowy.',
  'checkout.address.errorCountry': 'Podaj dwuliterowy kod kraju (np. PL).',
  'checkout.shipping.shipTo': 'Adres dostawy',
  'checkout.shipping.editAddress': 'Zmień adres',
  'checkout.shipping.legend': 'Dostawa',
  'checkout.shipping.free': 'Za darmo',
  'checkout.shipping.optionTotal': '{price} · razem {total}',
  /** The synthesized 0 zł option once a zone's free-shipping threshold is reached. */
  'checkout.shipping.freeShippingLabel': 'Darmowa dostawa',
  'checkout.shipping.errorChooseOption': 'Wybierz sposób dostawy.',
  'checkout.shipping.errorMissingWeightItems':
    'Nie możemy teraz obliczyć kosztu dostawy dla: {items}. Skontaktuj się z nami, aby dokończyć zamówienie.',
  'checkout.shipping.errorMissingWeight':
    'Nie możemy teraz obliczyć kosztu dostawy jednego z tych produktów. Skontaktuj się z nami, aby dokończyć zamówienie.',
  'checkout.shipping.errorOverweight': 'To zamówienie jest za ciężkie dla dostępnych usług dostawy.',
  'checkout.shipping.errorNoShip': 'Niestety nie wysyłamy jeszcze do kraju {country}.',
  'checkout.shipping.errorCardNoShip': 'Niestety przy płatności kartą nie wysyłamy do kraju {country}.',
  'checkout.shipping.errorCardDestinations':
    'Skonfigurowane kraje dostawy nie są obsługiwane przy płatności kartą. Skontaktuj się z nami, aby dokończyć zamówienie.',
  'checkout.rail.lightning': 'Zapłać przez Lightning',
  'checkout.rail.opennode': 'Zapłać bitcoinem',
  'checkout.rail.demo': 'Złóż zamówienie demo',

  // Checkout errors (shown on /checkout, or carried to /cart or the product page)
  'checkout.error.chooseVariant': 'Wybierz: {label}.',
  'checkout.error.variantFallback': 'wariant',
  'checkout.error.soldOut': 'Wyprzedane',
  'checkout.error.lineSoldOut': 'Produkt {name} jest wyprzedany.',
  'checkout.error.lineShort': {
    one: 'Została tylko {count} sztuka produktu {name} – zmień ilość w koszyku.',
    few: 'Zostały tylko {count} sztuki produktu {name} – zmień ilość w koszyku.',
    many: 'Zostało tylko {count} sztuk produktu {name} – zmień ilość w koszyku.',
    other: 'Zostało tylko {count} sztuki produktu {name} – zmień ilość w koszyku.',
  },
  'checkout.error.cartShort':
    'Niektóre produkty nie są już dostępne w wybranej ilości. Sprawdź swój koszyk.',
  'checkout.error.reservationFailed': 'Część produktów właśnie się wyprzedała – sprawdź swój koszyk.',
  'checkout.error.lightningUnavailable':
    'Lightning jest chwilowo niedostępny. Spróbuj ponownie za chwilę lub wybierz inną metodę płatności.',
  'checkout.error.methodUnavailable':
    'Ta metoda płatności jest chwilowo niedostępna. Spróbuj ponownie za chwilę lub wybierz inną.',
  'checkout.error.invalidProductId':
    'Nieprawidłowy identyfikator produktu (oczekiwano publicznego ID w formacie prod_…).',
  'checkout.error.productUnavailable': 'Produkt niedostępny',

  // /express
  'checkout.express.description': 'Szybki zakup.',
  'checkout.express.eyebrow': 'Szybki zakup',
  'checkout.express.buyNow': 'Kup teraz',
  'checkout.express.qty': 'Ilość: {qty}',
  'checkout.express.total': 'Razem',
  'checkout.express.shipTo': 'Dostawa do',
  'checkout.express.back': 'Wróć',

  // /payment-setup (owner-facing setup help reached from the cart)
  'checkout.setup.title': 'Skonfiguruj płatności',
  'checkout.setup.description': 'Jak włączyć metodę płatności.',
  'checkout.setup.back': 'Wróć do koszyka',
  'checkout.setup.notConfigured':
    'Ta metoda płatności nie jest jeszcze skonfigurowana. Dodaj prawdziwą metodę płatności (kartę lub Lightning) w sekcji Panel → Ustawienia → Płatności albo nadal korzystaj z kasy demo, aby wypróbować sklep.',
  'checkout.setup.demoNote':
    'Tymczasem <strong class="font-semibold">Kasa demo</strong> działa od razu – składa prawdziwe zamówienie oznaczone jako demo, dzięki czemu zobaczysz cały proces bez obciążania nikogo.',
  'checkout.setup.stripe.title': 'Skonfiguruj płatności kartą (Stripe)',
  'checkout.setup.stripe.intro': 'Przyjmuj płatności Visa, Mastercard, Apple Pay i inne przez Stripe Checkout.',
  'checkout.setup.stripe.step1':
    'Załóż konto Stripe i skopiuj klucz tajny (Secret key) ze strony dashboard.stripe.com/apikeys.',
  'checkout.setup.stripe.step2':
    'Wklej go w sekcji Panel → Ustawienia → Klucze płatności (klucz tajny Stripe). Jest przechowywany w bazie danych w postaci zaszyfrowanej.',
  'checkout.setup.stripe.step3':
    'Dodaj w Stripe endpoint webhooka wskazujący na {url} (zdarzenia: checkout.session.completed, checkout.session.async_payment_succeeded i charge.refunded – ostatnie z nich przenosi do zamówień w sklepie zwroty środków wykonane w panelu Stripe).',
  'checkout.setup.stripe.step4':
    'Wklej otrzymany sekret podpisu w sekcji Klucze płatności (sekret podpisu webhooka Stripe). Przycisk płatności kartą zacznie działać automatycznie.',
  'checkout.setup.lightning.title': 'Skonfiguruj płatności Lightning',
  'checkout.setup.lightning.intro': 'Przyjmuj natychmiastowe płatności Bitcoin Lightning z dowolnego portfela.',
  'checkout.setup.lightning.step1': 'Uruchom instancję LNbits (lub węzeł phoenixd).',
  'checkout.setup.lightning.step2':
    'W sekcji Panel → Ustawienia → Płatności ustaw Lightning jako domyślną metodę płatności i wybierz węzeł (LNbits lub phoenixd).',
  'checkout.setup.lightning.step3':
    'Wpisz URL węzła w sekcji Konfiguracja płatności, a klucz (klucz invoice/read LNbits lub hasło phoenixd) w sekcji Klucze płatności. Przycisk Lightning zacznie działać automatycznie.',
  'checkout.setup.opennode.title': 'Skonfiguruj płatności bitcoinem (OpenNode)',
  'checkout.setup.opennode.intro': 'Hostowana płatność on-chain i Lightning przez OpenNode.',
  'checkout.setup.opennode.step1': 'Załóż konto OpenNode i utwórz klucz API.',
  'checkout.setup.opennode.step2': 'Wklej go w sekcji Panel → Ustawienia → Klucze płatności (klucz API OpenNode).',
  'checkout.setup.opennode.step3':
    'Skieruj jego webhook na {url} i ustaw OpenNode jako domyślną metodę płatności w sekcji Ustawienia → Płatności.',

  // /pay/<token> (self-rendered rails)
  'checkout.pay.notFound': 'Nie znaleziono',
  'checkout.pay.demoTitle': 'Kasa demo',
  'checkout.pay.demoDescription': 'Symulowana płatność w sklepie {store}.',
  'checkout.pay.lightningTitle': 'Zapłać przez Lightning',
  'checkout.pay.lightningDescription': 'Zapłać sklepowi {store} przez Bitcoin Lightning.',
  'checkout.pay.demoExpiredHeading': 'Sesja płatności wygasła',
  'checkout.pay.demoExpired': 'Ta sesja kasy demo wygasła. Rozpocznij nową.',

  // Demo checkout view + settlement
  'checkout.demo.noticePay':
    'Karta nie zostanie obciążona. Wysłanie formularza złoży prawdziwe zamówienie oznaczone jako <code class="rounded bg-amber-100 px-1">demo</code>, dzięki czemu zobaczysz cały proces.',
  'checkout.demo.shipping': 'Dostawa',
  'checkout.demo.total': 'Razem',
  'checkout.demo.emailLabel': 'E-mail do potwierdzenia zamówienia',
  'checkout.demo.cardLegend': 'Karta (test – dane są ignorowane)',
  'checkout.demo.cardNumber': 'Numer karty',
  'checkout.demo.cardExpiry': 'Data ważności',
  'checkout.demo.cardCvc': 'CVC',
  'checkout.demo.outcomeLabel': 'Symulowany wynik',
  'checkout.demo.outcomeApprove': 'Zatwierdź płatność',
  'checkout.demo.outcomeDecline': 'Odrzuć – karta odrzucona',
  'checkout.demo.outcomeInsufficient': 'Odrzuć – brak środków',
  'checkout.demo.pay': 'Zapłać {total}',
  'checkout.demo.cancel': 'Anuluj',
  'checkout.demo.declinedCard': 'Płatność odrzucona – Twoja karta została odrzucona. (Symulacja)',
  'checkout.demo.declinedInsufficient': 'Płatność odrzucona – brak środków. (Symulacja)',
  'checkout.demo.expired': 'Ta sesja kasy demo wygasła.',
  'checkout.demo.emailRequired': 'Podaj prawidłowy adres e-mail.',

  // Lightning invoice view
  'checkout.lightning.expiredHeading': 'Faktura wygasła',
  'checkout.lightning.expired':
    'Tej faktury Lightning nie można już opłacić, a Twoje środki nie zostały pobrane. Rozpocznij nową płatność, aby spróbować ponownie.',
  'checkout.lightning.backToCart': 'Wróć do koszyka',
  'checkout.lightning.sats': {
    one: '{amount} sat',
    few: '{amount} sat',
    many: '{amount} sat',
    other: '{amount} sat',
  },
  'checkout.lightning.scanToPay': '{amount} · zeskanuj lub dotknij, aby zapłacić',
  'checkout.lightning.openWalletLabel': 'Otwórz w portfelu Lightning',
  'checkout.lightning.invoiceLabel': 'Faktura Lightning',
  'checkout.lightning.copy': 'Kopiuj',
  'checkout.lightning.copied': 'Skopiowano',
  'checkout.lightning.openWallet': 'Otwórz w portfelu',
  'checkout.lightning.waiting': 'Czekamy na płatność… ta strona odświeży się automatycznie.',
  /** The memo a wallet shows for the invoice. */
  'checkout.lightning.invoiceDescription': '{store} – zamówienie {ref}',

  /** The charge description OpenNode shows on its hosted page. */
  'checkout.opennode.description': 'Zamówienie {ref}',

  // Edge rate limiting (login and checkout posts, searches)
  'checkout.rateLimit.tooMany': 'Zbyt wiele żądań. Spróbuj ponownie za chwilę.',
} satisfies Catalog;
