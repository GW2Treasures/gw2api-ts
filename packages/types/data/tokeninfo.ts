import type { SchemaAfter, SchemaVersion } from "../schema";

export type Tokeninfo<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? TokeninfoBase :
  Schema extends SchemaAfter<'2019-05-22T00:00:00.000Z'> | 'latest' ? Tokeninfo_2019_05_22 :
  TokeninfoBase;

export type Permission = 'account' | 'builds' | 'characters' | 'guilds' | 'inventories' | 'progression' | 'pvp' | 'tradingpost' | 'unlocks' | 'wallet' | 'wvw';

interface TokeninfoBase {
  /** The token id */
  id: string

  /** The name of the base API key */
  name: string

  /** List of permissions */
  permissions: Permission[]
}

type Tokeninfo_2019_05_22 = TokeninfoBase & ({
  /** The type of the token */
  type: 'APIKey'
} | {
  /** The type of the token */
  type: 'Subtoken'

  /** Expiration date (ISO8601) of the subtoken. */
  expires_at: string

  /** The issue date (ISO8601) of the subtoken  */
  issued_at: string

  /** The URLs included in this subtoken */
  urls?: string[]
});
