import type { Gender, Race } from './character';

/**
 * Skin as returned from `/v2/skins`
 * @see https://wiki.guildwars2.com/wiki/API:2/skins
 */
export interface Skin {
  /** The id of the skin */
  id: number;

  /** The name of the skin */
  name: string;

  /** Description of the skin */
  description?: string;

  /** The icon of the skin */
  icon?: string;

  /** The rarity of the skin */
  rarity: 'Basic' | 'Masterwork' | 'Legendary' | 'Rare' | 'Exotic' | 'Ascended';

  /** Flags of this skin */
  flags: SkinFlag[];

  /** Restrictions of the skin */
  restrictions: string[];

  /** Skin type */
  type: 'Armor' | 'Back' | 'Gathering' | 'Weapon';

  /** Skin details */
  details?: {
    /** Damage type */
    damage_type?: 'Physical' | 'Choking' | 'Fire' | 'Lightning' | 'Ice';

    /** Dye slots */
    dye_slots?: {
      default: DyeSlot[];
      overrides:  Record<`${Race}${Gender}`, DyeSlot[]>;
    };

    /** The subtype of this skin */
    type: 'Leggings' | 'Coat' | 'Boots' | 'Gloves' | 'Shoulders' | 'Helm' | 'HelmAquatic' | 'Foraging' | 'Logging' | 'Mining' | 'LargeBundle' | 'Rifle' | 'SmallBundle' | 'Toy' | 'ToyTwoHanded' | 'Axe' | 'Staff' | 'Hammer' | 'Pistol' | 'Longbow' | 'Dagger' | 'Sword' | 'Shortbow' | 'Focus' | 'Torch' | 'Spear' | 'Mace' | 'Speargun' | 'Greatsword' | 'Scepter' | 'Warhorn' | 'Shield' | 'Trident' | 'Lure' | 'Bait' | 'Fishing';

    /** The weight class of this armor skin */
    weight_class?: 'Heavy' | 'Light' | 'Medium' | 'Clothing';
  };
};

export interface DyeSlot {
  color_id: number;
  material: 'leather' | 'cloth' | 'metal';
}

export type SkinFlag = 'ShowInWardrobe' | 'NoCost' | 'HideIfLocked' | 'OverrideRarity';
