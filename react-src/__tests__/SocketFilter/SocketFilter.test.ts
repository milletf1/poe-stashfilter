import SocketFilter from '../../services/filter/filter-modules/socket-filter/SocketFilter';
import { assertItemsFound, getTestItem } from '../utils';
import { IBaseItem } from './../../models/items/IBaseItem';
import json from './socket-filter-test-items.json';

describe('Socket Filter tests', () => {
  const items: IBaseItem[] = (json as IBaseItem[]);

  test('should return items with 1 red socket minimum', () => {
    // Lycosidae (1), Tombfist (2), The Tempest's Binding (1)
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Lycosidae', 'Rawhide Tower Shield'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Lycosidae" in test data');
    }
    testItems.push(getTestItem(items, 'Tombfist', 'Steelscale Gauntlets'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Tombfist" in test data');
    }
    testItems.push(getTestItem(items, 'The Tempest\'s Binding', 'Callous Mask'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "The Tempest\'s Binding" in test data');
    }
    const filter: SocketFilter = new SocketFilter();
    const actual: IBaseItem[] = filter.filter(items, { redSockets: 1 });

    assertItemsFound(testItems, actual);
  });

  test('should return items with 2 red sockets minimum', () => {
    // Tombfist (2)
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Tombfist', 'Steelscale Gauntlets'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Tombfist" in test data');
    }
    const filter: SocketFilter = new SocketFilter();
    const actual: IBaseItem[] = filter.filter(items, { redSockets: 2 });

    assertItemsFound(testItems, actual);
  });

  test('should return items with 1 blue socket minimum', () => {
    // The Tempest's Binding (1), Facebreaker (1), Vortex Brow (2)
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'The Tempest\'s Binding', 'Callous Mask'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "The Tempest\'s Binding" in test data');
    }
    testItems.push(getTestItem(items, 'Facebreaker', 'Strapped Mitts'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Facebreaker" in test data');
    }
    testItems.push(getTestItem(items, 'Vortex Brow', 'Hubris Circlet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Vortex Brow Hubris Circlet" in test data');
    }
    const filter: SocketFilter = new SocketFilter();
    const actual: IBaseItem[] = filter.filter(items, { blueSockets: 1 });

    assertItemsFound(testItems, actual);
  });

  test('should return items with 2 blue sockets minimum', () => {
    // Vortex Brow (2)
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Vortex Brow', 'Hubris Circlet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Vortex Brow Hubris Circlet" in test data');
    }
    const filter: SocketFilter = new SocketFilter();
    const actual: IBaseItem[] = filter.filter(items, { blueSockets: 2 });

    assertItemsFound(testItems, actual);
  });

  test('should return items with 1 green socket minimum', () => {
    // Vortex Brow (1), The Tempest's Binding (2), Facebreaker (2)
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'The Tempest\'s Binding', 'Callous Mask'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "The Tempest\'s Binding" in test data');
    }
    testItems.push(getTestItem(items, 'Facebreaker', 'Strapped Mitts'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Facebreaker" in test data');
    }
    testItems.push(getTestItem(items, 'Vortex Brow', 'Hubris Circlet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Vortex Brow Hubris Circlet" in test data');
    }
    const filter: SocketFilter = new SocketFilter();
    const actual: IBaseItem[] = filter.filter(items, { greenSockets: 1 });

    assertItemsFound(testItems, actual);
  });

  test('should return items with 2 green sockets minimum', () => {
    // The Tempest's Binding (2), Facebreaker (2)
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'The Tempest\'s Binding', 'Callous Mask'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "The Tempest\'s Binding" in test data');
    }
    testItems.push(getTestItem(items, 'Facebreaker', 'Strapped Mitts'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Facebreaker" in test data');
    }
    const filter: SocketFilter = new SocketFilter();
    const actual: IBaseItem[] = filter.filter(items, { greenSockets: 2 });

    assertItemsFound(testItems, actual);
  });

  test('should return items with 1 white socket minimum', () => {
    // Malachai's Artifice (1), Tabula rasa (6)
    throw new Error('Test not implemented');
  });

  test('should return items with 2 white sockets minimum', () => {
    // Tabula rasa (6)
    throw new Error('Test not implemented');
  });

  test('should return items with 1 abyssal socket minimum', () => {
    // Tombfist (2) Havok Harness Stygian Vise (1)
    throw new Error('Test not implemented');
  });

  test('should return items with 2 abyssal sockets minimum', () => {
    // Tombfist (2)
    throw new Error('Test not implemented');
  });

  test('should return items with 5 sockets minimum', () => {
    // Tabula rasa (6)
    throw new Error('Test not implemented');
  });

  test('should return items with 4 sockets maximum', () => {
    // Facebreaker (4), Tombfist (4), Havok Harness Stygian Vise (1), Lycosidae (1)
    // The Tempest's Binding (4), Vortex Brow (3)
    throw new Error('Test not implemented');
  });
});
