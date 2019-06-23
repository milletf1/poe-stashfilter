import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { ILeague } from '../../models/ILeague';
import { ISearchParameters } from '../../models/search/ISearchParameters';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IUiState } from '../../models/ui-state/IUiState';
import { ActionsUnion } from '../util/actionsUnion';
import { createAction } from '../util/createActionUtil';

export const enum AccountActionTypes {
  /** Sets account name */
  SET_ACCOUNT_NAME = 'SET_ACCOUNT_NAME',
  /** Sets leagues */
  SET_LEAGUES = 'SET_LEAGUES',
  /** Sets searches */
  SET_SEARCHES = 'SET_SEARCHES',
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
  /** Adds a search to searches */
  ADD_SEARCH = 'ADD_SEARCH',
  /** Removes a search from searches */
  REMOVE_SEARCH = 'REMOVE_SEARCH',
  /** Changes the selected tab in the stash browser (changes index and character/stash enum) */
  SET_SELECTED_TAB = 'SET_SELECTED_TAB',
  /** Changes the selected search in the search/search results display */
  SET_SELECTED_SEARCH = 'SET_SELECTED_SEARCH',
  /** Updates the selected search */
  UPDATE_SELECTED_SEARCH = 'UPDATE_SELECTED_SEARCH',
}

export const accountActions = {
  addLeague: (league: ILeague) =>
    createAction(AccountActionTypes.ADD_LEAGUE, { league }),
  addSearch: (search: ISearchParameters) =>
    createAction(AccountActionTypes.ADD_SEARCH, { search }),
  removeSearch: (searchIndex: number) =>
    createAction(AccountActionTypes.REMOVE_SEARCH, { searchIndex }),
  setAccountName: (accountName: string) =>
    createAction(AccountActionTypes.SET_ACCOUNT_NAME, { accountName }),
  setLeagueCharacterItems: (leagueName: string, characters: ICharacterItems[]) =>
    createAction(AccountActionTypes.SET_LEAGUE_CHARACTERS, { leagueName, characters }),
  setLeagueStashTabs: (leagueName: string, stashTabs: IStashTab[]) =>
    createAction(AccountActionTypes.SET_LEAGUE_STASH_TABS, { leagueName, stashTabs }),
  setLeagues: (leagues: ILeague[]) =>
    createAction(AccountActionTypes.SET_LEAGUES, { leagues }),
  setSearches: (searches: ISearchParameters[]) =>
    createAction(AccountActionTypes.SET_SEARCHES, { searches }),
  setSelectedLeague: (leagueIndex: number) =>
    createAction(AccountActionTypes.SET_SELECTED_LEAGUE, { leagueIndex }),
  setSelectedSearch: (searchIndex: number) =>
    createAction(AccountActionTypes.SET_SELECTED_SEARCH, { searchIndex }),
  setSelectedTab: (browseIndex: number, browseCategory: BrowseItemCategory) =>
    createAction(AccountActionTypes.SET_SELECTED_TAB, { browseIndex, browseCategory }),
  setUiState: (uiState: Partial<IUiState>) =>
    createAction(AccountActionTypes.SET_UI_STATE, { uiState }),
  updateSelectedSearch: (searchParams: Partial<ISearchParameters>) =>
    createAction(AccountActionTypes.UPDATE_SELECTED_SEARCH, { searchParams }),
};

export type AccountActions = ActionsUnion<typeof accountActions>;
