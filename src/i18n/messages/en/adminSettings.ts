import type { Message } from '../../core';

// Admin settings, the setup wizard, and the shipping editor. Messages that
// contain markup are rendered with th() + set:html; their markup is part of
// the message so the English output stays byte-identical. A few help texts
// keep a missing space before a tag (`such as <code>`) because the page has
// always rendered them that way.
export const adminSettings = {
  // ── Shared ────────────────────────────────────────────────────────────────
  'adminSettings.common.save': 'Save',
  'adminSettings.common.unavailable': 'Unavailable',
  'adminSettings.common.live': 'Live',
  'adminSettings.toggle.enable': 'Enable {label}',
  'adminSettings.toggle.disable': 'Disable {label}',

  // ── Settings page ─────────────────────────────────────────────────────────
  'adminSettings.page.title': 'Settings',
  'adminSettings.page.updated': 'Settings updated',
  'adminSettings.sections.general': 'General',
  'adminSettings.sections.images': 'Images',
  'adminSettings.sections.payments': 'Payments',
  'adminSettings.sections.email': 'Email',
  'adminSettings.sections.turnstile': 'Bot protection',
  'adminSettings.sections.search': 'Search',
  'adminSettings.sections.buildTime': 'Build-time',

  // Validation errors from the section saves.
  'adminSettings.errors.unknownPaymentMethod': 'Unknown payment method.',
  'adminSettings.errors.configurePaymentMethod': 'Configure this payment method before enabling it.',
  'adminSettings.errors.stripeRequired': 'Configure Stripe before enabling this Stripe-only feature.',
  'adminSettings.errors.authSecretRequired': 'Set AUTH_SECRET before enabling customer accounts.',
  'adminSettings.errors.emailRequired': 'Enable and configure email before enabling customer accounts.',
  'adminSettings.errors.imagesBindingRequired':
    'Add the IMAGES binding and redeploy before enabling image optimization.',
  'adminSettings.errors.invalidTimeZone':
    'Enter a valid IANA time zone, such as UTC or America/New_York.',
  'adminSettings.errors.logoMissing': 'That image is no longer in the media library.',
  'adminSettings.errors.invalidHome': 'Choose a published page or an active product.',
  'adminSettings.errors.invalidAnnouncementLink':
    'The announcement link must be a path like /sale or an http(s) URL.',
  'adminSettings.errors.onDemandImagesUnavailable':
    'Connect an HTTPS R2 custom domain and set IMAGE_BASE_URL before enabling on-demand images.',
  'adminSettings.errors.invalidImageDelivery': 'Choose a valid image delivery method.',
  'adminSettings.errors.semanticSearchUnavailable':
    'Add the AI and VECTORIZE bindings before enabling semantic search.',
  'adminSettings.errors.emailBindingRequired':
    'Add the EMAIL binding and redeploy before enabling Cloudflare Email.',
  'adminSettings.errors.resendKeyRequired': 'Add a Resend API key before enabling email.',
  'adminSettings.errors.turnstileKeysRequired':
    'Add both the Turnstile site key and secret before enabling bot protection.',
  'adminSettings.errors.invalidDefaultRail':
    'Choose an enabled, configured payment method as the default.',
  'adminSettings.errors.invalidLightningBackend': 'Choose a valid Lightning backend.',

  // Background (JS) saves.
  'adminSettings.inlineSave.saved': 'Saved ✓',
  'adminSettings.inlineSave.failed': 'Save failed — try again',

  // General
  'adminSettings.general.intro':
    'Store identity and storefront features — apply immediately, no redeploy.',
  'adminSettings.general.storeName': 'Store name',
  'adminSettings.general.timeZone': 'Store time zone',
  'adminSettings.general.timeZonePlaceholder': 'Search e.g. America/New_York',
  'adminSettings.general.timeZoneHelp':
    'The time zone controls stored UTC date display. Use an IANA name such as <code>UTC</code> or <code>America/New_York</code>.',

  'adminSettings.logo.title': 'Logo',
  'adminSettings.logo.currentAlt': 'Current logo',
  'adminSettings.logo.choose': 'Choose logo',
  'adminSettings.logo.replace': 'Replace logo',
  'adminSettings.logo.remove': 'Remove logo',
  'adminSettings.logo.help':
    'Replaces the store name in the header. Removing it restores the text name. Saving purges affected storefront pages; a 10-minute TTL bounds a transient purge failure.',

  'adminSettings.home.title': 'Home page',
  'adminSettings.home.selectLabel': 'What / shows',
  'adminSettings.home.productList': 'Product list (default)',
  'adminSettings.home.groupPage': 'Page',
  'adminSettings.home.groupProduct': 'Product',
  'adminSettings.home.missing':
    'The page or product this was set to is no longer published or active, so the home page is showing the product list. Pick a new one to update the setting.',
  'adminSettings.home.catalogOrphaned':
    'Your product list moved to <code>/products</code> when you set a custom home page, and no menu links to it — shoppers currently have no way to reach your catalog. Add a Catalog item in <a href="{href}" class="underline hover:text-brand">Navigation</a>.',
  'adminSettings.home.help':
    'Only published pages and active products are listed. If the one you pick is later unpublished or deleted, the home page falls back to the product list rather than breaking. Saving purges affected storefront pages; a 10-minute TTL bounds a transient purge failure.',

  'adminSettings.announcement.label': 'Announcement bar',
  'adminSettings.announcement.placeholder': 'e.g. Free shipping on orders over $50',
  'adminSettings.announcement.link': 'Link (optional)',
  'adminSettings.announcement.linkPlaceholder': 'e.g. /categories/sale',
  'adminSettings.announcement.help':
    'Shown above the header on every storefront page. Leave the message empty to hide the bar. Storefront pages are cached briefly, so a change can take about a minute to appear everywhere.',

  'adminSettings.shippingCard.title': 'Shipping',
  'adminSettings.shippingCard.on': 'On',
  'adminSettings.shippingCard.off': 'Off',
  'adminSettings.shippingCard.summary': {
    one: '{state} · {count} zone · zones, rates, and free-shipping thresholds',
    other: '{state} · {count} zones · zones, rates, and free-shipping thresholds',
  },
  'adminSettings.weightUnit.label': 'Weight unit',
  'adminSettings.weightUnit.help':
    'Product and rate weights are entered in this unit; stored values are always grams.',

  'adminSettings.shippo.title': 'Shipping labels (Shippo)',
  'adminSettings.shippo.help':
    'Buy carrier labels from the order page using the recorded address and weight — tracking is filled in and the shipped email sent automatically. A <code class="text-[11px]">shippo_test_…</code> token buys fake labels for trying it out.',
  'adminSettings.shippo.token': 'API token',
  'adminSettings.shippo.tokenHint': 'shippo_live_… or shippo_test_…',

  // Storefront feature switches, and why one can't be switched on yet.
  'adminSettings.features.cart': 'Cart & checkout',
  'adminSettings.features.cartDesc':
    'Add to cart and checkout. Off makes the store a browse-only catalog.',
  'adminSettings.features.buyNow': 'Buy now',
  'adminSettings.features.buyNowDesc':
    'Express instant-checkout button on product pages — works even with the cart off.',
  'adminSettings.features.discounts': 'Discount codes',
  'adminSettings.features.discountsDesc':
    'Show the promo-code field at checkout. Codes are created in the Stripe Dashboard.',
  'adminSettings.features.tax': 'Automatic tax',
  'adminSettings.features.taxDesc':
    'Charge sales tax / VAT via Stripe Tax — activate Stripe Tax in the Dashboard first.',
  'adminSettings.features.accounts': 'Customer accounts',
  'adminSettings.features.accountsDesc':
    'Passwordless (magic-link) customer login. Needs AUTH_SECRET + email configured.',
  'adminSettings.features.imageOptimize': 'Optimize images on upload',
  'adminSettings.features.imageOptimizeDesc':
    'WebP-downscale product images via Cloudflare Images. Needs the IMAGES binding.',
  'adminSettings.availability.stripe': 'Unavailable until Stripe is configured',
  'adminSettings.availability.authSecret': 'Unavailable until AUTH_SECRET is set',
  'adminSettings.availability.email': 'Unavailable until email is enabled and configured',
  'adminSettings.availability.images': 'Unavailable until the IMAGES binding is added',

  // Images
  'adminSettings.images.intro':
    'Choose how product images are delivered. This affects existing and new uploads without changing the files stored in R2.',
  'adminSettings.images.legend': 'Image delivery',
  'adminSettings.images.original': 'Original images',
  'adminSettings.images.originalDesc':
    'Serve uploaded files unchanged. No transformation usage or additional setup.',
  'adminSettings.images.cloudflare': 'Cloudflare on-demand',
  'adminSettings.images.cloudflareDesc':
    'Responsive AVIF/WebP delivery with automatic format negotiation and original-image fallback.',
  'adminSettings.images.cloudflareSetup':
    'Connect an HTTPS R2 custom domain, set IMAGE_BASE_URL, and enable Transformations for the storefront zone.',
  'adminSettings.images.quota':
    'Uses your Cloudflare Image Transformations quota. Each unique source-and-parameter combination counts as a unique transformation.',
  'adminSettings.images.save': 'Save image delivery',
  'adminSettings.images.purgeNote':
    'Saving purges affected public pages; a 10-minute TTL bounds a transient purge failure.',
  'adminSettings.images.deliveryNote':
    'This controls delivery. <strong class="font-medium text-gray-500">Optimize images on upload</strong> in General is a separate option that changes newly stored source files.',

  // Payments
  'adminSettings.payments.intro':
    "Each method's config and keys are grouped together below. A method goes live once its key (and, for Lightning, its node URL) is set; Demo is always available. Keys are stored encrypted in D1 — write-only, never shown again.",
  'adminSettings.payments.vaultMissing':
    "Keys are encrypted under a <code>SECRETS_KEK</code> Worker secret, which isn't set — so the key fields are disabled and only Demo can take orders. Set it (<code>openssl rand -base64 32 | wrangler secret put SECRETS_KEK</code>), then redeploy.",
  'adminSettings.payments.defaultRail': 'Default rail',
  'adminSettings.payments.optionUnavailable': '{label} — unavailable',
  'adminSettings.payments.defaultRailHelp':
    'The enabled, configured method offered first at checkout.',
  'adminSettings.payments.card': 'Card (Stripe)',
  'adminSettings.payments.demo': 'Demo checkout',
  'adminSettings.payments.demoDesc':
    'Always available — reserves stock and places a real, demo-tagged order (no charge).',
  'adminSettings.stripe.setup': 'Add both Stripe keys to go live',
  'adminSettings.stripe.secretKey': 'Secret key',
  'adminSettings.stripe.secretKeyHint': 'sk_live_… or sk_test_…',
  'adminSettings.stripe.webhookSecret': 'Webhook signing secret',
  'adminSettings.lightning.setup': 'Pick a node, set its URL + key to go live',
  'adminSettings.lightning.backend': 'Backend',
  'adminSettings.lightning.lnbitsUrl': 'LNbits URL',
  'adminSettings.lightning.lnbitsKey': 'LNbits invoice/read key',
  'adminSettings.lightning.lnbitsKeyHint': 'invoice/read key (not admin)',
  'adminSettings.lightning.phoenixdUrl': 'phoenixd URL',
  'adminSettings.lightning.phoenixdPassword': 'phoenixd password',
  'adminSettings.lightning.errorAddUrl': 'Add the {backend} URL.',
  'adminSettings.lightning.errorInvalidUrl': 'Enter a valid HTTP(S) URL for {backend}.',
  'adminSettings.lightning.errorAddLnbitsKey': 'Add the LNbits invoice/read key.',
  'adminSettings.lightning.errorAddPhoenixdPassword': 'Add the phoenixd password.',
  'adminSettings.opennode.setup': 'Add the API key to go live',
  'adminSettings.opennode.apiUrl': 'API URL',
  'adminSettings.opennode.apiUrlPlaceholder': '(blank = live)',
  'adminSettings.opennode.apiKey': 'API key',
  'adminSettings.opennode.apiKeyHint': 'from the OpenNode dashboard',

  // Email
  'adminSettings.email.intro':
    'Order-confirmation and customer-login email. <strong>Resend</strong> works on the Workers free plan; <strong>Cloudflare</strong> uses the <code>send_email</code> binding (paid plan). Sending to real customers needs a verified sender domain. Off or unconfigured = no-op (the on-page order confirmation still shows).',
  'adminSettings.email.send': 'Send email',
  'adminSettings.email.provider': 'Provider',
  'adminSettings.email.cloudflarePaid': 'Cloudflare — Workers Paid plan',
  'adminSettings.email.cloudflareMissing': 'Cloudflare — unavailable (EMAIL binding missing)',
  'adminSettings.email.from': 'From address',
  'adminSettings.email.fromName': 'From name',
  'adminSettings.email.notifyTo': 'New-order alerts to',
  'adminSettings.email.notifyHelp': 'Owner gets a "new order" email here. Blank = off.',
  'adminSettings.email.resendKey': 'Resend API key',
  'adminSettings.email.cloudflareNote':
    'Cloudflare email requires a <strong>Workers Paid plan</strong> and an onboarded sender domain (<code>wrangler email sending enable &lt;domain&gt;</code>).',
  'adminSettings.email.bindingMissing':
    "The <code>send_email</code> binding isn't declared in <code>wrangler.jsonc</code> yet, so nothing will send until you add it and redeploy.",
  'adminSettings.email.testLabel': 'Send test email to',
  'adminSettings.email.testButton': 'Send test',
  'adminSettings.email.testSending': 'Sending…',
  'adminSettings.email.testSent': 'Sent.',
  'adminSettings.email.testFailed': 'Failed.',
  'adminSettings.email.testRequestFailed': 'Request failed.',

  // POST /api/admin/email/test
  'adminSettings.emailTest.invalidRecipient': 'Enter a valid recipient address for the test email.',
  'adminSettings.emailTest.notConfigured':
    'Email isn’t configured — pick a provider, add its key, and Save first.',
  'adminSettings.emailTest.fallbackStoreName': 'your store',
  'adminSettings.emailTest.subject': 'Test email from {store}',
  'adminSettings.emailTest.html':
    '<p>This is a test email from your {store} admin. Email delivery is working ✅</p>',
  'adminSettings.emailTest.text':
    'This is a test email from your {store} admin. Email delivery is working.',
  'adminSettings.emailTest.sent': 'Test email sent to {to}.',
  'adminSettings.emailTest.failed': 'Send failed: {error}',
  'adminSettings.emailTest.unknownError': 'unknown error',

  // Bot protection
  'adminSettings.turnstile.intro':
    'Cloudflare Turnstile challenge on admin login and customer account sign-in. Off by default. Needs a <a href="{href}" class="text-accent underline">Turnstile widget</a> (sitekey + secret). Cloudflare\'s always-pass test keys work for local trials.',
  'adminSettings.turnstile.enable': 'Enable Turnstile',
  'adminSettings.turnstile.needsKeys': 'Add both keys before enabling',
  'adminSettings.turnstile.siteKey': 'Site key (public)',
  'adminSettings.turnstile.secretKey': 'Secret key',

  // Search
  'adminSettings.search.intro':
    'Keyword search (SQLite FTS5) works out of the box. Switch on semantic search to also match by meaning using Workers AI + Vectorize — applies immediately, no redeploy.',
  'adminSettings.search.semantic': 'Semantic search',
  'adminSettings.search.on':
    'On — results are ranked by meaning (hybrid with keyword). Reindex after turning on or after bulk product changes.',
  'adminSettings.search.off': 'Off — using keyword search (FTS5). Turn on to also match by meaning.',
  'adminSettings.search.bindingsMissing':
    "Needs the <code>AI</code> + <code>VECTORIZE</code> bindings (declared in <code>wrangler.jsonc</code>). Search stays on keyword until they're present.",
  'adminSettings.search.enable': 'Enable semantic search',
  'adminSettings.search.disable': 'Disable semantic search',
  'adminSettings.search.reindexAll': 'Reindex all products',
  'adminSettings.search.continueReindex': 'Continue reindex',
  'adminSettings.search.reindexProgress': '{count} products complete. Continue with the next batch.',
  'adminSettings.search.reindexHelp':
    'Embeds every product into Vectorize in small batches. Run once after turning this on, or to backfill.',
  'adminSettings.search.reindexing': 'Reindexing…',
  'adminSettings.search.reindexStarting': 'Starting…',
  'adminSettings.search.reindexBatch': '{processed} / {total} products',
  'adminSettings.search.reindexDone': 'Reindexed {count} products ✓',
  'adminSettings.search.reindexFailed': 'Reindex failed',

  // Build-time
  'adminSettings.buildTime.intro':
    'The settings below are <strong>build-time</strong> (kept in code so the template clones cleanly). Change the value shown, then redeploy with <code>npm run deploy</code>.',
  'adminSettings.buildTime.currency': 'Currency',
  'adminSettings.buildTime.currencyExample': '{currency} — e.g. {price}',
  'adminSettings.buildTime.currencyHelp':
    'Override <code>currency</code> in <code>src/store.config.ts</code>. Drives all price formatting, the new-product default, and checkout.',
  'adminSettings.buildTime.favicon': 'Favicon',
  'adminSettings.buildTime.faviconAlt': 'Current favicon',
  'adminSettings.buildTime.faviconHelp':
    'Replace <code>public/favicon.svg</code> and regenerate <code>public/favicon.ico</code> for clients that still request the legacy icon.',

  // ── Components ────────────────────────────────────────────────────────────
  'adminSettings.secretField.encrypted': 'Encrypted in D1',
  'adminSettings.secretField.keepPlaceholder': 'Leave blank to keep',
  'adminSettings.secretField.remove': 'Remove',
  'adminSettings.secretField.vaultMissing': 'Set <code>SECRETS_KEK</code> to add this key',

  'adminSettings.filterBar.search': 'Search',
  'adminSettings.filterBar.apply': 'Apply',
  'adminSettings.filterBar.clear': 'Clear',
  'adminSettings.filterBar.results': { one: '{count} result', other: '{count} results' },

  // ── Setup wizard ──────────────────────────────────────────────────────────
  'adminSettings.setup.title': 'Setup',
  'adminSettings.setup.heading': 'Set up your store',
  'adminSettings.setup.intro':
    'A few first-run settings — you can change them any time in Settings. This just gets you running.',
  'adminSettings.setup.basics': 'Store basics',
  'adminSettings.setup.currencyNote':
    'Currency stays a build-time setting (it\'s wired through every price) — set <code class="rounded bg-gray-100 px-1">currency</code> in <code class="rounded bg-gray-100 px-1">src/config.ts</code>. Current: {currency}.',
  'adminSettings.setup.password': 'Admin password',
  'adminSettings.setup.passwordIntro':
    'Password for <code class="rounded bg-gray-100 px-1">/admin/login</code> — stored hashed (PBKDF2), never plaintext.',
  'adminSettings.setup.passwordKept': 'A password is already set; leave blank to keep it.',
  'adminSettings.setup.passwordRequired': 'Required to finish.',
  'adminSettings.setup.accessNote':
    'Cloudflare Access is the recommended production auth; this is the simpler stopgap.',
  'adminSettings.setup.newPassword': 'New password',
  'adminSettings.setup.newPasswordOptional': 'New password (optional)',
  'adminSettings.setup.passwordPlaceholder': 'at least {count} characters',
  'adminSettings.setup.passwordTooShort': 'Password must be at least {count} characters.',
  'adminSettings.setup.passwordMissing':
    'Set an admin password — without one the dashboard is unreachable and this page stays public.',
  'adminSettings.setup.payments': 'Payments',
  'adminSettings.setup.paymentsNote':
    "<strong>Demo</strong> checkout works right away. Set up real payment methods (card via Stripe, Bitcoin Lightning, or OpenNode) whenever you're ready in <strong>Settings → Payments</strong> — no need to do it now.",
  'adminSettings.setup.demoCatalog':
    'Load the <strong>demo catalog</strong> — 30 sample products across 6 categories, to explore the storefront. Leave unchecked to start empty and add your own.',
  'adminSettings.setup.finish': 'Finish setup',

  // ── Shipping editor ───────────────────────────────────────────────────────
  'adminSettings.shipping.title': 'Shipping',
  'adminSettings.shipping.intro':
    'Zones, rates, and free-shipping thresholds. Amounts are in {currency}; weights are entered in <strong>{unit}</strong> and stored in grams — change the unit in <a href="{href}" class="underline hover:text-brand">Settings</a>.',
  'adminSettings.shipping.viewCart': 'View cart checkout',
  'adminSettings.shipping.saved': 'Shipping saved.',
  'adminSettings.shipping.conflict':
    'Shipping changed in another tab. Reload and review those changes before saving yours.',
  'adminSettings.shipping.tooLarge':
    'That configuration is too large to store. Remove some zones or countries.',
  'adminSettings.shipping.missingWeights': {
    one: '{count} product ({names}) has no shipping weight and could not be purchased. Set weights or keep a flat rate in every zone.',
    other:
      '{count} products ({names}) have no shipping weight and could not be purchased. Set weights or keep a flat rate in every zone.',
  },
  'adminSettings.shipping.unreadable': 'The saved shipping configuration could not be read:',
  'adminSettings.shipping.unreadableHelp':
    'Checkout is blocked for physical orders until this is replaced. Review the values below and use <strong>Replace invalid configuration</strong> to overwrite it.',
  'adminSettings.shipping.prepopulated':
    'This store still uses the shipping configuration from <code class="text-xs">store.config.ts</code>, which allows things the editor does not. The problems are marked below — fix them, then save to take ownership in Admin.',
  'adminSettings.shipping.firstSave':
    'Shipping currently comes from <code class="text-xs">store.config.ts</code>. Saving here moves ownership to Admin — from then on this page is the source of truth.',
  'adminSettings.shipping.offer':
    '<strong class="font-semibold">Offer shipping</strong> — collect an address and charge for delivery.',
  'adminSettings.shipping.packageWeight': 'Packaging weight ({unit})',
  'adminSettings.shipping.packageWeightHelp':
    'Box, mailer, padding and label. Added once per order, on top of item weights.',
  'adminSettings.shipping.zoneName': 'Zone name',
  'adminSettings.shipping.zoneFallbackName': 'Zone {number}',
  'adminSettings.shipping.moveUp': 'Up',
  'adminSettings.shipping.moveDown': 'Down',
  'adminSettings.shipping.removeZone': 'Remove zone',
  'adminSettings.shipping.destinations': 'Destinations',
  'adminSettings.shipping.restOfWorld': 'Rest of world',
  'adminSettings.shipping.unknownCode': 'Unknown code: {code}',
  'adminSettings.shipping.freeOver': 'Free shipping over ({currency})',
  'adminSettings.shipping.freeOverHelp': 'Blank disables it.',
  'adminSettings.shipping.rateLabel': 'Rate label',
  'adminSettings.shipping.pricing': 'Pricing',
  'adminSettings.shipping.pricingFlat': 'Flat price',
  'adminSettings.shipping.pricingWeight': 'By order weight',
  'adminSettings.shipping.pricingPickup': 'Local pickup',
  'adminSettings.shipping.price': 'Price',
  'adminSettings.shipping.pickupFee': 'Fee (0 = free)',
  'adminSettings.shipping.removeRate': 'Remove rate',
  'adminSettings.shipping.weightBands': 'Weight bands',
  'adminSettings.shipping.upTo': 'Up to ({unit})',
  'adminSettings.shipping.noMax': 'No maximum',
  'adminSettings.shipping.removeBand': 'Remove',
  'adminSettings.shipping.addBand': 'Add band',
  'adminSettings.shipping.addRate': 'Add rate',
  'adminSettings.shipping.addZone': 'Add zone',
  'adminSettings.shipping.save': 'Save shipping',
  'adminSettings.shipping.replace': 'Replace invalid configuration',
  'adminSettings.shipping.footer':
    'Stripe shows the rates for the country chosen in the cart; the final address is confirmed on its hosted page. Other rails collect the address before payment.',

  // Shipping validation (features/shipping/settings.ts). Shown beside the field,
  // and as the reason in the "could not be read" banners.
  'adminSettings.shippingErrors.needBand': 'Add at least one weight band.',
  'adminSettings.shippingErrors.maxBands': 'At most {count} bands per service.',
  'adminSettings.shippingErrors.enterPrice': 'Enter a price.',
  'adminSettings.shippingErrors.lastBandOnly': 'Only the last band can have no maximum.',
  'adminSettings.shippingErrors.weightAboveZero': 'Enter a weight above zero.',
  'adminSettings.shippingErrors.bandOrder': 'Each band must be heavier than the one above it.',
  'adminSettings.shippingErrors.enabledBoolean': 'Enabled must be true or false.',
  'adminSettings.shippingErrors.packageWeight': 'Enter a package weight of zero or more.',
  'adminSettings.shippingErrors.zonesList': 'Zones must be a list.',
  'adminSettings.shippingErrors.maxZones': 'At most {count} zones.',
  'adminSettings.shippingErrors.needZone':
    'Add at least one zone with one rate before turning shipping on.',
  'adminSettings.shippingErrors.nameZone': 'Name this zone.',
  'adminSettings.shippingErrors.zoneNameLength': 'Keep the name under {count} characters.',
  'adminSettings.shippingErrors.zoneNameTaken': 'Another zone already uses this name.',
  'adminSettings.shippingErrors.needDestination': 'Choose at least one destination.',
  'adminSettings.shippingErrors.maxCountries': 'At most {count} countries per zone.',
  'adminSettings.shippingErrors.restOfWorldMixed':
    'Rest of world cannot be combined with specific countries.',
  'adminSettings.shippingErrors.restOfWorldOnce': 'Only one zone can be Rest of world.',
  'adminSettings.shippingErrors.restOfWorldLast': 'Rest of world must be the last zone.',
  'adminSettings.shippingErrors.notCountryCode': '{code} is not a country code.',
  'adminSettings.shippingErrors.countryTaken': '{country} is already in another zone.',
  'adminSettings.shippingErrors.needRate': 'Add at least one shipping rate.',
  'adminSettings.shippingErrors.amountAboveZero': 'Enter an amount above zero.',
  'adminSettings.shippingErrors.maxOptions': 'A zone can offer at most {count} options.',
  'adminSettings.shippingErrors.maxOptionsWithFree':
    'A zone can offer at most {count} options (free shipping counts as one).',
  'adminSettings.shippingErrors.nameRate': 'Name this rate.',
  'adminSettings.shippingErrors.rateLabelLength': 'Keep the label under {count} characters.',
  'adminSettings.shippingErrors.rateLabelTaken': 'Another rate in this zone uses this label.',
  'adminSettings.shippingErrors.freeLabelReserved':
    '"{label}" is reserved while a free-shipping threshold is set.',
  'adminSettings.shippingErrors.choosePricing': 'Choose a pricing mode.',
  'adminSettings.shippingErrors.enterMaxWeight': 'Enter a maximum weight.',
  'adminSettings.shippingErrors.weightNegative': 'Weight cannot be negative.',
  'adminSettings.shippingErrors.weightPrecision': 'Too many decimal places for {unit}.',
  'adminSettings.shippingErrors.weightOverLimit': 'That weight is too heavy for parcel shipping.',
  'adminSettings.shippingErrors.weightNotNumber': 'Enter a weight as a number.',
  'adminSettings.shippingErrors.invalidJson': 'The stored shipping configuration is not valid JSON.',
  'adminSettings.shippingErrors.notObject': 'The stored shipping configuration is not an object.',
  'adminSettings.shippingErrors.unsupportedSchema': 'Unsupported shipping schema version {version}.',
  'adminSettings.shippingErrors.noRevision': 'The shipping configuration has no valid revision.',
  'adminSettings.shippingErrors.noOnOff': 'The shipping configuration has no valid on/off value.',
  'adminSettings.shippingErrors.badPackageWeight':
    'The shipping configuration has an invalid packaging weight.',
  'adminSettings.shippingErrors.noZoneList': 'The shipping configuration has no zone list.',
  'adminSettings.shippingErrors.malformedZone': 'The shipping configuration has a malformed zone.',
  'adminSettings.shippingErrors.malformedRate': 'The shipping configuration has a malformed rate.',
} satisfies Record<`adminSettings.${string}`, Message>;
