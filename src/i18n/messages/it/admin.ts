import type { Catalog } from '../../core';

export const admin = {
  'admin.language': 'Lingua del pannello',

  'admin.notFound': 'Non trovato',
  'admin.invalidId': 'ID non valido',
  'admin.unknownAction': 'Azione sconosciuta',

  'admin.layout.pageTitle': '{title} — Pannello di {store}',
  'admin.layout.pageTitleDefault': 'Pannello di {store}',
  'admin.layout.viewStore': 'Vai al negozio',
  'admin.layout.logOut': 'Esci',
  'admin.layout.setupNudge':
    '<strong class="font-semibold">Completa la configurazione del negozio</strong>: nome del negozio, stato dei pagamenti e altro.',
  'admin.layout.demoMode':
    '<strong class="font-semibold">Nessun metodo di pagamento reale configurato.</strong> Al momento solo la <strong>Cassa demo</strong> può ricevere ordini, che vengono registrati e contrassegnati come <code class="rounded bg-amber-100 px-1 text-xs">demo</code>. Finché non aggiungi una chiave, i clienti vedono i link di configurazione per Carta e Lightning. La Cassa demo resta disponibile insieme ai metodi reali.',
  'admin.layout.shippingBlocked':
    '<strong class="font-semibold">Gli acquisti con spedizione sono bloccati da una configurazione non valida:</strong> {reason}',
  'admin.layout.inventoryAttention': {
    one: '<strong class="font-semibold">L’inventario richiede attenzione.</strong> {count} riga d’ordine pagata è arrivata dopo la scadenza della prenotazione delle scorte e non è stato possibile scalarla del tutto. Apri gli ordini interessati e riconcilia le scorte.',
    many: '<strong class="font-semibold">L’inventario richiede attenzione.</strong> {count} righe d’ordine pagate sono arrivate dopo la scadenza della prenotazione delle scorte e non è stato possibile scalarle del tutto. Apri gli ordini interessati e riconcilia le scorte.',
    other:
      '<strong class="font-semibold">L’inventario richiede attenzione.</strong> {count} righe d’ordine pagate sono arrivate dopo la scadenza della prenotazione delle scorte e non è stato possibile scalarle del tutto. Apri gli ordini interessati e riconcilia le scorte.',
  },
  'admin.nav.heading': 'Amministrazione',
  'admin.nav.toggle': 'Mostra/nascondi le sezioni',
  'admin.nav.menu': 'Menu',
  'admin.nav.dashboard': 'Bacheca',
  'admin.nav.products': 'Prodotti',
  'admin.nav.orders': 'Ordini',
  'admin.nav.customers': 'Clienti',
  'admin.nav.categories': 'Categorie',
  'admin.nav.pages': 'Pagine',
  'admin.nav.navigation': 'Navigazione',
  'admin.nav.shipping': 'Spedizioni',
  'admin.nav.media': 'Media',
  'admin.nav.settings': 'Impostazioni',

  'admin.dashboard.title': 'Bacheca',
  'admin.dashboard.netRevenue': 'Ricavi netti',
  'admin.dashboard.refunded': 'Rimborsi: {amount}',
  'admin.dashboard.orders': 'Ordini',
  'admin.dashboard.products': 'Prodotti',
  'admin.dashboard.customers': 'Clienti',
  'admin.dashboard.recentOrders': 'Ordini recenti',
  'admin.dashboard.viewAll': 'Vedi tutti',
  'admin.dashboard.noOrders': 'Ancora nessun ordine.',
  'admin.dashboard.lowStock': 'Scorte basse',
  'admin.dashboard.stockLeft': { one: '{count} rimasto', many: '{count} rimasti', other: '{count} rimasti' },
  'admin.dashboard.wellStocked': 'Scorte sufficienti per tutti i prodotti.',

  'admin.chart.heading': {
    one: 'Ricavi &middot; ultimo {count} giorno',
    many: 'Ricavi &middot; ultimi {count} giorni',
    other: 'Ricavi &middot; ultimi {count} giorni',
  },
  'admin.chart.summary': {
    one: '{total} &middot; {count} ordine',
    many: '{total} &middot; {count} ordini',
    other: '{total} &middot; {count} ordini',
  },
  'admin.chart.ariaLabel': {
    one: 'Ricavi giornalieri dell’ultimo {count} giorno',
    many: 'Ricavi giornalieri degli ultimi {count} giorni',
    other: 'Ricavi giornalieri degli ultimi {count} giorni',
  },
  'admin.chart.barTitle': {
    one: '{day}: {total} · {count} ordine',
    many: '{day}: {total} · {count} ordini',
    other: '{day}: {total} · {count} ordini',
  },

  'admin.login.pageTitle': 'Accesso al pannello',
  'admin.login.heading': 'Accedi al pannello',
  'admin.login.password': 'Password',
  'admin.login.submit': 'Accedi',
  'admin.login.verificationFailed': 'Verifica non riuscita: riprova.',
  'admin.login.incorrectPassword': 'Password errata.',

  'admin.access.misconfigured':
    'Cloudflare Access non è configurato correttamente: imposta sia CF_ACCESS_TEAM_DOMAIN sia CF_ACCESS_AUD.',
  'admin.access.required': 'È richiesta l’autenticazione con Cloudflare Access.',
  'admin.access.notConfigured':
    'Cloudflare Access non è configurato: imposta CF_ACCESS_TEAM_DOMAIN e CF_ACCESS_AUD.',
  'admin.access.invalidToken': 'Token di Access non valido.',

  'admin.gate.authRequired': 'Autenticazione richiesta.',
  'admin.gate.notSetUp': 'Il pannello non è ancora configurato: completa prima /admin/setup.',
} satisfies Catalog;
