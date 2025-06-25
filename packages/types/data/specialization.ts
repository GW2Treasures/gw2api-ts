import type { Profession } from "./profession";

/**
 * Specialization as returned by `/v2/specializations`
 * @see https://wiki.guildwars2.com/wiki/API:2/specializations
 */
export interface Specialization {
  /** The specialization id */
  id: number,

  /** The name of the specialization */
  name: string,

  /** The profession this specialization belongs to */
  profession: Profession.Id,

  /** Indicating if this specialization is an elite specialization */
  elite: boolean,

  /** The icon of this specialization */
  icon: string,

  /** The background image url used by this specialization */
  background: string,

  /** The ids of the minor traits in this specialization */
  minor_traits: number[],

  /** The ids of the major traits in this specialization */
  major_traits: number[],
}
