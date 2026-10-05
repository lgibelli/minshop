// The catalog-free formatter's type, not ../../core's: storefront controls
// reach this file for their English fallback, and core would drag every
// locale's catalogs into the storefront boundary checker's import walk.
import type { Message } from '../../format';

export const common = {
  // Page links, shared by the storefront catalog and the admin lists.
  'common.pagination.label': 'Pagination',
  'common.pagination.prev': 'Prev',
  'common.pagination.next': 'Next',
} satisfies Record<`common.${string}`, Message>;
