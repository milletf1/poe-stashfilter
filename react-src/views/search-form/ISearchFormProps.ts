import { ILeague } from './../../models/ILeague';
import { ISearchResult } from './../../models/search/ISearchResult';
export interface ISearchFormProps {
  leagueIndex: number;
  leagues: ILeague[];
  setSearchResults: (searchResults: ISearchResult[]) => any;
  searchResults: ISearchResult[];
}
