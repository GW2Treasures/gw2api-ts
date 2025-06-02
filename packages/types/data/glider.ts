/**
 * Glider (/v2/gliders).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/gliders
 */
export interface Glider {
  /** The glider id */
  id: number,

  /** The glider icon */
  icon: string,

  /** The glider name */
  name: string,

  /** A description for this glider */
  description: string,

  /** The sort order that is used for displaying the glider in-game */
  order: number,

  /* List of item ids unlocking this glider */
  unlock_items?: number[],

  /** List of dye ids (`/v2/colors`) */
  default_dyes: number[],
}
