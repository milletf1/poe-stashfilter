import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { ILeague } from './../../models/ILeague';
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
      return {
        ...state,
        uiState: {
          ...state.uiState,
          leagueIndex: action.payload.leagueIndex,
        },
      };
    case AccountActionTypes.SET_LEAGUE_CHARACTERS:
      return setLeagueCharacterItems(state, action.payload.characters);
    case AccountActionTypes.SET_LEAGUE_STASH_TABS:
      return setLeagueStashTabs(state, action.payload.stashTabs);
    case AccountActionTypes.SET_SELECTED_TAB:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          browsePageState: {
            ...state.uiState.browsePageState,
            browseCategory: action.payload.browseCategory,
            browseIndex: action.payload.browseIndex,
          },
        },
      };
    case AccountActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          searchPageState: {
            ...state.uiState.searchPageState,
            searchResults: action.payload.searchResults,
          },
        },
      };
    case AccountActionTypes.SET_SEARCH_PAGE_VISIBLE_SECTION:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          searchPageState: {
            ...state.uiState.searchPageState,
            openSection: action.payload.section,
          },
        },
      };
    default:
      return state;
  }
}

function setLeagueCharacterItems(
  state: IAccountState,
  characters: ICharacterItems[],
): IAccountState {
  const leagues: ILeague[] = [...state.leagues];
  leagues[state.uiState.leagueIndex].characters = characters;
  return {...state, leagues };
}

function setLeagueStashTabs(state: IAccountState, stashTabs: IStashTab[]): IAccountState {
  const leagues: ILeague[] = [...state.leagues];
  leagues[state.uiState.leagueIndex].stashTabs = stashTabs;
  return {...state, leagues };
}
