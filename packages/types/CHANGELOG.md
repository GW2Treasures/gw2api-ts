# @gw2api/types

## 0.0.23

### Patch Changes

- Allow specifying `page_size` without `page` for paginated endpoints ([#84](https://github.com/GW2Treasures/gw2api-ts/pull/84) by [@darthmaim](https://github.com/darthmaim))

## 0.0.22

### Patch Changes

- Add types for `/v2/commerce/delivery` ([#82](https://github.com/GW2Treasures/gw2api-ts/pull/82) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/commerce/exchange` ([#82](https://github.com/GW2Treasures/gw2api-ts/pull/82) by [@darthmaim](https://github.com/darthmaim))
- Improve commerce types ([#82](https://github.com/GW2Treasures/gw2api-ts/pull/82) by [@darthmaim](https://github.com/darthmaim))

## 0.0.21

### Patch Changes

- Add types for `/v2/minis` ([#78](https://github.com/GW2Treasures/gw2api-ts/pull/78) by [@darthmaim](https://github.com/darthmaim))

## 0.0.20

### Patch Changes

- Add types for `/v2/account/homestead/glyphs` ([`6e39a8a`](https://github.com/GW2Treasures/gw2api-ts/commit/6e39a8a224038606a15eeb4171f9c0d817fc28fc) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/homestead/decorations/categories` ([`2ef7d60`](https://github.com/GW2Treasures/gw2api-ts/commit/2ef7d60c292d2e34d08543232948d02845edecf1) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/homestead/glyphs` ([`e770961`](https://github.com/GW2Treasures/gw2api-ts/commit/e770961b0ff3c48f96364231fc930eb018b19fb3) by [@darthmaim](https://github.com/darthmaim))

## 0.0.19

### Patch Changes

- Add types for `/v2/home/cats` and `/v2/home/nodes` ([`fcd1158`](https://github.com/GW2Treasures/gw2api-ts/commit/fcd11589d076841490da7377028da68d001a3adc) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/homestead/decorations` and `/v2/account/homestead/decorations` ([#72](https://github.com/GW2Treasures/gw2api-ts/pull/72) by [@darthmaim](https://github.com/darthmaim))
- Add type for `/v2/account/home/cats` ([`d97021e`](https://github.com/GW2Treasures/gw2api-ts/commit/d97021e2f34639b41754d4b425f96ee15ae4aebe) by [@darthmaim](https://github.com/darthmaim))

## 0.0.18

### Patch Changes

- Fix `Item['details']` type on newer schema ([`63e42d1`](https://github.com/GW2Treasures/gw2api-ts/commit/63e42d1244461ed128e333ebc9828876bca49f85) by [@darthmaim](https://github.com/darthmaim))

## 0.0.17

### Patch Changes

- Add types for `/v2/skills` ([`3f326bd`](https://github.com/GW2Treasures/gw2api-ts/commit/3f326bd5ef3f103e6fb9ea9d6ec4c1cb25265c4c) by [@darthmaim](https://github.com/darthmaim))
- Export union types from Achievement ([`28bfd57`](https://github.com/GW2Treasures/gw2api-ts/commit/28bfd575f3b6dd16cead9ef2c1f622ce5ccb1359) by [@darthmaim](https://github.com/darthmaim))

## 0.0.16

### Patch Changes

- Add types for `/v2/achievements`, `/v2/achievements/categories` and `/v2/achievements/groups` ([`18c1e69`](https://github.com/GW2Treasures/gw2api-ts/commit/18c1e6916e31132cd072aa94a2475d5700cc6643) by [@darthmaim](https://github.com/darthmaim))

## 0.0.15

### Patch Changes

- Export `SharedInventoryItemStack` ([`145a019`](https://github.com/GW2Treasures/gw2api-ts/commit/145a019081616807dcb2a8efeed07f540202f13c) by [@darthmaim](https://github.com/darthmaim))
- Omit `count` from `CharacterEquipmentEntry` ([`f28578c`](https://github.com/GW2Treasures/gw2api-ts/commit/f28578c120a4eade6a4d0b65ad9712ce0461cea4) by [@darthmaim](https://github.com/darthmaim))
- Fix `CharacterInventory` type (`bags` can contain `null` entries) ([`2e3a287`](https://github.com/GW2Treasures/gw2api-ts/commit/2e3a2872b76dbf991b59bae847dc62df996558ce) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/account/legendaryarmory` and `/v2/legendaryarmory` ([`dfd22c6`](https://github.com/GW2Treasures/gw2api-ts/commit/dfd22c6f3ca74646dbef230660acc9b952e4cddb) by [@darthmaim](https://github.com/darthmaim))

## 0.0.14

### Patch Changes

- Add types for `/v2/colors` ([`0a727f9`](https://github.com/GW2Treasures/gw2api-ts/commit/0a727f9a7371ee2bb9175dd0f253b21e6f388d15) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/currencies` ([`76bd812`](https://github.com/GW2Treasures/gw2api-ts/commit/76bd812d9a2e8a26d12c4baa0c1afbe7ad193391) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/titles` ([`3ecdca5`](https://github.com/GW2Treasures/gw2api-ts/commit/3ecdca5e923dbf4f4fb0863229e12ef27e101661) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/skins` ([`2badee8`](https://github.com/GW2Treasures/gw2api-ts/commit/2badee806b4b3c952e0da84ecedccccdeff1d5c5) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/recipes` ([`8e7ac8f`](https://github.com/GW2Treasures/gw2api-ts/commit/8e7ac8f2cb4c42dcc64e2aa53a115d48c1c8dea0) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/guild/upgrades` ([`eae3e58`](https://github.com/GW2Treasures/gw2api-ts/commit/eae3e58c9c6fb76003f8f6bbf1fd4442b77a5956) by [@darthmaim](https://github.com/darthmaim))

## 0.0.13

### Patch Changes

- Allow passing partial options for unknown endpoints ([#63](https://github.com/GW2Treasures/gw2api-ts/pull/63) by [@darthmaim](https://github.com/darthmaim))

## 0.0.12

### Patch Changes

- Fix wrong type for `WizardsVaultObjective.title` ([#61](https://github.com/GW2Treasures/gw2api-ts/pull/61) by [@darthmaim](https://github.com/darthmaim))

## 0.0.11

### Patch Changes

- Fix `/v2/guild/upgrades` being matched as `/v2/guild/:id/` ([#59](https://github.com/GW2Treasures/gw2api-ts/pull/59) by [@darthmaim](https://github.com/darthmaim))

## 0.0.10

### Patch Changes

- Improve endpoint type resolution for endpoints that are both authenticated and localized ([#58](https://github.com/GW2Treasures/gw2api-ts/pull/58) by [@darthmaim](https://github.com/darthmaim))
- Add types for character endpoints ([#58](https://github.com/GW2Treasures/gw2api-ts/pull/58) by [@darthmaim](https://github.com/darthmaim))
  - `/v2/characters`
  - `/v2/characters/:id/backstory`
  - `/v2/characters/:id/buildtabs`
  - `/v2/characters/:id/core`
  - `/v2/characters/:id/crafting`
  - `/v2/characters/:id/equipment`
  - `/v2/characters/:id/equipmenttabs`
  - `/v2/characters/:id/inventory`
  - `/v2/characters/:id/recipes`
  - `/v2/characters/:id/skills`
  - `/v2/characters/:id/specializations`
  - `/v2/characters/:id/training`
- Add types for new endpoints ([#56](https://github.com/GW2Treasures/gw2api-ts/pull/56) by [@darthmaim](https://github.com/darthmaim))
  - `/v2/account/bank`
  - `/v2/account/inventory`
  - `/v2/account/material`
  - `/v2/materials`

## 0.0.9

### Patch Changes

- Fix type resolution for undefined schema ([#54](https://github.com/GW2Treasures/gw2api-ts/pull/54) by [@darthmaim](https://github.com/darthmaim))

## 0.0.8

### Patch Changes

- Enable `verbatimModuleSyntax` ([#49](https://github.com/GW2Treasures/gw2api-ts/pull/49) by [@darthmaim](https://github.com/darthmaim))

## 0.0.7

### Patch Changes

- Fix type for `/v2/commerce/prices` ([`eba7a59`](https://github.com/GW2Treasures/gw2api-ts/commit/eba7a5923b1a563517d12a6d15b96ef8ebe7eece) by [@darthmaim](https://github.com/darthmaim))

## 0.0.6

### Patch Changes

- Add types for `/v2/account/wallet` ([#43](https://github.com/GW2Treasures/gw2api-ts/pull/43) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/account/achievements` ([#41](https://github.com/GW2Treasures/gw2api-ts/pull/41) by [@darthmaim](https://github.com/darthmaim))
- Fix model schema resolution ([#39](https://github.com/GW2Treasures/gw2api-ts/pull/39) by [@darthmaim](https://github.com/darthmaim))
- Add types for wizards vault endpoints ([#47](https://github.com/GW2Treasures/gw2api-ts/pull/47) by [@darthmaim](https://github.com/darthmaim))
  - `/v2/account/wizardsvault/daily`
  - `/v2/account/wizardsvault/listings`
  - `/v2/account/wizardsvault/special`
  - `/v2/account/wizardsvault/weekly`
  - `/v2/wizardsvault`
  - `/v2/wizardsvault/listings`
  - `/v2/wizardsvault/objectives`
- Add types for account endpoints that return a list of ids: ([#42](https://github.com/GW2Treasures/gw2api-ts/pull/42) by [@darthmaim](https://github.com/darthmaim))
  - `/v2/account/dyes`
  - `/v2/account/emotes`
  - `/v2/account/gliders`
  - `/v2/account/home/nodes`
  - `/v2/account/jadebots`
  - `/v2/account/mailcarriers`
  - `/v2/account/mapchests`
  - `/v2/account/minis`
  - `/v2/account/mounts/skins`
  - `/v2/account/mounts/types`
  - `/v2/account/novelties`
  - `/v2/account/outfits`
  - `/v2/account/pvp/heroes`
  - `/v2/account/raids`
  - `/v2/account/recipes`
  - `/v2/account/skiffs`
  - `/v2/account/skins`
  - `/v2/account/titles`
  - `/v2/account/worldbosses`

## 0.0.5

### Patch Changes

- 7aa6297: Fix typo in type `KnownAuthenticatedEndpoint`
- 8faa21a: Add `/v2/commerce/listings` and `/v2/commerce/prices` types
- 44e48ec: Add `/v2/commerce/transactions` endpoints

## 0.0.4

### Patch Changes

- 716cd7c: Update release workflow

## 0.0.3

### Patch Changes

- 561a2a7: Add types for /v2/quaggans and /v2/createsubtoken to data directory
