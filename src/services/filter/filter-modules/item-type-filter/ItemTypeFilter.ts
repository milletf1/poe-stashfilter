import { IBaseItem } from '../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { IItemBase } from './IItemBase';
import { ItemType as ItemType } from './ItemType';

export interface IItemFilterParams {
  type?: ItemType[];
  base?: IItemBase[];
}

class ItemTypeFilter implements IFilterModule<ItemType[] | IItemBase[] | IItemFilterParams[]> {
  public type: string = 'ItemTypeFilter';

  public filter(
    items: IBaseItem[],
    conditions: ItemType[] | IItemBase[] | IItemFilterParams[],
  ): IBaseItem[] {
    throw new Error('Not implemented');
  }
}
export default ItemTypeFilter;
