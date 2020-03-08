import { ISearchResult } from './../search/ISearchResult';
import { SearchVisibleSection } from './SearchVisibleSection';

export default interface ISearchPageState {
  /** The visible section in the search tab */
  openSection: SearchVisibleSection;
  /** Results of a search */
  searchResults: ISearchResult[];
}
