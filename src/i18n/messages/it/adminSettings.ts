import type { Catalog } from '../../core';

export const adminSettings = {
  // ── Shared ────────────────────────────────────────────────────────────────
  'adminSettings.common.save': 'Salva',
  'adminSettings.common.unavailable': 'Non disponibile',
  'adminSettings.common.live': 'Attivo',
  'adminSettings.toggle.enable': 'Attiva {label}',
  'adminSettings.toggle.disable': 'Disattiva {label}',

  // ── Settings page ─────────────────────────────────────────────────────────
  'adminSettings.page.title': 'Impostazioni',
  'adminSettings.page.updated': 'Impostazioni aggiornate',
  'adminSettings.sections.general': 'Generali',
  'adminSettings.sections.images': 'Immagini',
  'adminSettings.sections.payments': 'Pagamenti',
  'adminSettings.sections.email': 'Email',
  'adminSettings.sections.turnstile': 'Protezione dai bot',
  'adminSettings.sections.search': 'Ricerca',
  'adminSettings.sections.buildTime': 'Fase di build',

  'adminSettings.errors.unknownPaymentMethod': 'Metodo di pagamento sconosciuto.',
  'adminSettings.errors.configurePaymentMethod': 'Configura questo metodo di pagamento prima di attivarlo.',
  'adminSettings.errors.stripeRequired':
    'Configura Stripe prima di attivare questa funzione, disponibile solo con Stripe.',
  'adminSettings.errors.authSecretRequired': 'Imposta AUTH_SECRET prima di attivare gli account cliente.',
  'adminSettings.errors.emailRequired':
    'Attiva e configura l’email prima di attivare gli account cliente.',
  'adminSettings.errors.imagesBindingRequired':
    'Aggiungi il binding IMAGES ed esegui un nuovo deploy prima di attivare l’ottimizzazione delle immagini.',
  'adminSettings.errors.invalidTimeZone':
    'Inserisci un fuso orario IANA valido, come UTC o America/New_York.',
  'adminSettings.errors.logoMissing': 'Questa immagine non è più nella libreria media.',
  'adminSettings.errors.invalidHome': 'Scegli una pagina pubblicata o un prodotto attivo.',
  'adminSettings.errors.invalidAnnouncementLink':
    'Il link dell’annuncio deve essere un percorso come /saldi o un URL http(s).',
  'adminSettings.errors.onDemandImagesUnavailable':
    'Collega un dominio personalizzato R2 con HTTPS e imposta IMAGE_BASE_URL prima di attivare le immagini on demand.',
  'adminSettings.errors.invalidImageDelivery': 'Scegli un metodo di distribuzione delle immagini valido.',
  'adminSettings.errors.semanticSearchUnavailable':
    'Aggiungi i binding AI e VECTORIZE prima di attivare la ricerca semantica.',
  'adminSettings.errors.emailBindingRequired':
    'Aggiungi il binding EMAIL ed esegui un nuovo deploy prima di attivare Cloudflare Email.',
  'adminSettings.errors.resendKeyRequired': 'Aggiungi una chiave API di Resend prima di attivare l’email.',
  'adminSettings.errors.turnstileKeysRequired':
    'Aggiungi sia la chiave del sito sia la chiave segreta di Turnstile prima di attivare la protezione dai bot.',
  'adminSettings.errors.invalidDefaultRail':
    'Scegli come predefinito un metodo di pagamento attivo e configurato.',
  'adminSettings.errors.invalidLightningBackend': 'Scegli un backend Lightning valido.',

  'adminSettings.inlineSave.saved': 'Salvato ✓',
  'adminSettings.inlineSave.failed': 'Salvataggio non riuscito: riprova',

  'adminSettings.general.intro':
    'Identità del negozio e funzioni della vetrina: si applicano subito, senza un nuovo deploy.',
  'adminSettings.general.storeName': 'Nome del negozio',
  'adminSettings.general.timeZone': 'Fuso orario del negozio',
  'adminSettings.general.timeZonePlaceholder': 'Cerca, es. America/New_York',
  'adminSettings.general.timeZoneHelp':
    'Il fuso orario determina come vengono mostrate le date salvate in UTC. Usa un nome IANA come <code>UTC</code> o <code>America/New_York</code>.',

  'adminSettings.logo.title': 'Logo',
  'adminSettings.logo.currentAlt': 'Logo attuale',
  'adminSettings.logo.choose': 'Scegli logo',
  'adminSettings.logo.replace': 'Sostituisci logo',
  'adminSettings.logo.remove': 'Rimuovi logo',
  'adminSettings.logo.help':
    'Sostituisce il nome del negozio nell’intestazione. Se lo rimuovi, torna il nome in formato testo. Il salvataggio svuota la cache delle pagine del negozio interessate; un TTL di 10 minuti limita gli effetti di un errore temporaneo di svuotamento.',

  'adminSettings.home.title': 'Home page',
  'adminSettings.home.selectLabel': 'Cosa mostra /',
  'adminSettings.home.productList': 'Elenco prodotti (predefinito)',
  'adminSettings.home.groupPage': 'Pagina',
  'adminSettings.home.groupProduct': 'Prodotto',
  'adminSettings.home.missing':
    'La pagina o il prodotto impostato non è più pubblicato o attivo, quindi la home page mostra l’elenco prodotti. Scegline uno nuovo per aggiornare l’impostazione.',
  'adminSettings.home.catalogOrphaned':
    'Il tuo elenco prodotti si è spostato su <code>/products</code> quando hai impostato una home page personalizzata, e nessun menu vi rimanda: al momento i clienti non hanno modo di raggiungere il catalogo. Aggiungi un elemento Catalogo in <a href="{href}" class="underline hover:text-brand">Navigazione</a>.',
  'adminSettings.home.help':
    'Sono elencati solo le pagine pubblicate e i prodotti attivi. Se quello scelto viene poi ritirato dalla pubblicazione o eliminato, la home page torna all’elenco prodotti invece di smettere di funzionare. Il salvataggio svuota la cache delle pagine del negozio interessate; un TTL di 10 minuti limita gli effetti di un errore temporaneo di svuotamento.',

  'adminSettings.announcement.label': 'Barra degli annunci',
  'adminSettings.announcement.placeholder': 'es. Spedizione gratuita per ordini oltre 50 €',
  'adminSettings.announcement.link': 'Link (facoltativo)',
  'adminSettings.announcement.linkPlaceholder': 'es. /categories/saldi',
  'adminSettings.announcement.help':
    'Mostrata sopra l’intestazione in ogni pagina del negozio. Lascia vuoto il messaggio per nascondere la barra. Le pagine del negozio restano brevemente in cache, quindi una modifica può impiegare circa un minuto per comparire ovunque.',

  'adminSettings.shippingCard.title': 'Spedizioni',
  'adminSettings.shippingCard.on': 'Attive',
  'adminSettings.shippingCard.off': 'Disattivate',
  'adminSettings.shippingCard.summary': {
    one: '{state} · {count} zona · zone, tariffe e soglie di spedizione gratuita',
    many: '{state} · {count} zone · zone, tariffe e soglie di spedizione gratuita',
    other: '{state} · {count} zone · zone, tariffe e soglie di spedizione gratuita',
  },
  'adminSettings.weightUnit.label': 'Unità di peso',
  'adminSettings.weightUnit.help':
    'I pesi di prodotti e tariffe si inseriscono in questa unità; i valori salvati sono sempre in grammi.',

  'adminSettings.shippo.title': 'Etichette di spedizione (Shippo)',
  'adminSettings.shippo.help':
    'Acquista le etichette dei corrieri dalla pagina dell’ordine usando indirizzo e peso registrati: il tracciamento viene compilato e l’email di spedizione inviata automaticamente. Un token <code class="text-[11px]">shippo_test_…</code> acquista etichette fittizie per fare delle prove.',
  'adminSettings.shippo.token': 'Token API',
  'adminSettings.shippo.tokenHint': 'shippo_live_… o shippo_test_…',

  'adminSettings.features.cart': 'Carrello e cassa',
  'adminSettings.features.cartDesc':
    'Aggiunta al carrello e cassa. Se disattivato, il negozio diventa un catalogo di sola consultazione.',
  'adminSettings.features.buyNow': 'Acquista ora',
  'adminSettings.features.buyNowDesc':
    'Pulsante di acquisto rapido nelle pagine prodotto: funziona anche con il carrello disattivato.',
  'adminSettings.features.discounts': 'Codici sconto',
  'adminSettings.features.discountsDesc':
    'Mostra il campo del codice sconto alla cassa. I codici si creano nella Dashboard di Stripe.',
  'adminSettings.features.tax': 'Imposte automatiche',
  'adminSettings.features.taxDesc':
    'Applica imposte sulle vendite / IVA tramite Stripe Tax: attiva prima Stripe Tax nella Dashboard.',
  'adminSettings.features.accounts': 'Account cliente',
  'adminSettings.features.accountsDesc':
    'Accesso dei clienti senza password (magic link). Richiede AUTH_SECRET + email configurati.',
  'adminSettings.features.imageOptimize': 'Ottimizza le immagini al caricamento',
  'adminSettings.features.imageOptimizeDesc':
    'Converte in WebP e ridimensiona le immagini dei prodotti tramite Cloudflare Images. Richiede il binding IMAGES.',
  'adminSettings.availability.stripe': 'Non disponibile finché Stripe non è configurato',
  'adminSettings.availability.authSecret': 'Non disponibile finché AUTH_SECRET non è impostato',
  'adminSettings.availability.email': 'Non disponibile finché l’email non è attivata e configurata',
  'adminSettings.availability.images': 'Non disponibile finché non aggiungi il binding IMAGES',

  'adminSettings.images.intro':
    'Scegli come vengono distribuite le immagini dei prodotti. La scelta vale per i caricamenti esistenti e nuovi, senza modificare i file salvati in R2.',
  'adminSettings.images.legend': 'Distribuzione delle immagini',
  'adminSettings.images.original': 'Immagini originali',
  'adminSettings.images.originalDesc':
    'Serve i file caricati senza modifiche. Nessun consumo di trasformazioni né configurazione aggiuntiva.',
  'adminSettings.images.cloudflare': 'Cloudflare on demand',
  'adminSettings.images.cloudflareDesc':
    'Distribuzione responsive in AVIF/WebP con scelta automatica del formato e ripiego sull’immagine originale.',
  'adminSettings.images.cloudflareSetup':
    'Collega un dominio personalizzato R2 con HTTPS, imposta IMAGE_BASE_URL e attiva Transformations per la zona del negozio.',
  'adminSettings.images.quota':
    'Usa la tua quota di Cloudflare Image Transformations. Ogni combinazione unica di origine e parametri conta come una trasformazione unica.',
  'adminSettings.images.save': 'Salva distribuzione immagini',
  'adminSettings.images.purgeNote':
    'Il salvataggio svuota la cache delle pagine pubbliche interessate; un TTL di 10 minuti limita gli effetti di un errore temporaneo di svuotamento.',
  'adminSettings.images.deliveryNote':
    'Questa opzione controlla la distribuzione. <strong class="font-medium text-gray-500">Ottimizza le immagini al caricamento</strong> in Generali è un’opzione separata che modifica i file sorgente salvati da quel momento in poi.',

  'adminSettings.payments.intro':
    'Configurazione e chiavi di ogni metodo sono raggruppate qui sotto. Un metodo si attiva quando la sua chiave (e, per Lightning, l’URL del nodo) è impostata; la Cassa demo è sempre disponibile. Le chiavi sono salvate cifrate in D1: sono in sola scrittura e non vengono più mostrate.',
  'adminSettings.payments.vaultMissing':
    'Le chiavi sono cifrate con il secret del Worker <code>SECRETS_KEK</code>, che non è impostato: per questo i campi delle chiavi sono disattivati e solo la Cassa demo può ricevere ordini. Impostalo (<code>openssl rand -base64 32 | wrangler secret put SECRETS_KEK</code>), poi esegui un nuovo deploy.',
  'adminSettings.payments.defaultRail': 'Metodo predefinito',
  'adminSettings.payments.optionUnavailable': '{label} — non disponibile',
  'adminSettings.payments.defaultRailHelp':
    'Il metodo attivo e configurato proposto per primo alla cassa.',
  'adminSettings.payments.card': 'Carta (Stripe)',
  'adminSettings.payments.demo': 'Cassa demo',
  'adminSettings.payments.demoDesc':
    'Sempre disponibile: riserva le scorte e crea un vero ordine contrassegnato come demo (senza addebito).',
  'adminSettings.stripe.setup': 'Aggiungi entrambe le chiavi Stripe per attivarlo',
  'adminSettings.stripe.secretKey': 'Chiave segreta',
  'adminSettings.stripe.secretKeyHint': 'sk_live_… o sk_test_…',
  'adminSettings.stripe.webhookSecret': 'Segreto di firma del webhook',
  'adminSettings.lightning.setup': 'Scegli un nodo e impostane URL e chiave per attivarlo',
  'adminSettings.lightning.backend': 'Backend',
  'adminSettings.lightning.lnbitsUrl': 'URL LNbits',
  'adminSettings.lightning.lnbitsKey': 'Chiave invoice/read di LNbits',
  'adminSettings.lightning.lnbitsKeyHint': 'chiave invoice/read (non admin)',
  'adminSettings.lightning.phoenixdUrl': 'URL phoenixd',
  'adminSettings.lightning.phoenixdPassword': 'Password phoenixd',
  'adminSettings.lightning.errorAddUrl': 'Aggiungi l’URL di {backend}.',
  'adminSettings.lightning.errorInvalidUrl': 'Inserisci un URL HTTP(S) valido per {backend}.',
  'adminSettings.lightning.errorAddLnbitsKey': 'Aggiungi la chiave invoice/read di LNbits.',
  'adminSettings.lightning.errorAddPhoenixdPassword': 'Aggiungi la password di phoenixd.',
  'adminSettings.opennode.setup': 'Aggiungi la chiave API per attivarlo',
  'adminSettings.opennode.apiUrl': 'URL API',
  'adminSettings.opennode.apiUrlPlaceholder': '(vuoto = live)',
  'adminSettings.opennode.apiKey': 'Chiave API',
  'adminSettings.opennode.apiKeyHint': 'dalla dashboard di OpenNode',

  'adminSettings.email.intro':
    'Email di conferma d’ordine e di accesso dei clienti. <strong>Resend</strong> funziona con il piano gratuito di Workers; <strong>Cloudflare</strong> usa il binding <code>send_email</code> (piano a pagamento). Per scrivere a clienti reali serve un dominio mittente verificato. Disattivata o non configurata = nessun invio (la conferma d’ordine nella pagina viene comunque mostrata).',
  'adminSettings.email.send': 'Invia email',
  'adminSettings.email.provider': 'Provider',
  'adminSettings.email.cloudflarePaid': 'Cloudflare — piano Workers Paid',
  'adminSettings.email.cloudflareMissing': 'Cloudflare — non disponibile (binding EMAIL mancante)',
  'adminSettings.email.from': 'Indirizzo mittente',
  'adminSettings.email.fromName': 'Nome mittente',
  'adminSettings.email.notifyTo': 'Avvisi di nuovi ordini a',
  'adminSettings.email.notifyHelp': 'Il titolare riceve qui un’email «nuovo ordine». Vuoto = disattivato.',
  'adminSettings.email.resendKey': 'Chiave API di Resend',
  'adminSettings.email.cloudflareNote':
    'Le email di Cloudflare richiedono un <strong>piano Workers Paid</strong> e un dominio mittente abilitato (<code>wrangler email sending enable &lt;domain&gt;</code>).',
  'adminSettings.email.bindingMissing':
    'Il binding <code>send_email</code> non è ancora dichiarato in <code>wrangler.jsonc</code>, quindi non verrà inviato nulla finché non lo aggiungi ed esegui un nuovo deploy.',
  'adminSettings.email.testLabel': 'Invia email di prova a',
  'adminSettings.email.testButton': 'Invia prova',
  'adminSettings.email.testSending': 'Invio…',
  'adminSettings.email.testSent': 'Inviata.',
  'adminSettings.email.testFailed': 'Invio non riuscito.',
  'adminSettings.email.testRequestFailed': 'Richiesta non riuscita.',

  'adminSettings.emailTest.invalidRecipient':
    'Inserisci un indirizzo destinatario valido per l’email di prova.',
  'adminSettings.emailTest.notConfigured':
    'L’email non è configurata: scegli un provider, aggiungi la sua chiave e prima fai clic su Salva.',
  'adminSettings.emailTest.fallbackStoreName': 'questo negozio',
  'adminSettings.emailTest.subject': 'Email di prova da {store}',
  'adminSettings.emailTest.html':
    '<p>Questa è un’email di prova dal pannello di {store}. L’invio delle email funziona ✅</p>',
  'adminSettings.emailTest.text':
    'Questa è un’email di prova dal pannello di {store}. L’invio delle email funziona.',
  'adminSettings.emailTest.sent': 'Email di prova inviata a {to}.',
  'adminSettings.emailTest.failed': 'Invio non riuscito: {error}',
  'adminSettings.emailTest.unknownError': 'errore sconosciuto',

  'adminSettings.turnstile.intro':
    'Verifica Cloudflare Turnstile sull’accesso al pannello e sull’accesso agli account cliente. Disattivata per impostazione predefinita. Richiede un <a href="{href}" class="text-accent underline">widget Turnstile</a> (chiave del sito + chiave segreta). Per le prove in locale funzionano le chiavi di test di Cloudflare, che passano sempre la verifica.',
  'adminSettings.turnstile.enable': 'Attiva Turnstile',
  'adminSettings.turnstile.needsKeys': 'Aggiungi entrambe le chiavi prima di attivarlo',
  'adminSettings.turnstile.siteKey': 'Chiave del sito (pubblica)',
  'adminSettings.turnstile.secretKey': 'Chiave segreta',

  'adminSettings.search.intro':
    'La ricerca per parole chiave (SQLite FTS5) funziona subito. Attiva la ricerca semantica per trovare risultati anche in base al significato con Workers AI + Vectorize: si applica subito, senza un nuovo deploy.',
  'adminSettings.search.semantic': 'Ricerca semantica',
  'adminSettings.search.on':
    'Attiva: i risultati sono ordinati per significato (in modalità ibrida con le parole chiave). Reindicizza dopo l’attivazione o dopo modifiche in blocco ai prodotti.',
  'adminSettings.search.off':
    'Disattivata: viene usata la ricerca per parole chiave (FTS5). Attivala per trovare risultati anche in base al significato.',
  'adminSettings.search.bindingsMissing':
    'Richiede i binding <code>AI</code> + <code>VECTORIZE</code> (dichiarati in <code>wrangler.jsonc</code>). Finché non sono presenti, la ricerca resta per parole chiave.',
  'adminSettings.search.enable': 'Attiva la ricerca semantica',
  'adminSettings.search.disable': 'Disattiva la ricerca semantica',
  'adminSettings.search.reindexAll': 'Reindicizza tutti i prodotti',
  'adminSettings.search.continueReindex': 'Continua la reindicizzazione',
  'adminSettings.search.reindexProgress': 'Prodotti completati: {count}. Continua con il blocco successivo.',
  'adminSettings.search.reindexHelp':
    'Genera gli embedding di tutti i prodotti in Vectorize, a piccoli blocchi. Eseguila una volta dopo l’attivazione o per recuperare i dati mancanti.',
  'adminSettings.search.reindexing': 'Reindicizzazione…',
  'adminSettings.search.reindexStarting': 'Avvio…',
  'adminSettings.search.reindexBatch': '{processed} / {total} prodotti',
  'adminSettings.search.reindexDone': 'Prodotti reindicizzati: {count} ✓',
  'adminSettings.search.reindexFailed': 'Reindicizzazione non riuscita',

  'adminSettings.buildTime.intro':
    'Le impostazioni seguenti sono <strong>di build</strong> (definite nel codice, così il template si clona in modo pulito). Modifica il valore indicato, poi esegui un nuovo deploy con <code>npm run deploy</code>.',
  'adminSettings.buildTime.currency': 'Valuta',
  'adminSettings.buildTime.currencyExample': '{currency} — es. {price}',
  'adminSettings.buildTime.currencyHelp':
    'Sovrascrivi <code>currency</code> in <code>src/store.config.ts</code>. Determina la formattazione di tutti i prezzi, il valore predefinito dei nuovi prodotti e la cassa.',
  'adminSettings.buildTime.favicon': 'Favicon',
  'adminSettings.buildTime.faviconAlt': 'Favicon attuale',
  'adminSettings.buildTime.faviconHelp':
    'Sostituisci <code>public/favicon.svg</code> e rigenera <code>public/favicon.ico</code> per i client che richiedono ancora l’icona legacy.',

  // ── Components ────────────────────────────────────────────────────────────
  'adminSettings.secretField.encrypted': 'Cifrata in D1',
  'adminSettings.secretField.keepPlaceholder': 'Lascia vuoto per mantenerla',
  'adminSettings.secretField.remove': 'Rimuovi',
  'adminSettings.secretField.vaultMissing': 'Imposta <code>SECRETS_KEK</code> per aggiungere questa chiave',

  'adminSettings.filterBar.search': 'Cerca',
  'adminSettings.filterBar.apply': 'Applica',
  'adminSettings.filterBar.clear': 'Azzera',
  'adminSettings.filterBar.results': {
    one: '{count} risultato',
    many: '{count} risultati',
    other: '{count} risultati',
  },

  // ── Setup wizard ──────────────────────────────────────────────────────────
  'adminSettings.setup.title': 'Configurazione',
  'adminSettings.setup.heading': 'Configura il tuo negozio',
  'adminSettings.setup.intro':
    'Alcune impostazioni iniziali: puoi cambiarle in qualsiasi momento in Impostazioni. Servono solo per partire.',
  'adminSettings.setup.basics': 'Dati di base del negozio',
  'adminSettings.setup.currencyNote':
    'La valuta resta un’impostazione di build (è collegata a ogni prezzo): imposta <code class="rounded bg-gray-100 px-1">currency</code> in <code class="rounded bg-gray-100 px-1">src/config.ts</code>. Valuta attuale: {currency}.',
  'adminSettings.setup.password': 'Password del pannello',
  'adminSettings.setup.passwordIntro':
    'Password per <code class="rounded bg-gray-100 px-1">/admin/login</code>: salvata come hash (PBKDF2), mai in chiaro.',
  'adminSettings.setup.passwordKept': 'Una password è già impostata; lascia vuoto per mantenerla.',
  'adminSettings.setup.passwordRequired': 'Obbligatoria per completare.',
  'adminSettings.setup.accessNote':
    'Cloudflare Access è l’autenticazione consigliata in produzione; questa è la soluzione provvisoria più semplice.',
  'adminSettings.setup.newPassword': 'Nuova password',
  'adminSettings.setup.newPasswordOptional': 'Nuova password (facoltativa)',
  'adminSettings.setup.passwordPlaceholder': 'almeno {count} caratteri',
  'adminSettings.setup.passwordTooShort': 'La password deve contenere almeno {count} caratteri.',
  'adminSettings.setup.passwordMissing':
    'Imposta una password per il pannello: senza, la bacheca non è raggiungibile e questa pagina resta pubblica.',
  'adminSettings.setup.payments': 'Pagamenti',
  'adminSettings.setup.paymentsNote':
    'La cassa <strong>demo</strong> funziona subito. Configura i metodi di pagamento reali (carta tramite Stripe, Bitcoin Lightning o OpenNode) quando vuoi in <strong>Impostazioni → Pagamenti</strong>: non serve farlo ora.',
  'adminSettings.setup.demoCatalog':
    'Carica il <strong>catalogo demo</strong>: 30 prodotti di esempio in 6 categorie, per esplorare il negozio. Lascia deselezionato per partire da zero e aggiungere i tuoi.',
  'adminSettings.setup.finish': 'Completa la configurazione',

  // ── Shipping editor ───────────────────────────────────────────────────────
  'adminSettings.shipping.title': 'Spedizioni',
  'adminSettings.shipping.intro':
    'Zone, tariffe e soglie di spedizione gratuita. Gli importi sono in {currency}; i pesi si inseriscono in <strong>{unit}</strong> e vengono salvati in grammi. Puoi cambiare l’unità nelle <a href="{href}" class="underline hover:text-brand">Impostazioni</a>.',
  'adminSettings.shipping.viewCart': 'Vedi carrello e cassa',
  'adminSettings.shipping.saved': 'Spedizioni salvate.',
  'adminSettings.shipping.conflict':
    'Le spedizioni sono state modificate in un’altra scheda. Ricarica la pagina e controlla quelle modifiche prima di salvare le tue.',
  'adminSettings.shipping.tooLarge':
    'La configurazione è troppo grande per essere salvata. Rimuovi alcune zone o alcuni paesi.',
  'adminSettings.shipping.missingWeights': {
    one: '{count} prodotto ({names}) non ha un peso di spedizione e non potrebbe essere acquistato. Imposta i pesi o mantieni una tariffa fissa in ogni zona.',
    many: '{count} prodotti ({names}) non hanno un peso di spedizione e non potrebbero essere acquistati. Imposta i pesi o mantieni una tariffa fissa in ogni zona.',
    other:
      '{count} prodotti ({names}) non hanno un peso di spedizione e non potrebbero essere acquistati. Imposta i pesi o mantieni una tariffa fissa in ogni zona.',
  },
  'adminSettings.shipping.unreadable': 'Impossibile leggere la configurazione di spedizione salvata:',
  'adminSettings.shipping.unreadableHelp':
    'Gli acquisti di prodotti fisici sono bloccati finché la configurazione non viene sostituita. Controlla i valori qui sotto e usa <strong>Sostituisci configurazione non valida</strong> per sovrascriverla.',
  'adminSettings.shipping.prepopulated':
    'Questo negozio usa ancora la configurazione di spedizione di <code class="text-xs">store.config.ts</code>, che consente cose che l’editor non permette. I problemi sono segnalati qui sotto: correggili, poi salva per passarne la gestione al pannello.',
  'adminSettings.shipping.firstSave':
    'Le spedizioni sono attualmente definite in <code class="text-xs">store.config.ts</code>. Salvando qui, la gestione passa al pannello: da quel momento questa pagina diventa la fonte di riferimento.',
  'adminSettings.shipping.offer':
    '<strong class="font-semibold">Offri la spedizione</strong>: raccogli un indirizzo e addebita la consegna.',
  'adminSettings.shipping.packageWeight': 'Peso dell’imballaggio ({unit})',
  'adminSettings.shipping.packageWeightHelp':
    'Scatola, busta, imbottitura ed etichetta. Viene aggiunto una volta per ordine, oltre al peso degli articoli.',
  'adminSettings.shipping.zoneName': 'Nome della zona',
  'adminSettings.shipping.zoneFallbackName': 'Zona {number}',
  'adminSettings.shipping.moveUp': 'Su',
  'adminSettings.shipping.moveDown': 'Giù',
  'adminSettings.shipping.removeZone': 'Rimuovi zona',
  'adminSettings.shipping.destinations': 'Destinazioni',
  'adminSettings.shipping.restOfWorld': 'Resto del mondo',
  'adminSettings.shipping.unknownCode': 'Codice sconosciuto: {code}',
  'adminSettings.shipping.freeOver': 'Spedizione gratuita oltre ({currency})',
  'adminSettings.shipping.freeOverHelp': 'Lascia vuoto per disattivarla.',
  'adminSettings.shipping.rateLabel': 'Nome della tariffa',
  'adminSettings.shipping.pricing': 'Calcolo del prezzo',
  'adminSettings.shipping.pricingFlat': 'Prezzo fisso',
  'adminSettings.shipping.pricingWeight': 'In base al peso dell’ordine',
  'adminSettings.shipping.pricingPickup': 'Ritiro in sede',
  'adminSettings.shipping.price': 'Prezzo',
  'adminSettings.shipping.pickupFee': 'Costo (0 = gratis)',
  'adminSettings.shipping.removeRate': 'Rimuovi tariffa',
  'adminSettings.shipping.weightBands': 'Fasce di peso',
  'adminSettings.shipping.upTo': 'Fino a ({unit})',
  'adminSettings.shipping.noMax': 'Nessun massimo',
  'adminSettings.shipping.removeBand': 'Rimuovi',
  'adminSettings.shipping.addBand': 'Aggiungi fascia',
  'adminSettings.shipping.addRate': 'Aggiungi tariffa',
  'adminSettings.shipping.addZone': 'Aggiungi zona',
  'adminSettings.shipping.save': 'Salva spedizioni',
  'adminSettings.shipping.replace': 'Sostituisci configurazione non valida',
  'adminSettings.shipping.footer':
    'Stripe mostra le tariffe per il paese scelto nel carrello; l’indirizzo definitivo viene confermato nella sua pagina di pagamento. Gli altri metodi raccolgono l’indirizzo prima del pagamento.',

  'adminSettings.shippingErrors.needBand': 'Aggiungi almeno una fascia di peso.',
  'adminSettings.shippingErrors.maxBands': 'Al massimo {count} fasce per servizio.',
  'adminSettings.shippingErrors.enterPrice': 'Inserisci un prezzo.',
  'adminSettings.shippingErrors.lastBandOnly': 'Solo l’ultima fascia può non avere un massimo.',
  'adminSettings.shippingErrors.weightAboveZero': 'Inserisci un peso maggiore di zero.',
  'adminSettings.shippingErrors.bandOrder': 'Ogni fascia deve essere più pesante di quella precedente.',
  'adminSettings.shippingErrors.enabledBoolean': 'Il valore di attivazione deve essere true o false.',
  'adminSettings.shippingErrors.packageWeight': 'Inserisci un peso dell’imballaggio pari o superiore a zero.',
  'adminSettings.shippingErrors.zonesList': 'Le zone devono essere un elenco.',
  'adminSettings.shippingErrors.maxZones': 'Al massimo {count} zone.',
  'adminSettings.shippingErrors.needZone':
    'Aggiungi almeno una zona con una tariffa prima di attivare le spedizioni.',
  'adminSettings.shippingErrors.nameZone': 'Assegna un nome a questa zona.',
  'adminSettings.shippingErrors.zoneNameLength': 'Il nome deve avere meno di {count} caratteri.',
  'adminSettings.shippingErrors.zoneNameTaken': 'Un’altra zona usa già questo nome.',
  'adminSettings.shippingErrors.needDestination': 'Scegli almeno una destinazione.',
  'adminSettings.shippingErrors.maxCountries': 'Al massimo {count} paesi per zona.',
  'adminSettings.shippingErrors.restOfWorldMixed':
    'Resto del mondo non può essere combinato con paesi specifici.',
  'adminSettings.shippingErrors.restOfWorldOnce': 'Solo una zona può essere Resto del mondo.',
  'adminSettings.shippingErrors.restOfWorldLast': 'Resto del mondo deve essere l’ultima zona.',
  'adminSettings.shippingErrors.notCountryCode': '{code} non è un codice paese.',
  'adminSettings.shippingErrors.countryTaken': '{country} è già in un’altra zona.',
  'adminSettings.shippingErrors.needRate': 'Aggiungi almeno una tariffa di spedizione.',
  'adminSettings.shippingErrors.amountAboveZero': 'Inserisci un importo maggiore di zero.',
  'adminSettings.shippingErrors.maxOptions': 'Una zona può offrire al massimo {count} opzioni.',
  'adminSettings.shippingErrors.maxOptionsWithFree':
    'Una zona può offrire al massimo {count} opzioni (la spedizione gratuita conta come una).',
  'adminSettings.shippingErrors.nameRate': 'Assegna un nome a questa tariffa.',
  'adminSettings.shippingErrors.rateLabelLength': 'Il nome deve avere meno di {count} caratteri.',
  'adminSettings.shippingErrors.rateLabelTaken': 'Un’altra tariffa di questa zona usa già questo nome.',
  'adminSettings.shippingErrors.freeLabelReserved':
    '«{label}» è riservato finché è impostata una soglia di spedizione gratuita.',
  'adminSettings.shippingErrors.choosePricing': 'Scegli una modalità di calcolo del prezzo.',
  'adminSettings.shippingErrors.enterMaxWeight': 'Inserisci un peso massimo.',
  'adminSettings.shippingErrors.weightNegative': 'Il peso non può essere negativo.',
  'adminSettings.shippingErrors.weightPrecision': 'Troppe cifre decimali per {unit}.',
  'adminSettings.shippingErrors.weightOverLimit': 'Questo peso è eccessivo per una spedizione in pacco.',
  'adminSettings.shippingErrors.weightNotNumber': 'Inserisci il peso come numero.',
  'adminSettings.shippingErrors.invalidJson':
    'La configurazione di spedizione salvata non è un JSON valido.',
  'adminSettings.shippingErrors.notObject': 'La configurazione di spedizione salvata non è un oggetto.',
  'adminSettings.shippingErrors.unsupportedSchema':
    'Versione {version} dello schema di spedizione non supportata.',
  'adminSettings.shippingErrors.noRevision': 'La configurazione di spedizione non ha una revisione valida.',
  'adminSettings.shippingErrors.noOnOff':
    'La configurazione di spedizione non ha un valore di attivazione valido.',
  'adminSettings.shippingErrors.badPackageWeight':
    'La configurazione di spedizione ha un peso dell’imballaggio non valido.',
  'adminSettings.shippingErrors.noZoneList': 'La configurazione di spedizione non ha un elenco di zone.',
  'adminSettings.shippingErrors.malformedZone':
    'La configurazione di spedizione contiene una zona non valida.',
  'adminSettings.shippingErrors.malformedRate':
    'La configurazione di spedizione contiene una tariffa non valida.',
} satisfies Catalog;
