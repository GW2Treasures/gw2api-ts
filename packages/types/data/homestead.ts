/**
 * Homestead decorations (/v2/homestead/decorations).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/homestead/decorations
 */
export interface HomesteadDecoration {
  /** The decoration id */
  id: number,

  /** The name of the decoration */
  name: string,

  /** The description of the decoration */
  description: string,

  /** The icon of the decoration */
  icon: string,

  /** The categories this decoration is assigned to (see /v2/homestead/decorations/categories) */
  categories: number[],

  /** The maximum amount that can be stored */
  max_count: number,
}

export interface HomesteadDecorationCategory {
  /** The category id */
  id: number,

  /** The name of the category */
  name: string,
}

export interface HomesteadGlyph {
  /** The glyph id */
  id: string,

  /** The corresponding glyph item id */
  item_id: number,

  /** The slot of this glyph */
  slot: HomesteadGlyph.Slot,
}

export namespace HomesteadGlyph {
  export type Slot = 'harvesting' | 'logging' | 'mining'
}
