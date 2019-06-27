import { IBaseItem } from '../../models/items/IBaseItem';
import NameFilter from '../../services/filter/filter-modules/name-filter/NameFilter';
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
  throw new Error('not implemented');
});

test('should return cards', () => {
  throw new Error('not implemented');
});

test('should return maps', () => {
  throw new Error('not implemented');
});

test('should return a gem that is socketed into an item', () => {
  throw new Error('not implemented');
});

test('should return 2 items', () => {
  throw new Error('not implemented');
});
