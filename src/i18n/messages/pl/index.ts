import { common } from './common';
import { storefront } from './storefront';
import { cart } from './cart';
import { checkout } from './checkout';
import { order } from './order';
import { account } from './account';
import { email } from './email';
import { admin } from './admin';
import { adminProducts } from './adminProducts';
import { catalog } from './catalog';
import { adminOrders } from './adminOrders';
import { adminContent } from './adminContent';
import { adminSettings } from './adminSettings';

/** Keys missing here fall back to English. */
export const pl = {
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
