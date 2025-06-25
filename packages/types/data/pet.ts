/**
 * Ranger pets as returned by `/v2/pets`
 * @see https://wiki.guildwars2.com/wiki/API:2/pets
 */
export interface Pet {
  /** The pet id */
  id: number,

  /** The name of the pet */
  name: string,

  /** The description of the pet */
  description: string,

  /** The icon of this pet */
  icon: string,

  /** The skills used by this pet */
  skills: Pet.Skill[],
}

export namespace Pet {
  export interface Skill {
    /** The id of the skill used by this pet */
    id: number,
  }
}
