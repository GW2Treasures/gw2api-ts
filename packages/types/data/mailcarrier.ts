/**
 * Mail Carrier (/v2/mailcarriers).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/mailcarriers
 */
export interface MailCarrier {
  /** The mail carrier id */
  id: number,

  /** The mail carrier name */
  name: string,

  /** The mail carrier icon */
  icon: string,

  /** The item id which unlocks this mail carrier. Can be resolved against `/v2/items`. */
  unlock_items: number[],

  /** The sort order that is used for displaying the mail carrier in-game */
  order: number,

  /** Flags for this mail carrier */
  flags: MailCarrier.Flag[],
}

export namespace MailCarrier {
  export type Flag = 'Default' | (string & {})
}
