import { IBaseItem } from './../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { IDpsFilterParams } from './IDpsFilterParams';
class DpsFilter implements IFilterModule<IDpsFilterParams | IDpsFilterParams[]> {
  public type: string = 'DpsFilter';

  public filter(
    items: IBaseItem[],
    conditions: IDpsFilterParams | IDpsFilterParams[]): IBaseItem[] {
    return items;
  }
}

export default DpsFilter;
