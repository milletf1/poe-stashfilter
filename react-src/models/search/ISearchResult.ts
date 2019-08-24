import { IBaseItem } from '../items/IBaseItem';
import { BrowseItemCategory } from '../ui-state/BrowseItemCategory';

export interface ISearchResult {
  item: IBaseItem;
  containerName: string;
  containerCategory: BrowseItemCategory;
}
