import { IBaseItem } from '../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { BaseItemTypes } from './BaseItemTypes';

class ItemTypeFilter implements IFilterModule<BaseItemTypes> {
  public type: string = 'ItemTypeFilter';

  public filter(items: IBaseItem[], conditions: BaseItemTypes): IBaseItem[] {
    throw new Error('Not implemented');
  }
}
