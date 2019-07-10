import { IBaseItem } from '../../models/items/IBaseItem';
import { ItemType } from '../../services/filter/filter-modules/item-type-filter/ItemType';
import ItemTypeFilter from '../../services/filter/filter-modules/item-type-filter/ItemTypeFilter';
import { assertItemsFound, getTestItem } from '../utils';
import json from './item-filter-test-items.json';

describe('Item Type Filter tests', () => {

  const items: IBaseItem[] = (json as IBaseItem[]);

  test('should return one handed weapons', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Doon Cuebiyari', 'Vaal Sceptre'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Doon Cuebiyari" in test data');
    }
    testItems.push(getTestItem(items, 'Pain Spire', 'Imbued Wand'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Pain Spire Imbued Wand" in test data');
    }
    testItems.push(getTestItem(items, null, 'Tribal Club'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Tribal Club" in test data');
    }
    testItems.push(getTestItem(items, 'Severed in Sleep', 'Cutlass'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Severed in Sleep" in test data');
    }
    testItems.push(getTestItem(items, 'Maelstr\u00f6m Stinger', 'Golden Kris'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Maelstr\u00f6m Stinger" in test data');
    }
    testItems.push(getTestItem(items, 'Mortem Morsu', 'Fright Claw'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Mortem Morsu" in test data');
    }
    testItems.push(getTestItem(items, 'Third Piece of the Arcane', 'Legion Sword Piece'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Third Piece of the Arcane" in test data');
    }
    testItems.push(getTestItem(items, null, 'Siege Axe'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Siege Axe" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.ONE_HAND_WEAPON]);

    assertItemsFound(testItems, actual);
  });

  test('should return two handed weapons', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Reaper\'s Pursuit', 'Shadow Axe'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Reaper\'s Pursuit Shadow Axe" in test data');
    }
    testItems.push(getTestItem(items, null, 'Imperial Staff'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Imperial Staff" in test data');
    }
    testItems.push(getTestItem(items, 'The Tempest', 'Long Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "The Tempest Long Bow" in test data');
    }
    testItems.push(getTestItem(items, 'Woe Star', 'Colossus Mallet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Woe Star Colossus Mallet" in test data');
    }
    testItems.push(getTestItem(items, null, 'Corroded Blade'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Corroded Blade" in test data');
    }
    testItems.push(getTestItem(items, 'Miracle Chum', 'Fishing Rod'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Miracle Chum Fishing Rod" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.TWO_HAND_WEAPON]);

    assertItemsFound(testItems, actual);
  });

  test('should return bows', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'The Tempest', 'Long Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "The Tempest Long Bow" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.BOW]);

    assertItemsFound(testItems, actual);
  });

  test('should return claws', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Mortem Morsu', 'Fright Claw'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Mortem Morsu" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.CLAW]);

    assertItemsFound(testItems, actual);
  });

  test('should return daggers', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Maelstr\u00f6m Stinger', 'Golden Kris'));
    if (!testItems[testItems.length - 1]) {
      const errorMessage: string =
        'failed to find expected item "Maelstr\u00f6m Stinger Golden Kris" in test data';
      throw new Error(errorMessage);
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.DAGGER]);

    assertItemsFound(testItems, actual);
  });

  test('should return one handed axes', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Siege Axe'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Siege Axe" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.ONE_HAND_AXE]);

    assertItemsFound(testItems, actual);
  });

  test('should return one handed maces', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Doon Cuebiyari', 'Vaal Sceptre'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Doon Cuebiyari" in test data');
    }
    testItems.push(getTestItem(items, null, 'Tribal Club'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Tribal Club" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.ONE_HAND_MACE]);

    assertItemsFound(testItems, actual);
  });

  test('should return one handed swords', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Severed in Sleep', 'Cutlass'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Severed in Sleep Cutlass" in test data');
    }
    testItems.push(getTestItem(items, 'Third Piece of the Arcane', 'Legion Sword Piece'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Third Piece of the Arcane" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.ONE_HAND_SWORD]);

    assertItemsFound(testItems, actual);
  });

  test('should return sceptres', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Doon Cuebiyari', 'Vaal Sceptre'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Doon Cuebiyari" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.SCEPTRE]);

    assertItemsFound(testItems, actual);
  });

  test('should return staves', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Imperial Staff'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Imperial Staff" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.STAFF]);

    assertItemsFound(testItems, actual);
  });

  test('should return two handed axes', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Reaper\'s Pursuit', 'Shadow Axe'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Reaper\'s Pursuit Shadow Axe" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.TWO_HAND_AXE]);

    assertItemsFound(testItems, actual);
  });

  test('should return two handed maces', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Woe Star', 'Colossus Mallet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Woe Star Colossus Mallet" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.TWO_HAND_MACE]);

    assertItemsFound(testItems, actual);
  });

  test('should return two handed swords', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Corroded Blade'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Corroded Blade" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.TWO_HAND_SWORD]);

    assertItemsFound(testItems, actual);
  });

  test('should return wands', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Pain Spire', 'Imbued Wand'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Pain Spire Imbued Wand" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.WAND]);

    assertItemsFound(testItems, actual);
  });

  // test('should return body armours', () => {throw new Error('Not implemented'); });
  // test('should return boots', () => {throw new Error('Not implemented'); });
  // test('should return gloves', () => {throw new Error('Not implemented'); });
  // test('should return helmets', () => {throw new Error('Not implemented'); });
  // test('should return shields', () => {throw new Error('Not implemented'); });
  // test('should return amulets', () => {throw new Error('Not implemented'); });
  // test('should return beasts', () => {throw new Error('Not implemented'); });
  // test('should return belts', () => {throw new Error('Not implemented'); });
  // test('should return currency', () => {throw new Error('Not implemented'); });
  // test('should return cards', () => {throw new Error('Not implemented'); });
  // test('should return essences', () => {throw new Error('Not implemented'); });
  // test('should return fishing rods', () => {throw new Error('Not implemented'); });
  // test('should return flasks', () => {throw new Error('Not implemented'); });
  // test('should return gems', () => {throw new Error('Not implemented'); });
  // test('should return incubators', () => {throw new Error('Not implemented'); });
  // test('should return jewels', () => {throw new Error('Not implemented'); });
  // test('should return leaguestones', () => {throw new Error('Not implemented'); });
  // test('should return maps', () => {throw new Error('Not implemented'); });
  // test('should return nets', () => {throw new Error('Not implemented'); });
  // test('should return prophecies', () => {throw new Error('Not implemented'); });
  // test('should return quivers', () => {throw new Error('Not implemented'); });
  // test('should return rings', () => {throw new Error('Not implemented'); });
  // test('should return scarabs', () => {throw new Error('Not implemented'); });
  // test('should return map fragments', () => {throw new Error('Not implemented'); });
  // test('should return map resonators', () => {throw new Error('Not implemented'); });
  // test('should return map fossils', () => {throw new Error('Not implemented'); });
  // test('should return map divine vessels', () => {throw new Error('Not implemented'); });
  // test('should return breach and timeless splinters', () =>
  // {throw new Error('Not implemented'); });
  // test('should return multiple item types',  () => {throw new Error('Not implemented'); });

  // test('should return one handed weapon bases', () => {throw new Error('Not implemented'); });
  // test('should return two handed weapon bases', () => {throw new Error('Not implemented'); });
  // test('should return bow bases', () => {throw new Error('Not implemented'); });
  // test('should return claw bases', () => {throw new Error('Not implemented'); });
  // test('should return dagger bases', () => {throw new Error('Not implemented'); });
  // test('should return one handed axe bases', () => {throw new Error('Not implemented'); });
  // test('should return one handed mace bases', () => {throw new Error('Not implemented'); });
  // test('should return one handed sword bases', () => {throw new Error('Not implemented'); });
  // test('should return sceptre bases', () => {throw new Error('Not implemented'); });
  // test('should return staff bases', () => {throw new Error('Not implemented'); });
  // test('should return two handed axe bases', () => {throw new Error('Not implemented'); });
  // test('should return two handed mace bases', () => {throw new Error('Not implemented'); });
  // test('should return two handed sword bases', () => {throw new Error('Not implemented'); });
  // test('should return wand bases', () => {throw new Error('Not implemented'); });
  // test('should return body armour bases', () => {throw new Error('Not implemented'); });
  // test('should return boot bases', () => {throw new Error('Not implemented'); });
  // test('should return glove bases', () => {throw new Error('Not implemented'); });
  // test('should return helmet bases', () => {throw new Error('Not implemented'); });
  // test('should return shield bases', () => {throw new Error('Not implemented'); });
  // test('should return amulet bases', () => {throw new Error('Not implemented'); });
  // test('should return beast bases', () => {throw new Error('Not implemented'); });
  // test('should return belt bases', () => {throw new Error('Not implemented'); });
  // test('should return currency bases', () => {throw new Error('Not implemented'); });
  // test('should return card bases', () => {throw new Error('Not implemented'); });
  // test('should return essence bases', () => {throw new Error('Not implemented'); });
  // test('should return fishing rod bases', () => {throw new Error('Not implemented'); });
  // test('should return flask bases', () => {throw new Error('Not implemented'); });
  // test('should return gem bases', () => {throw new Error('Not implemented'); });
  // test('should return incubator bases', () => {throw new Error('Not implemented'); });
  // test('should return jewel bases', () => {throw new Error('Not implemented'); });
  // test('should return leaguestone bases', () => {throw new Error('Not implemented'); });
  // test('should return map bases', () => {throw new Error('Not implemented'); });
  // test('should return net bases', () => {throw new Error('Not implemented'); });
  // test('should return prophecy bases', () => {throw new Error('Not implemented'); });
  // test('should return quiver bases', () => {throw new Error('Not implemented'); });
  // test('should return ring bases', () => {throw new Error('Not implemented'); });
  // test('should return scarab bases', () => {throw new Error('Not implemented'); });
  // test('should return map fragment bases', () => {throw new Error('Not implemented'); });
  // test('should return map resonator bases', () => {throw new Error('Not implemented'); });
  // test('should return map fossil bases', () => {throw new Error('Not implemented'); });
  // test('should return breach and timeless splinter bases', () =>
  // {throw new Error('Not implemented'); });
  // test('should return multiple item bases', () => {throw new Error('Not implemented'); });

  // test('should be able to return item types and item bases in a single search', () => {
  //   throw new Error('Not implemented');
  // });
});
