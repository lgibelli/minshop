import type { Message } from '../../core';

export const admin = {
  'admin.language': 'Admin language',

  // Responses shared by the admin routes.
  'admin.notFound': 'Not found',
  'admin.invalidId': 'Invalid id',
  'admin.unknownAction': 'Unknown action',

  // AdminLayout: document title, sidebar, and the banners above every page.
  'admin.layout.pageTitle': '{title} — {store} admin',
  'admin.layout.pageTitleDefault': '{store} admin',
  'admin.layout.viewStore': 'View store',
  'admin.layout.logOut': 'Log out',
  'admin.layout.setupNudge':
    '<strong class="font-semibold">Finish setting up your store</strong> — store name, payment status, and more.',
  'admin.layout.demoMode':
    '<strong class="font-semibold">No real payment method configured.</strong> Only <strong>Demo checkout</strong> can take orders right now — they\'re recorded and tagged <code class="rounded bg-amber-100 px-1 text-xs">demo</code>. Shoppers see setup links for Card &amp; Lightning until you add a key. Demo stays available alongside real rails.',
  'admin.layout.shippingBlocked':
    '<strong class="font-semibold">Shipping checkout is blocked by invalid configuration:</strong> {reason}',
  'admin.layout.inventoryAttention': {
    one: '<strong class="font-semibold">Inventory needs attention.</strong> {count} paid order line arrived after its stock hold ended and could not be fully deducted. Open the affected orders and reconcile stock.',
    other:
      '<strong class="font-semibold">Inventory needs attention.</strong> {count} paid order lines arrived after its stock hold ended and could not be fully deducted. Open the affected orders and reconcile stock.',
  },
  'admin.nav.heading': 'Admin',
  'admin.nav.toggle': 'Toggle admin sections',
  'admin.nav.menu': 'Menu',
  'admin.nav.dashboard': 'Dashboard',
  'admin.nav.products': 'Products',
  'admin.nav.orders': 'Orders',
  'admin.nav.customers': 'Customers',
  'admin.nav.categories': 'Categories',
  'admin.nav.pages': 'Pages',
  'admin.nav.navigation': 'Navigation',
  'admin.nav.shipping': 'Shipping',
  'admin.nav.media': 'Media',
  'admin.nav.settings': 'Settings',

  // Dashboard (src/pages/admin/index.astro).
  'admin.dashboard.title': 'Dashboard',
  'admin.dashboard.netRevenue': 'Net revenue',
  'admin.dashboard.refunded': '{amount} refunded',
  'admin.dashboard.orders': 'Orders',
  'admin.dashboard.products': 'Products',
  'admin.dashboard.customers': 'Customers',
  'admin.dashboard.recentOrders': 'Recent orders',
  'admin.dashboard.viewAll': 'View all',
  'admin.dashboard.noOrders': 'No orders yet.',
  'admin.dashboard.lowStock': 'Low stock',
  'admin.dashboard.stockLeft': { other: '{count} left' },
  'admin.dashboard.wellStocked': 'Everything\'s well-stocked.',

  // RevenueChart. The heading and summary keep their `&middot;` entity, so they
  // render through th().
  'admin.chart.heading': { other: 'Revenue &middot; last {count} days' },
  'admin.chart.summary': {
    one: '{total} &middot; {count} order',
    other: '{total} &middot; {count} orders',
  },
  'admin.chart.ariaLabel': { other: 'Daily revenue for the last {count} days' },
  'admin.chart.barTitle': {
    one: '{day}: {total} · {count} order',
    other: '{day}: {total} · {count} orders',
  },

  // Login (src/pages/admin/login.astro).
  'admin.login.pageTitle': 'Admin login',
  'admin.login.heading': 'Admin sign in',
  'admin.login.password': 'Password',
  'admin.login.submit': 'Sign in',
  'admin.login.verificationFailed': 'Verification failed — please try again.',
  'admin.login.incorrectPassword': 'Incorrect password.',

  // Cloudflare Access gate (src/features/auth/accessGate.ts): plain-text 403s.
  'admin.access.misconfigured':
    'Cloudflare Access is misconfigured: set both CF_ACCESS_TEAM_DOMAIN and CF_ACCESS_AUD.',
  'admin.access.required': 'Cloudflare Access authentication required.',
  'admin.access.notConfigured':
    'Cloudflare Access is not configured: set CF_ACCESS_TEAM_DOMAIN and CF_ACCESS_AUD.',
} satisfies Record<`admin.${string}`, Message>;
