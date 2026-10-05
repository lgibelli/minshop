import { common } from './common.ts';
import { storefront } from './storefront.ts';
import { cart } from './cart.ts';
import { checkout } from './checkout.ts';
import { order } from './order.ts';
import { account } from './account.ts';
import { email } from './email.ts';
import { admin } from './admin.ts';
import { adminProducts } from './adminProducts.ts';
import { catalog } from './catalog.ts';
import { adminOrders } from './adminOrders.ts';
import { adminContent } from './adminContent.ts';
import { adminSettings } from './adminSettings.ts';

/** English: the source catalog. Its keys define MessageKey. */
export const en = {
  ...common,
  ...storefront,
  ...cart,
  ...checkout,
  ...order,
  ...account,
  ...email,
  ...admin,
  ...adminProducts,
  ...catalog,
  ...adminOrders,
  ...adminContent,
  ...adminSettings,
};
