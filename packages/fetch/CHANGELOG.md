# @gw2api/fetch

## 0.4.2

### Patch Changes

- Maintenance Release ([#151](https://github.com/GW2Treasures/gw2api-ts/pull/151) by [@darthmaim](https://github.com/darthmaim))

## 0.4.1

### Patch Changes

- Don't leak access token in error messages ([`88114b2`](https://github.com/GW2Treasures/gw2api-ts/commit/88114b231a11859aae5f116835451d001791ce24) by [@darthmaim](https://github.com/darthmaim))

## 0.4.0

### Minor Changes

- Add `onRequest` option to modify requests ([#65](https://github.com/GW2Treasures/gw2api-ts/pull/65) by [@darthmaim](https://github.com/darthmaim))

## 0.3.0

### Minor Changes

- Make `options` parameter optional if it does not contain required properties ([#63](https://github.com/GW2Treasures/gw2api-ts/pull/63) by [@darthmaim](https://github.com/darthmaim))

## 0.2.0

### Minor Changes

- Add `onResponse` callback to fetch options ([#52](https://github.com/GW2Treasures/gw2api-ts/pull/52) by [@darthmaim](https://github.com/darthmaim))

## 0.1.0

### Minor Changes

- Catch more invalid responses from the Guild Wars 2 API: ([#44](https://github.com/GW2Treasures/gw2api-ts/pull/44) by [@darthmaim](https://github.com/darthmaim))
  - Make sure the response is JSON
  - Include `text` in thrown error if the error is a valid error response
  - Catch `["v1", "v2"]` error

## 0.0.8

### Patch Changes

- cb0a6ff: Change target from default `ES3` to `ES2015` to fix instanceof for `Gw2ApiError`

## 0.0.7

### Patch Changes

- c518876: Add `cache` option

## 0.0.6

### Patch Changes

- 7fa9d14: Add AbortController `signal` to `fetch` options.
- Updated dependencies [7aa6297]
- Updated dependencies [8faa21a]
- Updated dependencies [44e48ec]
  - @gw2api/types@0.0.5

## 0.0.5

### Patch Changes

- 716cd7c: Update release workflow
- Updated dependencies [716cd7c]
  - @gw2api/types@0.0.4

## 0.0.4

### Patch Changes

- 561a2a7: Set error name
- Updated dependencies [561a2a7]
  - @gw2api/types@0.0.3
