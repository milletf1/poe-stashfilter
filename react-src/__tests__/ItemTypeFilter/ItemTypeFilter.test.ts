import { IBaseItem } from '../../models/items/IBaseItem';
import { createIItemBase, IItemBase } from '../../services/filter/filter-modules/item-type-filter/IItemBase';
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
      throw new Error(
        'failed to find expected item "Foul Iridescence Searching Eye Jewel" in test data',
      );
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
    testItems.push(getTestItem(items, null, 'Divine Vessel'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Divine Vessel" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.MAP_FRAGMENT]);

    assertItemsFound(testItems, actual);
  });

  test('should return resonators', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Potent Chaotic Resonator'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Potent Chaotic Resonator" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.RESONATOR]);

    assertItemsFound(testItems, actual);
  });

  test('should return fossils', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Dense Fossil'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Dense Fossil" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.FOSSIL]);

    assertItemsFound(testItems, actual);
  });

  test('should return splinters', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Splinter of Xoph'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Splinter of Xoph" in test data');
    }
    testItems.push(getTestItem(items, null, 'Timeless Templar Splinter'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Timeless Templar Splinter" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.SPLINTER]);

    assertItemsFound(testItems, actual);
   });

  test('should return breachstones', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Xoph\'s Breachstone'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Xoph\'s Breachstone" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.BREACHSTONE]);

    assertItemsFound(testItems, actual);
  });

  test('should return multiple item types',  () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Cataclysm Band', 'Coral Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Cataclysm Band Coral Ring" in test data');
    }
    testItems.push(getTestItem(items, 'Hate Torc', 'Onyx Amulet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Hate Torc Onyx Amulet" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.RING, ItemType.AMULET]);

    assertItemsFound(testItems, actual);
  });

  test('should return currency', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Orb of Fusing'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Orb of Fusing" in test data');
    }
    testItems.push(getTestItem(items, null, 'Annulment Shard'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Annulment Shard" in test data');
    }
    testItems.push(getTestItem(items, null, 'Bestiary Orb'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Bestiary Orb" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, [ItemType.CURRENCY]);
    assertItemsFound(testItems, actual);
  });

  test('should return one handed weapon bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Maelstr\u00f6m Stinger', 'Golden Kris'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'failed to find expected item "Maelstr\u00f6m Stinger Golden Kris" in test data',
      );
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.ONE_HAND_WEAPON, 'Golden Kris');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return two handed weapon bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Reaper\'s Pursuit', 'Shadow Axe'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Reaper\'s Pursuit Shadow Axe" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.TWO_HAND_WEAPON, 'Shadow Axe');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return bow bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'The Tempest', 'Long Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "The Tempest Long Bow" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.BOW, 'Long Bow');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return claw bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Mortem Morsu', 'Fright Claw'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Mortem Morsu" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.CLAW, 'Fright Claw');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return dagger bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Maelstr\u00f6m Stinger', 'Golden Kris'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Maelstr\u00f6m Stinger" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.DAGGER, 'Golden Kris');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return one handed axe bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Siege Axe'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Siege Axe" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.ONE_HAND_AXE, 'Siege Axe');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return one handed mace bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Tribal Club'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Tribal Club" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.ONE_HAND_MACE, 'Tribal Club');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return one handed sword bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Severed in Sleep', 'Cutlass'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Severed in Sleep" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.ONE_HAND_SWORD, 'Cutlass');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
   });

  test('should return sceptre bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Doon Cuebiyari', 'Vaal Sceptre'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Doon Cuebiyari" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.SCEPTRE, 'Vaal Sceptre');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return staff bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Imperial Staff'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Imperial Staff" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.STAFF, 'Imperial Staff');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return two handed axe bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Reaper\'s Pursuit', 'Shadow Axe'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Reaper\'s Pursuit Shadow Axe" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.TWO_HAND_AXE, 'Shadow Axe');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return two handed mace bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Woe Star', 'Colossus Mallet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Woe Star Colossus Mallet" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.TWO_HAND_MACE, 'Colossus Mallet');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return two handed sword bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Corroded Blade'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Corroded Blade" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.TWO_HAND_SWORD, 'Corroded Blade');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return wand bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Pain Spire', 'Imbued Wand'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Pain Spire Imbued Wand" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.WAND, 'Imbued Wand');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return body armour bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Cloak of Defiance', 'Lacquered Garb'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Cloak of Defiance" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.BODY_ARMOUR, 'Lacquered Garb');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return boot bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Entropy Sole', 'Ancient Greaves'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Entropy Sole Ancient Greaves" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.BOOTS, 'Ancient Greaves');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return glove bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Corruption Nails', 'Sorcerer Gloves'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'failed to find expected item "Corruption Nails Sorcerer Gloves" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.GLOVES, 'Sorcerer Gloves');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return helmet bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Sol Shelter', 'Harlequin Mask'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Sol Shelter Harlequin Mask" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.HELMET, 'Harlequin Mask');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return shield bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Archon Kite Shield'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Archon Kite Shield" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.SHIELD, 'Archon Kite Shield');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return amulet bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Hate Torc', 'Onyx Amulet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Hate Torc Onyx Amulet" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.AMULET, 'Onyx Amulet');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return belt bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Torment Twine', 'Stygian Vise'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Torment Twine Stygian Vise" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.BELT, 'Stygian Vise');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return currency bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Orb of Fusing'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Orb of Fusing" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.CURRENCY, 'Orb of Fusing');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return card bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Humility'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Humility" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.CARD, 'Humility');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return essence bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Shrieking Essence of Dread'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Shrieking Essence of Dread" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.ESSENCE, 'Essence of Dread');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return flask bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Lavianga\'s Spirit', 'Sanctified Mana Flask'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Lavianga\'s Spirit" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.FLASK, 'Sanctified Mana Flask');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return gem bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Minion Life Support'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Minion Life Support" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.GEM, 'Minion Life');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return incubator bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Enchanted Incubator'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Enchanted Incubator" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.INCUBATOR, 'Enchanted Incubator');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return jewel bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Foul Iridescence', 'Searching Eye Jewel'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'failed to find expected item "Foul Iridescence Searching Eye Jewel" in test data',
      );
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.JEWEL, 'Searching Eye Jewel');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return leaguestone bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Enduring Breach Leaguestone'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Enduring Breach Leaguestone" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.LEAGUESTONE, 'Breach Leaguestone');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return map bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Superior Shaped Spider Forest Map'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'failed to find expected item "Superior Shaped Spider Forest Map" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.MAP, 'Shaped Spider Forest Map');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return net bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Strong Steel Net'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Strong Steel Net" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.NET, 'Strong Steel Net');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return prophecy bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'The Last Watch'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "The Last Watch" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.PROPHECY, 'The Last Watch');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return quiver bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Armageddon Skewer', 'Penetrating Arrow Quiver'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Armageddon Skewer" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.QUIVER, 'Penetrating Arrow Quiver');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return ring bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Cataclysm Band', 'Coral Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Cataclysm Band Coral Ring" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.RING, 'Coral Ring');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return scarab bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Rusted Perandus Scarab'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Rusted Perandus Scarab" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.SCARAB, 'Rusted Perandus Scarab');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return map fragment bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Sacrifice at Midnight'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Sacrifice at Midnight" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.MAP_FRAGMENT, 'Sacrifice at Midnight');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return resonator bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Potent Chaotic Resonator'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Potent Chaotic Resonator" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.RESONATOR, 'Potent Chaotic Resonator');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return fossil bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Dense Fossil'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Dense Fossil" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.FOSSIL, 'Dense Fossil');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return breachstone bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Xoph\'s Breachstone'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Xoph\'s Breachstone" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.BREACHSTONE, 'Xoph\'s Breachstone');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return splinter bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Timeless Templar Splinter'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Timeless Templar Splinter" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.SPLINTER, 'Timeless Templar Splinter');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should return multiple item bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Sacrifice at Midnight'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Sacrifice at Midnight" in test data');
    }
    testItems.push(getTestItem(items, null, 'Timeless Karui Emblem'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Timeless Karui Emblem" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.MAP_FRAGMENT, 'Sacrifice at Midnight');
    const secondItemBase: IItemBase = createIItemBase(
      ItemType.MAP_FRAGMENT,
      'Timeless Karui Emblem',
    );
    const actual: IBaseItem[] = filter.filter(items, [itemBase, secondItemBase]);

    assertItemsFound(testItems, actual);
  });

  test('should be able to return item types and item bases in a single search', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Cataclysm Band', 'Coral Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Cataclysm Band Coral Ring" in test data');
    }
    testItems.push(getTestItem(items, null, 'Orb of Fusing'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Orb of Fusing" in test data');
    }
    testItems.push(getTestItem(items, null, 'Annulment Shard'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Annulment Shard" in test data');
    }
    testItems.push(getTestItem(items, null, 'Bestiary Orb'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Bestiary Orb" in test data');
    }
    testItems.push(getTestItem(items, null, 'Sacrifice at Midnight'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Sacrifice at Midnight" in test data');
    }
    const types: ItemType[] = [ItemType.RING, ItemType.CURRENCY];
    const bases: IItemBase[] = [
      createIItemBase(ItemType.CURRENCY, 'Orb of Fusing'),
      createIItemBase(ItemType.MAP_FRAGMENT, 'Sacrifice at Midnight'),
    ];
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const actual: IBaseItem[] = filter.filter(items, { types, bases });
    assertItemsFound(testItems, actual);
  });

  test('should return organ bases', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Armala, the Widow\'s Heart'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('failed to find expected item "Armala, the Widow\'s Heart" in test data');
    }
    const filter: ItemTypeFilter = new ItemTypeFilter();
    const itemBase: IItemBase = createIItemBase(ItemType.ORGAN, 'Heart');
    const actual: IBaseItem[] = filter.filter(items, [itemBase]);

    assertItemsFound(testItems, actual);
  });
});
