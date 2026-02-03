import type { SchemaAfter, SchemaVersion } from "../schema";

/**
 * AchievementCategory as returned from `/v2/achievements/categories`
 * @see https://wiki.guildwars2.com/wiki/API:2/achievements/categories
 */
export type AchievementCategory<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? AchievementCategory<Exclude<SchemaVersion, undefined>> :
  Schema extends SchemaAfter<'2022-03-23T19:00:00.000Z'> | 'latest' ? AchievementCategory_2022_03_23 :
  AchievementCategory_Base;

interface AchievementCategory_Base {
  /** The id of the achievement category */
  id: number;

  /** The name of the achievement category */
  name: string;

  /** The description of the achievement category */
  description: string;

  /** The icon of the achievement category */
  icon: string;

  /** The order of the achievement category in which they appear in-game (ascending) */
  order: number;

  /** List of achievement ids that are part of this achievement category */
  achievements: number[];
}

interface AchievementCategory_2022_03_23 extends Omit<AchievementCategory_Base, 'achievements'> {
  /** List of achievements that are currently part of this achievement category */
  achievements: AchievementCategoryAchievement[];

  /** List of achievements that will be part of this achievement category tomorrow, if this achievement category is on a rotation */
  tomorrow?: AchievementCategoryAchievement[];
}

interface AchievementCategoryAchievement {
  /** The id of the achievement */
  id: number;

  /** Flags of the achievement */
  flags?: ('PvE' | 'PvP' | 'WvW' | 'SpecialEvent')[];

  /** The required level range for this achievement to be available in-game (both inclusive)  */
  level?: [number, number];

  /** Required access to an extension for this achievement to be available in-game */
  required_access?: {
    /** The extension for this requirement */
    product: 'PathOfFire' | 'HeartOfThorns';

    /** Condition for this extension */
    condition: 'NoAccess' | 'HasAccess';
  };
}
