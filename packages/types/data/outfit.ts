/**
 * Outfits (/v2/outfits).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/outfits
 */
export interface Outfit {
  /** The outfit id */
  id: number,

  /* The outfit name */
  name: string;

  /* The outfit icon */
  icon: string;

  /* List of item ids unlocking this outfit */
  unlock_items: number[];
}
