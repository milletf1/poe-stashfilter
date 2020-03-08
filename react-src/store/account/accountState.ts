import { ILeague } from '../../models/ILeague';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IUiState } from '../../models/ui-state/IUiState';
import { SearchVisibleSection } from '../../models/ui-state/SearchVisibleSection';
import { ISearchResult } from './../../models/search/ISearchResult';

export interface IAccountState {
  accountName: string;
  leagues: ILeague[];
  searchResults: ISearchResult[];
  uiState: IUiState;
}

export const initialState: IAccountState = {
  accountName: 'unknown',
  leagues: [
    {
      characters: [],
      name: 'unknown',
      stashTabs: [],
    },
  ],
  searchResults: [],
  uiState: {
    browseCategory: BrowseItemCategory.STASH_TAB,
    browseIndex: 0,
    leagueIndex: 0,
    route: '/browse',
    searchPageState: {
      openSection: SearchVisibleSection.SEARCH,
    },
  },
};
