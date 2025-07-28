/**
 * Achievement as returned from `/v2/achievements`
 * @see https://wiki.guildwars2.com/wiki/API:2/achievements
 */
export interface Achievement {
  /** The id of the achievement */
  id: number;

  /** The name of the achievement */
  name: string;

  /** Description of the achievement */
  description: string;

  /** The icon of the achievement if different from the achievement category */
  icon?: string;

  /** The type of the achievement */
  type: 'Default' | 'ItemSet';

  /** Achievement Flags */
  flags: AchievementFlags[];

  /** The description of the achievement when it is still locked */
  locked_text: string;

  /** List of achievement ids that have to be completed before unlocking this achievement */
  prerequisites?: number[];

  /** Achievement requirement */
  requirement: string;

  /** Achievement objectives */
  bits?: AchievementBit[];

  /** Final rewards */
  rewards?: AchievementReward[];

  /** Reward tiers */
  tiers: AchievementTier[];

  /** Maximum AP for repeatable achievements */
  point_cap?: number;
};

export type AchievementFlags =
  | 'Pvp'
  | 'CategoryDisplay'
  | 'MoveToTop'
  | 'IgnoreNearlyComplete'
  | 'Repeatable'
  | 'Hidden'
  | 'RequiresUnlock'
  | 'RepairOnLogin'
  | 'Daily'
  | 'Weekly'
  | 'Monthly'
  | 'Permanent'

export type AchievementBit =
  | AchievementBit.Text
  | AchievementBit.ItemSkinMinipet

export namespace AchievementBit {
  export type Text = { type: 'Text', text: string }
  export type ItemSkinMinipet = { type: 'Item' | 'Skin' | 'Minipet', id: number, text?: string }
}

export type AchievementReward =
  | AchievementReward.Item
  | AchievementReward.Title
  | AchievementReward.Mastery
  | AchievementReward.Coins

export namespace AchievementReward {
  export type Item = { type: 'Item', id: number, count: number }
  export type Title = { type: 'Title', id: number }
  export type Mastery = { type: 'Mastery', id: number, region: MasteryRegion }
  export type Coins = { type: 'Coins', count: number }
}

export type MasteryRegion =
  | 'Tyria'    // core
  | 'Maguuma'  // HoT
  | 'Desert'   // PoF
  | 'Tundra'   // Icebrood
  | 'Jade'     // EoD
  | 'Sky'      // SotO
  | 'Unknown'; // Non whitelisted regions for future expansions

export type AchievementTier = {
  /** Number of objectives that need to be completed */
  count: number;

  /** AP rewarded for this tier */
  points: number;
}
