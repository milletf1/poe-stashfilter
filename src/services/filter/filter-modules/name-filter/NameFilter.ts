import { array } from 'prop-types';
import { IBaseItem } from '../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';

class NameFilter implements IFilterModule<string | string[]> {
  public type: string = 'NameFilter';

  public filter(items: IBaseItem[], conditions: string | string[]): IBaseItem[] {
    const filteredItems: IBaseItem[] = [];

    return filteredItems;
  }
}

export default NameFilter;
