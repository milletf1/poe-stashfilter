import IBrowsePageState from './IBrowsePageState';
import ISearchPageState from './ISearchPageState';

export interface IUiState {
  /** Selected tab */
  route: string;
  /** Selected league */
  leagueIndex: number;
  /** State of search page */
  searchPageState: ISearchPageState;
  /** State of browse page */
  browsePageState: IBrowsePageState;
}
