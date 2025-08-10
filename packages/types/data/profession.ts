import type { SchemaAfter, SchemaVersion } from "../schema";
import type { Skill } from "./skill";

/**
 * Profession (`/v2/professions`).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/professions
 */
export type Profession<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? _Profession.Default :
  Schema extends SchemaAfter<'2019-12-19T00:00:00.000Z'> | 'latest' ? _Profession.Schema_2019_12_19 :
  _Profession.Default;


namespace _Profession {
  export interface Default {
    /** The profession id */
    id: Profession.Id,

    /** The profession name */
    name: string,

    /** The profession icon */
    icon: string,

    /** The big profession icon */
    icon_big: string,

    /** List of specialization ids (/v2/specializations) */
    specializations: number[],

    /** The weapons available for this profession */
    weapons: { [x in Profession.Weapon.Type]?: Profession.Weapon },

    /** Flags */
    flags: Profession.Flag,

    /** Skills usable by this profession */
    skills: Profession.Skill[],

    /** Trainings tracks available to this profession */
    training: Profession.Training[],
  }

  export interface Schema_2019_12_19 extends Default {
    /**
     * The profession code for a build template link.
     * @since 2019-12-19T00:00:00.000Z
     */
    code: number,


    /**
     * Maps palette ids used in build templates to skill ids
     * @since 2019-12-19T00:00:00.000Z
     */
    skills_by_palette: [paletteId: number, skillId: number][],
  }
}


export namespace Profession {
  export type Id = 'Guardian' | 'Warrior' | 'Engineer' | 'Ranger' | 'Thief' | 'Elementalist' | 'Mesmer' | 'Necromancer' | 'Revenant';

  export type Flag = 'NoRacialSkills' | 'NoWeaponSwap';

  export interface Training {
    /** The id of the training track */
    id: number,

    /** The type of training track */
    category: Training.Category,

    /** The localized name of the training track */
    name: string,

    /** The list of skills and/or traits in this track */
    track: Training.Track[],
  }

  export namespace Training {
    export type Category = 'Skills' | 'Specializations' | 'EliteSpecializations';

    export type Track = Track.Skill | Track.Trait;

    export namespace Track {
      export type Type = 'Skill' | 'Trait';

      interface Common {
        /** The required amount of hero points to train this skill or trait */
        cost: number,

        /** The type of skill or trait */
        type: Type,
      }

      export interface Skill extends Common {
        type: 'Skill',

        /** The id of this skill */
        skill_id: number,

        trait_id?: never,
      }

      export interface Trait extends Common {
        type: 'Trait',

        /** The id of this trait */
        trait_id: number,

        skill_id?: never,
      }
    }
  }

  export interface Weapon {
    /* The specialization required to use this weapon */
    specialization?: number,

    /** The flags that apply to this weapon */
    flags: Weapon.Flag[],

    /** The skills available when using this weapon */
    skills: Weapon.Skill[],
  }

  export interface Skill {
    /** The skill id (see `/v2/skills`) */
    id: number,

    /** The slot of this skill */
    slot: Skill.Slot.Downed | Skill.Slot.Elite | Skill.Slot.Heal | Skill.Slot.Profession | Skill.Slot.Utility;

    /** The type of skill */
    type: Skill.Type.Profession | Skill.Type.Heal | Skill.Type.Utility | Skill.Type.Elite,

    /** The elementalist attunement required for this skill */
    attunement?: Skill.Attunement,

    /** The class this thief skill was stolen from */
    source?: Profession.Id,
  }

  export namespace Weapon {
    export type Type = 'Axe' | 'Dagger' | 'Mace' | 'Pistol' | 'Sword' | 'Scepter' | 'Focus' | 'Shield' | 'Torch' | 'Warhorn' | 'Greatsword' | 'Hammer' | 'Longbow' | 'Rifle' | 'Shortbow' | 'Staff' | 'Speargun' | 'Spear' | 'Trident';

    export type Flag = 'Mainhand' | 'Offhand' | 'TwoHand' | 'Aquatic';

    export interface Skill {
      /** The skill id (see `/v2/skill`) */
      id: number,

      /** The slot of this skill */
      slot: Skill.Slot.Weapon,

      /** The offhand weapon required to use this skill */
      offhand?: Type | 'Nothing',

      /** The elementalist attunement required for this skill */
      attunement?: Skill.Attunement,
    }
  }
}
