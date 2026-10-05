import type { Catalog } from '../../core';

export const adminOrders = {
  'adminOrders.errors.notFound': 'Nie znaleziono',

  // Stored order states, shown as labels only (filters and URLs keep the codes).
  'adminOrders.status.paid': 'opłacone',
  'adminOrders.status.refunded': 'zwrócone',
  'adminOrders.status.pending': 'oczekujące',
  'adminOrders.fulfillment.fulfilled': 'Wysłane',
  'adminOrders.fulfillment.unfulfilled': 'Niewysłane',

  // Filter options (features/orders/filter.ts).
  'adminOrders.filter.statusPaid': 'Opłacone',
  'adminOrders.filter.statusPartiallyRefunded': 'Częściowo zwrócone',
  'adminOrders.filter.statusRefunded': 'Zwrócone',
  'adminOrders.filter.statusPending': 'Nieopłacone',
  'adminOrders.filter.methodStripe': 'Karta (Stripe)',
  'adminOrders.filter.methodOpennode': 'Bitcoin (OpenNode)',
  'adminOrders.filter.methodDemo': 'Demo',

  // Order list (admin/orders/index.astro).
  'adminOrders.list.matchCount': {
    one: '{count} zamówienie',
    few: '{count} zamówienia',
    many: '{count} zamówień',
    other: '{count} zamówienia',
  },
  'adminOrders.list.title': 'Zamówienia',
  'adminOrders.list.lookupNoMatch': 'Żadne zamówienie nie pasuje do „{query}”.',
  'adminOrders.list.inventoryExceptionsTitle': {
    one: '{count} rozbieżność magazynowa wymaga uwagi',
    few: '{count} rozbieżności magazynowe wymagają uwagi',
    many: '{count} rozbieżności magazynowych wymaga uwagi',
    other: '{count} rozbieżności magazynowej wymaga uwagi',
  },
  'adminOrders.list.inventoryExceptionsHelp':
    'Płatności za te zamówienia wpłynęły po wygaśnięciu rezerwacji towaru. Otwórz każde z nich, aby uzgodnić ilość sprzedaną ponad stan.',
  'adminOrders.list.unitsOversold': {
    one: 'Sprzedano {count} sztukę ponad stan',
    few: 'Sprzedano {count} sztuki ponad stan',
    many: 'Sprzedano {count} sztuk ponad stan',
    other: 'Sprzedano {count} sztuki ponad stan',
  },
  'adminOrders.list.refundEventsTitle': {
    one: '{count} zwrot środków wymaga uwagi',
    few: '{count} zwroty środków wymagają uwagi',
    many: '{count} zwrotów środków wymaga uwagi',
    other: '{count} zwrotu środków wymaga uwagi',
  },
  'adminOrders.list.refundEventsHelp':
    'Operator płatności zgłosił te zwroty środków, ale nie udało się ich zastosować. Nic nie zostało jeszcze odjęte od przychodu.',
  'adminOrders.list.conflictsWith':
    'Konflikt z <a href="{href}" class="underline">zamówieniem nr {ref}</a>',
  'adminOrders.list.refundErrorCurrencyMismatch': 'niezgodność waluty',
  'adminOrders.list.dismiss': 'Odrzuć',
  'adminOrders.list.noOrderForPayment': 'Żadne zamówienie nie odpowiada tej płatności',
  'adminOrders.list.retry': 'Ponów',
  'adminOrders.list.lookupPlaceholder': 'Nr lub ID zamówienia',
  'adminOrders.list.lookupLabel': 'Znajdź zamówienie po numerze lub ID',
  'adminOrders.list.find': 'Znajdź',
  'adminOrders.list.exportFiltered': 'Eksportuj widoczne',
  'adminOrders.list.exportAll': 'Eksportuj CSV',
  'adminOrders.list.filterPayment': 'Płatność',
  'adminOrders.list.filterAnyPayment': 'Wszystkie płatności',
  'adminOrders.list.filterFulfillment': 'Wysyłka',
  'adminOrders.list.filterAnyFulfillment': 'Dowolny status wysyłki',
  'adminOrders.list.filterMethod': 'Metoda',
  'adminOrders.list.filterAnyMethod': 'Wszystkie metody',
  'adminOrders.list.colOrder': 'Nr zamówienia',
  'adminOrders.list.colPublicId': 'Publiczny ID',
  'adminOrders.list.colEmail': 'E-mail',
  'adminOrders.list.colTotal': 'Razem',
  'adminOrders.list.colStatus': 'Status',
  'adminOrders.list.colFulfillment': 'Wysyłka',
  'adminOrders.list.colWhen': 'Data',
  'adminOrders.list.emptyFiltered': 'Żadne zamówienie nie pasuje do tych filtrów.',
  'adminOrders.list.empty': 'Brak zamówień.',

  // Order detail (admin/orders/[id].astro).
  'adminOrders.detail.title': 'Zamówienie nr {ref}',
  'adminOrders.detail.back': 'Wróć do zamówień',
  'adminOrders.detail.inventoryTitle': 'Wymagane uzgodnienie stanów magazynowych',
  'adminOrders.detail.inventoryHelp':
    'Płatność wpłynęła po wygaśnięciu rezerwacji towaru. Zamówienie pozostaje opłacone, ale tych ilości nie udało się automatycznie zdjąć ze stanu.',
  'adminOrders.detail.inventoryLine':
    '<strong>{name}</strong>: zamówiono {requested}, przy rozliczeniu dostępne tylko {consumed} (sprzedano ponad stan: {shortfall}).',
  'adminOrders.detail.inventoryItemFallback': 'Pozycja zamówienia',
  'adminOrders.detail.markReconciled': 'Oznacz jako uzgodnione',
  'adminOrders.detail.status': 'Status',
  'adminOrders.detail.placed': 'Złożono',
  'adminOrders.detail.email': 'E-mail',
  'adminOrders.detail.shipping': 'Dostawa',
  'adminOrders.detail.discount': 'Rabat',
  'adminOrders.detail.tax': 'Podatek',
  'adminOrders.detail.total': 'Razem',
  'adminOrders.detail.shipTo': 'Adres dostawy',
  'adminOrders.detail.paymentMethod': 'Metoda płatności',
  'adminOrders.detail.paymentReference': 'Identyfikator płatności',
  'adminOrders.detail.methodStripe': 'Karta (Stripe)',
  'adminOrders.detail.methodOpennode': 'Bitcoin (OpenNode)',
  'adminOrders.detail.methodDemo': 'Demo (bez opłaty)',
  'adminOrders.detail.fulfillment': 'Wysyłka',
  'adminOrders.detail.labelUnreconciledTitle': 'Zakupiona etykieta nie jest uwzględniona w tym zamówieniu',
  'adminOrders.detail.labelTracking': 'numer przesyłki <span class="tabular-nums">{tracking}</span>',
  'adminOrders.detail.labelTransaction':
    'transakcja Shippo <code class="text-xs">{transaction}</code>',
  'adminOrders.detail.labelUnreconciledHelp':
    'Zamówienie zmieniło stan (zwrot środków lub wysyłka w inny sposób) w trakcie zakupu tej etykiety, więc jej numer przesyłki nie został zapisany. Opłata jest prawdziwa – anuluj etykietę w Shippo, jeśli nie zostanie użyta.',
  'adminOrders.detail.labelPdf': 'Etykieta PDF',
  'adminOrders.detail.labelUncertain':
    'Zakup etykiety dla tego zamówienia nie zakończył się poprawnie – opłata <strong>mogła</strong> zostać pobrana (numer zamówienia w Shippo: <code class="text-xs">{ref}</code>).',
  'adminOrders.detail.labelUncertainWithError':
    'Zakup etykiety dla tego zamówienia nie zakończył się poprawnie ({error}) – opłata <strong>mogła</strong> zostać pobrana (numer zamówienia w Shippo: <code class="text-xs">{ref}</code>).',
  'adminOrders.detail.reconcile': 'Uzgodnij z Shippo',
  'adminOrders.detail.forceSummary': 'Żądanie nie dotarło do Shippo? (ryzykowne obejście)',
  'adminOrders.detail.forceHelp':
    'Wymuszone odrzucenie znosi gwarancję pojedynczego zakupu dla tego zamówienia: jeśli utracone żądanie jednak dotarło do Shippo i zakończy się później, etykieta będzie widoczna tylko w panelu Shippo i nie zostanie tu zapisana. W razie wątpliwości najpierw wykonaj uzgodnienie.',
  'adminOrders.detail.forceDiscard': 'Akceptuję ryzyko – wymuś odrzucenie',
  'adminOrders.detail.shippingLabelPdf': 'Etykieta wysyłkowa (PDF)',
  'adminOrders.detail.markUnfulfilled': 'Oznacz jako niewysłane',
  'adminOrders.detail.buyLabelTitle': 'Kup etykietę wysyłkową',
  'adminOrders.detail.labelInFlight':
    'Trwa zakup etykiety dla tego zamówienia. Odśwież stronę za chwilę – jeśli zakup nie zakończy się w ciągu kilku minut, można go tutaj uzgodnić.',
  'adminOrders.detail.labelUncertainReconcile':
    'Zakup etykiety dla tego zamówienia nie zakończył się poprawnie – opłata <strong>mogła</strong> zostać pobrana. Uzgodnienie wysyła zapytanie bezpośrednio do Shippo: znaleziona etykieta zostanie tu zapisana, a zamówienie oznaczone jako wysłane; potwierdzony brak zakupu ponownie umożliwi pobranie stawek.',
  'adminOrders.detail.labelUncertainReconcileWithError':
    'Zakup etykiety dla tego zamówienia nie zakończył się poprawnie ({error}) – opłata <strong>mogła</strong> zostać pobrana. Uzgodnienie wysyła zapytanie bezpośrednio do Shippo: znaleziona etykieta zostanie tu zapisana, a zamówienie oznaczone jako wysłane; potwierdzony brak zakupu ponownie umożliwi pobranie stawek.',
  'adminOrders.detail.labelPurchased': 'Zakupiono etykietę ({provider} {service}).',
  'adminOrders.detail.labelInternational':
    'To zamówienie ma trafić do kraju {to}, ale zapisany adres nadania jest w kraju {from} – etykiety międzynarodowe nie są jeszcze obsługiwane (wymagają deklaracji celnej). Kup etykietę w panelu Shippo, a następnie wpisz poniżej numer przesyłki.',
  'adminOrders.detail.estimatedDays': '~{days} d.',
  'adminOrders.detail.buyLabel': 'Kup etykietę',
  'adminOrders.detail.startOver': 'Zacznij od nowa',
  'adminOrders.detail.buyHelp':
    'Zakup obciąża konto Shippo, zapisuje numer przesyłki i oznacza zamówienie jako wysłane.',
  'adminOrders.detail.buyHelpEmail': 'Klient otrzyma e-mail z numerem przesyłki.',
  'adminOrders.detail.buyHelpNoEmail':
    'Klient nie otrzyma e-maila (zamówienie demo lub brak adresu e-mail).',
  'adminOrders.detail.shipFromName': 'Nadawca – nazwa',
  'adminOrders.detail.street': 'Ulica',
  'adminOrders.detail.city': 'Miasto',
  'adminOrders.detail.state': 'Województwo / region',
  'adminOrders.detail.postalCode': 'Kod pocztowy',
  'adminOrders.detail.country': 'Kraj',
  'adminOrders.detail.length': 'Długość ({unit})',
  'adminOrders.detail.width': 'Szerokość ({unit})',
  'adminOrders.detail.height': 'Wysokość ({unit})',
  'adminOrders.detail.packedWeight': 'Waga z opakowaniem ({unit})',
  'adminOrders.detail.getRates': 'Pobierz stawki',
  'adminOrders.detail.ratesHelp':
    'Adres i wymiary paczki zostaną zapamiętane dla kolejnej etykiety. Waga jest uzupełniana z zapisanej wagi przesyłki zamówienia, jeśli jest dostępna.',
  'adminOrders.detail.carrier': 'Przewoźnik',
  'adminOrders.detail.trackingNumber': 'Numer przesyłki',
  'adminOrders.detail.markFulfilled': 'Oznacz jako wysłane',
  'adminOrders.detail.labelHistory': 'Historia etykiet ({count})',
  'adminOrders.detail.outcomePurchased': 'Zakupiona',
  'adminOrders.detail.outcomeRefunded': 'Zwrócona',
  'adminOrders.detail.outcomeFailed': 'Nieudana',
  'adminOrders.detail.outcomeForceDiscarded': 'Wymuszone odrzucenie',
  'adminOrders.detail.attemptTracking': 'Numer przesyłki {tracking}',
  'adminOrders.detail.attemptTransaction': 'Transakcja <code>{transaction}</code>',
  'adminOrders.detail.customerLink': 'Link dla klienta',
  'adminOrders.detail.reissueConfirm':
    'Wysłać na adres {email} nowy link do zamówienia? Wszystkie wcześniej udostępnione linki do tego zamówienia natychmiast przestaną działać.',
  'adminOrders.detail.reissue': 'Wyślij nowy link do zamówienia',
  'adminOrders.detail.reissueHelp':
    'Użyj tej opcji, jeśli klient zgłasza przekazany dalej lub ujawniony link. Stare linki przestają działać w chwili wydania nowego.',
  'adminOrders.detail.items': 'Pozycje',
  'adminOrders.detail.colProduct': 'Produkt',
  'adminOrders.detail.colUnitPrice': 'Cena jedn.',
  'adminOrders.detail.colQty': 'Ilość',
  'adminOrders.detail.colLineTotal': 'Wartość',
  'adminOrders.detail.noItems': 'Brak zapisanych pozycji dla tego zamówienia.',
  'adminOrders.detail.totalMismatch':
    'Uwaga: suma pozycji ({amount}) różni się od wartości zamówienia – sprawdź dane u operatora płatności.',

  // Refunds panel (features/refunds/RefundPanel.astro).
  'adminOrders.refunds.title': 'Zwroty środków',
  'adminOrders.refunds.stateFull': 'Zwrócone',
  'adminOrders.refunds.statePartial': 'Częściowo zwrócone',
  'adminOrders.refunds.needsReview': 'Wymaga sprawdzenia.',
  'adminOrders.refunds.reviewCurrencyMismatch':
    'Zwrot środków wpłynął w innej walucie niż ta, w której opłacono zamówienie. Sumy pozostały bez zmian.',
  'adminOrders.refunds.reviewExceedsTotal':
    'Suma zwrotów u operatora płatności wraz z kwotą zapisaną tutaj przekracza wartość zamówienia.',
  'adminOrders.refunds.markReviewed': 'Oznacz jako sprawdzone',
  'adminOrders.refunds.orderTotal': 'Wartość zamówienia',
  'adminOrders.refunds.throughProvider': 'Przez operatora płatności',
  'adminOrders.refunds.recordedByHand': 'Zapisane ręcznie',
  'adminOrders.refunds.totalRefunded': 'Łącznie zwrócono',
  'adminOrders.refunds.refundableLeft': 'Pozostało do zwrotu',
  'adminOrders.refunds.net': 'Po zwrotach',
  'adminOrders.refunds.kindProviderApi': 'Zwrot przez operatora płatności',
  'adminOrders.refunds.kindProviderSync': 'Zsynchronizowany od operatora płatności',
  'adminOrders.refunds.kindManualExternal': 'Zapisany ręcznie',
  'adminOrders.refunds.kindManualReversal': 'Korekta',
  'adminOrders.refunds.kindDemo': 'Korekta demo',
  'adminOrders.refunds.kindLegacy': 'Zapisany przed wprowadzeniem historii zwrotów',
  'adminOrders.refunds.voided': 'Unieważniony',
  'adminOrders.refunds.voidConfirm':
    'Unieważnić ten zapisany zwrot? Poprawia to tylko zapisy w minshop i nie przesyła żadnych pieniędzy.',
  'adminOrders.refunds.void': 'Unieważnij',
  'adminOrders.refunds.refundConfirm':
    'Zwrócić {amount} przez operatora płatności? Pieniądze zostaną odesłane klientowi.',
  'adminOrders.refunds.refundButton': 'Zwróć {amount} przez operatora',
  'adminOrders.refunds.refundHelp':
    'Odsyła pieniądze. Aby zwrócić część kwoty, użyj panelu operatora płatności – zwrot zsynchronizuje się tutaj automatycznie.',
  'adminOrders.refunds.recordDemoTitle': 'Oznacz zamówienie demo jako zwrócone',
  'adminOrders.refunds.recordTitle': 'Zarejestruj wykonany już zwrot',
  'adminOrders.refunds.amountLabel': 'Kwota zwrotu',
  'adminOrders.refunds.notePlaceholder': 'Jak został wykonany (notatka wewnętrzna)',
  'adminOrders.refunds.noteLabel': 'Notatka wewnętrzna',
  'adminOrders.refunds.markRefunded': 'Oznacz jako zwrócone',
  'adminOrders.refunds.recordRefund': 'Zarejestruj zwrot',
  'adminOrders.refunds.recordDemoHelp':
    'Aktualizuje tylko zamówienie demo i statystyki sklepu. Żadne pieniądze nie zostały pobrane ani zwrócone.',
  'adminOrders.refunds.recordHelp':
    'Aktualizuje tylko zapisy w minshop i nie przesyła pieniędzy. Najpierw wyślij zwrot ze swojego portfela lub przez operatora płatności.',
  'adminOrders.refunds.syncTitle': 'Zsynchronizuj zwrot od operatora płatności',
  'adminOrders.refunds.syncAmountLabel': 'Łączna kwota zwrócona u operatora',
  'adminOrders.refunds.providerRefundIdPlaceholder': 'ID zwrotu u operatora (opcjonalnie)',
  'adminOrders.refunds.providerRefundIdLabel': 'ID zwrotu u operatora',
  'adminOrders.refunds.syncTotal': 'Zsynchronizuj sumę',
  'adminOrders.refunds.syncHelp':
    'Używaj tylko wtedy, gdy zwrot wykonany u operatora płatności nigdy się tu nie pojawił. Wpisz<strong> łączną kwotę zwróconą dotąd</strong>, a nie tylko ostatnią kwotę.',

  // Order actions (api/admin/orders/[id].ts) — flash messages on the order page.
  'adminOrders.api.invalidInventoryException': 'Nieprawidłowa rozbieżność magazynowa.',
  'adminOrders.api.inventoryReconciled': 'Rozbieżność magazynowa oznaczona jako uzgodniona.',
  'adminOrders.api.inventoryAlreadyResolved':
    'Ta rozbieżność magazynowa została już rozwiązana lub nie dotyczy tego zamówienia.',
  'adminOrders.api.reissueNoEmail':
    'To zamówienie nie ma adresu e-mail klienta, więc nie można wysłać nowego linku. Nic nie zostało zmienione.',
  'adminOrders.api.reissueDemo':
    'Zamówienia demo nigdy nie wysyłają e-maili do klientów, więc nie można wydać dla nich nowego linku.',
  'adminOrders.api.reissueLegacy':
    'To zamówienie pochodzi sprzed wprowadzenia odwoływalnych linków dla gości i nie można wydać dla niego nowego linku.',
  'adminOrders.api.reissueEmailOff':
    'E-mail nie jest skonfigurowany, więc nie można wysłać nowego linku. Nic nie zostało zmienione.',
  'adminOrders.api.reissueUnsettled': 'Nowy link można wydać tylko dla rozliczonych zamówień z linkiem dla gościa.',
  'adminOrders.api.reissued':
    'Stare linki do zamówienia już nie działają. Nowy link jest wysyłany do klienta.',
  'adminOrders.api.refundManualExists':
    'To zamówienie ma już ręcznie zapisany zwrot środków. Pozostałą kwotę zwróć w panelu operatora płatności – zwrot zsynchronizuje się tutaj automatycznie.',
  'adminOrders.api.refundAlreadyFull': 'Za to zamówienie zwrócono już całą kwotę.',
  'adminOrders.api.refundUnsupported':
    'Ta metoda płatności nie obsługuje zwrotów – zwróć pieniądze samodzielnie, a następnie użyj opcji „Zarejestruj zwrot”.',
  'adminOrders.api.refundFailed': 'Zwrot środków nie powiódł się: {error}',
  'adminOrders.api.orderNotFound': 'Nie znaleziono zamówienia.',
  'adminOrders.api.refundAmountRequired': 'Podaj kwotę zwrotu większą od zera.',
  'adminOrders.api.refundDuplicate': 'Ten zwrot jest już zapisany – nic nie zostało zmienione.',
  'adminOrders.api.refundOverBalance':
    'To więcej niż pozostała kwota do zwrotu ({amount}).',
  'adminOrders.api.refundNotAllowed': 'Dla tego zamówienia nie można wykonać zwrotu środków.',
  'adminOrders.api.syncAmountRequired': 'Podaj łączną kwotę zwróconą dotąd.',
  'adminOrders.api.syncOverTotal': 'To więcej niż wartość zamówienia.',
  'adminOrders.api.syncNotAllowed': 'Tego zamówienia nie można uzgodnić.',
  'adminOrders.api.syncDuplicate': 'Ta suma jest już zapisana – nic nie zostało zmienione.',
  'adminOrders.api.syncConflict':
    'Zapisano, ale suma u operatora płatności wraz ze zwrotami zapisanymi tutaj przekracza teraz wartość zamówienia. Sprawdź zwroty w tym zamówieniu.',
  'adminOrders.api.invalidRefund': 'Nieprawidłowy zwrot.',
  'adminOrders.api.voidDuplicate': 'Ten wpis został już unieważniony.',
  'adminOrders.api.voidNotAllowed': 'Unieważnić można tylko ręcznie zapisane zwroty.',
  'adminOrders.api.labelDiscarded': 'Odrzucono próbę zakupu etykiety. Możesz ponownie pobrać stawki.',
  'adminOrders.api.labelNothingToDiscard':
    'Brak próby zakupu etykiety do odrzucenia – wysłany zakup trzeba zamiast tego uzgodnić z Shippo.',
  'adminOrders.api.labelForceDiscarded':
    'Wymuszono odrzucenie próby. Jeśli pierwotne żądanie jednak dotarło do Shippo, etykieta pojawi się tylko w panelu Shippo.',
  'adminOrders.api.labelNothingToForceDiscard': 'Brak wysłanej próby zakupu, którą można odrzucić.',
  'adminOrders.api.shippoTokenMissing': 'Najpierw dodaj token API Shippo w Ustawieniach.',
  'adminOrders.api.labelNothingToReconcile': 'Brak nierozliczonej próby zakupu etykiety do uzgodnienia.',
  'adminOrders.api.reconcileFailed': 'Nie udało się uzgodnić z Shippo: {error}',
  'adminOrders.api.reconcilePending':
    'Shippo nie ma jeszcze ostatecznej odpowiedzi – zakup może być wciąż przetwarzany lub jeszcze niewidoczny. Spróbuj ponownie za chwilę; nic nie zostało zmienione.',
  'adminOrders.api.reconcileRaced':
    'Próba zmieniła stan w trakcie uzgadniania – odśwież stronę i sprawdź ponownie.',
  'adminOrders.api.reconcileRefunded':
    'Według Shippo etykieta została zakupiona, a następnie zwrócona (transakcja {transaction}). Zapisano – możesz ponownie pobrać stawki.',
  'adminOrders.api.reconcileNoneStored':
    'Uzgodniono z Shippo: próba zakończyła się stanem ERROR bez zakupu.',
  'adminOrders.api.reconcileNone':
    'Shippo jednoznacznie zgłasza, że próba nie powiodła się i nic nie kupiono. Możesz ponownie pobrać stawki.',
  'adminOrders.api.reconcileUnfulfilled':
    'Etykietę {tracking} odzyskano z Shippo i zapisano – ale zamówienia nie można oznaczyć jako wysłanego (zwrot środków lub już wysłane). Uzgodnij przesyłkę ręcznie.',
  'adminOrders.api.reconcileFulfilled':
    'Etykietę {tracking} odzyskano z Shippo i zapisano, a zamówienie oznaczono jako wysłane.',
  'adminOrders.api.noShippingAddress': 'To zamówienie nie ma adresu dostawy.',
  'adminOrders.api.addressUnreadable': 'Nie udało się odczytać adresu dostawy tego zamówienia.',
  'adminOrders.api.addressIncomplete':
    'Adres dostawy tego zamówienia jest niekompletny – etykieta wymaga nazwy, ulicy, miasta, kodu pocztowego i kraju.',
  'adminOrders.api.shipFromIncomplete':
    'Uzupełnij pełny adres nadania (dwuliterowy kod kraju).',
  'adminOrders.api.internationalUnsupported':
    'Etykiety międzynarodowe nie są jeszcze obsługiwane (to zamówienie ma trafić do kraju {country}). Kup tę etykietę w panelu Shippo, a następnie zapisz tutaj numer przesyłki.',
  'adminOrders.api.parcelInvalid': 'Sprawdź pola paczki.',
  'adminOrders.api.quoteRefused':
    'Dla tego zamówienia nie można teraz pobrać stawek – etykieta została już zakupiona lub zamówienie nie spełnia już warunków.',
  'adminOrders.api.pickRate': 'Najpierw wybierz stawkę.',
  'adminOrders.api.noOpenQuote':
    'Brak otwartej wyceny do zakupu – najpierw pobierz stawki (albo zakup już trwa).',
  'adminOrders.api.rateGoneStored': 'Wybrana stawka nie jest już oferowana.',
  'adminOrders.api.rateGone': 'Ta stawka nie jest już oferowana. Pobierz stawki ponownie.',
  'adminOrders.api.purchaseUncertain':
    'Odpowiedź Shippo zaginęła w trakcie zakupu ({error}) – etykieta MOGŁA zostać kupiona. Użyj opcji „Uzgodnij z Shippo” w tym zamówieniu, aby to rozstrzygnąć.',
  'adminOrders.api.purchaseSuperseded':
    'Etykieta ({tracking}) została kupiona przez próbę, która była już odrzucona – nie jest tutaj zapisana. Uzgodnij ją w panelu Shippo (zamówienie {order}).',
  'adminOrders.api.purchaseUnfulfilled':
    'Etykieta {tracking} została kupiona i zapisana, ale nie udało się oznaczyć zamówienia jako wysłanego – w międzyczasie zmieniło ono stan (zwrot środków?). Nie wysłano e-maila do klienta. Uzgodnij ręcznie.',
  'adminOrders.api.purchasedEmailQueued':
    'Zakupiono etykietę ({provider} {service}). Zapisano numer przesyłki {tracking}. E-mail z numerem przesyłki czeka w kolejce do wysłania do klienta.',
  'adminOrders.api.purchasedNoEmail':
    'Zakupiono etykietę ({provider} {service}). Zapisano numer przesyłki {tracking}. Klient nie otrzyma e-maila (zamówienie demo, brak adresu lub nieskonfigurowany e-mail).',
  'adminOrders.api.fulfillBlocked':
    'Dla tego zamówienia trwa zakup etykiety lub czeka on na uzgodnienie – najpierw go dokończ albo odrzuć.',

  // Unmatched refund events (api/admin/refunds.ts) — flash messages on the list.
  'adminOrders.refundEvents.missingEvent': 'Brak zdarzenia.',
  'adminOrders.refundEvents.notWaiting': 'To zdarzenie nie czeka już na uzgodnienie.',
  'adminOrders.refundEvents.stillUnmatched':
    'Nadal żadne zamówienie nie odpowiada tej płatności. Zdarzenie pozostaje w kolejce – możesz ponowić próbę, gdy identyfikator płatności zamówienia zostanie uzupełniony.',
  'adminOrders.refundEvents.cannotDismiss':
    'Ten zwrot nie został jeszcze przypisany do zamówienia, więc nie można go odrzucić – ukryłoby to pieniądze, które faktycznie zostały przelane. Użyj opcji Ponów, gdy identyfikator płatności zamówienia będzie już dostępny.',

  // Shippo label errors (features/shipping/labels.ts).
  'adminOrders.labels.parcelDimensions':
    'Podaj długość, szerokość i wysokość paczki jako liczby dodatnie.',
  'adminOrders.labels.parcelWeight': 'Podaj wagę zapakowanej paczki jako liczbę dodatnią.',
  'adminOrders.labels.unreachable': 'Shippo jest obecnie nieosiągalne.',
  'adminOrders.labels.tokenRejected': 'Shippo odrzuciło token API.',
  'adminOrders.labels.unreadableBody': 'Shippo odpowiedziało statusem {status} z nieczytelną treścią.',
  'adminOrders.labels.httpStatus': 'Shippo odpowiedziało statusem {status}.',
  'adminOrders.labels.noRates': 'Żaden przewoźnik nie zaoferował stawki dla tej paczki i adresu.',
  'adminOrders.labels.ratesExpired': 'Ta lista stawek wygasła. Pobierz stawki ponownie.',
  'adminOrders.labels.purchaseFailed': 'Shippo nie mogło kupić tej etykiety.',
  'adminOrders.labels.unexpectedShape':
    'Shippo odpowiedziało w nieoczekiwanym formacie; wynik uzgodnienia jest nierozstrzygnięty.',
  'adminOrders.labels.incompletePurchased':
    'Shippo zgłasza zakupioną etykietę, ale jej rekord jest niekompletny; uzgodnij ją w panelu Shippo.',
  'adminOrders.labels.conflictingStates':
    'Shippo zwróciło sprzeczne stany transakcji; wynik uzgodnienia jest nierozstrzygnięty.',
  'adminOrders.labels.incompleteRefunded':
    'Shippo zgłasza zwróconą etykietę, ale jej rekord jest niekompletny; uzgodnij ją w panelu Shippo.',
  'adminOrders.labels.unknownStatus':
    'Shippo zgłosiło status transakcji, którego ta wersja nie rozpoznaje; uzgodnij ją w panelu Shippo.',

  // CSV export column headers (admin/orders/export.csv.ts). Values stay codes.
  'adminOrders.export.order': 'Zamówienie',
  'adminOrders.export.date': 'Data',
  'adminOrders.export.email': 'E-mail',
  'adminOrders.export.status': 'Status',
  'adminOrders.export.fulfillment': 'Wysyłka',
  'adminOrders.export.subtotal': 'Wartość produktów',
  'adminOrders.export.shipping': 'Dostawa',
  'adminOrders.export.discount': 'Rabat',
  'adminOrders.export.tax': 'Podatek',
  'adminOrders.export.total': 'Razem',
  'adminOrders.export.currency': 'Waluta',
  'adminOrders.export.providerRefunded': 'Zwrócono przez operatora',
  'adminOrders.export.externallyRefunded': 'Zwrócono poza systemem',
  'adminOrders.export.totalRefunded': 'Łącznie zwrócono',
  'adminOrders.export.net': 'Po zwrotach',
  'adminOrders.export.refundState': 'Status zwrotu',
  'adminOrders.export.refundReview': 'Weryfikacja zwrotu',
  'adminOrders.export.carrier': 'Przewoźnik',
  'adminOrders.export.tracking': 'Numer przesyłki',

  // Customers (admin/customers/*).
  'adminOrders.customers.title': 'Klienci',
  'adminOrders.customers.colEmail': 'E-mail',
  'adminOrders.customers.colOrders': 'Zamówienia',
  'adminOrders.customers.colLifetime': 'Łączna wartość',
  'adminOrders.customers.colLastOrder': 'Ostatnie zamówienie',
  'adminOrders.customers.empty': 'Brak klientów.',
  'adminOrders.customers.back': 'Wróć do klientów',
  'adminOrders.customers.summary': {
    one: '{count} zamówienie · łącznie {lifetime}',
    few: '{count} zamówienia · łącznie {lifetime}',
    many: '{count} zamówień · łącznie {lifetime}',
    other: '{count} zamówienia · łącznie {lifetime}',
  },
  'adminOrders.customers.colOrder': 'Zamówienie',
  'adminOrders.customers.colTotal': 'Razem',
  'adminOrders.customers.colStatus': 'Status',
  'adminOrders.customers.colWhen': 'Data',
} satisfies Catalog;
