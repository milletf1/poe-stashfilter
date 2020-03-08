import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import IBrowsePageState from '../../models/ui-state/IBrowsePageState';
import ISearchFormState from '../../models/ui-state/ISearchFormState';
import ISearchPageState from '../../models/ui-state/ISearchPageState';
import { SearchVisibleSection } from '../../models/ui-state/SearchVisibleSection';
import { ISearchDropdownLabel } from './../../components/search-dropdown/ISearchDropdownLabel';
import { ILeague } from './../../models/ILeague';
import { ISearchResult } from './../../models/search/ISearchResult';
import { IUiState } from './../../models/ui-state/IUiState';
import { AccountActions, AccountActionTypes } from './accountActions';
import { IAccountState, initialState } from './accountState';

export function reducer(
  state: IAccountState = initialState,
  action: AccountActions,
): IAccountState {

  switch (action.type) {
    case AccountActionTypes.SET_ACCOUNT_NAME:
      return { ...state, accountName: action.payload.accountName };
    case AccountActionTypes.SET_LEAGUES:
      return { ...state, leagues: action.payload.leagues };
    case AccountActionTypes.SET_UI_STATE:
      return { ...state, uiState: { ...state.uiState, ...action.payload.uiState } };
    case AccountActionTypes.ADD_LEAGUE:
      return { ...state , leagues: [...state.leagues, action.payload.league] };
    case AccountActionTypes.SET_SELECTED_LEAGUE:
      return setSelectedLeague(state, action.payload.leagueIndex);
    case AccountActionTypes.SET_LEAGUE_CHARACTERS:
      return setLeagueCharacterItems(state, action.payload.characters);
    case AccountActionTypes.SET_LEAGUE_STASH_TABS:
      return setLeagueStashTabs(state, action.payload.stashTabs);
    case AccountActionTypes.SET_SELECTED_TAB:
      return setSelectedTab(state, action.payload.browseCategory, action.payload.browseIndex);
    case AccountActionTypes.SET_SEARCH_RESULTS:
      return setSearchResults(state, action.payload.searchResults);
    case AccountActionTypes.SET_SEARCH_PAGE_VISIBLE_SECTION:
      return setSearchPageVisibleSection(state, action.payload.section);
    case AccountActionTypes.SET_SEARCH_FORM_ITEM_BASE:
      return setSearchFormItemBase(state, action.payload.itemBase);
    case AccountActionTypes.SET_SEARCH_FORM_ITEM_NAME:
      return setSearchFormItemName(state, action.payload.itemName);
    case AccountActionTypes.SET_SEARCH_FORM_ITEM_TYPE:
      return setSearchFormItemType(state, action.payload.itemType);
    case AccountActionTypes.SET_SEARCH_FORM_SEARCH_BUTTON_ENABLED:
      return setSearchFormSearchButtonEnabled(state, action.payload.searchButtonEnabled);
    case AccountActionTypes.SET_SEARCH_FORM_MODS:
      return setSearchFormMods(state, action.payload.mods);
    case AccountActionTypes.SET_SEARCH_FORM_MODS_MIN:
      return setSearchFormModsMin(state, action.payload.modsMin);
    case AccountActionTypes.SET_SEARCH_FORM_MODS_MAX:
      return setSearchFormModsMax(state, action.payload.modsMax);
    case AccountActionTypes.SET_SEARCH_FORM_NAME_SUGGESTIONS:
      return setSearchFormNameSuggestions(state, action.payload.itemNameSuggestions);
    case AccountActionTypes.SET_SEARCH_FORM_TOTAL_DPS_MIN:
      return setSearchFormTotalDpsMin(state, action.payload.totalDpsMin);
    case AccountActionTypes.SET_SEARCH_FORM_TOTAL_DPS_MAX:
      return setSearchFormTotalDpsMax(state, action.payload.totalDpsMax);
    case AccountActionTypes.SET_SEARCH_FORM_PHYSICAL_DPS_MIN:
      return setSearchFormPhysicalDpsMin(state, action.payload.physicalDpsMin);
    case AccountActionTypes.SET_SEARCH_FORM_PHYSICAL_DPS_MAX:
      return setSearchFormPhysicalDpsMax(state, action.payload.physicalDpsMax);
    case AccountActionTypes.SET_SEARCH_FORM_ELEMENTAL_DPS_MIN:
      return setSearchFormElementalDpsMin(state, action.payload.elementalDpsMin);
    case AccountActionTypes.SET_SEARCH_FORM_ELEMENTAL_DPS_MAX:
      return setSearchFormElementalDpsMax(state, action.payload.elementalDpsMax);
    case AccountActionTypes.SET_SEARCH_FORM_SOCKETS_MIN:
      return setSearchFormSocketsMin(state, action.payload.socketsMin);
    case AccountActionTypes.SET_SEARCH_FORM_SOCKETS_MAX:
      return setSearchFormSocketsMax(state, action.payload.socketsMax);
    case AccountActionTypes.SET_SEARCH_FORM_RED_SOCKETS:
      return setSearchFormRedSockets(state, action.payload.redSockets);
    case AccountActionTypes.SET_SEARCH_FORM_GREEN_SOCKETS:
      return setSearchFormGreenSockets(state, action.payload.greenSockets);
    case AccountActionTypes.SET_SEARCH_FORM_BLUE_SOCKETS:
      return setSearchFormBlueSockets(state, action.payload.blueSockets);
    case AccountActionTypes.SET_SEARCH_FORM_WHITE_SOCKETS:
      return setSearchFormWhiteSockets(state, action.payload.whiteSockets);
    case AccountActionTypes.SET_SEARCH_FORM_ABYSS_SOCKETS:
      return setSearchFormAbyssSockets(state, action.payload.abyssSockets);
    default:
      return state;
  }
}

function setSelectedLeague(state: IAccountState, leagueIndex: number): IAccountState {
  const uiState: IUiState = { ...state.uiState, leagueIndex };
  return { ...state, uiState };
}

function setLeagueCharacterItems(
  state: IAccountState,
  characters: ICharacterItems[],
): IAccountState {
  const leagues: ILeague[] = [...state.leagues];
  leagues[state.uiState.leagueIndex].characters = characters;
  return { ...state, leagues };
}

function setLeagueStashTabs(state: IAccountState, stashTabs: IStashTab[]): IAccountState {
  const leagues: ILeague[] = [...state.leagues];
  leagues[state.uiState.leagueIndex].stashTabs = stashTabs;
  return { ...state, leagues };
}

function setSelectedTab(
  state: IAccountState,
  browseCategory: BrowseItemCategory,
  browseIndex: number,
): IAccountState {
  const browsePageState: IBrowsePageState = {
    ...state.uiState.browsePageState,
    browseCategory,
    browseIndex,
  };
  const uiState: IUiState = { ...state.uiState, browsePageState };
  return { ...state, uiState };
}

function setSearchResults(state: IAccountState, searchResults: ISearchResult[]): IAccountState {
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchResults };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchPageVisibleSection(
  state: IAccountState,
  openSection: SearchVisibleSection,
): IAccountState {
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, openSection };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormItemBase(
  state: IAccountState,
  itemBase: ISearchDropdownLabel | null,
): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    itemBase,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormItemName(state: IAccountState, itemName: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    itemName,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormItemType(
  state: IAccountState,
  itemType: ISearchDropdownLabel | null,
): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    itemType,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormSearchButtonEnabled(
  state: IAccountState,
  searchButtonEnabled: boolean,
): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    searchButtonEnabled,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormMods(state: IAccountState, mods: ISearchDropdownLabel[]): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    mods,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormModsMin(state: IAccountState, modsMin: string[]): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    modsMin,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormModsMax(state: IAccountState, modsMax: string[]): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    modsMax,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormNameSuggestions(
  state: IAccountState,
  itemNameSuggestions: string[],
): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    itemNameSuggestions,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormTotalDpsMin(state: IAccountState, totalDpsMin: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    totalDpsMin,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormTotalDpsMax(state: IAccountState, totalDpsMax: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    totalDpsMax,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormPhysicalDpsMin(state: IAccountState, physicalDpsMin: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    physicalDpsMin,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormPhysicalDpsMax(state: IAccountState, physicalDpsMax: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    physicalDpsMax,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormElementalDpsMin(
  state: IAccountState,
  elementalDpsMin: string,
): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    elementalDpsMin,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormElementalDpsMax(
  state: IAccountState,
  elementalDpsMax: string,
): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    elementalDpsMax,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormSocketsMin(state: IAccountState, socketsMin: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    socketsMin,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormSocketsMax(state: IAccountState, socketsMax: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    socketsMax,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormRedSockets(state: IAccountState, redSockets: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    redSockets,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormGreenSockets(state: IAccountState, greenSockets: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    greenSockets,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormBlueSockets(state: IAccountState, blueSockets: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    blueSockets,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormWhiteSockets(state: IAccountState, whiteSockets: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    whiteSockets,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}

function setSearchFormAbyssSockets(state: IAccountState, abyssSockets: string): IAccountState {
  const searchFormState: ISearchFormState = {
    ...state.uiState.searchPageState.searchFormState,
    abyssSockets,
  };
  const searchPageState: ISearchPageState = { ...state.uiState.searchPageState, searchFormState };
  const uiState: IUiState = { ...state.uiState, searchPageState };
  return { ...state, uiState };
}
