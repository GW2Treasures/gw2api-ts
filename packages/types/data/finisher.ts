/**
 * Finisher (/v2/finishers).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/finishers
 */
export interface Finisher {
  /** The finisher id */
  id: number,

  /* The finisher name */
  name: string;

  /* The finisher icon */
  icon: string;

  /* The sort order that is used for displaying the finisher in-game */
  order: number;

  /* A description of how to unlock the finisher. */
  unlock_details: string;

  /* List of item ids unlocking this finisher */
  unlock_items: number[];
}
