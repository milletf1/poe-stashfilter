import { ILeague } from '../../models/ILeague';
import { ISearchParameters } from '../../models/search/ISearchParameters';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IUiState } from '../../models/ui-state/IUiState';

export interface IAccountState {
  accountName: string;
  leagues: ILeague[];
  searches: ISearchParameters[];
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
  searches: [],
  uiState: {
    browseCategory: BrowseItemCategory.STASH_TAB,
    browseIndex: 0,
    leagueIndex: 0,
    route: '/browse',
    searchIndex: 0,
  },
};
