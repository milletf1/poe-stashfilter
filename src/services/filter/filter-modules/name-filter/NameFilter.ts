import { IBaseItem } from '../../../../models/items/IBaseItem';
import { IFilterInstructions } from '../IFilterInstructions';
import { IFilterModule } from './../IFilterModule';

class NameFilter implements IFilterModule<string | string[]> {
  public type: string = 'NameFilter';

  public filter(items: IBaseItem[], conditions: string | string[]): IBaseItem[] {
    return items;
  }
}
