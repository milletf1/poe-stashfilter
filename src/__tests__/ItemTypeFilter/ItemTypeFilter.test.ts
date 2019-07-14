import { IBaseItem } from '../../models/items/IBaseItem';
import { ItemType } from '../../services/filter/filter-modules/item-type-filter/ItemType';
import ItemTypeFilter from '../../services/filter/filter-modules/item-type-filter/ItemTypeFilter';
import { assertItemsFound, getTestItem } from '../utils';
import json from './item-type-filter-test-items.json';

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

  test('should return body armours', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Cloak of Defiance', 'Lacquered Garb'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Cloak of Defiance" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.BODY_ARMOUR]);

    assertItemsFound(testItems, actual);
  });

  test('should return boots', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Entropy Sole', 'Ancient Greaves'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Entropy Sole Ancient Greaves" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.BOOTS]);

    assertItemsFound(testItems, actual);
  });

  test('should return gloves', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Corruption Nails', 'Sorcerer Gloves'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'failed to find expected item "Corruption Nails Sorcerer Gloves" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.GLOVES]);

    assertItemsFound(testItems, actual);
  });

  test('should return helmets', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Sol Shelter', 'Harlequin Mask'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Sol Shelter Harlequin Mask" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.HELMET]);

    assertItemsFound(testItems, actual);
  });

  test('should return shields', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Archon Kite Shield'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Archon Kite Shield" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.SHIELD]);

    assertItemsFound(testItems, actual);
  });

  test('should return amulets', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Hate Torc', 'Onyx Amulet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Hate Torc Onyx Amulet" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.AMULET]);

    assertItemsFound(testItems, actual);
  });

  test('should return beasts', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Grayclaw the Mangy', 'Farric Frost Hellion Alpha'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Grayclaw the Mangy" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.BEAST]);

    assertItemsFound(testItems, actual);
  });

  test('should return belts', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Agony Lock', 'Rustic Sash'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Agony Lock Rustic Sash" in test data');
    }
    testItems.push(getTestItem(items, 'Torment Twine', 'Stygian Vise'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Torment Twine Stygian Vise" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.BELT]);

    assertItemsFound(testItems, actual);
  });

  test('should return cards', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Humility'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Humility" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.CARD]);

    assertItemsFound(testItems, actual);
  });

  test('should return essences', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Shrieking Essence of Dread'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Shrieking Essence of Dread" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.ESSENCE]);

    assertItemsFound(testItems, actual);
  });

  test('should return fishing rods', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Miracle Chum', 'Fishing Rod'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Miracle Chum Fishing Rod" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.FISHING_ROD]);

    assertItemsFound(testItems, actual);
  });

  test('should return flasks', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Lavianga\'s Spirit', 'Sanctified Mana Flask'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Lavianga\'s Spirit" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.FLASK]);

    assertItemsFound(testItems, actual);
  });

  test('should return gems', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Minion Life Support'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Minion Life Support" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.GEM]);

    assertItemsFound(testItems, actual);
  });

  test('should return incubators', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Enchanted Incubator'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Enchanted Incubator" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.INCUBATOR]);

    assertItemsFound(testItems, actual);
  });

  test('should return jewels', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Damnation Glisten', 'Cobalt Jewel'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Damnation Glisten Cobalt Jewel" in test data');
    }
    testItems.push(getTestItem(items, 'Foul Iridescence', 'Searching Eye Jewel'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Enduring Breach Leaguestone" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.JEWEL]);

    assertItemsFound(testItems, actual);
  });

  test('should return leaguestones', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Enduring Breach Leaguestone'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Enduring Breach Leaguestone" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.LEAGUESTONE]);

    assertItemsFound(testItems, actual);
  });

  test('should return maps', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Superior Shaped Spider Forest Map'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'failed to find expected item "Superior Shaped Spider Forest Map" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.MAP]);

    assertItemsFound(testItems, actual);
  });

  test('should return nets', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Strong Steel Net'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Strong Steel Net" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.NET]);

    assertItemsFound(testItems, actual);
  });

  test('should return prophecies', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'The Last Watch'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "The Last Watch" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.PROPHECY]);

    assertItemsFound(testItems, actual);
  });

  test('should return quivers', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Armageddon Skewer', 'Penetrating Arrow Quiver'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Armageddon Skewer" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.QUIVER]);

    assertItemsFound(testItems, actual);
  });

  test('should return rings', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Cataclysm Band', 'Coral Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Cataclysm Band Coral Ring" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.RING]);

    assertItemsFound(testItems, actual);
  });

  test('should return scarabs', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Rusted Perandus Scarab'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Rusted Perandus Scarab" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.SCARAB]);

    assertItemsFound(testItems, actual);
  });

  test('should return map fragments', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Sacrifice at Midnight'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Sacrifice at Midnight" in test data');
    }
    testItems.push(getTestItem(items, null, 'Mortal Rage'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Mortal Rage" in test data');
    }
    testItems.push(getTestItem(items, null, 'Fragment of the Minotaur'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Fragment of the Minotaur" in test data');
    }
    testItems.push(getTestItem(items, null, 'Timeless Karui Emblem'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Timeless Karui Emblem" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.MAP_FRAGMENT]);

    assertItemsFound(testItems, actual);
  });

  // test('should return resonators', () => {throw new Error('Not implemented'); });
  // test('should return fossils', () => {throw new Error('Not implemented'); });
  // test('should return divine vessels', () => {throw new Error('Not implemented'); });
  // test('should return splinters', () => {throw new Error('Not implemented'); });
  // test('should return breachstones', () => {throw new Error('Not implemented'); });
  // test('should return multiple item types',  () => {throw new Error('Not implemented'); });
  // TODO: currency one last so I have a better idea of how to exclude
  // TODO: essences, beasts, incubators, leaguestones, nets, prophecies, breachstones, scarabs
  // test('should return currency', () => {throw new Error('Not implemented'); });

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
  // test('should return map breachstone bases', () => {throw new Error('Not implemented'); });
  // test('should return breach and timeless splinter bases', () =>
  // {throw new Error('Not implemented'); });
  // test('should return multiple item bases', () => {throw new Error('Not implemented'); });

  // test('should be able to return item types and item bases in a single search', () => {
  //   throw new Error('Not implemented');
  // });
});
