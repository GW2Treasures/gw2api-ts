import type { SchemaAfter, SchemaVersion } from "../schema";

/**
 * Recipe as returned from /v2/recipes
 * @see https://wiki.guildwars2.com/wiki/API:2/recipes
 */
export type Recipe<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? Recipe<Exclude<SchemaVersion, undefined>> :
  Schema extends SchemaAfter<'2022-03-09T02:00:00.000Z'> | 'latest' ? Recipe_2022_03_09 :
  Recipe_Base;

type Recipe_Base = {
  /** The recipe id */
  id: number;

  /** The id formatted as a chatlink */
  chat_link: string;

  /** Crafting Disciplines that can use the recipe */
  disciplines: CraftingDiscipline[];

  /** Recipe flags */
  flags: RecipeFlag[];

  /** List of recipe ingredients */
  ingredients: {
    /** The item id used as ingredient */
    item_id: number;

    /** The quantity of this ingredient */
    count: number;
  }[];

  /** The required rating to craft the recipe */
  min_rating: number;

  /** The amount of items produced */
  output_item_count: number;

  /** The item id of the produced item */
  output_item_id: number;

  /** The id of the produced guild upgrade (/v2/guild/upgrades) */
  output_upgrade_id?: number;

  /** The time it takes to craft in milliseconds  */
  time_to_craft_ms: number;

  /** The type of the recipe */
  type: RecipeType;
};

type Recipe_2022_03_09 = Omit<Recipe_Base, 'ingredients'> & {
  /** List of recipe ingredients */
  ingredients: {
    /** The type of ingredient required */
    type: 'Item' | 'GuildUpgrade' | 'Currency';

    /** The id of the ingredient */
    id: number;

    /** The quantity of this ingredient */
    count: number;
  }[];
}

export type CraftingDiscipline = 'Armorsmith' | 'Artificer' | 'Chef' | 'Homesteader' | 'Huntsman' | 'Jeweler' | 'Leatherworker' | 'Scribe' | 'Tailor' | 'Weaponsmith';

// TODO: extend item type?
export type RecipeType =
 | 'Refinement'
 | 'Insignia'
 | 'Inscription'
 | 'Shoulders'
 | 'Boots'
 | 'Gloves'
 | 'Coat'
 | 'Helm'
 | 'Leggings'
 | 'Component'
 | 'UpgradeComponent'
 | 'Bag'
 | 'Bulk'
 | 'Snack'
 | 'Seasoning'
 | 'IngredientCooking'
 | 'Soup'
 | 'Meal'
 | 'Dessert'
 | 'Feast'
 | 'Dye'
 | 'Amulet'
 | 'Ring'
 | 'Earring'
 | 'Staff'
 | 'Trident'
 | 'Scepter'
 | 'Focus'
 | 'Potion'
 | 'Consumable'
 | 'Rifle'
 | 'Warhorn'
 | 'LongBow'
 | 'ShortBow'
 | 'Torch'
 | 'Speargun'
 | 'Pistol'
 | 'Shield'
 | 'Harpoon'
 | 'Sword'
 | 'Axe'
 | 'Dagger'
 | 'Greatsword'
 | 'Hammer'
 | 'Mace'
 | 'RefinementObsidian'
 | 'RefinementEctoplasm'
 | 'Backpack'
 | 'GuildDecoration'
 | 'LegendaryComponent'
 | 'GuildConsumableWvw'
 | 'GuildConsumable';

export type RecipeFlag = 'AutoLearned' | 'LearnedFromItem';
