import type { MaterialStack } from './material';

/**
 * Account shared inventory slots.
 * Required scopes: account, inventories
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/materials
 */
export type AccountMaterials = MaterialStack[];
