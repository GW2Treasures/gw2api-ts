import type { Account } from './data/account';
import type { AccountAchievement } from './data/account-achievements';
import type { AccountBank } from './data/account-bank';
import type { AccountHomeCat } from './data/account-home';
import type { AccountHomesteadDecoration } from './data/account-homestead';
import type { AccountInventory } from './data/account-inventory';
import type { AccountLegendaryarmory } from './data/account-legendaryarmory';
import type { AccountMaterials } from './data/account-material';
import type { AccountWallet } from './data/account-wallet';
import type { AccountWizardsVaultListing, AccountWizardsVaultMetaObjectives, AccountWizardsVaultSpecialObjectives } from './data/account-wizardsvault';
import type { Achievement } from './data/achievement';
import type { AchievementCategory } from './data/achievement-category';
import type { AchievementGroup } from './data/achievement-group';
import type { Character, CharacterBackstory, CharacterBuildTab, CharacterCore, CharacterCrafting, CharacterEquipment, CharacterEquipmentTab, CharacterInventory, CharacterRecipes, CharacterSkills, CharacterSpecializations, CharacterTraining } from './data/character';
import type { CharacterSab } from './data/character-sab';
import type { Color } from './data/color';
import type { Delivery, Exchange, Listing, Price, TransactionCurrent, TransactionHistoric } from './data/commerce';
import type { Createsubtoken } from './data/createsubtoken';
import type { Currency } from './data/currency';
import type { Finisher } from './data/finisher';
import type { Glider } from './data/glider';
import type { GuildUpgrade } from './data/guild';
import type { HomeCat, HomeNode } from './data/home';
import type { HomesteadDecoration, HomesteadDecorationCategory, HomesteadGlyph } from './data/homestead';
import type { Item } from './data/item';
import type { JadeBot } from './data/jadebot';
import type { Legendaryarmory } from './data/legendaryarmory';
import type { MailCarrier } from './data/mailcarrier';
import type { MaterialCategory } from './data/material';
import type { Mini } from './data/mini';
import type { Novelty } from './data/novelty';
import type { Outfit } from './data/outfit';
import type { Quaggan } from './data/quaggan';
import type { Recipe } from './data/recipe';
import type { Skiff } from './data/skiffs';
import type { Skill } from './data/skill';
import type { Skin } from './data/skin';
import type { Title } from './data/title';
import type { Tokeninfo } from './data/tokeninfo';
import type { WizardsVault, WizardsVaultListing, WizardsVaultObjective } from './data/wizardsvault';
import type { SchemaVersion } from './schema';

export type KnownAuthenticatedEndpoint =
  | '/v2/account'
  | '/v2/account/achievements'
  | '/v2/account/bank'
  | '/v2/account/buildstorage'
  | '/v2/account/dailycrafting'
  | '/v2/account/dungeons'
  | '/v2/account/dyes'
  | '/v2/account/emotes'
  | '/v2/account/finishers'
  | '/v2/account/gliders'
  | '/v2/account/home/cats'
  | '/v2/account/home/nodes'
  | '/v2/account/homestead/decorations'
  | '/v2/account/homestead/glyphs'
  | '/v2/account/inventory'
  | '/v2/account/jadebots'
  | '/v2/account/legendaryarmory'
  | '/v2/account/luck'
  | '/v2/account/mail'
  | '/v2/account/mailcarriers'
  | '/v2/account/mapchests'
  | '/v2/account/masteries'
  | '/v2/account/mastery/points'
  | '/v2/account/materials'
  | '/v2/account/minis'
  | '/v2/account/mounts/skins'
  | '/v2/account/mounts/types'
  | '/v2/account/novelties'
  | '/v2/account/outfits'
  | '/v2/account/progression'
  | '/v2/account/pvp/heroes'
  | '/v2/account/raids'
  | '/v2/account/recipes'
  | '/v2/account/skiffs'
  | '/v2/account/skins'
  | '/v2/account/titles'
  | '/v2/account/wallet'
  | '/v2/account/wizardsvault/daily'
  | '/v2/account/wizardsvault/listings'
  | '/v2/account/wizardsvault/special'
  | '/v2/account/wizardsvault/weekly'
  | '/v2/account/worldbosses'
  | '/v2/characters'
  | `/v2/characters/${string}/backstory`
  | `/v2/characters/${string}/buildtabs`
  | `/v2/characters/${string}/buildtabs/active`
  | `/v2/characters/${string}/core`
  | `/v2/characters/${string}/crafting`
  | `/v2/characters/${string}/dungeons`
  | `/v2/characters/${string}/equipment`
  | `/v2/characters/${string}/equipmenttabs`
  | `/v2/characters/${string}/equipmenttabs/active`
  | `/v2/characters/${string}/heropoints`
  | `/v2/characters/${string}/inventory`
  | `/v2/characters/${string}/quests`
  | `/v2/characters/${string}/recipes`
  | `/v2/characters/${string}/sab`
  | `/v2/characters/${string}/skills`
  | `/v2/characters/${string}/specializations`
  | `/v2/characters/${string}/training`
  | '/v2/commerce/delivery'
  | '/v2/commerce/transactions/current/buys'
  | '/v2/commerce/transactions/current/sells'
  | '/v2/commerce/transactions/history/buys'
  | '/v2/commerce/transactions/history/sells'
  | '/v2/createsubtoken'
  | `/v2/guild/${string}`
  | `/v2/guild/${string}/log`
  | `/v2/guild/${string}/members`
  | `/v2/guild/${string}/ranks`
  | `/v2/guild/${string}/stash`
  | `/v2/guild/${string}/storage`
  | `/v2/guild/${string}/teams`
  | `/v2/guild/${string}/treasury`
  | `/v2/guild/${string}/upgrades`
  | '/v2/pvp/games'
  | '/v2/pvp/standings'
  | '/v2/pvp/stats'
  | '/v2/tokeninfo'

export type KnownUnauthorizedEndpoint =
  | '/v2/account/home'
  | '/v2/account/mounts'
  | '/v2/achievements'
  | '/v2/achievements/categories'
  | '/v2/achievements/daily'
  | '/v2/achievements/daily/tomorrow'
  | '/v2/achievements/groups'
  | '/v2/adventures'
  | `/v2/adventures/${string}/leaderboards`
  | `/v2/adventures/${string}/leaderboards/${string}/${string}`
  | '/v2/backstory/answers'
  | '/v2/backstory/questions'
  | '/v2/build'
  | '/v2/colors'
  | '/v2/commerce/exchange/coins'
  | '/v2/commerce/exchange/gems'
  | '/v2/commerce/listings'
  | '/v2/commerce/prices'
  | '/v2/continents'
  | '/v2/currencies'
  | '/v2/dailycrafting'
  | '/v2/dungeons'
  | '/v2/emblem'
  | '/v2/emotes'
  | '/v2/events'
  | '/v2/events-state'
  | '/v2/files'
  | '/v2/finishers'
  | '/v2/gemstore/catalog'
  | '/v2/gliders'
  | '/v2/guild/permissions'
  | '/v2/guild/search'
  | '/v2/guild/upgrades'
  | '/v2/home'
  | '/v2/home/cats'
  | '/v2/home/nodes'
  | '/v2/homestead/decorations/categories'
  | '/v2/homestead/decorations'
  | '/v2/homestead/glyphs'
  | '/v2/items'
  | '/v2/itemstats'
  | '/v2/jadebots'
  | '/v2/legendaryarmory'
  | '/v2/legends'
  | '/v2/mailcarriers'
  | '/v2/mapchests'
  | '/v2/maps'
  | '/v2/masteries'
  | '/v2/mailcarriers'
  | '/v2/materials'
  | '/v2/minis'
  | '/v2/mounts'
  | '/v2/mounts/skins'
  | '/v2/mounts/types'
  | '/v2/novelties'
  | '/v2/outfits'
  | '/v2/pets'
  | '/v2/professions'
  | '/v2/pvp'
  | '/v2/pvp/amulets'
  | '/v2/pvp/heroes'
  | '/v2/pvp/ranks'
  | '/v2/pvp/rewardtracks'
  | '/v2/pvp/runes'
  | '/v2/pvp/seasons'
  | `/v2/pvp/seasons/${string}/leaderboards`
  | `/v2/pvp/seasons/${string}/leaderboards/${string}/${string}`
  | '/v2/pvp/sigils'
  | '/v2/quaggans'
  | '/v2/quests'
  | '/v2/races'
  | '/v2/raids'
  | '/v2/recipes'
  | '/v2/recipes/search'
  | '/v2/skiffs'
  | '/v2/skills'
  | '/v2/skins'
  | '/v2/specializations'
  | '/v2/stories'
  | '/v2/stories/seasons'
  | '/v2/titles'
  | '/v2/traits'
  | '/v2/vendors'
  | '/v2/wizardsvault/listings'
  | '/v2/wizardsvault/objectives'
  | '/v2/worldbosses'
  | '/v2/worlds'
  | '/v2/wvw/abilities'
  | '/v2/wvw/matches'
  | '/v2/wvw/matches/overview'
  | '/v2/wvw/matches/scores'
  | '/v2/wvw/matches/stats'
  | `/v2/wvw/matches/stats/${string}/guilds/${string}`
  | `/v2/wvw/matches/stats/${string}/teams/${string}/top/kdr`
  | `/v2/wvw/matches/stats/${string}/teams/${string}/top/kills`
  | '/v2/wvw/objectives'
  | '/v2/wvw/ranks'
  | '/v2/wvw/rewardtracks'
  | '/v2/wvw/upgrades'

export type KnownBulkExpandedEndpoint =
  | '/v2/achievements'
  | '/v2/achievements/categories'
  | '/v2/achievements/groups'
  | '/v2/backstory/answers'
  | '/v2/backstory/questions'
  | '/v2/characters'
  | '/v2/colors'
  | '/v2/commerce/listings'
  | '/v2/commerce/prices'
  | '/v2/continents'
  | '/v2/currencies'
  | '/v2/novelties'
  | '/v2/files'
  | '/v2/finishers'
  | '/v2/gliders'
  | '/v2/guild/permissions'
  | '/v2/guild/upgrades'
  | '/v2/home/cats'
  | '/v2/home/nodes'
  | '/v2/homestead/decorations/categories'
  | '/v2/homestead/decorations'
  | '/v2/homestead/glyphs'
  | '/v2/items'
  | '/v2/itemstats'
  | '/v2/jadebots'
  | '/v2/legendaryarmory'
  | '/v2/legends'
  | '/v2/maps'
  | '/v2/mailcarriers'
  | '/v2/masteries'
  | '/v2/materials'
  | '/v2/minis'
  | '/v2/mounts/types'
  | '/v2/mounts/skins'
  | '/v2/novelties'
  | '/v2/outfits'
  | '/v2/pets'
  | '/v2/profession'
  | '/v2/pvp/amulets'
  | '/v2/pvp/games'
  | '/v2/pvp/seasons'
  | '/v2/quaggans'
  | '/v2/recipes'
  | '/v2/skiffs'
  | '/v2/skills'
  | '/v2/skins'
  | '/v2/specializations'
  | '/v2/stories'
  | '/v2/stories/seasons'
  | '/v2/titles'
  | '/v2/traits'
  | '/v2/wizardsvault/listings'
  | '/v2/wizardsvault/objectives'
  | '/v2/worlds'
  | '/v2/wvw/abilities'
  | '/v2/wvw/matches'
  | '/v2/wvw/objectives'

export type KnownLocalizedEndpoint =
  | '/v2/achievements'
  | '/v2/achievements/categories'
  | '/v2/achievements/groups'
  | '/v2/adventures'
  | '/v2/backstory/answers'
  | '/v2/backstory/questions'
  | '/v2/colors'
  | '/v2/continents'
  | '/v2/currencies'
  | '/v2/dungeons'
  | '/v2/events'
  | '/v2/finishers'
  | '/v2/gemstore/catalog'
  | '/v2/gliders'
  | '/v2/guild/permissions'
  | '/v2/guild/upgrades'
  | '/v2/homestead/decorations/categories'
  | '/v2/homestead/decorations'
  | '/v2/items'
  | '/v2/itemstats'
  | '/v2/jadebots'
  | '/v2/mailcarriers'
  | '/v2/maps'
  | '/v2/masteries'
  | '/v2/materials'
  | '/v2/minis'
  | '/v2/mounts/skins'
  | '/v2/mounts/types'
  | '/v2/novelties'
  | '/v2/outfits'
  | '/v2/pets'
  | '/v2/professions'
  | '/v2/pvp/amulets'
  | '/v2/pvp/heroes'
  | '/v2/pvp/ranks'
  | '/v2/pvp/rewardtracks'
  | '/v2/pvp/runes'
  | '/v2/pvp/seasons'
  | '/v2/pvp/sigils'
  | '/v2/quests'
  | '/v2/races'
  | '/v2/raids'
  | '/v2/skiffs'
  | '/v2/skills'
  | '/v2/skins'
  | '/v2/specializations'
  | '/v2/stories'
  | '/v2/stories/seasons'
  | '/v2/titles'
  | '/v2/traits'
  | '/v2/wizardsvault'
  | '/v2/wizardsvault/listings'
  | '/v2/wizardsvault/objectives'
  | '/v2/vendors'
  | '/v2/worlds'
  | '/v2/wvw/abilities'
  | '/v2/wvw/objectives'
  | '/v2/wvw/ranks'
  | '/v2/wvw/rewardtracks'
  | '/v2/wvw/upgrades'

export type KnownEndpoint = KnownAuthenticatedEndpoint | KnownUnauthorizedEndpoint | KnownBulkExpandedEndpoint | KnownLocalizedEndpoint;

// helper types for parameters
type CombineParameters<P1 extends string, P2 extends string> = `${P1}&${P2}` | `${P2}&${P1}`;

type WithParameters<Url extends string, Parameters extends string | undefined = undefined> =
  Parameters extends undefined ? Url : `${Url}?${Parameters}`;

// helper for paginated endpoints
type PaginationParameters = `page=${number}` | `page_size=${number}` | CombineParameters<`page=${number}`, `page_size=${number}`>;
type PaginatedEndpointUrl<Endpoint extends KnownEndpoint> = Endpoint | WithParameters<Endpoint, PaginationParameters>

// helper types for bulk requests
type BulkExpandedSingleEndpointUrl<Endpoint extends KnownBulkExpandedEndpoint, Id extends string | number> = `${Endpoint}/${Id}` | WithParameters<Endpoint, `id=${Id}`>
type BulkExpandedManyEndpointUrl<Endpoint extends KnownBulkExpandedEndpoint> = WithParameters<Endpoint, `ids=${string}` | PaginationParameters>
type BulkExpandedEndpointUrl<Endpoint extends KnownBulkExpandedEndpoint, Id extends string | number> =
  Endpoint | BulkExpandedSingleEndpointUrl<Endpoint, Id> |  BulkExpandedManyEndpointUrl<Endpoint>

type BulkExpandedResponseType<Endpoint extends KnownBulkExpandedEndpoint, Url extends string, Id extends string | number, T> =
  // base endpoint returns a list of ids
  Url extends Endpoint ? Id[] :
  // make sure the id does not include a slash (if there are sub-endpoints, they have to be listed first in `EndpointType`)
  Url extends `${Endpoint}/${Id}/${string}` ? unknown :
  // handle single id requests (`endpoint/:id` and `endpoint?id=:id`)
  Url extends BulkExpandedSingleEndpointUrl<Endpoint, Id> ? T :
  // handle multiple id requests (either `endpoint?ids=:ids` or paginated)
  Url extends BulkExpandedManyEndpointUrl<Endpoint> ? T[] :
  // otherwise this is not a known bulk request
  unknown

// /v2/createsubtoken request
type CreateSubtokenUrl<Url extends KnownEndpoint> =
  | WithParameters<Url, CombineParameters<`expire=${string}`, CombineParameters<`permissions=${string}`, `urls=${string}`>>>
  | WithParameters<Url, CombineParameters<`expire=${string}`, `permissions=${string}`>>
  | WithParameters<Url, CombineParameters<`expire=${string}`, `urls=${string}`>>
  | WithParameters<Url, CombineParameters<`permissions=${string}`, `urls=${string}`>>
  | WithParameters<Url, `expire=${string}`>
  | WithParameters<Url, `permissions=${string}`>
  | WithParameters<Url, `urls=${string}`>
  | Url

// /v2/commerce/exchange request
type CommerceExchangeUrl<Url extends KnownEndpoint> =
  | WithParameters<Url, `quantity=${number}`>

// options
type Options = {}

export type LocalizedOptions = {
  language?: 'de' | 'en' | 'es' | 'fr' | 'zh'
}

export type AuthenticatedOptions = {
  accessToken: string
}

export type OptionsByEndpoint<Endpoint extends string> =
  Endpoint extends BulkExpandedEndpointUrl<KnownBulkExpandedEndpoint & KnownUnauthorizedEndpoint & KnownLocalizedEndpoint, string | number> ? Options & LocalizedOptions :
  Endpoint extends BulkExpandedEndpointUrl<KnownBulkExpandedEndpoint & KnownAuthenticatedEndpoint & KnownLocalizedEndpoint, string | number> ? Options & AuthenticatedOptions & LocalizedOptions :
  Endpoint extends BulkExpandedEndpointUrl<KnownBulkExpandedEndpoint & KnownLocalizedEndpoint, string | number> ? Options & LocalizedOptions :
  Endpoint extends BulkExpandedEndpointUrl<KnownBulkExpandedEndpoint & KnownAuthenticatedEndpoint, string | number> ? Options & AuthenticatedOptions :
  Endpoint extends KnownAuthenticatedEndpoint & KnownLocalizedEndpoint ? Options & AuthenticatedOptions & LocalizedOptions :
  Endpoint extends KnownAuthenticatedEndpoint ? Options & AuthenticatedOptions :
  Endpoint extends KnownLocalizedEndpoint ? Options & LocalizedOptions :
  Endpoint extends CreateSubtokenUrl<'/v2/createsubtoken'> ? Options & AuthenticatedOptions :
  Endpoint extends KnownEndpoint | BulkExpandedEndpointUrl<KnownBulkExpandedEndpoint, string | number> ? Options :
  Partial<AuthenticatedOptions & LocalizedOptions>

// result type for endpoint
export type EndpointType<Url extends KnownEndpoint | (string & {}), Schema extends SchemaVersion = undefined> =
  Url extends '/v2/account' ? Account<Schema> :
  Url extends '/v2/account/achievements' ? AccountAchievement[] :
  Url extends '/v2/account/bank' ? AccountBank :
  Url extends '/v2/account/dailycrafting' ? string[] :
  Url extends '/v2/account/dungeons' ? string[] :
  Url extends '/v2/account/dyes' ? number[] :
  Url extends '/v2/account/emotes' ? string[] :
  Url extends '/v2/account/gliders' ? number[] :
  Url extends '/v2/account/home/cats' ? AccountHomeCat<Schema>[] :
  Url extends '/v2/account/home/nodes' ? string[] :
  Url extends '/v2/account/homestead/decorations' ? AccountHomesteadDecoration[] :
  Url extends '/v2/account/homestead/glyphs' ? string[] :
  Url extends '/v2/account/inventory' ? AccountInventory :
  Url extends '/v2/account/jadebots' ? number[] :
  Url extends '/v2/account/legendaryarmory' ? AccountLegendaryarmory[] :
  Url extends '/v2/account/mailcarriers' ? number[] :
  Url extends '/v2/account/mapchests' ? string[] :
  Url extends '/v2/account/materials' ? AccountMaterials :
  Url extends '/v2/account/minis' ? number[] :
  Url extends '/v2/account/mounts/skins' ? number[] :
  Url extends '/v2/account/mounts/types' ? string[] :
  Url extends '/v2/account/novelties' ? number[] :
  Url extends '/v2/account/outfits' ? number[] :
  Url extends '/v2/account/pvp/heroes' ? number[] :
  Url extends '/v2/account/raids' ? string[] :
  Url extends '/v2/account/recipes' ? number[] :
  Url extends '/v2/account/skiffs' ? number[] :
  Url extends '/v2/account/skins' ? number[] :
  Url extends '/v2/account/titles' ? number[] :
  Url extends '/v2/account/wallet' ? AccountWallet[] :
  Url extends '/v2/account/wizardsvault/daily' ? AccountWizardsVaultMetaObjectives :
  Url extends '/v2/account/wizardsvault/listings' ? AccountWizardsVaultListing[] :
  Url extends '/v2/account/wizardsvault/special' ? AccountWizardsVaultSpecialObjectives :
  Url extends '/v2/account/wizardsvault/weekly' ? AccountWizardsVaultMetaObjectives :
  Url extends '/v2/account/worldbosses' ? string[] :
  Url extends `/v2/characters/${string}/backstory` ? CharacterBackstory :
  Url extends `/v2/characters/${string}/buildtabs` ? CharacterBuildTab[] :
  Url extends `/v2/characters/${string}/core` ? CharacterCore<Schema> :
  Url extends `/v2/characters/${string}/crafting` ? CharacterCrafting :
  Url extends `/v2/characters/${string}/equipment` ? CharacterEquipment :
  Url extends `/v2/characters/${string}/equipmenttabs` ? CharacterEquipmentTab[] :
  Url extends `/v2/characters/${string}/inventory` ? CharacterInventory :
  Url extends `/v2/characters/${string}/recipes` ? CharacterRecipes :
  Url extends `/v2/characters/${string}/sab` ? CharacterSab :
  Url extends `/v2/characters/${string}/skills` ? CharacterSkills :
  Url extends `/v2/characters/${string}/specializations` ? CharacterSpecializations :
  Url extends `/v2/characters/${string}/training` ? CharacterTraining :
  Url extends BulkExpandedEndpointUrl<'/v2/characters', string> ? BulkExpandedResponseType<'/v2/characters', Url, string, Character<Schema>> :
  Url extends CreateSubtokenUrl<'/v2/createsubtoken'> ? Createsubtoken :
  Url extends BulkExpandedEndpointUrl<'/v2/achievements/categories', number> ? BulkExpandedResponseType<'/v2/achievements/categories', Url, number, AchievementCategory<Schema>> :
  Url extends BulkExpandedEndpointUrl<'/v2/achievements/groups', number> ? BulkExpandedResponseType<'/v2/achievements/groups', Url, number, AchievementGroup> :
  Url extends BulkExpandedEndpointUrl<'/v2/achievements', number> ? BulkExpandedResponseType<'/v2/achievements', Url, number, Achievement> :
  Url extends BulkExpandedEndpointUrl<'/v2/colors', number> ? BulkExpandedResponseType<'/v2/colors', Url, number, Color> :
  Url extends BulkExpandedEndpointUrl<'/v2/currencies', number> ? BulkExpandedResponseType<'/v2/currencies', Url, number, Currency> :
  Url extends BulkExpandedEndpointUrl<'/v2/finishers', number> ? BulkExpandedResponseType<'/v2/finishers', Url, number, Finisher> :
  Url extends BulkExpandedEndpointUrl<'/v2/gliders', number> ? BulkExpandedResponseType<'/v2/gliders', Url, number, Glider> :
  Url extends BulkExpandedEndpointUrl<'/v2/guild/upgrades', number> ? BulkExpandedResponseType<'/v2/guild/upgrades', Url, number, GuildUpgrade> :
  Url extends BulkExpandedEndpointUrl<'/v2/home/cats', number> ? BulkExpandedResponseType<'/v2/home/cats', Url, number, HomeCat> :
  Url extends BulkExpandedEndpointUrl<'/v2/home/nodes', string> ? BulkExpandedResponseType<'/v2/home/nodes', Url, string, HomeNode> :
  Url extends BulkExpandedEndpointUrl<'/v2/homestead/decorations/categories', number> ? BulkExpandedResponseType<'/v2/homestead/decorations/categories', Url, number, HomesteadDecorationCategory> :
  Url extends BulkExpandedEndpointUrl<'/v2/homestead/decorations', number> ? BulkExpandedResponseType<'/v2/homestead/decorations', Url, number, HomesteadDecoration> :
  Url extends BulkExpandedEndpointUrl<'/v2/homestead/glyphs', string> ? BulkExpandedResponseType<'/v2/homestead/glyphs', Url, string, HomesteadGlyph> :
  Url extends BulkExpandedEndpointUrl<'/v2/items', number> ? BulkExpandedResponseType<'/v2/items', Url, number, Item<Schema>> :
  Url extends BulkExpandedEndpointUrl<'/v2/jadebots', number> ? BulkExpandedResponseType<'/v2/jadebots', Url, number, JadeBot> :
  Url extends BulkExpandedEndpointUrl<'/v2/legendaryarmory', number> ? BulkExpandedResponseType<'/v2/legendaryarmory', Url, number, Legendaryarmory> :
  Url extends BulkExpandedEndpointUrl<'/v2/mailcarriers', number> ? BulkExpandedResponseType<'/v2/mailcarriers', Url, number, MailCarrier> :
  Url extends BulkExpandedEndpointUrl<'/v2/materials', number> ? BulkExpandedResponseType<'/v2/materials', Url, number, MaterialCategory> :
  Url extends BulkExpandedEndpointUrl<'/v2/minis', number> ? BulkExpandedResponseType<'/v2/minis', Url, number, Mini> :
  Url extends BulkExpandedEndpointUrl<'/v2/novelties', number> ? BulkExpandedResponseType<'/v2/novelties', Url, number, Novelty> :
  Url extends BulkExpandedEndpointUrl<'/v2/outfits', number> ? BulkExpandedResponseType<'/v2/outfits', Url, number, Outfit> :
  Url extends BulkExpandedEndpointUrl<'/v2/quaggans', string> ? BulkExpandedResponseType<'/v2/quaggans', Url, string, Quaggan> :
  Url extends BulkExpandedEndpointUrl<'/v2/recipes', number> ? BulkExpandedResponseType<'/v2/recipes', Url, number, Recipe<Schema>> :
  Url extends BulkExpandedEndpointUrl<'/v2/skiffs', number> ? BulkExpandedResponseType<'/v2/skiffs', Url, number, Skiff> :
  Url extends BulkExpandedEndpointUrl<'/v2/skills', number> ? BulkExpandedResponseType<'/v2/skills', Url, number, Skill> :
  Url extends BulkExpandedEndpointUrl<'/v2/skins', number> ? BulkExpandedResponseType<'/v2/skins', Url, number, Skin> :
  Url extends BulkExpandedEndpointUrl<'/v2/titles', number> ? BulkExpandedResponseType<'/v2/titles', Url, number, Title> :
  Url extends '/v2/commerce/delivery' ? Delivery :
  Url extends CommerceExchangeUrl<'/v2/commerce/exchange/coins' | '/v2/commerce/exchange/gems'> ? Exchange :
  Url extends BulkExpandedEndpointUrl<'/v2/commerce/listings', number> ? BulkExpandedResponseType<'/v2/commerce/listings', Url, number, Listing> :
  Url extends BulkExpandedEndpointUrl<'/v2/commerce/prices', number> ? BulkExpandedResponseType<'/v2/commerce/prices', Url, number, Price> :
  Url extends PaginatedEndpointUrl<'/v2/commerce/transactions/current/buys'> ? TransactionCurrent[] :
  Url extends PaginatedEndpointUrl<'/v2/commerce/transactions/current/sells'> ? TransactionCurrent[] :
  Url extends PaginatedEndpointUrl<'/v2/commerce/transactions/history/buys'> ? TransactionHistoric[] :
  Url extends PaginatedEndpointUrl<'/v2/commerce/transactions/history/sells'> ? TransactionHistoric[] :
  Url extends '/v2/tokeninfo' ? Tokeninfo<Schema> :
  Url extends '/v2/wizardsvault' ? WizardsVault :
  Url extends BulkExpandedEndpointUrl<'/v2/wizardsvault/listings', number> ? BulkExpandedResponseType<'/v2/wizardsvault/listings', Url, number, WizardsVaultListing> :
  Url extends BulkExpandedEndpointUrl<'/v2/wizardsvault/objectives', number> ? BulkExpandedResponseType<'/v2/wizardsvault/objectives', Url, number, WizardsVaultObjective> :
  // fallback for all bulk expanded urls
  Url extends BulkExpandedEndpointUrl<KnownBulkExpandedEndpoint, string | number> ? BulkExpandedResponseType<KnownBulkExpandedEndpoint, Url, string | number, unknown> :
  // fallback for all other urls
  unknown;

export type ValidateEndpointUrl<T extends string> = unknown extends EndpointType<T> ? 'unknown endpoint url' : T;
