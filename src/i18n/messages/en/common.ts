/**
 * Import-free on purpose, like storefront.ts: storefront controls reach this
 * catalog for their English fallback, and the boundary checker walks
 * everything they reach. Same shape as core's Message.
 */
type Message = string | ({ other: string } & Partial<Record<Intl.LDMLPluralRule, string>>);

export const common = {
  // Page links, shared by the storefront catalog and the admin lists.
  'common.pagination.label': 'Pagination',
  'common.pagination.prev': 'Prev',
  'common.pagination.next': 'Next',
} satisfies Record<`common.${string}`, Message>;
