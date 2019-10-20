import { ReactWrapper } from 'enzyme';
import { IBaseItem } from '../models/items/IBaseItem';
import { isICurrency } from '../models/items/ICurrency';
import { IItemProperty } from './../models/items/IItemProperty';

/**
 * Finds and returns the first item with a given name and typeline.
 * Returns null if item isn't found.
 * @param items The items to search
 * @param name Name of the item to return
 * @param typeLine Typeline of item to return
 */
export function getTestItem(items: IBaseItem[], name?: string, typeLine?: string): IBaseItem {
  if (!name && !typeLine) {
    return;
  }
  if (name && typeLine) {
    return items.find((i: IBaseItem) => i.name === name && i.typeLine === typeLine) || null;
  } else if (name) {
    return items.find((i: IBaseItem) => i.name === name) || null;
  }
  // only typeline left
  return items.find((i: IBaseItem) => i.typeLine === typeLine) || null;
}

/**
 * Checks if the items in expectedItems match those in actualItems
 * @param expectedItems The items that we expect to be found
 * @param actualItems The items that were found
 */
export function assertItemsFound(expectedItems: IBaseItem[], actualItems: IBaseItem[]): void {
  expect(actualItems.length).toBe(expectedItems.length);
  for (const expectedItem of expectedItems) {
    const foundItems: IBaseItem[] = actualItems.filter((i: IBaseItem) => i.id === expectedItem.id);
    expect(foundItems.length).toBe(1);
  }
}

/**
 * Checks if a `ItemHeader` component renders an item correctly
 * @param wrapper The react component to test
 * @param item The item that the component has rendered
 */
export function assertComponentItemHeader(wrapper: ReactWrapper, item: IBaseItem): void {
  if (!isICurrency(item) && item.name.length > 0) {
    expect(wrapper.first().hasClass('name')).toBeTruthy();
    expect(wrapper.first().text()).toBe(item.name);
  }
  const typeLine: ReactWrapper = wrapper.find('.type-line');
  expect(typeLine.text()).toBe(item.typeLine);
}
