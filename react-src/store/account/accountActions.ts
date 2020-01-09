import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { ILeague } from '../../models/ILeague';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IUiState } from '../../models/ui-state/IUiState';
import { ActionsUnion } from '../util/actionsUnion';
import { createAction } from '../util/createActionUtil';
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
}

export const accountActions = {
  addLeague: (league: ILeague) =>
    createAction(AccountActionTypes.ADD_LEAGUE, { league }),
  setAccountName: (accountName: string) =>
    createAction(AccountActionTypes.SET_ACCOUNT_NAME, { accountName }),
  setLeagueCharacterItems: (leagueName: string, characters: ICharacterItems[]) =>
    createAction(AccountActionTypes.SET_LEAGUE_CHARACTERS, { leagueName, characters }),
  setLeagueStashTabs: (leagueName: string, stashTabs: IStashTab[]) =>
    createAction(AccountActionTypes.SET_LEAGUE_STASH_TABS, { leagueName, stashTabs }),
  setLeagues: (leagues: ILeague[]) =>
    createAction(AccountActionTypes.SET_LEAGUES, { leagues }),
  setSearchResults: (searchResults: ISearchResult[]) =>
    createAction(AccountActionTypes.SET_SEARCH_RESULTS, { searchResults }),
  setSelectedLeague: (leagueIndex: number) =>
    createAction(AccountActionTypes.SET_SELECTED_LEAGUE, { leagueIndex }),
  setSelectedTab: (browseIndex: number, browseCategory: BrowseItemCategory) =>
    createAction(AccountActionTypes.SET_SELECTED_TAB, { browseIndex, browseCategory }),
  setUiState: (uiState: Partial<IUiState>) =>
    createAction(AccountActionTypes.SET_UI_STATE, { uiState }),
};

export type AccountActions = ActionsUnion<typeof accountActions>;
