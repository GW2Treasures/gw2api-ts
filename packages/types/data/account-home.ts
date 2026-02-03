import type { SchemaAfter, SchemaVersion } from "../schema";

export type AccountHomeCat<Schema extends SchemaVersion = undefined> =
  Schema extends undefined ? AccountHomeCat<Exclude<SchemaVersion, undefined>> :
  Schema extends SchemaAfter<'2019-03-22T00:00:00.000Z'> | 'latest' ? number :
  AccountHomeCatSchema.Legacy;

namespace AccountHomeCatSchema {
  export interface Legacy {
    id: number;
    hint: string;
  }
}
