import type { Catalog } from '../../core';

export const adminContent = {
  'adminContent.errors.notFound': 'Non trovato',

  'adminContent.pages.title': 'Pagine',
  'adminContent.pages.newPage': 'Nuova pagina',
  'adminContent.pages.empty':
    'Ancora nessuna pagina. Creane una per Chi siamo, Spedizioni, Resi o Privacy, poi aggiungila alla <a href="{href}" class="underline hover:text-brand">navigazione</a> perché i clienti possano trovarla.',
  'adminContent.pages.colTitle': 'Titolo',
  'adminContent.pages.colUrl': 'URL',
  'adminContent.pages.colStatus': 'Stato',
  'adminContent.pages.colUpdated': 'Aggiornata',
  'adminContent.pages.colActions': 'Azioni',
  'adminContent.pages.published': 'Pubblicata',
  'adminContent.pages.draft': 'Bozza',
  'adminContent.pages.view': 'Vedi',
  'adminContent.pages.edit': 'Modifica',
  'adminContent.pages.delete': 'Elimina',
  'adminContent.pages.deleteLinkedConfirm':
    'Questa pagina è collegata nella navigazione. Se la elimini, il link verrà nascosto nel negozio. Continuare?',
  'adminContent.pages.deleteConfirm': 'Eliminare questa pagina?',

  'adminContent.newPage.title': 'Nuova pagina',
  'adminContent.newPage.back': 'Torna alle pagine',
  'adminContent.newPage.fieldTitle': 'Titolo',
  'adminContent.newPage.fieldSlug':
    'Slug dell’URL <span class="normal-case tracking-normal text-gray-400">(facoltativo)</span>',
  'adminContent.newPage.slugPlaceholder': 'chi-siamo',
  'adminContent.newPage.slugHelp':
    'Lascia vuoto per generarlo dal titolo. La pagina sarà disponibile su /pages/<slug>.',
  'adminContent.newPage.createDraft': 'Crea bozza',

  'adminContent.editPage.title': 'Modifica {title}',
  'adminContent.editPage.heading': 'Modifica pagina',
  'adminContent.editPage.back': 'Torna alle pagine',
  'adminContent.editPage.viewOnStore': 'Vedi nel negozio',
  'adminContent.editPage.saved': 'Modifiche salvate.',
  'adminContent.editPage.fieldTitle': 'Titolo',
  'adminContent.editPage.fieldSlug': 'Slug',
  'adminContent.editPage.editorView': 'Vista dell’editor',
  'adminContent.editPage.modeMarkdown': 'Markdown',
  'adminContent.editPage.modeSplit': 'Affiancata',
  'adminContent.editPage.modePreview': 'Anteprima',
  'adminContent.editPage.toolHeading': 'Titolo',
  'adminContent.editPage.toolBoldLabel': 'G',
  'adminContent.editPage.toolBold': 'Grassetto',
  'adminContent.editPage.toolItalicLabel': 'C',
  'adminContent.editPage.toolItalic': 'Corsivo',
  'adminContent.editPage.toolLink': 'Link',
  'adminContent.editPage.toolListLabel': 'Elenco',
  'adminContent.editPage.toolList': 'Elenco puntato',
  'adminContent.editPage.toolNumbered': 'Elenco numerato',
  'adminContent.editPage.toolQuoteLabel': 'Citazione',
  'adminContent.editPage.toolQuote': 'Blocco di citazione',
  'adminContent.editPage.toolCodeLabel': 'Codice',
  'adminContent.editPage.toolCode': 'Codice in linea',
  'adminContent.editPage.image': 'Immagine',
  'adminContent.editPage.placeholder': `## Titolo di sezione

Scrivi la pagina in Markdown. Le righe vuote separano i paragrafi.

**grassetto**  _corsivo_  \`codice\`

- un elenco puntato
- un altro elemento

1. un elenco numerato
2. un altro elemento

> una citazione

[un link](https://example.com)

![descrivi l’immagine](/images/media/photo.webp)`,
  'adminContent.editPage.previewHeading':
    'Anteprima <span class="normal-case tracking-normal">· clicca per trovare il testo sorgente</span>',
  'adminContent.editPage.layout': 'Layout',
  'adminContent.editPage.published': 'Pubblicata',
  'adminContent.editPage.save': 'Salva',
  'adminContent.editPage.publishHelp':
    'Le pagine pubblicate compaiono nel piè di pagina e nella sitemap. A causa della cache del negozio, una modifica può impiegare fino a un minuto per comparire.',
  'adminContent.editPage.rendering': 'Elaborazione…',
  'adminContent.editPage.previewFailedStatus': 'Anteprima non riuscita ({status})',
  'adminContent.editPage.previewFailed': 'Anteprima non riuscita.',
  'adminContent.editPage.linkText': 'testo del link',
  'adminContent.editPage.altPrompt': 'Descrivi questa immagine per gli screen reader:',

  'adminContent.layout.standard': 'Standard',
  'adminContent.layout.standardHint':
    'Colonna stretta, titolo allineato a sinistra. Ideale per condizioni di vendita, spedizioni e resi.',
  'adminContent.layout.editorial': 'Editoriale',
  'adminContent.layout.editorialHint':
    'Colonna stretta, titolo centrato. Ideale per le pagine Chi siamo e sulla storia del marchio.',
  'adminContent.layout.wide': 'Larga',
  'adminContent.layout.wideHint':
    'Larghezza piena, titolo allineato a sinistra. Ideale per guide alle taglie, tabelle e griglie di immagini.',

  'adminContent.form.titleRequired': 'Il titolo è obbligatorio.',
  'adminContent.form.titleTooLong': 'Il titolo non può superare {max} caratteri.',
  'adminContent.form.bodyTooLong': 'Il contenuto della pagina non può superare {max} caratteri.',

  'adminContent.save.publishRefused': {
    one: 'Modifiche salvate, ma la pagina non è stata pubblicata perché manca {count} immagine nella libreria media.',
    many: 'Modifiche salvate, ma la pagina non è stata pubblicata perché mancano {count} immagini nella libreria media.',
    other:
      'Modifiche salvate, ma la pagina non è stata pubblicata perché mancano {count} immagini nella libreria media.',
  },
  'adminContent.save.liveBroken': {
    one: 'Modifiche salvate e online, ma manca {count} immagine nella libreria media, che non verrà visualizzata.',
    many: 'Modifiche salvate e online, ma mancano {count} immagini nella libreria media, che non verranno visualizzate.',
    other:
      'Modifiche salvate e online, ma mancano {count} immagini nella libreria media, che non verranno visualizzate.',
  },
  'adminContent.save.draftMissing': {
    one: 'Bozza salvata, ma manca {count} immagine nella libreria media.',
    many: 'Bozza salvata, ma mancano {count} immagini nella libreria media.',
    other: 'Bozza salvata, ma mancano {count} immagini nella libreria media.',
  },

  'adminContent.navigation.title': 'Navigazione',
  'adminContent.navigation.intro':
    'Scegli cosa compare nell’intestazione e nel piè di pagina. Le modifiche appaiono nel negozio entro un minuto.',
  'adminContent.navigation.updated': 'Navigazione aggiornata.',
  'adminContent.navigation.addTitle': 'Aggiungi un elemento',
  'adminContent.navigation.type': 'Tipo',
  'adminContent.navigation.search': 'Cerca',
  'adminContent.navigation.filterPlaceholder': 'Filtra per nome',
  'adminContent.navigation.searchAll': 'Cerca ovunque',
  'adminContent.navigation.noMatches': 'Nessun risultato',
  'adminContent.navigation.noMatchesTruncated': 'Nessun risultato qui: prova Cerca ovunque',
  'adminContent.navigation.noneAvailable': 'Nessun elemento disponibile',
  'adminContent.navigation.labelOptional': 'Etichetta (facoltativa)',
  'adminContent.navigation.defaultsTo': 'Predefinita: «{name}»',
  'adminContent.navigation.defaultsToName': 'Predefinita: il suo nome',
  'adminContent.navigation.addTo': 'Aggiungi a',
  'adminContent.navigation.header': 'Intestazione',
  'adminContent.navigation.footer': 'Piè di pagina',
  'adminContent.navigation.nothingMatches': 'Nessun risultato: cancella o amplia la ricerca',
  'adminContent.navigation.add': 'Aggiungi',
  'adminContent.navigation.truncatedPage': 'pagine: {shown} di {total} mostrate',
  'adminContent.navigation.truncatedProduct': 'prodotti: {shown} di {total} mostrati',
  'adminContent.navigation.truncatedCategory': 'categorie: {shown} di {total} mostrate',
  'adminContent.navigation.truncatedHint':
    'Digita per filtrare; premi Cerca ovunque per estendere la ricerca.',
  'adminContent.navigation.headerNote':
    'Fino a {max} elementi: l’intestazione contiene anche logo, ricerca e carrello.',
  'adminContent.navigation.footerNote': 'Fino a {max} elementi.',
  'adminContent.navigation.bothRootLinks':
    'Al momento Home e Catalogo puntano entrambi a <code>/</code>. Diventeranno diversi quando imposterai una home page personalizzata nelle Impostazioni.',
  'adminContent.navigation.noItems': 'Ancora nessun elemento.',
  'adminContent.navigation.untitled': 'Senza titolo',
  'adminContent.navigation.editLinkText': 'Modifica il testo del link',
  'adminContent.navigation.linkText': 'Testo del link',
  'adminContent.navigation.save': 'Salva',
  'adminContent.navigation.labelHint': 'Cambia solo ciò che mostra questo menu.',
  'adminContent.navigation.labelHintWithName':
    'Cambia solo ciò che mostra questo menu; lascia vuoto per usare «{name}».',
  'adminContent.navigation.moveUp': 'Sposta su',
  'adminContent.navigation.moveDown': 'Sposta giù',
  'adminContent.navigation.removeFromHeader': 'Rimuovere {name} dal menu dell’intestazione?',
  'adminContent.navigation.removeFromFooter': 'Rimuovere {name} dal menu del piè di pagina?',
  'adminContent.navigation.removeUnnamedFromHeader':
    'Rimuovere questo elemento dal menu dell’intestazione?',
  'adminContent.navigation.removeUnnamedFromFooter':
    'Rimuovere questo elemento dal menu del piè di pagina?',
  'adminContent.navigation.remove': 'Rimuovi {name}',
  'adminContent.navigation.removeUnnamed': 'Rimuovi elemento',
  'adminContent.navigation.typeHome': 'Home',
  'adminContent.navigation.typeCatalog': 'Catalogo',
  'adminContent.navigation.typePage': 'Pagina',
  'adminContent.navigation.typeProduct': 'Prodotto',
  'adminContent.navigation.typeCategory': 'Categoria',
  'adminContent.navigation.targetMissing': 'La destinazione non esiste più',
  'adminContent.navigation.pageDraft': 'Bozza: nascosta nel negozio',
  'adminContent.navigation.productInactive': 'Inattivo: nascosto nel negozio',
  'adminContent.navigation.unavailable': 'Non disponibile',
  'adminContent.navigation.singletonHome': 'Home',
  'adminContent.navigation.singletonCatalog': 'Negozio',
  'adminContent.navigation.headerFull':
    'Il menu dell’intestazione è pieno ({max} elementi). Rimuovine prima uno.',
  'adminContent.navigation.footerFull':
    'Il menu del piè di pagina è pieno ({max} elementi). Rimuovine prima uno.',
  'adminContent.navigation.duplicateInHeader': '{item} è già nel menu dell’intestazione.',
  'adminContent.navigation.duplicateInFooter': '{item} è già nel menu del piè di pagina.',
  'adminContent.navigation.targetUnavailable':
    'La pagina, il prodotto o la categoria selezionati non sono più disponibili.',
  'adminContent.navigation.chooseTarget': 'Scegli prima una destinazione.',
  'adminContent.navigation.reorderMismatch':
    'Il nuovo ordine non corrisponde al menu. Ricaricamento in corso.',
  'adminContent.navigation.unknownAction': 'Azione sconosciuta.',
  'adminContent.navigation.invalidLocation': 'Posizione non valida',
  'adminContent.navigation.invalidTargetType': 'Tipo di destinazione non valido',
  'adminContent.navigation.invalidId': 'ID non valido',
} satisfies Catalog;
