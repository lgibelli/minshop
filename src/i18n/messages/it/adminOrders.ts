import type { Catalog } from '../../core';

export const adminOrders = {
  'adminOrders.errors.notFound': 'Non trovato',

  'adminOrders.status.paid': 'pagato',
  'adminOrders.status.refunded': 'rimborsato',
  'adminOrders.status.pending': 'in attesa',
  'adminOrders.fulfillment.fulfilled': 'Evaso',
  'adminOrders.fulfillment.unfulfilled': 'Da evadere',

  'adminOrders.filter.statusPaid': 'Pagato',
  'adminOrders.filter.statusPartiallyRefunded': 'Rimborsato in parte',
  'adminOrders.filter.statusRefunded': 'Rimborsato',
  'adminOrders.filter.statusPending': 'Non pagato',
  'adminOrders.filter.methodStripe': 'Carta (Stripe)',
  'adminOrders.filter.methodOpennode': 'Bitcoin (OpenNode)',
  'adminOrders.filter.methodDemo': 'Demo',

  'adminOrders.list.matchCount': { one: '{count} ordine', many: '{count} ordini', other: '{count} ordini' },
  'adminOrders.list.title': 'Ordini',
  'adminOrders.list.lookupNoMatch': 'Nessun ordine corrisponde a «{query}».',
  'adminOrders.list.inventoryExceptionsTitle': {
    one: '{count} eccezione di inventario richiede attenzione',
    many: '{count} eccezioni di inventario richiedono attenzione',
    other: '{count} eccezioni di inventario richiedono attenzione',
  },
  'adminOrders.list.inventoryExceptionsHelp':
    'Questi ordini pagati sono arrivati dopo la scadenza della prenotazione delle scorte. Apri ciascun ordine per riconciliare la quantità venduta in eccesso.',
  'adminOrders.list.unitsOversold': {
    one: '{count} unità venduta in eccesso',
    many: '{count} unità vendute in eccesso',
    other: '{count} unità vendute in eccesso',
  },
  'adminOrders.list.refundEventsTitle': {
    one: '{count} rimborso richiede attenzione',
    many: '{count} rimborsi richiedono attenzione',
    other: '{count} rimborsi richiedono attenzione',
  },
  'adminOrders.list.refundEventsHelp':
    'Il tuo provider di pagamento ha segnalato questi rimborsi, ma non è stato possibile applicarli. Per ora non è stato detratto nulla dai tuoi ricavi.',
  'adminOrders.list.conflictsWith':
    'In conflitto con <a href="{href}" class="underline">l’ordine #{ref}</a>',
  'adminOrders.list.refundErrorCurrencyMismatch': 'valuta non corrispondente',
  'adminOrders.list.dismiss': 'Ignora',
  'adminOrders.list.noOrderForPayment': 'Nessun ordine associato a questo pagamento',
  'adminOrders.list.retry': 'Riprova',
  'adminOrders.list.lookupPlaceholder': 'N. ordine o ID',
  'adminOrders.list.lookupLabel': 'Trova un ordine per numero o ID',
  'adminOrders.list.find': 'Trova',
  'adminOrders.list.exportFiltered': 'Esporta questi',
  'adminOrders.list.exportAll': 'Esporta CSV',
  'adminOrders.list.filterPayment': 'Pagamento',
  'adminOrders.list.filterAnyPayment': 'Tutti i pagamenti',
  'adminOrders.list.filterFulfillment': 'Evasione',
  'adminOrders.list.filterAnyFulfillment': 'Qualsiasi evasione',
  'adminOrders.list.filterMethod': 'Metodo',
  'adminOrders.list.filterAnyMethod': 'Tutti i metodi',
  'adminOrders.list.colOrder': 'N. ordine',
  'adminOrders.list.colPublicId': 'ID pubblico',
  'adminOrders.list.colEmail': 'Email',
  'adminOrders.list.colTotal': 'Totale',
  'adminOrders.list.colStatus': 'Stato',
  'adminOrders.list.colFulfillment': 'Evasione',
  'adminOrders.list.colWhen': 'Data',
  'adminOrders.list.emptyFiltered': 'Nessun ordine corrisponde a questi filtri.',
  'adminOrders.list.empty': 'Ancora nessun ordine.',

  'adminOrders.detail.title': 'Ordine #{ref}',
  'adminOrders.detail.back': 'Torna agli ordini',
  'adminOrders.detail.inventoryTitle': 'Riconciliazione dell’inventario necessaria',
  'adminOrders.detail.inventoryHelp':
    'Il pagamento è arrivato dopo la scadenza della prenotazione delle scorte. L’ordine resta pagato, ma non è stato possibile scalare automaticamente queste quantità.',
  'adminOrders.detail.inventoryLine':
    '<strong>{name}</strong>: quantità ordinata {requested}, disponibile al momento del pagamento solo {consumed} (eccedenza: {shortfall}).',
  'adminOrders.detail.inventoryItemFallback': 'Articolo dell’ordine',
  'adminOrders.detail.markReconciled': 'Segna come riconciliato',
  'adminOrders.detail.status': 'Stato',
  'adminOrders.detail.placed': 'Effettuato',
  'adminOrders.detail.email': 'Email',
  'adminOrders.detail.shipping': 'Spedizione',
  'adminOrders.detail.discount': 'Sconto',
  'adminOrders.detail.tax': 'Imposte',
  'adminOrders.detail.total': 'Totale',
  'adminOrders.detail.shipTo': 'Indirizzo di spedizione',
  'adminOrders.detail.paymentMethod': 'Metodo di pagamento',
  'adminOrders.detail.paymentReference': 'Riferimento del pagamento',
  'adminOrders.detail.methodStripe': 'Carta (Stripe)',
  'adminOrders.detail.methodOpennode': 'Bitcoin (OpenNode)',
  'adminOrders.detail.methodDemo': 'Demo (nessun addebito)',
  'adminOrders.detail.fulfillment': 'Evasione',
  'adminOrders.detail.labelUnreconciledTitle': 'Un’etichetta acquistata non risulta su questo ordine',
  'adminOrders.detail.labelTracking': 'tracciamento <span class="tabular-nums">{tracking}</span>',
  'adminOrders.detail.labelTransaction':
    'transazione Shippo <code class="text-xs">{transaction}</code>',
  'adminOrders.detail.labelUnreconciledHelp':
    'L’ordine ha cambiato stato (rimborsato o evaso in altro modo) mentre l’etichetta veniva acquistata, quindi il tracciamento non è stato applicato. L’addebito è reale: annulla l’etichetta in Shippo se non verrà usata.',
  'adminOrders.detail.labelPdf': 'PDF dell’etichetta',
  'adminOrders.detail.labelUncertain':
    'L’acquisto di un’etichetta per questo ordine non si è concluso correttamente: <strong>potrebbe</strong> essere stato addebitato (riferimento ordine Shippo <code class="text-xs">{ref}</code>).',
  'adminOrders.detail.labelUncertainWithError':
    'L’acquisto di un’etichetta per questo ordine non si è concluso correttamente ({error}): <strong>potrebbe</strong> essere stato addebitato (riferimento ordine Shippo <code class="text-xs">{ref}</code>).',
  'adminOrders.detail.reconcile': 'Riconcilia con Shippo',
  'adminOrders.detail.forceSummary': 'La richiesta non è mai arrivata a Shippo? (forzatura a tuo rischio)',
  'adminOrders.detail.forceHelp':
    'Lo scarto forzato rinuncia alla garanzia di acquisto unico per questo ordine: se la richiesta persa è arrivata a Shippo e si completa in seguito, l’etichetta esisterà solo nella tua dashboard Shippo e non verrà registrata qui. Nel dubbio, riconcilia prima.',
  'adminOrders.detail.forceDiscard': 'Accetto il rischio, forza lo scarto',
  'adminOrders.detail.shippingLabelPdf': 'Etichetta di spedizione (PDF)',
  'adminOrders.detail.markUnfulfilled': 'Segna come da evadere',
  'adminOrders.detail.buyLabelTitle': 'Acquista etichetta di spedizione',
  'adminOrders.detail.labelInFlight':
    'È in corso l’acquisto di un’etichetta per questo ordine. Aggiorna tra poco: se non si completa entro un paio di minuti, potrai riconciliarlo qui.',
  'adminOrders.detail.labelUncertainReconcile':
    'L’acquisto di un’etichetta per questo ordine non si è concluso correttamente: <strong>potrebbe</strong> essere stato addebitato. La riconciliazione interroga direttamente Shippo: se l’etichetta viene trovata, viene registrata qui e l’ordine risulta evaso; se è confermato che non c’è stato alcun acquisto, puoi richiedere di nuovo le tariffe.',
  'adminOrders.detail.labelUncertainReconcileWithError':
    'L’acquisto di un’etichetta per questo ordine non si è concluso correttamente ({error}): <strong>potrebbe</strong> essere stato addebitato. La riconciliazione interroga direttamente Shippo: se l’etichetta viene trovata, viene registrata qui e l’ordine risulta evaso; se è confermato che non c’è stato alcun acquisto, puoi richiedere di nuovo le tariffe.',
  'adminOrders.detail.labelPurchased': 'Etichetta acquistata ({provider} {service}).',
  'adminOrders.detail.labelInternational':
    'Questo ordine va spedito in {to}, ma il tuo indirizzo di partenza salvato è in {from}: le etichette internazionali non sono ancora supportate (richiedono una dichiarazione doganale). Acquista l’etichetta dalla tua dashboard Shippo, poi registra qui sotto il numero di tracciamento.',
  'adminOrders.detail.estimatedDays': '~{days} gg',
  'adminOrders.detail.buyLabel': 'Acquista etichetta',
  'adminOrders.detail.startOver': 'Ricomincia',
  'adminOrders.detail.buyHelp':
    'L’acquisto viene addebitato sul tuo account Shippo, registra il numero di tracciamento e segna l’ordine come evaso.',
  'adminOrders.detail.buyHelpEmail': 'Il cliente riceve un’email con i dati di tracciamento.',
  'adminOrders.detail.buyHelpNoEmail':
    'Non verrà inviata alcuna email al cliente (ordine demo o email non registrata).',
  'adminOrders.detail.shipFromName': 'Mittente: nome',
  'adminOrders.detail.street': 'Via',
  'adminOrders.detail.city': 'Città',
  'adminOrders.detail.state': 'Provincia / Stato',
  'adminOrders.detail.postalCode': 'Codice postale',
  'adminOrders.detail.country': 'Paese',
  'adminOrders.detail.length': 'Lunghezza ({unit})',
  'adminOrders.detail.width': 'Larghezza ({unit})',
  'adminOrders.detail.height': 'Altezza ({unit})',
  'adminOrders.detail.packedWeight': 'Peso imballato ({unit})',
  'adminOrders.detail.getRates': 'Ottieni tariffe',
  'adminOrders.detail.ratesHelp':
    'Indirizzo e dimensioni della scatola vengono ricordati per la prossima etichetta. Il peso viene precompilato con il peso di spedizione registrato per l’ordine, se presente.',
  'adminOrders.detail.carrier': 'Corriere',
  'adminOrders.detail.trackingNumber': 'N. di tracciamento',
  'adminOrders.detail.markFulfilled': 'Segna come evaso',
  'adminOrders.detail.labelHistory': 'Cronologia etichette ({count})',
  'adminOrders.detail.outcomePurchased': 'Acquistata',
  'adminOrders.detail.outcomeRefunded': 'Rimborsata',
  'adminOrders.detail.outcomeFailed': 'Non riuscita',
  'adminOrders.detail.outcomeForceDiscarded': 'Scartata forzatamente',
  'adminOrders.detail.attemptTracking': 'Tracciamento {tracking}',
  'adminOrders.detail.attemptTransaction': 'Transazione <code>{transaction}</code>',
  'adminOrders.detail.customerLink': 'Link per il cliente',
  'adminOrders.detail.reissueConfirm':
    'Inviare a {email} un nuovo link all’ordine? Tutti i link condivisi in precedenza per questo ordine smetteranno subito di funzionare.',
  'adminOrders.detail.reissue': 'Invia un nuovo link all’ordine',
  'adminOrders.detail.reissueHelp':
    'Usalo se il cliente segnala un link inoltrato o divulgato. I vecchi link smettono di funzionare nel momento in cui viene emesso quello nuovo.',
  'adminOrders.detail.items': 'Articoli',
  'adminOrders.detail.colProduct': 'Prodotto',
  'adminOrders.detail.colUnitPrice': 'Prezzo unitario',
  'adminOrders.detail.colQty': 'Qtà',
  'adminOrders.detail.colLineTotal': 'Totale riga',
  'adminOrders.detail.noItems': 'Nessuna riga registrata per questo ordine.',
  'adminOrders.detail.totalMismatch':
    'Nota: il totale delle righe ({amount}) è diverso dal totale dell’ordine. Verifica con il provider di pagamento.',

  'adminOrders.refunds.title': 'Rimborsi',
  'adminOrders.refunds.stateFull': 'Rimborsato',
  'adminOrders.refunds.statePartial': 'Rimborsato in parte',
  'adminOrders.refunds.needsReview': 'Da verificare.',
  'adminOrders.refunds.reviewCurrencyMismatch':
    'È arrivato un rimborso in una valuta diversa da quella in cui è stato addebitato l’ordine. I totali non sono stati modificati.',
  'adminOrders.refunds.reviewExceedsTotal':
    'Il totale dei rimborsi del provider, sommato a quanto registrato qui, supera il totale dell’ordine.',
  'adminOrders.refunds.markReviewed': 'Segna come verificato',
  'adminOrders.refunds.orderTotal': 'Totale ordine',
  'adminOrders.refunds.throughProvider': 'Tramite provider',
  'adminOrders.refunds.recordedByHand': 'Registrato manualmente',
  'adminOrders.refunds.totalRefunded': 'Totale rimborsato',
  'adminOrders.refunds.refundableLeft': 'Ancora rimborsabile',
  'adminOrders.refunds.net': 'Netto',
  'adminOrders.refunds.kindProviderApi': 'Rimborsato tramite provider',
  'adminOrders.refunds.kindProviderSync': 'Sincronizzato dal provider',
  'adminOrders.refunds.kindManualExternal': 'Registrato manualmente',
  'adminOrders.refunds.kindManualReversal': 'Correzione',
  'adminOrders.refunds.kindDemo': 'Rettifica demo',
  'adminOrders.refunds.kindLegacy': 'Registrato prima dello storico rimborsi',
  'adminOrders.refunds.voided': 'Stornato',
  'adminOrders.refunds.voidConfirm':
    'Stornare questo rimborso registrato? Corregge solo i dati di minshop e non sposta denaro.',
  'adminOrders.refunds.void': 'Storna',
  'adminOrders.refunds.refundConfirm':
    'Rimborsare {amount} tramite il provider di pagamento? Il denaro verrà restituito al cliente.',
  'adminOrders.refunds.refundButton': 'Rimborsa {amount} tramite provider',
  'adminOrders.refunds.refundHelp':
    'Restituisce il denaro. Per un rimborso parziale usa la dashboard del tuo provider: verrà sincronizzato qui automaticamente.',
  'adminOrders.refunds.recordDemoTitle': 'Segna l’ordine demo come rimborsato',
  'adminOrders.refunds.recordTitle': 'Registra un rimborso già inviato',
  'adminOrders.refunds.amountLabel': 'Importo del rimborso',
  'adminOrders.refunds.notePlaceholder': 'Come è stato inviato (nota interna)',
  'adminOrders.refunds.noteLabel': 'Nota interna',
  'adminOrders.refunds.markRefunded': 'Segna come rimborsato',
  'adminOrders.refunds.recordRefund': 'Registra rimborso',
  'adminOrders.refunds.recordDemoHelp':
    'Aggiorna solo l’ordine demo e le statistiche del negozio. Nessun denaro è stato addebitato o restituito.',
  'adminOrders.refunds.recordHelp':
    'Aggiorna solo i dati di minshop e non sposta denaro. Invia prima il rimborso dal tuo wallet o provider.',
  'adminOrders.refunds.syncTitle': 'Sincronizza un rimborso dal tuo provider',
  'adminOrders.refunds.syncAmountLabel': 'Totale rimborsato presso il provider',
  'adminOrders.refunds.providerRefundIdPlaceholder': 'ID rimborso del provider (facoltativo)',
  'adminOrders.refunds.providerRefundIdLabel': 'ID rimborso del provider',
  'adminOrders.refunds.syncTotal': 'Sincronizza totale',
  'adminOrders.refunds.syncHelp':
    'Usalo solo se un rimborso effettuato presso il provider non è mai comparso qui. Inserisci il<strong> totale rimborsato finora</strong>, non solo l’ultimo importo.',

  'adminOrders.api.invalidInventoryException': 'Eccezione di inventario non valida.',
  'adminOrders.api.inventoryReconciled': 'Eccezione di inventario segnata come riconciliata.',
  'adminOrders.api.inventoryAlreadyResolved':
    'Questa eccezione di inventario è già stata risolta o non appartiene a questo ordine.',
  'adminOrders.api.reissueNoEmail':
    'Questo ordine non ha un’email del cliente, quindi non è possibile inviare un nuovo link. Non è stato modificato nulla.',
  'adminOrders.api.reissueDemo':
    'Gli ordini demo non inviano mai email ai clienti, quindi il loro link non può essere riemesso.',
  'adminOrders.api.reissueLegacy':
    'Questo ordine è precedente ai link ospite revocabili, quindi il suo link non può essere riemesso.',
  'adminOrders.api.reissueEmailOff':
    'L’email non è configurata, quindi non è stato possibile inviare il link sostitutivo. Non è stato modificato nulla.',
  'adminOrders.api.reissueUnsettled':
    'Il link può essere riemesso solo per ordini saldati che hanno un link ospite.',
  'adminOrders.api.reissued':
    'I vecchi link all’ordine non funzionano più. È in corso l’invio di un nuovo link al cliente.',
  'adminOrders.api.refundManualExists':
    'Questo ordine ha già un rimborso registrato manualmente. Rimborsa l’importo restante dalla dashboard del tuo provider di pagamento: verrà sincronizzato qui automaticamente.',
  'adminOrders.api.refundAlreadyFull': 'Questo ordine è già stato rimborsato per intero.',
  'adminOrders.api.refundUnsupported':
    'I rimborsi non sono supportati per questo metodo di pagamento: restituisci tu il denaro, poi usa «Registra rimborso».',
  'adminOrders.api.refundFailed': 'Rimborso non riuscito: {error}',
  'adminOrders.api.orderNotFound': 'Ordine non trovato.',
  'adminOrders.api.refundAmountRequired': 'Inserisci un importo di rimborso maggiore di zero.',
  'adminOrders.api.refundDuplicate': 'Questo rimborso è già registrato: non è stato modificato nulla.',
  'adminOrders.api.refundOverBalance':
    'L’importo supera il saldo rimborsabile rimanente ({amount}).',
  'adminOrders.api.refundNotAllowed': 'Questo ordine non può essere rimborsato.',
  'adminOrders.api.syncAmountRequired': 'Inserisci il totale rimborsato finora.',
  'adminOrders.api.syncOverTotal': 'L’importo supera il totale dell’ordine.',
  'adminOrders.api.syncNotAllowed': 'Questo ordine non può essere riconciliato.',
  'adminOrders.api.syncDuplicate': 'Questo totale è già registrato: non è stato modificato nulla.',
  'adminOrders.api.syncConflict':
    'Registrato, ma ora il totale del provider, sommato ai rimborsi registrati qui, supera il totale dell’ordine. Verifica i rimborsi di questo ordine.',
  'adminOrders.api.invalidRefund': 'Rimborso non valido.',
  'adminOrders.api.voidDuplicate': 'Questa voce è già stata stornata.',
  'adminOrders.api.voidNotAllowed': 'Si possono stornare solo i rimborsi registrati manualmente.',
  'adminOrders.api.labelDiscarded': 'Tentativo di etichetta scartato. Puoi richiedere di nuovo le tariffe.',
  'adminOrders.api.labelNothingToDiscard':
    'Non c’è nessun tentativo di etichetta da scartare: un acquisto già inviato va invece riconciliato con Shippo.',
  'adminOrders.api.labelForceDiscarded':
    'Tentativo scartato forzatamente. Se la richiesta originale è arrivata a Shippo, la sua etichetta comparirà solo nella tua dashboard Shippo.',
  'adminOrders.api.labelNothingToForceDiscard':
    'Non c’è nessun tentativo inviato da scartare forzatamente.',
  'adminOrders.api.shippoTokenMissing': 'Aggiungi prima un token API di Shippo nelle Impostazioni.',
  'adminOrders.api.labelNothingToReconcile':
    'Non c’è nessun tentativo di etichetta in sospeso da riconciliare.',
  'adminOrders.api.reconcileFailed': 'Impossibile riconciliare con Shippo: {error}',
  'adminOrders.api.reconcilePending':
    'Shippo non ha ancora una risposta definitiva: l’acquisto potrebbe essere ancora in elaborazione o non ancora visibile. Riprova tra poco; non è stato modificato nulla.',
  'adminOrders.api.reconcileRaced':
    'Il tentativo ha cambiato stato durante la riconciliazione: ricarica la pagina e controlla di nuovo.',
  'adminOrders.api.reconcileRefunded':
    'Secondo Shippo l’etichetta è stata acquistata e poi rimborsata (transazione {transaction}). Registrato: puoi richiedere di nuovo le tariffe.',
  'adminOrders.api.reconcileNoneStored':
    'Riconciliato con Shippo: il tentativo si è concluso con ERROR senza alcun acquisto.',
  'adminOrders.api.reconcileNone':
    'Shippo segnala esplicitamente che il tentativo è fallito senza alcun acquisto. Puoi richiedere di nuovo le tariffe.',
  'adminOrders.api.reconcileUnfulfilled':
    'Etichetta {tracking} recuperata da Shippo e registrata, ma non è stato possibile evadere l’ordine (rimborsato o già evaso). Riconcilia la spedizione a mano.',
  'adminOrders.api.reconcileFulfilled':
    'Etichetta {tracking} recuperata da Shippo e registrata; ordine evaso.',
  'adminOrders.api.noShippingAddress': 'Questo ordine non ha un indirizzo di spedizione.',
  'adminOrders.api.addressUnreadable': 'Impossibile leggere l’indirizzo di spedizione di questo ordine.',
  'adminOrders.api.addressIncomplete':
    'L’indirizzo di spedizione di questo ordine è incompleto: un’etichetta richiede nome, via, città, codice postale e paese.',
  'adminOrders.api.shipFromIncomplete':
    'Compila l’indirizzo completo del mittente (paese di 2 lettere).',
  'adminOrders.api.internationalUnsupported':
    'Le etichette internazionali non sono ancora supportate (questo ordine va spedito in {country}). Acquista l’etichetta dalla tua dashboard Shippo, poi registra qui il numero di tracciamento.',
  'adminOrders.api.parcelInvalid': 'Controlla i campi del pacco.',
  'adminOrders.api.quoteRefused':
    'Al momento non è possibile richiedere tariffe per questo ordine: esiste già un acquisto di etichetta o l’ordine non è più idoneo.',
  'adminOrders.api.pickRate': 'Scegli prima una tariffa.',
  'adminOrders.api.noOpenQuote':
    'Nessun preventivo aperto da acquistare: richiedi prima le tariffe (oppure è già in corso un acquisto).',
  'adminOrders.api.rateGoneStored': 'La tariffa selezionata non è più offerta.',
  'adminOrders.api.rateGone': 'Questa tariffa non è più offerta. Richiedi di nuovo le tariffe.',
  'adminOrders.api.purchaseUncertain':
    'La risposta di Shippo si è persa durante l’acquisto ({error}): l’etichetta POTREBBE essere stata acquistata. Usa «Riconcilia con Shippo» su questo ordine per chiarire in un senso o nell’altro.',
  'adminOrders.api.purchaseSuperseded':
    'Un’etichetta ({tracking}) è stata acquistata da un tentativo già scartato e non è registrata qui. Riconciliala nella tua dashboard Shippo (ordine {order}).',
  'adminOrders.api.purchaseUnfulfilled':
    'L’etichetta {tracking} è stata acquistata e salvata, ma non è stato possibile segnare l’ordine come evaso: nel frattempo ha cambiato stato (rimborsato?). Non è stata inviata alcuna email al cliente. Riconcilia a mano.',
  'adminOrders.api.purchasedEmailQueued':
    'Etichetta acquistata ({provider} {service}). Tracciamento {tracking} registrato. L’email di tracciamento per il cliente è in coda di invio.',
  'adminOrders.api.purchasedNoEmail':
    'Etichetta acquistata ({provider} {service}). Tracciamento {tracking} registrato. Non verrà inviata alcuna email al cliente (ordine demo, indirizzo mancante o email non configurata).',
  'adminOrders.api.fulfillBlocked':
    'Questo ordine ha un acquisto di etichetta in corso o in attesa di riconciliazione: completalo o scartalo prima.',

  'adminOrders.refundEvents.missingEvent': 'Evento mancante.',
  'adminOrders.refundEvents.notWaiting': 'Questo evento non è più in attesa di riconciliazione.',
  'adminOrders.refundEvents.stillUnmatched':
    'Ancora nessun ordine corrisponde a quel pagamento. L’evento resta in coda: puoi riprovare dopo che l’ID di pagamento dell’ordine sarà stato inserito.',
  'adminOrders.refundEvents.cannotDismiss':
    'Questo rimborso non è ancora stato associato a un ordine, quindi non può essere ignorato: nasconderebbe denaro che si è mosso davvero. Usa Riprova quando l’ID di pagamento dell’ordine esiste.',

  'adminOrders.labels.parcelDimensions':
    'Inserisci lunghezza, larghezza e altezza del pacco come numeri positivi.',
  'adminOrders.labels.parcelWeight': 'Inserisci il peso del pacco imballato come numero positivo.',
  'adminOrders.labels.unreachable': 'Al momento Shippo non è raggiungibile.',
  'adminOrders.labels.tokenRejected': 'Shippo ha rifiutato il token API.',
  'adminOrders.labels.unreadableBody': 'Shippo ha risposto {status} con un contenuto illeggibile.',
  'adminOrders.labels.httpStatus': 'Shippo ha risposto {status}.',
  'adminOrders.labels.noRates': 'Nessun corriere ha offerto una tariffa per questo pacco e indirizzo.',
  'adminOrders.labels.ratesExpired': 'L’elenco delle tariffe è scaduto. Richiedi di nuovo le tariffe.',
  'adminOrders.labels.purchaseFailed': 'Shippo non è riuscito ad acquistare l’etichetta.',
  'adminOrders.labels.unexpectedShape':
    'Shippo ha risposto in un formato inatteso; la riconciliazione non è conclusiva.',
  'adminOrders.labels.incompletePurchased':
    'Shippo segnala un’etichetta acquistata, ma i suoi dati sono incompleti; riconcilia nella dashboard.',
  'adminOrders.labels.conflictingStates':
    'Shippo ha restituito stati della transazione contrastanti; la riconciliazione non è conclusiva.',
  'adminOrders.labels.incompleteRefunded':
    'Shippo segnala un’etichetta rimborsata, ma i suoi dati sono incompleti; riconcilia nella dashboard.',
  'adminOrders.labels.unknownStatus':
    'Shippo ha segnalato uno stato della transazione che questa versione non riconosce; riconcilia nella dashboard.',

  'adminOrders.export.order': 'Ordine',
  'adminOrders.export.date': 'Data',
  'adminOrders.export.email': 'Email',
  'adminOrders.export.status': 'Stato',
  'adminOrders.export.fulfillment': 'Evasione',
  'adminOrders.export.subtotal': 'Subtotale',
  'adminOrders.export.shipping': 'Spedizione',
  'adminOrders.export.discount': 'Sconto',
  'adminOrders.export.tax': 'Imposte',
  'adminOrders.export.total': 'Totale',
  'adminOrders.export.currency': 'Valuta',
  'adminOrders.export.providerRefunded': 'Rimborsato dal provider',
  'adminOrders.export.externallyRefunded': 'Rimborsato esternamente',
  'adminOrders.export.totalRefunded': 'Totale rimborsato',
  'adminOrders.export.net': 'Netto',
  'adminOrders.export.refundState': 'Stato rimborso',
  'adminOrders.export.refundReview': 'Verifica rimborso',
  'adminOrders.export.carrier': 'Corriere',
  'adminOrders.export.tracking': 'Tracciamento',

  'adminOrders.customers.title': 'Clienti',
  'adminOrders.customers.colEmail': 'Email',
  'adminOrders.customers.colOrders': 'Ordini',
  'adminOrders.customers.colLifetime': 'Valore totale',
  'adminOrders.customers.colLastOrder': 'Ultimo ordine',
  'adminOrders.customers.empty': 'Ancora nessun cliente.',
  'adminOrders.customers.back': 'Torna ai clienti',
  'adminOrders.customers.summary': {
    one: '{count} ordine · {lifetime} in totale',
    many: '{count} ordini · {lifetime} in totale',
    other: '{count} ordini · {lifetime} in totale',
  },
  'adminOrders.customers.colOrder': 'Ordine',
  'adminOrders.customers.colTotal': 'Totale',
  'adminOrders.customers.colStatus': 'Stato',
  'adminOrders.customers.colWhen': 'Data',
} satisfies Catalog;
