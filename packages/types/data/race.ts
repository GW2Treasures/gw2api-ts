/**
 * Race as returned by `/v2/races`
 * @see https://wiki.guildwars2.com/wiki/API:2/races
 */
export interface Race {
  /** The race id */
  id: Race.Id,

  /** The localized name of the race */
  name: string,

  /** The ids of the racial skills */
  skills: number[],
}

export namespace Race {
  export type Id = 'Asura' | 'Charr' | 'Human' | 'Norn' | 'Sylvary';
}
