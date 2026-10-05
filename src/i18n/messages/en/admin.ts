import type { Message } from '../../core';

export const admin = {
  'admin.language': 'Admin language',
} satisfies Record<`admin.${string}`, Message>;
