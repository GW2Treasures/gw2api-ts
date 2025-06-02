/**
 * Outfits (/v2/outfits).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/outfits
 */
export interface Outfit {
  /** The mini id */
  id: number,

  /* The mini name */
  name: string;

  /* The mini icon */
  icon: string;

  /* List of item ids unlocking this outfit */
  unlock_items: number[];
}
