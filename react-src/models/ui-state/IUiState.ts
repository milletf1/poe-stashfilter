import { BrowseItemCategory } from './BrowseItemCategory';
import ISearchPageState from './ISearchPageState';

export interface IUiState {
  /** Selected tab */
  route: string;
  /** Selected league */
  leagueIndex: number;
  /** index of selected browse item */
  browseIndex: number;
  /** type of selected browse item (character or stash tab) */
  browseCategory: BrowseItemCategory;
  /** State of search page */
  searchPageState: ISearchPageState;
}
