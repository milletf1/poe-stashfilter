import { array } from 'prop-types';
import { IBaseItem } from '../../../../models/items/IBaseItem';
import { isISocketableItem, ISocketableItem } from '../../../../models/items/ISocketableItem';
import { IFilterModule } from './../IFilterModule';

class NameFilter implements IFilterModule<string | string[]> {
  public type: string = 'NameFilter';

  public filter(items: IBaseItem[], conditions: string | string[]): IBaseItem[] {
    if (!items || !conditions) { return []; }
    const filteredItems: IBaseItem[] = [];

    if (Array.isArray(conditions)) {
      for (const name of conditions) {
        filteredItems.push(...this.filterOnName(items, name));
      }
    } else {
      filteredItems.push(...this.filterOnName(items, conditions));
    }
    return filteredItems;
  }

  /** Performs name filtering on a single string and returns the results */
  private filterOnName(items: IBaseItem[], name: string): IBaseItem[] {
    if (!name || !name.trim()) { return []; }
    const nameFilter: string = name.trim().toLowerCase();
    const filteredItems: IBaseItem[] = [];

    for (const item of items) {
      const itemName: string = `${item.name.toLowerCase().trim()} ${item.typeLine.toLowerCase().trim()}`;

      if (itemName.indexOf(nameFilter) !== -1) {
        filteredItems.push(item);
      } else if (isISocketableItem(item)) {
        const filteredSocketItems: IBaseItem[] = this
          .filterOnName((item as ISocketableItem).socketedItems, name);

        for (const socketItem of filteredSocketItems) {
          filteredItems.push({
            ...socketItem,
            inventoryId: item.inventoryId,
            x: item.x,
            y: item.y,
          });
        }
      }
    }
    return filteredItems;
  }
}

export default NameFilter;
