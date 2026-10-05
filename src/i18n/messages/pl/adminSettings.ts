import type { Catalog } from '../../core';

// Admin settings, the setup wizard, and the shipping editor. Messages that
// contain markup are rendered with th() + set:html.
export const adminSettings = {
  // ── Shared ────────────────────────────────────────────────────────────────
  'adminSettings.common.save': 'Zapisz',
  'adminSettings.common.unavailable': 'Niedostępne',
  'adminSettings.common.live': 'Aktywna',
  'adminSettings.toggle.enable': 'Włącz: {label}',
  'adminSettings.toggle.disable': 'Wyłącz: {label}',

  // ── Settings page ─────────────────────────────────────────────────────────
  'adminSettings.page.title': 'Ustawienia',
  'adminSettings.page.updated': 'Zaktualizowano ustawienia',
  'adminSettings.sections.general': 'Ogólne',
  'adminSettings.sections.images': 'Obrazy',
  'adminSettings.sections.payments': 'Płatności',
  'adminSettings.sections.email': 'E-mail',
  'adminSettings.sections.turnstile': 'Ochrona przed botami',
  'adminSettings.sections.search': 'Wyszukiwanie',
  'adminSettings.sections.buildTime': 'Ustawienia budowania',

  // Validation errors from the section saves.
  'adminSettings.errors.unknownPaymentMethod': 'Nieznana metoda płatności.',
  'adminSettings.errors.configurePaymentMethod': 'Skonfiguruj tę metodę płatności przed jej włączeniem.',
  'adminSettings.errors.stripeRequired': 'Skonfiguruj Stripe przed włączeniem tej funkcji, która działa tylko ze Stripe.',
  'adminSettings.errors.authSecretRequired': 'Ustaw AUTH_SECRET przed włączeniem kont klientów.',
  'adminSettings.errors.emailRequired': 'Włącz i skonfiguruj e-mail przed włączeniem kont klientów.',
  'adminSettings.errors.imagesBindingRequired':
    'Dodaj binding IMAGES i wdróż ponownie przed włączeniem optymalizacji obrazów.',
  'adminSettings.errors.invalidTimeZone':
    'Podaj prawidłową strefę czasową IANA, np. UTC lub America/New_York.',
  'adminSettings.errors.logoMissing': 'Tego obrazu nie ma już w bibliotece multimediów.',
  'adminSettings.errors.invalidHome': 'Wybierz opublikowaną stronę lub aktywny produkt.',
  'adminSettings.errors.invalidAnnouncementLink':
    'Link ogłoszenia musi być ścieżką, np. /sale, albo adresem URL http(s).',
  'adminSettings.errors.onDemandImagesUnavailable':
    'Podłącz własną domenę HTTPS dla R2 i ustaw IMAGE_BASE_URL przed włączeniem obrazów na żądanie.',
  'adminSettings.errors.invalidImageDelivery': 'Wybierz prawidłowy sposób dostarczania obrazów.',
  'adminSettings.errors.semanticSearchUnavailable':
    'Dodaj bindingi AI i VECTORIZE przed włączeniem wyszukiwania semantycznego.',
  'adminSettings.errors.emailBindingRequired':
    'Dodaj binding EMAIL i wdróż ponownie przed włączeniem Cloudflare Email.',
  'adminSettings.errors.resendKeyRequired': 'Dodaj klucz API Resend przed włączeniem e-maili.',
  'adminSettings.errors.turnstileKeysRequired':
    'Dodaj klucz witryny i klucz tajny Turnstile przed włączeniem ochrony przed botami.',
  'adminSettings.errors.invalidDefaultRail':
    'Jako domyślną wybierz włączoną i skonfigurowaną metodę płatności.',
  'adminSettings.errors.invalidLightningBackend': 'Wybierz prawidłowy backend Lightning.',

  // Background (JS) saves.
  'adminSettings.inlineSave.saved': 'Zapisano ✓',
  'adminSettings.inlineSave.failed': 'Zapis nie powiódł się – spróbuj ponownie',

  // General
  'adminSettings.general.intro':
    'Dane sklepu i funkcje witryny – zmiany działają od razu, bez ponownego wdrożenia.',
  'adminSettings.general.storeName': 'Nazwa sklepu',
  'adminSettings.general.timeZone': 'Strefa czasowa sklepu',
  'adminSettings.general.timeZonePlaceholder': 'Szukaj, np. America/New_York',
  'adminSettings.general.timeZoneHelp':
    'Strefa czasowa określa sposób wyświetlania dat zapisanych w UTC. Użyj nazwy IANA, np. <code>UTC</code> lub <code>America/New_York</code>.',

  'adminSettings.logo.title': 'Logo',
  'adminSettings.logo.currentAlt': 'Obecne logo',
  'adminSettings.logo.choose': 'Wybierz logo',
  'adminSettings.logo.replace': 'Zmień logo',
  'adminSettings.logo.remove': 'Usuń logo',
  'adminSettings.logo.help':
    'Zastępuje nazwę sklepu w nagłówku. Usunięcie logo przywraca nazwę tekstową. Zapis czyści pamięć podręczną stron sklepu, których to dotyczy; 10-minutowy TTL ogranicza skutki chwilowego błędu czyszczenia.',

  'adminSettings.home.title': 'Strona główna',
  'adminSettings.home.selectLabel': 'Co wyświetla adres /',
  'adminSettings.home.productList': 'Lista produktów (domyślnie)',
  'adminSettings.home.groupPage': 'Strona',
  'adminSettings.home.groupProduct': 'Produkt',
  'adminSettings.home.missing':
    'Wybrana tu pozycja (strona lub produkt) nie jest już opublikowana ani aktywna, więc strona główna wyświetla listę produktów. Wybierz nową pozycję, aby zaktualizować ustawienie.',
  'adminSettings.home.catalogOrphaned':
    'Po ustawieniu własnej strony głównej lista produktów przeniosła się pod adres <code>/products</code>, a żadne menu do niej nie prowadzi – kupujący nie mają obecnie jak dotrzeć do katalogu. Dodaj element Katalog w sekcji <a href="{href}" class="underline hover:text-brand">Nawigacja</a>.',
  'adminSettings.home.help':
    'Na liście są tylko opublikowane strony i aktywne produkty. Jeśli wybrana pozycja zostanie później wycofana z publikacji lub usunięta, strona główna wróci do listy produktów, zamiast przestać działać. Zapis czyści pamięć podręczną stron sklepu, których to dotyczy; 10-minutowy TTL ogranicza skutki chwilowego błędu czyszczenia.',

  'adminSettings.announcement.label': 'Pasek ogłoszeń',
  'adminSettings.announcement.placeholder': 'np. Darmowa dostawa od 200 zł',
  'adminSettings.announcement.link': 'Link (opcjonalnie)',
  'adminSettings.announcement.linkPlaceholder': 'np. /categories/sale',
  'adminSettings.announcement.help':
    'Wyświetlany nad nagłówkiem na każdej stronie sklepu. Zostaw pustą treść, aby ukryć pasek. Strony sklepu są krótko przechowywane w pamięci podręcznej, więc zmiana może pojawić się wszędzie dopiero po około minucie.',

  'adminSettings.shippingCard.title': 'Dostawa',
  'adminSettings.shippingCard.on': 'Włączona',
  'adminSettings.shippingCard.off': 'Wyłączona',
  'adminSettings.shippingCard.summary': {
    one: '{state} · {count} strefa · strefy, stawki i progi darmowej dostawy',
    few: '{state} · {count} strefy · strefy, stawki i progi darmowej dostawy',
    many: '{state} · {count} stref · strefy, stawki i progi darmowej dostawy',
    other: '{state} · {count} strefy · strefy, stawki i progi darmowej dostawy',
  },
  'adminSettings.weightUnit.label': 'Jednostka wagi',
  'adminSettings.weightUnit.help':
    'Wagi produktów i stawek wpisuje się w tej jednostce; zapisane wartości są zawsze w gramach.',

  'adminSettings.shippo.title': 'Etykiety wysyłkowe (Shippo)',
  'adminSettings.shippo.help':
    'Kupuj etykiety przewoźników ze strony zamówienia na podstawie zapisanego adresu i wagi – numer przesyłki uzupełnia się, a e-mail o wysyłce wychodzi automatycznie. Token <code class="text-[11px]">shippo_test_…</code> kupuje testowe etykiety do wypróbowania.',
  'adminSettings.shippo.token': 'Token API',
  'adminSettings.shippo.tokenHint': 'shippo_live_… lub shippo_test_…',

  // Storefront feature switches, and why one can't be switched on yet.
  'adminSettings.features.cart': 'Koszyk i kasa',
  'adminSettings.features.cartDesc':
    'Dodawanie do koszyka i składanie zamówień. Po wyłączeniu sklep staje się katalogiem tylko do przeglądania.',
  'adminSettings.features.buyNow': 'Kup teraz',
  'adminSettings.features.buyNowDesc':
    'Przycisk szybkiego zakupu na stronach produktów – działa nawet przy wyłączonym koszyku.',
  'adminSettings.features.discounts': 'Kody rabatowe',
  'adminSettings.features.discountsDesc':
    'Pokazuje pole kodu rabatowego w kasie. Kody tworzy się w panelu Stripe.',
  'adminSettings.features.tax': 'Automatyczny podatek',
  'adminSettings.features.taxDesc':
    'Nalicza podatek od sprzedaży / VAT przez Stripe Tax – najpierw aktywuj Stripe Tax w panelu Stripe.',
  'adminSettings.features.accounts': 'Konta klientów',
  'adminSettings.features.accountsDesc':
    'Logowanie klientów bez hasła (przez link w e-mailu). Wymaga AUTH_SECRET i skonfigurowanego e-maila.',
  'adminSettings.features.imageOptimize': 'Optymalizuj obrazy przy przesyłaniu',
  'adminSettings.features.imageOptimizeDesc':
    'Zmniejsza obrazy produktów i zapisuje je jako WebP przez Cloudflare Images. Wymaga bindingu IMAGES.',
  'adminSettings.availability.stripe': 'Niedostępne do czasu skonfigurowania Stripe',
  'adminSettings.availability.authSecret': 'Niedostępne do czasu ustawienia AUTH_SECRET',
  'adminSettings.availability.email': 'Niedostępne do czasu włączenia i skonfigurowania e-maila',
  'adminSettings.availability.images': 'Niedostępne do czasu dodania bindingu IMAGES',

  // Images
  'adminSettings.images.intro':
    'Wybierz sposób dostarczania obrazów produktów. Dotyczy to istniejących i nowych plików i nie zmienia plików przechowywanych w R2.',
  'adminSettings.images.legend': 'Dostarczanie obrazów',
  'adminSettings.images.original': 'Oryginalne obrazy',
  'adminSettings.images.originalDesc':
    'Przesłane pliki są serwowane bez zmian. Bez zużycia transformacji i dodatkowej konfiguracji.',
  'adminSettings.images.cloudflare': 'Cloudflare na żądanie',
  'adminSettings.images.cloudflareDesc':
    'Responsywne dostarczanie w AVIF/WebP z automatycznym wyborem formatu i oryginałem jako rezerwą.',
  'adminSettings.images.cloudflareSetup':
    'Podłącz własną domenę HTTPS dla R2, ustaw IMAGE_BASE_URL i włącz Transformations w strefie Cloudflare sklepu.',
  'adminSettings.images.quota':
    'Zużywa limit Cloudflare Image Transformations. Każda unikalna kombinacja źródła i parametrów liczy się jako osobna transformacja.',
  'adminSettings.images.save': 'Zapisz dostarczanie obrazów',
  'adminSettings.images.purgeNote':
    'Zapis czyści pamięć podręczną publicznych stron, których to dotyczy; 10-minutowy TTL ogranicza skutki chwilowego błędu czyszczenia.',
  'adminSettings.images.deliveryNote':
    'To ustawienie dotyczy dostarczania. <strong class="font-medium text-gray-500">Optymalizuj obrazy przy przesyłaniu</strong> w sekcji Ogólne to osobna opcja, która zmienia nowo zapisywane pliki źródłowe.',

  // Payments
  'adminSettings.payments.intro':
    'Konfiguracja i klucze każdej metody są zgrupowane poniżej. Metoda zaczyna działać po ustawieniu klucza (a w przypadku Lightning także URL węzła); Demo jest zawsze dostępne. Klucze są przechowywane w D1 w postaci zaszyfrowanej – tylko do zapisu, nigdy nie są ponownie wyświetlane.',
  'adminSettings.payments.vaultMissing':
    'Klucze są szyfrowane sekretem Workera <code>SECRETS_KEK</code>, który nie jest ustawiony – dlatego pola kluczy są wyłączone, a zamówienia może przyjmować tylko Demo. Ustaw go (<code>openssl rand -base64 32 | wrangler secret put SECRETS_KEK</code>), a następnie wdróż ponownie.',
  'adminSettings.payments.defaultRail': 'Domyślna metoda płatności',
  'adminSettings.payments.optionUnavailable': '{label} – niedostępna',
  'adminSettings.payments.defaultRailHelp':
    'Włączona i skonfigurowana metoda proponowana jako pierwsza w kasie.',
  'adminSettings.payments.card': 'Karta (Stripe)',
  'adminSettings.payments.demo': 'Kasa demo',
  'adminSettings.payments.demoDesc':
    'Zawsze dostępna – rezerwuje towar i składa prawdziwe zamówienie oznaczone jako demo (bez opłaty).',
  'adminSettings.stripe.setup': 'Dodaj oba klucze Stripe, aby uruchomić',
  'adminSettings.stripe.secretKey': 'Klucz tajny',
  'adminSettings.stripe.secretKeyHint': 'sk_live_… lub sk_test_…',
  'adminSettings.stripe.webhookSecret': 'Sekret podpisu webhooka',
  'adminSettings.lightning.setup': 'Wybierz węzeł i ustaw jego URL oraz klucz, aby uruchomić',
  'adminSettings.lightning.backend': 'Backend',
  'adminSettings.lightning.lnbitsUrl': 'URL LNbits',
  'adminSettings.lightning.lnbitsKey': 'Klucz invoice/read LNbits',
  'adminSettings.lightning.lnbitsKeyHint': 'klucz invoice/read (nie admin)',
  'adminSettings.lightning.phoenixdUrl': 'URL phoenixd',
  'adminSettings.lightning.phoenixdPassword': 'Hasło phoenixd',
  'adminSettings.lightning.errorAddUrl': 'Dodaj URL {backend}.',
  'adminSettings.lightning.errorInvalidUrl': 'Podaj prawidłowy URL HTTP(S) dla {backend}.',
  'adminSettings.lightning.errorAddLnbitsKey': 'Dodaj klucz invoice/read LNbits.',
  'adminSettings.lightning.errorAddPhoenixdPassword': 'Dodaj hasło phoenixd.',
  'adminSettings.opennode.setup': 'Dodaj klucz API, aby uruchomić',
  'adminSettings.opennode.apiUrl': 'URL API',
  'adminSettings.opennode.apiUrlPlaceholder': '(puste = tryb produkcyjny)',
  'adminSettings.opennode.apiKey': 'Klucz API',
  'adminSettings.opennode.apiKeyHint': 'z panelu OpenNode',

  // Email
  'adminSettings.email.intro':
    'E-maile z potwierdzeniem zamówienia i logowaniem klientów. <strong>Resend</strong> działa w darmowym planie Workers; <strong>Cloudflare</strong> używa bindingu <code>send_email</code> (plan płatny). Wysyłka do prawdziwych klientów wymaga zweryfikowanej domeny nadawcy. Wyłączone lub nieskonfigurowane = brak wysyłki (potwierdzenie zamówienia na stronie nadal się wyświetla).',
  'adminSettings.email.send': 'Wysyłaj e-maile',
  'adminSettings.email.provider': 'Dostawca',
  'adminSettings.email.cloudflarePaid': 'Cloudflare – płatny plan Workers',
  'adminSettings.email.cloudflareMissing': 'Cloudflare – niedostępny (brak bindingu EMAIL)',
  'adminSettings.email.from': 'Adres nadawcy',
  'adminSettings.email.fromName': 'Nazwa nadawcy',
  'adminSettings.email.notifyTo': 'Powiadomienia o nowych zamówieniach do',
  'adminSettings.email.notifyHelp': 'Na ten adres trafia e-mail „Nowe zamówienie” dla właściciela. Puste = wyłączone.',
  'adminSettings.email.resendKey': 'Klucz API Resend',
  'adminSettings.email.cloudflareNote':
    'E-mail Cloudflare wymaga <strong>płatnego planu Workers</strong> i skonfigurowanej domeny nadawcy (<code>wrangler email sending enable &lt;domain&gt;</code>).',
  'adminSettings.email.bindingMissing':
    'Binding <code>send_email</code> nie jest jeszcze zadeklarowany w <code>wrangler.jsonc</code>, więc nic nie zostanie wysłane, dopóki go nie dodasz i nie wdrożysz ponownie.',
  'adminSettings.email.testLabel': 'Wyślij testowy e-mail do',
  'adminSettings.email.testButton': 'Wyślij test',
  'adminSettings.email.testSending': 'Wysyłanie…',
  'adminSettings.email.testSent': 'Wysłano.',
  'adminSettings.email.testFailed': 'Niepowodzenie.',
  'adminSettings.email.testRequestFailed': 'Żądanie nie powiodło się.',

  // POST /api/admin/email/test
  'adminSettings.emailTest.invalidRecipient': 'Podaj prawidłowy adres odbiorcy testowego e-maila.',
  'adminSettings.emailTest.notConfigured':
    'E-mail nie jest skonfigurowany – wybierz dostawcę, dodaj jego klucz i najpierw kliknij Zapisz.',
  'adminSettings.emailTest.fallbackStoreName': 'bez nazwy',
  'adminSettings.emailTest.subject': 'Testowy e-mail ze sklepu {store}',
  'adminSettings.emailTest.html':
    '<p>To jest testowy e-mail z panelu sklepu {store}. Wysyłka e-maili działa ✅</p>',
  'adminSettings.emailTest.text':
    'To jest testowy e-mail z panelu sklepu {store}. Wysyłka e-maili działa.',
  'adminSettings.emailTest.sent': 'Wysłano testowy e-mail na adres {to}.',
  'adminSettings.emailTest.failed': 'Wysyłka nie powiodła się: {error}',
  'adminSettings.emailTest.unknownError': 'nieznany błąd',

  // Bot protection
  'adminSettings.turnstile.intro':
    'Weryfikacja Cloudflare Turnstile przy logowaniu do panelu i do kont klientów. Domyślnie wyłączona. Wymaga <a href="{href}" class="text-accent underline">widżetu Turnstile</a> (klucz witryny + klucz tajny). Testowe klucze Cloudflare, które zawsze przechodzą weryfikację, sprawdzają się przy próbach lokalnych.',
  'adminSettings.turnstile.enable': 'Włącz Turnstile',
  'adminSettings.turnstile.needsKeys': 'Przed włączeniem dodaj oba klucze',
  'adminSettings.turnstile.siteKey': 'Klucz witryny (publiczny)',
  'adminSettings.turnstile.secretKey': 'Klucz tajny',

  // Search
  'adminSettings.search.intro':
    'Wyszukiwanie po słowach kluczowych (SQLite FTS5) działa bez konfiguracji. Włącz wyszukiwanie semantyczne, aby dopasowywać wyniki także według znaczenia za pomocą Workers AI i Vectorize – zmiana działa od razu, bez ponownego wdrożenia.',
  'adminSettings.search.semantic': 'Wyszukiwanie semantyczne',
  'adminSettings.search.on':
    'Włączone – wyniki są szeregowane według znaczenia (hybrydowo ze słowami kluczowymi). Przeindeksuj produkty po włączeniu lub po masowych zmianach.',
  'adminSettings.search.off':
    'Wyłączone – używane jest wyszukiwanie po słowach kluczowych (FTS5). Włącz, aby dopasowywać wyniki także według znaczenia.',
  'adminSettings.search.bindingsMissing':
    'Wymaga bindingów <code>AI</code> i <code>VECTORIZE</code> (zadeklarowanych w <code>wrangler.jsonc</code>). Do tego czasu wyszukiwanie działa tylko po słowach kluczowych.',
  'adminSettings.search.enable': 'Włącz wyszukiwanie semantyczne',
  'adminSettings.search.disable': 'Wyłącz wyszukiwanie semantyczne',
  'adminSettings.search.reindexAll': 'Przeindeksuj wszystkie produkty',
  'adminSettings.search.continueReindex': 'Kontynuuj reindeksację',
  'adminSettings.search.reindexProgress': 'Przetworzone produkty: {count}. Kontynuuj z kolejną partią.',
  'adminSettings.search.reindexHelp':
    'Indeksuje każdy produkt w Vectorize w małych partiach. Uruchom raz po włączeniu tej opcji lub aby uzupełnić indeks.',
  'adminSettings.search.reindexing': 'Reindeksacja…',
  'adminSettings.search.reindexStarting': 'Uruchamianie…',
  'adminSettings.search.reindexBatch': 'Produkty: {processed} / {total}',
  'adminSettings.search.reindexDone': 'Przeindeksowane produkty: {count} ✓',
  'adminSettings.search.reindexFailed': 'Reindeksacja nie powiodła się',

  // Build-time
  'adminSettings.buildTime.intro':
    'Poniższe ustawienia są ustalane <strong>podczas budowania</strong> (przechowywane w kodzie, aby szablon dał się czysto sklonować). Zmień pokazaną wartość, a następnie wdróż ponownie poleceniem <code>npm run deploy</code>.',
  'adminSettings.buildTime.currency': 'Waluta',
  'adminSettings.buildTime.currencyExample': '{currency} – np. {price}',
  'adminSettings.buildTime.currencyHelp':
    'Nadpisz <code>currency</code> w <code>src/store.config.ts</code>. Od tej wartości zależy formatowanie wszystkich cen, waluta nowych produktów i kasa.',
  'adminSettings.buildTime.favicon': 'Favicon',
  'adminSettings.buildTime.faviconAlt': 'Obecny favicon',
  'adminSettings.buildTime.faviconHelp':
    'Zastąp <code>public/favicon.svg</code> i wygeneruj ponownie <code>public/favicon.ico</code> dla przeglądarek, które nadal pobierają starszą ikonę.',

  // ── Components ────────────────────────────────────────────────────────────
  'adminSettings.secretField.encrypted': 'Zaszyfrowane w D1',
  'adminSettings.secretField.keepPlaceholder': 'Zostaw puste, aby zachować',
  'adminSettings.secretField.remove': 'Usuń',
  'adminSettings.secretField.vaultMissing': 'Ustaw <code>SECRETS_KEK</code>, aby dodać ten klucz',

  'adminSettings.filterBar.search': 'Szukaj',
  'adminSettings.filterBar.apply': 'Zastosuj',
  'adminSettings.filterBar.clear': 'Wyczyść',
  'adminSettings.filterBar.results': {
    one: '{count} wynik',
    few: '{count} wyniki',
    many: '{count} wyników',
    other: '{count} wyniku',
  },

  // ── Setup wizard ──────────────────────────────────────────────────────────
  'adminSettings.setup.title': 'Konfiguracja',
  'adminSettings.setup.heading': 'Skonfiguruj sklep',
  'adminSettings.setup.intro':
    'Kilka ustawień początkowych – możesz je zmienić w dowolnej chwili w Ustawieniach. To tylko szybki start.',
  'adminSettings.setup.basics': 'Podstawowe dane sklepu',
  'adminSettings.setup.currencyNote':
    'Waluta pozostaje ustawieniem budowania (jest powiązana z każdą ceną) – ustaw <code class="rounded bg-gray-100 px-1">currency</code> w <code class="rounded bg-gray-100 px-1">src/config.ts</code>. Obecnie: {currency}.',
  'adminSettings.setup.password': 'Hasło do panelu',
  'adminSettings.setup.passwordIntro':
    'Hasło do <code class="rounded bg-gray-100 px-1">/admin/login</code> – przechowywane jako skrót (PBKDF2), nigdy jawnym tekstem.',
  'adminSettings.setup.passwordKept': 'Hasło jest już ustawione; zostaw puste, aby je zachować.',
  'adminSettings.setup.passwordRequired': 'Wymagane do zakończenia.',
  'adminSettings.setup.accessNote':
    'Cloudflare Access to zalecane uwierzytelnianie w środowisku produkcyjnym; to prostsze rozwiązanie tymczasowe.',
  'adminSettings.setup.newPassword': 'Nowe hasło',
  'adminSettings.setup.newPasswordOptional': 'Nowe hasło (opcjonalnie)',
  'adminSettings.setup.passwordPlaceholder': 'co najmniej {count} znaków',
  'adminSettings.setup.passwordTooShort': 'Hasło musi mieć co najmniej {count} znaków.',
  'adminSettings.setup.passwordMissing':
    'Ustaw hasło do panelu – bez niego pulpit jest niedostępny, a ta strona pozostaje publiczna.',
  'adminSettings.setup.payments': 'Płatności',
  'adminSettings.setup.paymentsNote':
    'Kasa <strong>demo</strong> działa od razu. Prawdziwe metody płatności (karta przez Stripe, Bitcoin Lightning lub OpenNode) skonfigurujesz, kiedy zechcesz, w sekcji <strong>Ustawienia → Płatności</strong> – nie musisz robić tego teraz.',
  'adminSettings.setup.demoCatalog':
    'Wczytaj <strong>katalog demo</strong> – 30 przykładowych produktów w 6 kategoriach, aby poznać sklep. Zostaw niezaznaczone, aby zacząć od pustego sklepu i dodać własne produkty.',
  'adminSettings.setup.finish': 'Zakończ konfigurację',

  // ── Shipping editor ───────────────────────────────────────────────────────
  'adminSettings.shipping.title': 'Dostawa',
  'adminSettings.shipping.intro':
    'Strefy, stawki i progi darmowej dostawy. Kwoty są w {currency}; wagi wpisuje się w <strong>{unit}</strong> i zapisuje w gramach – jednostkę zmienisz w <a href="{href}" class="underline hover:text-brand">Ustawieniach</a>.',
  'adminSettings.shipping.viewCart': 'Zobacz koszyk',
  'adminSettings.shipping.saved': 'Zapisano ustawienia dostawy.',
  'adminSettings.shipping.conflict':
    'Ustawienia dostawy zmieniono w innej karcie. Odśwież stronę i przejrzyj te zmiany przed zapisaniem swoich.',
  'adminSettings.shipping.tooLarge':
    'Ta konfiguracja jest zbyt duża, aby ją zapisać. Usuń część stref lub krajów.',
  'adminSettings.shipping.missingWeights': {
    one: '{count} produkt ({names}) nie ma wagi wysyłkowej, więc nie da się go kupić. Ustaw wagi lub zachowaj stałą stawkę w każdej strefie.',
    few: '{count} produkty ({names}) nie mają wagi wysyłkowej, więc nie da się ich kupić. Ustaw wagi lub zachowaj stałą stawkę w każdej strefie.',
    many: '{count} produktów ({names}) nie ma wagi wysyłkowej, więc nie da się ich kupić. Ustaw wagi lub zachowaj stałą stawkę w każdej strefie.',
    other:
      '{count} produktu ({names}) nie ma wagi wysyłkowej, więc nie da się ich kupić. Ustaw wagi lub zachowaj stałą stawkę w każdej strefie.',
  },
  'adminSettings.shipping.unreadable': 'Nie udało się odczytać zapisanej konfiguracji dostawy:',
  'adminSettings.shipping.unreadableHelp':
    'Zamówienia produktów fizycznych są zablokowane, dopóki ta konfiguracja nie zostanie zastąpiona. Sprawdź poniższe wartości i użyj przycisku <strong>Zastąp nieprawidłową konfigurację</strong>, aby ją nadpisać.',
  'adminSettings.shipping.prepopulated':
    'Ten sklep nadal używa konfiguracji dostawy z <code class="text-xs">store.config.ts</code>, która dopuszcza ustawienia nieobsługiwane przez edytor. Problemy są zaznaczone poniżej – popraw je, a następnie zapisz, aby przenieść zarządzanie do panelu.',
  'adminSettings.shipping.firstSave':
    'Ustawienia dostawy pochodzą obecnie z <code class="text-xs">store.config.ts</code>. Zapisanie ich tutaj przenosi zarządzanie do panelu – od tej chwili ta strona jest źródłem prawdy.',
  'adminSettings.shipping.offer':
    '<strong class="font-semibold">Oferuj dostawę</strong> – zbieraj adres i pobieraj opłatę za dostawę.',
  'adminSettings.shipping.packageWeight': 'Waga opakowania ({unit})',
  'adminSettings.shipping.packageWeightHelp':
    'Karton, koperta, wypełnienie i etykieta. Doliczana raz do każdego zamówienia, oprócz wagi produktów.',
  'adminSettings.shipping.zoneName': 'Nazwa strefy',
  'adminSettings.shipping.zoneFallbackName': 'Strefa {number}',
  'adminSettings.shipping.moveUp': 'W górę',
  'adminSettings.shipping.moveDown': 'W dół',
  'adminSettings.shipping.removeZone': 'Usuń strefę',
  'adminSettings.shipping.destinations': 'Kraje docelowe',
  'adminSettings.shipping.restOfWorld': 'Reszta świata',
  'adminSettings.shipping.unknownCode': 'Nieznany kod: {code}',
  'adminSettings.shipping.freeOver': 'Darmowa dostawa od ({currency})',
  'adminSettings.shipping.freeOverHelp': 'Puste pole wyłącza tę opcję.',
  'adminSettings.shipping.rateLabel': 'Nazwa stawki',
  'adminSettings.shipping.pricing': 'Wycena',
  'adminSettings.shipping.pricingFlat': 'Stała cena',
  'adminSettings.shipping.pricingWeight': 'Według wagi zamówienia',
  'adminSettings.shipping.pricingPickup': 'Odbiór osobisty',
  'adminSettings.shipping.price': 'Cena',
  'adminSettings.shipping.pickupFee': 'Opłata (0 = za darmo)',
  'adminSettings.shipping.removeRate': 'Usuń stawkę',
  'adminSettings.shipping.weightBands': 'Przedziały wagowe',
  'adminSettings.shipping.upTo': 'Do ({unit})',
  'adminSettings.shipping.noMax': 'Bez limitu',
  'adminSettings.shipping.removeBand': 'Usuń',
  'adminSettings.shipping.addBand': 'Dodaj przedział',
  'adminSettings.shipping.addRate': 'Dodaj stawkę',
  'adminSettings.shipping.addZone': 'Dodaj strefę',
  'adminSettings.shipping.save': 'Zapisz ustawienia dostawy',
  'adminSettings.shipping.replace': 'Zastąp nieprawidłową konfigurację',
  'adminSettings.shipping.footer':
    'Stripe pokazuje stawki dla kraju wybranego w koszyku; ostateczny adres jest potwierdzany na stronie płatności Stripe. Inne metody płatności zbierają adres przed płatnością.',

  // Shipping validation (features/shipping/settings.ts). Shown beside the field,
  // and as the reason in the "could not be read" banners.
  'adminSettings.shippingErrors.needBand': 'Dodaj co najmniej jeden przedział wagowy.',
  'adminSettings.shippingErrors.maxBands': 'Maksymalnie {count} przedziałów na usługę.',
  'adminSettings.shippingErrors.enterPrice': 'Podaj cenę.',
  'adminSettings.shippingErrors.lastBandOnly': 'Tylko ostatni przedział może nie mieć limitu.',
  'adminSettings.shippingErrors.weightAboveZero': 'Podaj wagę większą od zera.',
  'adminSettings.shippingErrors.bandOrder': 'Każdy przedział musi mieć wyższy limit wagi niż poprzedni.',
  'adminSettings.shippingErrors.enabledBoolean': 'Wartość „włączone” musi być równa true lub false.',
  'adminSettings.shippingErrors.packageWeight': 'Podaj wagę opakowania równą zero lub większą.',
  'adminSettings.shippingErrors.zonesList': 'Strefy muszą być listą.',
  'adminSettings.shippingErrors.maxZones': 'Maksymalnie {count} stref.',
  'adminSettings.shippingErrors.needZone':
    'Przed włączeniem dostawy dodaj co najmniej jedną strefę z jedną stawką.',
  'adminSettings.shippingErrors.nameZone': 'Nazwij tę strefę.',
  'adminSettings.shippingErrors.zoneNameLength': 'Nazwa musi być krótsza niż {count} znaków.',
  'adminSettings.shippingErrors.zoneNameTaken': 'Inna strefa ma już tę nazwę.',
  'adminSettings.shippingErrors.needDestination': 'Wybierz co najmniej jeden kraj docelowy.',
  'adminSettings.shippingErrors.maxCountries': 'Maksymalnie {count} krajów na strefę.',
  'adminSettings.shippingErrors.restOfWorldMixed':
    'Reszty świata nie można łączyć z konkretnymi krajami.',
  'adminSettings.shippingErrors.restOfWorldOnce': 'Tylko jedna strefa może być Resztą świata.',
  'adminSettings.shippingErrors.restOfWorldLast': 'Reszta świata musi być ostatnią strefą.',
  'adminSettings.shippingErrors.notCountryCode': '{code} nie jest kodem kraju.',
  'adminSettings.shippingErrors.countryTaken': '{country} jest już w innej strefie.',
  'adminSettings.shippingErrors.needRate': 'Dodaj co najmniej jedną stawkę dostawy.',
  'adminSettings.shippingErrors.amountAboveZero': 'Podaj kwotę większą od zera.',
  'adminSettings.shippingErrors.maxOptions': 'Strefa może oferować maksymalnie {count} opcji.',
  'adminSettings.shippingErrors.maxOptionsWithFree':
    'Strefa może oferować maksymalnie {count} opcji (darmowa dostawa liczy się jako jedna).',
  'adminSettings.shippingErrors.nameRate': 'Nazwij tę stawkę.',
  'adminSettings.shippingErrors.rateLabelLength': 'Nazwa musi być krótsza niż {count} znaków.',
  'adminSettings.shippingErrors.rateLabelTaken': 'Inna stawka w tej strefie ma już tę nazwę.',
  'adminSettings.shippingErrors.freeLabelReserved':
    'Nazwa „{label}” jest zarezerwowana, gdy ustawiony jest próg darmowej dostawy.',
  'adminSettings.shippingErrors.choosePricing': 'Wybierz sposób wyceny.',
  'adminSettings.shippingErrors.enterMaxWeight': 'Podaj maksymalną wagę.',
  'adminSettings.shippingErrors.weightNegative': 'Waga nie może być ujemna.',
  'adminSettings.shippingErrors.weightPrecision': 'Zbyt wiele miejsc po przecinku dla jednostki {unit}.',
  'adminSettings.shippingErrors.weightOverLimit': 'Ta waga jest zbyt duża dla przesyłki paczkowej.',
  'adminSettings.shippingErrors.weightNotNumber': 'Podaj wagę jako liczbę.',
  'adminSettings.shippingErrors.invalidJson': 'Zapisana konfiguracja dostawy nie jest prawidłowym JSON-em.',
  'adminSettings.shippingErrors.notObject': 'Zapisana konfiguracja dostawy nie jest obiektem.',
  'adminSettings.shippingErrors.unsupportedSchema': 'Nieobsługiwana wersja schematu dostawy: {version}.',
  'adminSettings.shippingErrors.noRevision': 'Konfiguracja dostawy nie ma prawidłowej rewizji.',
  'adminSettings.shippingErrors.noOnOff':
    'Konfiguracja dostawy nie ma prawidłowej wartości włączenia/wyłączenia.',
  'adminSettings.shippingErrors.badPackageWeight':
    'Konfiguracja dostawy ma nieprawidłową wagę opakowania.',
  'adminSettings.shippingErrors.noZoneList': 'Konfiguracja dostawy nie ma listy stref.',
  'adminSettings.shippingErrors.malformedZone': 'Konfiguracja dostawy zawiera nieprawidłową strefę.',
  'adminSettings.shippingErrors.malformedRate': 'Konfiguracja dostawy zawiera nieprawidłową stawkę.',
} satisfies Catalog;
