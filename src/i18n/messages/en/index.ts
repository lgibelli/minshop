import { common } from './common';
import { storefront } from './storefront';
import { cart } from './cart';
import { checkout } from './checkout';
import { order } from './order';
import { account } from './account';
import { email } from './email';
import { admin } from './admin';
import { adminProducts } from './adminProducts';
import { adminOrders } from './adminOrders';
import { adminContent } from './adminContent';
import { adminSettings } from './adminSettings';

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
  ...adminOrders,
  ...adminContent,
  ...adminSettings,
};
