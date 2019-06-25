import { IBaseItem } from '../../models/items/IBaseItem';
import { IFilterInstructions } from './filter-modules/IFilterInstructions';
import { IFilterModule } from './filter-modules/IFilterModule';

class ItemFilter {

  constructor(private modules: Array<IFilterModule<any>>) {}

  /**
   * Filters an IBaseItem array
   * @param items The items to filter
   * @param instructions Details conditions that item should be filtered on
   */
  public filter(items: IBaseItem[], instructions: Array<IFilterInstructions<any>>): IBaseItem[] {
    let filteredItems: IBaseItem[] = [...items];

    for (const instruction of instructions) {
      if (filteredItems.length === 0) { break; }

      const filterModule: IFilterModule<any> = this.modules.find((fm: IFilterModule<any>) =>
        fm.type === instruction.filterModuleType);

      if (!!filterModule) {
        filteredItems = filterModule.filter(filteredItems, instruction.conditions);
      }
    }
    return filteredItems;
  }
}

export default ItemFilter;
