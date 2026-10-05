import type { Catalog } from '../../core';

export const adminContent = {
  'adminContent.errors.notFound': 'Nie znaleziono',

  // Pages list (admin/pages/index.astro).
  'adminContent.pages.title': 'Strony',
  'adminContent.pages.newPage': 'Nowa strona',
  'adminContent.pages.empty':
    'Brak stron. Utwórz stronę „O nas”, „Dostawa”, „Zwroty” lub „Polityka prywatności”, a następnie dodaj ją do <a href="{href}" class="underline hover:text-brand">nawigacji</a>, aby kupujący mogli ją znaleźć.',
  'adminContent.pages.colTitle': 'Tytuł',
  'adminContent.pages.colUrl': 'URL',
  'adminContent.pages.colStatus': 'Status',
  'adminContent.pages.colUpdated': 'Zaktualizowano',
  'adminContent.pages.colActions': 'Akcje',
  'adminContent.pages.published': 'Opublikowana',
  'adminContent.pages.draft': 'Szkic',
  'adminContent.pages.view': 'Zobacz',
  'adminContent.pages.edit': 'Edytuj',
  'adminContent.pages.delete': 'Usuń',
  'adminContent.pages.deleteLinkedConfirm':
    'Ta strona jest podlinkowana w nawigacji. Usunięcie jej ukryje ten link w sklepie. Kontynuować?',
  'adminContent.pages.deleteConfirm': 'Usunąć tę stronę?',

  // New page (admin/pages/new.astro).
  'adminContent.newPage.title': 'Nowa strona',
  'adminContent.newPage.back': 'Wróć do stron',
  'adminContent.newPage.fieldTitle': 'Tytuł',
  'adminContent.newPage.fieldSlug':
    'Slug (adres URL) <span class="normal-case tracking-normal text-gray-400">(opcjonalnie)</span>',
  'adminContent.newPage.slugPlaceholder': 'o-nas',
  'adminContent.newPage.slugHelp':
    'Zostaw puste, aby utworzyć go z tytułu. Strona będzie dostępna pod adresem /pages/<slug>.',
  'adminContent.newPage.createDraft': 'Utwórz szkic',

  // Page editor (admin/pages/[id]/edit.astro).
  'adminContent.editPage.title': 'Edytuj {title}',
  'adminContent.editPage.heading': 'Edytuj stronę',
  'adminContent.editPage.back': 'Wróć do stron',
  'adminContent.editPage.viewOnStore': 'Zobacz w sklepie',
  'adminContent.editPage.saved': 'Zapisano.',
  'adminContent.editPage.fieldTitle': 'Tytuł',
  'adminContent.editPage.fieldSlug': 'Slug',
  'adminContent.editPage.editorView': 'Widok edytora',
  'adminContent.editPage.modeMarkdown': 'Markdown',
  'adminContent.editPage.modeSplit': 'Podzielony',
  'adminContent.editPage.modePreview': 'Podgląd',
  'adminContent.editPage.toolHeading': 'Nagłówek',
  'adminContent.editPage.toolBoldLabel': 'B',
  'adminContent.editPage.toolBold': 'Pogrubienie',
  'adminContent.editPage.toolItalicLabel': 'I',
  'adminContent.editPage.toolItalic': 'Kursywa',
  'adminContent.editPage.toolLink': 'Link',
  'adminContent.editPage.toolListLabel': 'Lista',
  'adminContent.editPage.toolList': 'Lista punktowana',
  'adminContent.editPage.toolNumbered': 'Lista numerowana',
  'adminContent.editPage.toolQuoteLabel': 'Cytat',
  'adminContent.editPage.toolQuote': 'Blok cytatu',
  'adminContent.editPage.toolCodeLabel': 'Kod',
  'adminContent.editPage.toolCode': 'Kod w tekście',
  'adminContent.editPage.image': 'Obraz',
  // The empty editor's placeholder doubles as a Markdown cheat sheet: translate
  // the prose, keep the syntax characters.
  'adminContent.editPage.placeholder': `## Nagłówek sekcji

Napisz stronę w Markdownie. Puste linie oddzielają akapity.

**pogrubienie**  _kursywa_  \`kod\`

- lista punktowana
- kolejny element

1. lista numerowana
2. kolejny element

> cytat

[link](https://example.com)

![opisz obraz](/images/media/photo.webp)`,
  'adminContent.editPage.previewHeading':
    'Podgląd <span class="normal-case tracking-normal">· kliknij, aby znaleźć źródło</span>',
  'adminContent.editPage.layout': 'Układ',
  'adminContent.editPage.published': 'Opublikowana',
  'adminContent.editPage.save': 'Zapisz',
  'adminContent.editPage.publishHelp':
    'Opublikowane strony pojawiają się w stopce i mapie witryny. Ze względu na pamięć podręczną sklepu zmiana może pojawić się dopiero po minucie.',
  // Read by the editor's client script from data-* attributes.
  'adminContent.editPage.rendering': 'Renderowanie…',
  'adminContent.editPage.previewFailedStatus': 'Podgląd nie powiódł się ({status})',
  'adminContent.editPage.previewFailed': 'Podgląd nie powiódł się.',
  'adminContent.editPage.linkText': 'tekst linku',
  'adminContent.editPage.altPrompt': 'Opisz ten obraz dla czytników ekranu:',

  // Layout presets (features/pages/layouts.ts): one label + hint per preset.
  'adminContent.layout.standard': 'Standardowy',
  'adminContent.layout.standardHint':
    'Wąska kolumna, tytuł wyrównany do lewej. Najlepszy do regulaminów oraz stron o dostawie i zwrotach.',
  'adminContent.layout.editorial': 'Redakcyjny',
  'adminContent.layout.editorialHint':
    'Wąska kolumna, wyśrodkowany tytuł. Najlepszy do stron „O nas” i historii marki.',
  'adminContent.layout.wide': 'Szeroki',
  'adminContent.layout.wideHint':
    'Pełna szerokość, tytuł wyrównany do lewej. Najlepszy do tabel rozmiarów, tabel i siatek zdjęć.',

  // Page form validation (features/pages/form.ts, api/admin/pages.ts).
  'adminContent.form.titleRequired': 'Tytuł jest wymagany.',
  'adminContent.form.titleTooLong': 'Tytuł może mieć maksymalnie {max} znaków.',
  'adminContent.form.bodyTooLong': 'Treść strony może mieć maksymalnie {max} znaków.',

  // Save outcome when media is missing (features/pages/save.ts).
  'adminContent.save.publishRefused': {
    one: 'Zmiany zapisano, ale strona nie została opublikowana, bo w bibliotece multimediów brakuje {count} obrazu.',
    few: 'Zmiany zapisano, ale strona nie została opublikowana, bo w bibliotece multimediów brakuje {count} obrazów.',
    many: 'Zmiany zapisano, ale strona nie została opublikowana, bo w bibliotece multimediów brakuje {count} obrazów.',
    other:
      'Zmiany zapisano, ale strona nie została opublikowana, bo w bibliotece multimediów brakuje {count} obrazu.',
  },
  'adminContent.save.liveBroken': {
    one: 'Zmiany zapisano i opublikowano, ale w bibliotece multimediów brakuje {count} obrazu, więc nie wyświetli się poprawnie.',
    few: 'Zmiany zapisano i opublikowano, ale w bibliotece multimediów brakuje {count} obrazów, więc nie wyświetlą się poprawnie.',
    many: 'Zmiany zapisano i opublikowano, ale w bibliotece multimediów brakuje {count} obrazów, więc nie wyświetlą się poprawnie.',
    other:
      'Zmiany zapisano i opublikowano, ale w bibliotece multimediów brakuje {count} obrazu, więc nie wyświetli się poprawnie.',
  },
  'adminContent.save.draftMissing': {
    one: 'Szkic zapisano, ale w bibliotece multimediów brakuje {count} obrazu.',
    few: 'Szkic zapisano, ale w bibliotece multimediów brakuje {count} obrazów.',
    many: 'Szkic zapisano, ale w bibliotece multimediów brakuje {count} obrazów.',
    other: 'Szkic zapisano, ale w bibliotece multimediów brakuje {count} obrazu.',
  },

  // Navigation (admin/navigation.astro, features/navigation/*).
  'adminContent.navigation.title': 'Nawigacja',
  'adminContent.navigation.intro':
    'Wybierz, co pojawia się w nagłówku i stopce. Zmiany będą widoczne w sklepie w ciągu minuty.',
  'adminContent.navigation.updated': 'Zaktualizowano nawigację.',
  'adminContent.navigation.addTitle': 'Dodaj element',
  'adminContent.navigation.type': 'Typ',
  'adminContent.navigation.search': 'Szukaj',
  'adminContent.navigation.filterPlaceholder': 'Filtruj po nazwie',
  'adminContent.navigation.searchAll': 'Szukaj wszędzie',
  'adminContent.navigation.noMatches': 'Brak wyników',
  'adminContent.navigation.noMatchesTruncated': 'Brak wyników na tej liście – użyj opcji Szukaj wszędzie',
  'adminContent.navigation.noneAvailable': 'Brak dostępnych elementów',
  'adminContent.navigation.labelOptional': 'Etykieta (opcjonalnie)',
  'adminContent.navigation.defaultsTo': 'Domyślnie „{name}”',
  'adminContent.navigation.defaultsToName': 'Domyślnie nazwa elementu',
  'adminContent.navigation.addTo': 'Dodaj do',
  'adminContent.navigation.header': 'Nagłówek',
  'adminContent.navigation.footer': 'Stopka',
  'adminContent.navigation.nothingMatches': 'Brak wyników – wyczyść lub rozszerz wyszukiwanie',
  'adminContent.navigation.add': 'Dodaj',
  'adminContent.navigation.truncatedPage': 'strony: widoczne {shown} z {total}',
  'adminContent.navigation.truncatedProduct': 'produkty: widoczne {shown} z {total}',
  'adminContent.navigation.truncatedCategory': 'kategorie: widoczne {shown} z {total}',
  'adminContent.navigation.truncatedHint':
    'Wpisz tekst, aby filtrować; kliknij Szukaj wszędzie, aby wyjść poza tę listę.',
  'adminContent.navigation.headerNote':
    'Maksymalnie {max} elementów – w nagłówku są też logo, wyszukiwarka i koszyk.',
  'adminContent.navigation.footerNote': 'Maksymalnie {max} elementów.',
  'adminContent.navigation.bothRootLinks':
    'Strona główna i Katalog prowadzą obecnie pod adres <code>/</code>. Będą się różnić, gdy ustawisz własną stronę główną w Ustawieniach.',
  'adminContent.navigation.noItems': 'Brak elementów.',
  'adminContent.navigation.untitled': 'Bez tytułu',
  'adminContent.navigation.editLinkText': 'Edytuj tekst linku',
  'adminContent.navigation.linkText': 'Tekst linku',
  'adminContent.navigation.save': 'Zapisz',
  'adminContent.navigation.labelHint': 'Zmienia tylko to, co wyświetla to menu.',
  'adminContent.navigation.labelHintWithName':
    'Zmienia tylko to, co wyświetla to menu – zostaw puste, aby użyć „{name}”.',
  'adminContent.navigation.moveUp': 'Przenieś wyżej',
  'adminContent.navigation.moveDown': 'Przenieś niżej',
  'adminContent.navigation.removeFromHeader': 'Usunąć „{name}” z menu w nagłówku?',
  'adminContent.navigation.removeFromFooter': 'Usunąć „{name}” z menu w stopce?',
  'adminContent.navigation.removeUnnamedFromHeader': 'Usunąć ten element z menu w nagłówku?',
  'adminContent.navigation.removeUnnamedFromFooter': 'Usunąć ten element z menu w stopce?',
  'adminContent.navigation.remove': 'Usuń „{name}”',
  'adminContent.navigation.removeUnnamed': 'Usuń element',
  'adminContent.navigation.typeHome': 'Strona główna',
  'adminContent.navigation.typeCatalog': 'Katalog',
  'adminContent.navigation.typePage': 'Strona',
  'adminContent.navigation.typeProduct': 'Produkt',
  'adminContent.navigation.typeCategory': 'Kategoria',
  'adminContent.navigation.targetMissing': 'Cel już nie istnieje',
  'adminContent.navigation.pageDraft': 'Szkic – ukryta w sklepie',
  'adminContent.navigation.productInactive': 'Nieaktywny – ukryty w sklepie',
  'adminContent.navigation.unavailable': 'Niedostępny',
  // What unlabelled Home and Catalog items are called on the storefront.
  'adminContent.navigation.singletonHome': 'Strona główna',
  'adminContent.navigation.singletonCatalog': 'Sklep',
  // Flash messages from api/admin/navigation.ts.
  'adminContent.navigation.headerFull':
    'Menu w nagłówku jest pełne (maks. {max} elementów). Najpierw usuń jeden z nich.',
  'adminContent.navigation.footerFull':
    'Menu w stopce jest pełne (maks. {max} elementów). Najpierw usuń jeden z nich.',
  'adminContent.navigation.duplicateInHeader': '„{item}” jest już w menu w nagłówku.',
  'adminContent.navigation.duplicateInFooter': '„{item}” jest już w menu w stopce.',
  'adminContent.navigation.targetUnavailable':
    'Wybrany element (strona, produkt lub kategoria) nie jest już dostępny.',
  'adminContent.navigation.chooseTarget': 'Najpierw wybierz cel.',
  'adminContent.navigation.reorderMismatch': 'Nowa kolejność nie pasuje do menu. Ponowne wczytywanie.',
  'adminContent.navigation.unknownAction': 'Nieznana akcja.',
  // Plain-text 400s (a stale tab or a hand-made request).
  'adminContent.navigation.invalidLocation': 'Nieprawidłowe położenie',
  'adminContent.navigation.invalidTargetType': 'Nieprawidłowy typ celu',
  'adminContent.navigation.invalidId': 'Nieprawidłowy identyfikator',
} satisfies Catalog;
