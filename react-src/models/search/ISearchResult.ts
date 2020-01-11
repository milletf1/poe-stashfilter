import { IBaseItem } from '../items/IBaseItem';
import { BrowseItemCategory } from '../ui-state/BrowseItemCategory';
import { IStashTabColour } from './../stash-tabs/IStashTabMetadata';

export interface ISearchResult {
  item: IBaseItem;
  stashName: string;
  colour?: IStashTabColour;
  containerCategory: BrowseItemCategory;
}
