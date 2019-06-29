import { IBaseItem } from '../../models/items/IBaseItem';
import { IGear } from '../../models/items/IGear';
import NameFilter from '../../services/filter/filter-modules/name-filter/NameFilter';
import { ISocketItem } from './../../models/items/ISocketItem';
import json from './name-filter-test-items.json';

function getItems(): IBaseItem[] {
  return (json as IBaseItem[]);
}

test('should return item when searched by full name', () => {
  const items: IBaseItem[] = getItems();
  const itemName: string = 'Scold\'s Bridle';
  const condition: string = `${itemName} Mind Cage`;
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem = items.find((item: IBaseItem) => item.name === itemName);

  if (!expected) {
    throw new Error('Failed to find expected item "Scold\'s Bridle" in test data');
  }

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
});

test('should return item when searched by partial name', () => {
  const items: IBaseItem[] = getItems();
  const itemName: string = 'Scold\'s Bridle';
  const condition: string = 'Bridle Mind';
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem = items.find((item: IBaseItem) => item.name === itemName);

  if (!expected) {
    throw new Error('Failed to find expected item "Scold\'s Bridle" in test data');
  }

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
});

test('should ignore case when filtering items', () => {
  const items: IBaseItem[] = getItems();
  const itemName: string = 'Scold\'s Bridle';
  const condition: string = 'SCOLD\'S BRIDLE MIND CAGE';
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem = items.find((item: IBaseItem) => item.name === itemName);

  if (!expected) {
    throw new Error('Failed to find expected item "Scold\'s Bridle" in test data');
  }

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
});

test('should return item when searched by the name', () => {
  const items: IBaseItem[] = getItems();
  const itemName: string = 'Scold\'s Bridle';
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem = items.find((item: IBaseItem) => item.name === itemName);

  if (!expected) {
    throw new Error('Failed to find expected item "Scold\'s Bridle" in test data');
  }

  const actual: IBaseItem[] = filter.filter(items, itemName);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
});

test('should return item when searched by typeline', () => {
  const items: IBaseItem[] = getItems();
  const itemName: string = 'Scold\'s Bridle';
  const condition: string = 'Mind Cage';
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem = items.find((item: IBaseItem) => item.name === itemName);

  if (!expected) {
    throw new Error('Failed to find expected item "Scold\'s Bridle" in test data');
  }

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
});

test('should return currency', () => {
  const items: IBaseItem[] = getItems();
  const condition: string = 'Chromatic Orb';
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem = items.find((item: IBaseItem) => item.typeLine === condition);

  if (!expected) {
    throw new Error('Failed to find expected item "Chromatic Orb" in test data');
  }

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
});

test('should return cards', () => {
  const items: IBaseItem[] = getItems();
  const condition: string = 'Her Mask';
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem = items.find((item: IBaseItem) => item.typeLine === condition);

  if (!expected) {
    throw new Error('Failed to find expected item "Her Mask" in test data');
  }

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
});

test('should return maps', () => {
  const items: IBaseItem[] = getItems();
  const condition: string = 'Strand Map';
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem = items.find((item: IBaseItem) => item.typeLine === condition);

  if (!expected) {
    throw new Error('Failed to find expected item "Strand Map" in test data');
  }

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
});

test('should return a gem that is socketed into an item', () => {
  const items: IBaseItem[] = getItems();
  const condition: string = 'Cast when Damage Taken Support';
  const filter: NameFilter = new NameFilter();
  // Get item that has socketed gem (Goldwyrm)
  const socketItem: IGear = (items.find((item: IBaseItem) => item.name === 'Goldwyrm') as IGear);

  if (!socketItem) {
    throw new Error('Failed to find socket item "Goldwyrm" in test data');
  }
  // Get target item from Goldwyrm (Cast when Damage Taken Support)
  const expected: IBaseItem = socketItem.socketedItems
    .find((item: ISocketItem) => item.typeLine === condition);

  if (!expected) {
    throw new Error('Failed to find expected item "Cast when Damage Taken Support" in test data');
  }
  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(actual.length).toBe(1);
  expect(actual[0].id).toBe(expected.id);
  // Check that returned item has position coordinates and inventory id of socket item
  expect(actual[0].x).toBe(socketItem.x);
  expect(actual[0].y).toBe(socketItem.y);
  expect(actual[0].inventoryId).toBe(socketItem.inventoryId);
});

test('should return 2 items that have been searched for', () => {
  const items: IBaseItem[] = getItems();
  const conditions: string[] = ['Her Mask', 'Strand Map'];
  const filter: NameFilter = new NameFilter();
  const expected: IBaseItem[] = items
    .filter((item: IBaseItem) => {
      return item.typeLine === conditions[0] || item.typeLine === conditions[1];
    });

  if (!expected.find((item: IBaseItem) => item.typeLine === conditions[0])) {
    throw new Error(`Failed to find expected item ${conditions[0]} in test data`);
  }
  if (!expected.find((item: IBaseItem) => item.typeLine === conditions[1])) {
    throw new Error(`Failed to find expected item ${conditions[1]} in test data`);
  }

  const actual: IBaseItem[] = filter.filter(items, conditions);
  expect(actual.length).toBe(2);
  // check both items were found
  expect(actual[0].id === expected[0].id || actual[0].id === expected[1].id).toBeTruthy();
  expect(actual[1].id === expected[0].id || actual[1].id === expected[1].id).toBeTruthy();
});

test('should return an empty array when condition is null', () => {
  const items: IBaseItem[] = getItems();
  const condition: string = null;
  const filter: NameFilter = new NameFilter();

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(Array.isArray(actual)).toBeTruthy();
  expect(actual.length).toBe(0);
});

test('should return an empty array when condition is undefined', () => {
  const items: IBaseItem[] = getItems();
  const condition: string = undefined;
  const filter: NameFilter = new NameFilter();

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(Array.isArray(actual)).toBeTruthy();
  expect(actual.length).toBe(0);
});

test('should return an empty array when items is null', () => {
  const items: IBaseItem[] = null;
  const condition: string = `Goldwyrm`;
  const filter: NameFilter = new NameFilter();

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(Array.isArray(actual)).toBeTruthy();
  expect(actual.length).toBe(0);
});

test('should return an empty array when items is undefined', () => {
  const items: IBaseItem[] = undefined;
  const condition: string = `Goldwyrm`;
  const filter: NameFilter = new NameFilter();

  const actual: IBaseItem[] = filter.filter(items, condition);
  expect(Array.isArray(actual)).toBeTruthy();
  expect(actual.length).toBe(0);
});
