import type { Skill, SkillFact, SkillFactTraited } from "./skill";

export interface Trait {
  /** The trait id */
  id: number,

  /** The name of the trait */
  name: string,

  /** The icon of the trait */
  icon: string,

  /** The trait description */
  description?: string,

  /** The id of the specialization this trait belongs to */
  specialization: number,

  /** The tier (Adept/Master/Grandmaster) of this trait */
  tier: Trait.Tier,

  /** The order (top to bottom) of major traits */
  order: Trait.Order,

  /** The trait facts */
  facts?: SkillFact[],

  /** The trait facts only active when other traits are active */
  traited_facts?: SkillFactTraited[],

  // TODO: Use Pick<Skill, ???> instead of full skill interface
  /** The skills triggered by this trait */
  skills?: Skill[],
}

export namespace Trait {
  export type Tier = 0 | 1 | 2;
  export type Order = 0 | 1 | 2;
  export type Slot = 'Major' | 'Minor';
}
