/**
 * Legend as returned by `/v2/legends`
 * @see https://wiki.guildwars2.com/wiki/API:2/legends
 */
export interface Legend {
  /** The legend id */
  id: Legend.Id,

  /** The code of the legend as used by build templates */
  code: Legend.Code,

  /** The id of the profession skill to swap to this legend */
  swap: number,

  /** The id of the heal skill used by this legend */
  heal: number,

  /** The id of the elite skill used by this legend */
  elite: number,

  /** The ids of the utility skills used by this legend */
  utilities: number[],
}

export namespace Legend {
  export type Id = `Legend${Code}`;
  export type Code = 1 | 2 | 3 | 4 | 5 | 6;
}
