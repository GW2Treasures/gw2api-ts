import type { SchemaAfter, SchemaVersion } from "../schema";

export type Account<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? AccountBase :
  Schema extends SchemaAfter<'2019-12-19T00:00:00.000Z'> | 'latest' ? Account_2019_12_19 :
  Schema extends SchemaAfter<'2019-02-21T00:00:00.000Z'> ? Account_2019_02_21 :
  AccountBase;

interface AccountBase {
  /** The unique id of the account. */
  id: string

  /** The age of the account in seconds. */
  age: number

  /** The account name. It is possible that the name change. */
  name: string

  /** The id of the home world the account is assigned to. Can be resolved against /v2/worlds. */
  world: number

  /** A list of guilds assigned to the given account. */
  guilds: string[]

  /** A list of guilds the account is leader of. Requires the additional guilds scope. */
  guild_leader: string[]

  /** The creation date of the account as ISO-8601 timestamp. */
  created: string

  /** A list of what content this account has access to. */
  access: AccountAccess[]

  /** True if the player has bought a commander tag. */
  commander: boolean

  /** The account's personal fractal reward level. Requires the additional progression scope. */
  fractal_level?: number

  /** The daily AP the account has. Requires the additional progression scope. */
  daily_ap?: number

  /** The monthly AP the account has. Requires the additional progression scope. */
  monthly_ap?: number

  /** The account's personal wvw rank. Requires the additional progression scope. */
  wvw_rank?: number
}

export type AccountAccess = 'None' | 'PlayForFree' | 'GuildWars2' | 'HeartOfThorns' | 'PathOfFire' | 'EndOfDragons' | 'SecretsOfTheObscure' | 'JanthirWilds';

interface Account_2019_02_21 extends AccountBase {
  /** An ISO-8601 standard timestamp of when the account information last changed as perceived by the API. */
  last_modified: string;
}

interface Account_2019_12_19 extends Account_2019_02_21 {
  /** The amount of build storage slot an account has unlocked. Requires the additional builds scope. */
  build_storage_slots?: number;
}
