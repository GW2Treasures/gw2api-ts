import type { SchemaAfter, SchemaVersion } from "../schema";
import type { ItemStack } from "./item";
import type { CraftingDiscipline } from "./recipe";
import type { Profession as ProfessionType } from "./profession";
import type { Race as RaceType } from "./race";

/**
 * Character info
 * Required scopes: characters
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/characters
 */
export type Character<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? Character<Exclude<SchemaVersion, undefined>>:
  Schema extends SchemaAfter<'2019-12-19T00:00:00.000Z'> | 'latest' ? __Character.Schema_2019_12_19<Schema> :
  __Character.Schema_Initial<Schema>;

namespace __Character {
  // always included. Some of these are `Partial<>` because they are only included with some scopes. This should be typed in the future if the scopes are known...
  type Base<Schema extends SchemaVersion> = CharacterBackstory & CharacterCore<Schema> & CharacterCrafting & Partial<CharacterEquipment<Schema>> & Partial<CharacterInventory> & Partial<CharacterRecipes> & Partial<CharacterTraining>;
  // Schema version 2019-12-19T00:00:00.000Z or later, this endpoint will include v2/characters/:id/buildtabs and v2/characters/:id/equipmenttabs and will no longer include v2/characters/:id/skills and v2/characters/:id/specializations
  export type Schema_2019_12_19<Schema extends SchemaVersion> = Base<Schema> & { build_tabs?: CharacterBuildTab[], equipment_tabs?: CharacterEquipmentTab[] } & CharacterExtras_2019_12_19;
  export type Schema_Initial<Schema extends SchemaVersion> = Base<Schema> & Partial<CharacterSpecializations> & CharacterExtras;
}

interface CharacterExtras {
  /** Trained WvW abilities  */
  wvw_abilities: {
    /** Ability id (/v2/wvw/abilities) */
    id: number;

    /** Current rank */
    rank: number;
  }[];

  /** PvP Equipment */
  equipment_pvp: CharacterPvpEquipment;

  flags: [] | ['Beta'];
}

interface CharacterExtras_2019_12_19 {
  /** Number of build tabs unlocked for this character */
  build_tabs_unlocked: number;

  /** Active build tab index */
  active_build_tab: number;

  /** Number of equipment tabs unlocked for this character */
  equipment_tabs_unlocked: number;

  /** Active equipment tab index */
  active_equipment_tab: number;
}

/**
 * Character Backstory
 * Required scopes: characters
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/backstory
 */
export interface CharacterBackstory {
  /** Backstory ids, see /v2/backstory/answers */
  backstory: string[]
}

/**
 * Character Build Tab
 * Required scopes: builds, characters
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/buildtabs
 */
export interface CharacterBuildTab {
  /** The index of this tab */
  tab: number;

  /** Whether or not this is the tab selected on the character currently */
  is_active: boolean;

  /** Build of the tab */
  build: {

    /** Name of the build */
    name: string;

    /** Profession of the build */
    profession: ProfessionType.Id;

    /** specializations */
    specializations: [CharacterSpecializationSelection, CharacterSpecializationSelection, CharacterSpecializationSelection];

    /** Selected skills */
    skills: CharacterSkillSelection;

    /** Selected aquatic skills */
    aquatic_skills: CharacterSkillSelection;

    /** Selected legend ids (Revenant only) */
    legends?: [string | null, string | null];

    /** Selected aquatic legend ids (Revenant only) */
    aquatic_legends?: [string | null, string | null];

    /** Selected pet ids (ranger only) */
    pets?: {
      /** Selected terrestrial pet ids  */
      terrestrial: [number | null, number | null]

      /** Selected aquatic pet ids */
      aquatic: [number | null, number | null]
    }
  }
}

/**
 * Core character info
 * Requires scopes: characters
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/core
 */
export type CharacterCore<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? CharacterCore<Exclude<SchemaVersion, undefined>> :
  Schema extends SchemaAfter<'2019-02-21T00:00:00.000Z'> | 'latest' ? CharacterCore_2019_02_21 :
  CharacterCoreBase;

interface CharacterCoreBase {
  /** The characters name */
  name: string;

  /** The characters race */
  race: RaceType.Id;

  /** The characters gender */
  gender: Gender;

  /** The characters profession */
  profession: Profession;

  /** The characters level */
  level: number;

  /** The guild id of the guild this characters is representing */
  guild?: string;

  /** Playtime in seconds */
  age: number;

  /** Creation timestamp (ISO-8601) */
  created: string;

  /** Death counter */
  deaths: number;

  /** Title id of the currently selected title (/v2/titles) */
  title?: number;
}

interface CharacterCore_2019_02_21 extends CharacterCoreBase {
  /** Last modification timestamp */
  last_modified: string;
}

/**
 * Crafting disciplines available to the character
 * Requires scopes: characters
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/crafting
 */
export interface CharacterCrafting {
  /** All unlocked crafting disciplines for this character */
  crafting: {
    /** Crafting discipline */
    discipline: CraftingDiscipline;

    /** The crafting level */
    rating: number;

    /** Crafting discipline is currently active */
    active: boolean;
  }[]
}

/**
 * Character equipment
 * Required scopes: builds, characters, inventories
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/equipment
 */
export interface CharacterEquipment<Schema extends SchemaVersion = undefined> {
  equipment: CharacterEquipmentEntry<Schema>[]
}

export type CharacterEquipmentEntry<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? CharacterEquipmentEntry<Exclude<SchemaVersion, undefined>> :
  Schema extends SchemaAfter<'2019-12-19T00:00:00.000Z'> | 'latest' ? CharacterEquipmentEntry_2019_12_19 :
  CharacterEquipmentEntryBase;

interface CharacterEquipmentEntryBase extends Omit<ItemStack, 'upgrade_slot_indices' | 'count'> {
  /** The equipment slot in which the item is slotted.  */
  slot: EquipmentSlot;
}

interface CharacterEquipmentEntry_2019_12_19 extends Omit<CharacterEquipmentEntryBase, 'slot'> {
  /** The equipment slot in which the item is slotted. `undefined` if equipment is in an inactive tab. */
  slot: EquipmentSlot | undefined;

  /** Location the item is stored in */
  location: 'Equipped' | 'Armory' | 'EquippedFromLegendaryArmory' | 'LegendaryArmory';

  /** Which tabs reuse this item */
  tabs: number[];
}

type EquipmentSlot = 'HelmAquatic' | 'Backpack' | 'Coat' | 'Boots' | 'Gloves' | 'Helm' | 'Leggings' | 'Shoulders' | 'Accessory1' | 'Accessory2' | 'Ring1' | 'Ring2' | 'Amulet' | 'WeaponAquaticA' | 'WeaponAquaticB' | 'WeaponA1' | 'WeaponA2' | 'WeaponB1' | 'WeaponB2' | 'Sickle' | 'Axe' | 'Pick';

/**
 * Characters equipment template tabs.
 * Requires scopes: characters, builds
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/equipmenttabs
 */
export interface CharacterEquipmentTab {
  /** Tab index */
  tab: number;

  /** Name of the equipment tab */
  name: string;

  /** Whether or not this is the tab selected on the character currently */
  is_active: boolean;

  /** Equipped items */
  equipment: Omit<CharacterEquipmentEntry<'2019-12-19T00:00:00.000Z'>, 'tabs'>[];

  /** PvP Equipment */
  equipment_pvp: CharacterPvpEquipment;
}

/**
 * Characters inventory
 * Requires scopes: characters, inventories
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/inventory
 */
export interface CharacterInventory {
  /** The characters bags */
  bags: ({
    /** THe item id of the bag */
    id: number;

    /** The size of the bag */
    size: number;

    /** The inventory of the bag */
    inventory: Array<ItemStack | null>
  } | null)[]
}

/**
 * Recipes unlocked by a character
 * Requires scopes: characters, inventories
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/recipes
 */
export interface CharacterRecipes {
  /** Recipe ids */
  recipes: number[]
}

/**
 * Skills equipped by a character
 * Requires scopes: characters, builds
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/skills
 */
export interface CharacterSkills {
  /** Equipped skills per gamemode */
  skills: Record<'pve' | 'pvp' | 'wvw', CharacterSkillSelection>
}

export interface CharacterSkillSelection {
  /** Heal skill id */
  heal: number | null;

  /** Utility skill ids */
  utilities: [number | null, number | null, number | null];

  /** Elite skill id */
  elite: number | null;

  /** Legend ids (Revenant only) */
  legends?: [string | null, string | null];
}

/**
 * Character specializations
 * Requires scopes: characters, builds
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/specializations
 */
export interface CharacterSpecializations {
  specializations: Record<'pve' | 'pvp' | 'wvw', [CharacterSpecializationSelection, CharacterSpecializationSelection, CharacterSpecializationSelection]>
}

export interface CharacterSpecializationSelection {
  /** Specializations id */
  id: number | null;

  /** Selected major traits */
  traits: [number | null, number | null, number | null];
}

/**
 * Character skill trees
 * Requires scopes: characters, builds
 * @see https://wiki.guildwars2.com/wiki/API:2/characters/:id/training
 */
export interface CharacterTraining {
  /** Trained skill trees */
  training: {
    /** Skill tree id (/v2/professions training) */
    id: number;

    /** Amount of spent hero points in this skill tree */
    spent: number;

    /** Fully trained */
    done: boolean;
  }[];
}

export interface CharacterPvpEquipment {
  /** Equipped PvP Amulet id (/v2/pvp/amulets) */
  amulet: number | null;

  /** Equipped rune item id */
  rune: number | null;

  /** Equipped sigil item ids */
  sigils: [number | null, number | null, number | null, number | null];
}

/** @deprecated Use Race.Id instead */
export type Race = RaceType.Id;

export type Gender = 'Male' | 'Female';

/** @deprecated Use `Profession.Id` instead */
export type Profession = ProfessionType.Id;
