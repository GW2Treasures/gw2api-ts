/**
 * Novelty (/v2/novelties).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/novelties
 */
export interface Novelty {
  /** The novelty id */
  id: number,

  /** The novelty name */
  name: string,

  /** The novelty description */
  description: string,

  /** The novelty icon */
  icon: string,

  /** The novelty slot */
  slot: Novelty.Slot,

  /** The item id which unlocks this novelty. Can be resolved against `/v2/items`. */
  unlock_item: number[],
}

export namespace Novelty {
  export type Slot = 'Chair' | 'Music' | 'HeldItem' | 'Miscellaneous' | 'Tonic' | (string & {})
}
