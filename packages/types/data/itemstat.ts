import type { Attribute as ItemAttribute } from './item';

/**
 * Itemstats (/v2/itemstats).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/itemstats
 */
export interface ItemStat {
  /** The itemstat id */
  id: number,

  /** The mini name */
  name: string,

  /** The attributes for this itemstat */
  attributes: ItemStat.Attribute[],
}

export namespace ItemStat {
  export interface Attribute {
    /** The name of the attribute */
    attribute: ItemAttribute,

    /** Multiplier to calculate the attribute value */
    multiplier: number,

    /** Additional value for this attribute. */
    value: number,
  }
}
