/**
 * Minis (/v2/minis).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/minis
 */
export interface Mini {
  /** The mini id */
  id: number,

  /** The mini name */
  name: string;

  /** A description of how to unlock the mini. */
  unlock?: string;

  /** The mini icon */
  icon: string;

  /** The sort order that is used for displaying the mini in-game */
  order: number;

  /** The item which unlocks the mini and can be resolved against /v2/items */
  item_id: number;
}
