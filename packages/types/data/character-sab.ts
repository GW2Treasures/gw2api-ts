export interface CharacterSab {
  zones: CharacterSabZone[],
  unlocks: CharacterSabUnlock[],
  songs: CharacterSabSong[],
}

export interface CharacterSabZone {
  id: number,
  mode: CharacterSabZoneMode,
  world: number,
  zone: number,
}

export type CharacterSabZoneMode =
  | 'infantile'
  | 'normal'
  | 'tribulation';

export interface CharacterSabUnlock {
  id: number,
  name?: CharacterSabUnlockName | (string & {}),
}

export type CharacterSabUnlockName =
  | 'chain_stick'
  | 'slingshot'
  | 'whip'
  | 'mini_bomb'
  | 'candle'
  | 'torch'
  | 'wooden_whistle'
  | 'digger'
  | 'nice_scoop'
  | 'glove_of_wisdom'
  | 'bauble_purse'
  | 'bauble_tote_bag'
  | 'moto_breath'
  | 'moto_finger'
  | 'health_vessel_1'
  | 'health_vessel_2'
  | 'medium_health_potion';

export interface CharacterSabSong {
  id: number,
  name?: CharacterSabSongName | (string & {}),
}

export type CharacterSabSongName =
  | 'secret_song'
  | 'gatekeeper_lullaby'
  | 'shatter_serenade';
