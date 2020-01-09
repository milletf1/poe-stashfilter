import { BrowseItemCategory } from './BrowseItemCategory';

export interface IUiState {
  /** Selected tab */
  route: string;
  /** Selected league */
  leagueIndex: number;
  /** Selected search parameters name */
  searchIndex: number;
  /** index of selected browse item */
  browseIndex: number;
  /** type of selected browse item */
  browseCategory: BrowseItemCategory;
}
