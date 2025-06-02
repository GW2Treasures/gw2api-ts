import type { DyeSlot } from './skin';

/**
 * Outfits (/v2/skiffs).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/skiffs
 */
export interface Skiff {
  /** The skiff id */
  id: number,

  /** The skiff name */
  name: string;

  /** The skiff icon */
  icon: string;

  /** Available dye slots */
  dye_slots: DyeSlot[];
}
