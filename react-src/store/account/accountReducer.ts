import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import IBrowsePageState from '../../models/ui-state/IBrowsePageState';
import ISearchPageState from '../../models/ui-state/ISearchPageState';
import { SearchVisibleSection } from '../../models/ui-state/SearchVisibleSection';
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
    case AccountActionTypes.SET_SEARCH_FORM_ITEM_NAME:
    case AccountActionTypes.SET_SEARCH_FORM_ITEM_TYPE:
    case AccountActionTypes.SET_SEARCH_FORM_SEARCH_BUTTON_ENABLED:
    case AccountActionTypes.SET_SEARCH_FORM_MODS:
    case AccountActionTypes.SET_SEARCH_FORM_MODS_MIN:
    case AccountActionTypes.SET_SEARCH_FORM_MODS_MAX:
    case AccountActionTypes.SET_SEARCH_FORM_NAME_SUGGESTIONS:
    case AccountActionTypes.SET_SEARCH_FORM_TOTAL_DPS_MIN:
    case AccountActionTypes.SET_SEARCH_FORM_TOTAL_DPS_MAX:
    case AccountActionTypes.SET_SEARCH_FORM_PHYSICAL_DPS_MIN:
    case AccountActionTypes.SET_SEARCH_FORM_PHYSICAL_DPS_MAX:
    case AccountActionTypes.SET_SEARCH_FORM_ELEMENTAL_DPS_MIN:
    case AccountActionTypes.SET_SEARCH_FORM_ELEMENTAL_DPS_MAX:
    case AccountActionTypes.SET_SEARCH_FORM_SOCKETS_MIN:
    case AccountActionTypes.SET_SEARCH_FORM_SOCKETS_MAX:
    case AccountActionTypes.SET_SEARCH_FORM_RED_SOCKETS:
    case AccountActionTypes.SET_SEARCH_FORM_GREEN_SOCKETS:
    case AccountActionTypes.SET_SEARCH_FORM_BLUE_SOCKETS:
    case AccountActionTypes.SET_SEARCH_FORM_WHITE_SOCKETS:
    case AccountActionTypes.SET_SEARCH_FORM_ABYSS_SOCKETS:
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
