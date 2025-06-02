/**
 * Jade Bot (/v2/jadebots).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/jadebots
 */
export interface JadeBot {
  /** The jade bot id */
  id: number,

  /** The jade bot name */
  name: string,

  /** The jade bot name */
  description: string,

  /** The item id which unlocks this jade bot. Can be resolved against `/v2/items`. */
  unlock_item: number,
}
