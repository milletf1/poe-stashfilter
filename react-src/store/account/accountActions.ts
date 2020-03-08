import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { ILeague } from '../../models/ILeague';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IUiState } from '../../models/ui-state/IUiState';
import { SearchVisibleSection } from '../../models/ui-state/SearchVisibleSection';
import { ActionsUnion } from '../util/actionsUnion';
import { createAction } from '../util/createActionUtil';
import { ISearchDropdownLabel } from './../../components/search-dropdown/ISearchDropdownLabel';
import { ISearchResult } from './../../models/search/ISearchResult';

export const enum AccountActionTypes {
  /** Sets account name */
  SET_ACCOUNT_NAME = 'SET_ACCOUNT_NAME',
  /** Sets leagues */
  SET_LEAGUES = 'SET_LEAGUES',
  /** Sets ui state (the open tab) */
  SET_UI_STATE = 'SET_UI_STATE',
  /** Adds a league to leagues */
  ADD_LEAGUE = 'ADD_LEAGUE',
  /** Sets the selected league */
  SET_SELECTED_LEAGUE = 'SET_LEAGUE',
  /** Sets league characters */
  SET_LEAGUE_CHARACTERS = 'SET_LEAGUE_CHARACTERS',
  /** Sets league stash tabs */
  SET_LEAGUE_STASH_TABS = 'SET_LEAGUE_STASH_TABS',
  /** Changes the selected tab in the stash browser (changes index and character/stash enum) */
  SET_SELECTED_TAB = 'SET_SELECTED_TAB',
  /** Sets search results */
  SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS',
  /** Sets open section in search page */
  SET_SEARCH_PAGE_VISIBLE_SECTION = 'SET_SEARCH_PAGE_VISIBLE_SECTION',
  // ============================= //
  SET_SEARCH_FORM_ITEM_BASE = 'SET_SEARCH_FORM_ITEM_BASE',
  SET_SEARCH_FORM_ITEM_NAME = 'SET_SEARCH_FORM_ITEM_NAME',
  SET_SEARCH_FORM_ITEM_TYPE = 'SET_SEARCH_FORM_ITEM_TYPE',
  SET_SEARCH_FORM_SEARCH_BUTTON_ENABLED = 'SET_SEARCH_FORM_SEARCH_BUTTON_ENABLED',
  SET_SEARCH_FORM_MODS = 'SET_SEARCH_FORM_MODS',
  SET_SEARCH_FORM_MODS_MIN = 'SET_SEARCH_FORM_MODS_MIN',
  SET_SEARCH_FORM_MODS_MAX = 'SET_SEARCH_FORM_MODS_MAX',
  SET_SEARCH_FORM_NAME_SUGGESTIONS = 'SET_SEARCH_FORM_NAME_SUGGESTIONS',
  SET_SEARCH_FORM_TOTAL_DPS_MIN = 'SET_SEARCH_FORM_TOTAL_DPS_MIN',
  SET_SEARCH_FORM_TOTAL_DPS_MAX = 'SET_SEARCH_FORM_TOTAL_DPS_MAX',
  SET_SEARCH_FORM_PHYSICAL_DPS_MIN = 'SET_SEARCH_FORM_PHYSICAL_DPS_MIN',
  SET_SEARCH_FORM_PHYSICAL_DPS_MAX = 'SET_SEARCH_FORM_PHYSICAL_DPS_MAX',
  SET_SEARCH_FORM_ELEMENTAL_DPS_MIN = 'SET_SEARCH_FORM_ELEMENTAL_DPS_MIN',
  SET_SEARCH_FORM_ELEMENTAL_DPS_MAX = 'SET_SEARCH_FORM_ELEMENTAL_DPS_MAX',
  SET_SEARCH_FORM_SOCKETS_MIN = 'SET_SEARCH_FORM_SOCKETS_MIN',
  SET_SEARCH_FORM_SOCKETS_MAX = 'SET_SEARCH_FORM_SOCKETS_MAX',
  SET_SEARCH_FORM_RED_SOCKETS = 'SET_SEARCH_FORM_RED_SOCKETS',
  SET_SEARCH_FORM_GREEN_SOCKETS = 'SET_SEARCH_FORM_GREEN_SOCKETS',
  SET_SEARCH_FORM_BLUE_SOCKETS = 'SET_SEARCH_FORM_BLOE_SOCKETS',
  SET_SEARCH_FORM_WHITE_SOCKETS = 'SET_SEARCH_FORM_WHITE_SOCKETS',
  SET_SEARCH_FORM_ABYSS_SOCKETS = 'SET_SEARCH_FORM_ABYSS_SOCKETS',
}

export const accountActions = {
  addLeague: (league: ILeague) =>
    createAction(AccountActionTypes.ADD_LEAGUE, { league }),
  setAbyssSockets: (abyssSockets: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_ABYSS_SOCKETS, { abyssSockets }),
  setAccountName: (accountName: string) =>
    createAction(AccountActionTypes.SET_ACCOUNT_NAME, { accountName }),
  setBlueSockets: (blueSockets: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_BLUE_SOCKETS, { blueSockets }),
  setElementalDpsMax: (elementalDpsMax: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_ELEMENTAL_DPS_MAX, { elementalDpsMax }),
  setElementalDpsMin: (elementalDpsMin: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_ELEMENTAL_DPS_MIN, { elementalDpsMin }),
  setGreenSockets: (greenSockets: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_GREEN_SOCKETS, { greenSockets }),
  setItemBase: (itemBase: ISearchDropdownLabel | null) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_ITEM_BASE, { itemBase }),
  setItemName: (itemName: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_ITEM_NAME, { itemName }),
  setItemNameSuggestions: (itemNameSuggestions: string[]) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_NAME_SUGGESTIONS, { itemNameSuggestions }),
  setItemType: (itemType: ISearchDropdownLabel | null) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_ITEM_TYPE, { itemType }),
  setLeagueCharacterItems: (leagueName: string, characters: ICharacterItems[]) =>
    createAction(AccountActionTypes.SET_LEAGUE_CHARACTERS, { leagueName, characters }),
  setLeagueStashTabs: (leagueName: string, stashTabs: IStashTab[]) =>
    createAction(AccountActionTypes.SET_LEAGUE_STASH_TABS, { leagueName, stashTabs }),
  setLeagues: (leagues: ILeague[]) =>
    createAction(AccountActionTypes.SET_LEAGUES, { leagues }),
  setMods: (mods: ISearchDropdownLabel[]) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_MODS, { mods }),
  setModsMax: (modsMax: string[]) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_MODS_MAX, { modsMax }),
  setModsMin: (modsMin: string[]) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_MODS_MIN, { modsMin }),
  setPhysicalDpsMax: (physicalDpsMax: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_PHYSICAL_DPS_MAX, { physicalDpsMax }),
  setPhysicalDpsMin: (physicalDpsMin: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_PHYSICAL_DPS_MIN, { physicalDpsMin }),
  setRedSockets: (redSockets: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_RED_SOCKETS, { redSockets }),
  setSearchButtonEnabled: (searchButtonEnabled: boolean) =>
    createAction(
      AccountActionTypes.SET_SEARCH_FORM_SEARCH_BUTTON_ENABLED,
      { searchButtonEnabled },
    ),
  setSearchPageVisibleSection: (section: SearchVisibleSection) =>
    createAction(AccountActionTypes.SET_SEARCH_PAGE_VISIBLE_SECTION, { section }),
  setSearchResults: (searchResults: ISearchResult[]) =>
    createAction(AccountActionTypes.SET_SEARCH_RESULTS, { searchResults }),
  setSelectedLeague: (leagueIndex: number) =>
    createAction(AccountActionTypes.SET_SELECTED_LEAGUE, { leagueIndex }),
  setSelectedTab: (browseIndex: number, browseCategory: BrowseItemCategory) =>
    createAction(AccountActionTypes.SET_SELECTED_TAB, { browseIndex, browseCategory }),
  setSocketsMax: (socketsMax: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_SOCKETS_MAX, { socketsMax }),
  setSocketsMin: (socketsMin: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_SOCKETS_MIN, { socketsMin }),
  setTotalDpsMax: (totalDpsMax: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_TOTAL_DPS_MAX, { totalDpsMax }),
  setTotalDpsMin: (totalDpsMin: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_TOTAL_DPS_MIN, { totalDpsMin }),
  setUiState: (uiState: Partial<IUiState>) =>
    createAction(AccountActionTypes.SET_UI_STATE, { uiState }),
  setWhiteSockets: (whiteSockets: string) =>
    createAction(AccountActionTypes.SET_SEARCH_FORM_WHITE_SOCKETS, { whiteSockets }),
};

export type AccountActions = ActionsUnion<typeof accountActions>;
