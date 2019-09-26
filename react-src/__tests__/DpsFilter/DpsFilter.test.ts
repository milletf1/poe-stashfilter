import DpsFilter from '../../services/filter/filter-modules/dps-filter/DpsFilter';
import { DpsType } from '../../services/filter/filter-modules/dps-filter/IDpsFilterParams';
import { assertItemsFound, getTestItem } from '../utils';
import { IBaseItem } from './../../models/items/IBaseItem';
import json from './dps-filter-test-items.json';

/**
 * Test item data
 *
 * name               pDPS,   eDPS,   cDPS,   DPS,    quality
 * ==========================================================
 * Windripper          95.94  148.42    0     244.36      20
 * Torment Gutter      86.52  253.40    0     339.92       0
 * Chin Sol           235.85   51.75    0     287.60       0
 * Dusk Razor          87.36    9.60    0      96.96       0
 * Hegemony's Era     525.00    0       0     525.00      20
 * Honed Vaal Axe     176.40    0       0     176.40       0
 * Demon Dagger        87.12    0       0      87.08       5
 * Malicious Harb      90.72    0      96.6   187.32       0
 * Edge of Madness     81.20    0      110.6  191.80      20
 * Wrath Razor         99.60    0      107.4  207.00      20
 */

describe('DPS Filter tests', () => {

  const items: IBaseItem[] = (json as IBaseItem[]);

  test('should return items with a DPS value above a minimum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Chin Sol', 'Assassin Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Chin Sol" in test data');
    }
    testItems.push(getTestItem(items, 'Torment Gutter', 'Harpy Rapier'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Torment Gutter Harpy Rapier" in test data');
    }
    testItems.push(getTestItem(items, 'Hegemony\'s Era', 'Judgement Staff'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Hegemony\'s Era" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { min: 280, type: DpsType.ANY });

    assertItemsFound(testItems, actual);
  });

  test('should return items with a DPS value below a maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Dusk Razor', 'Spiraled Foil'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Dusk Razor" in test data');
    }
    testItems.push(getTestItem(items, null, 'Superior Demon Dagger'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Superior Demon Dagger" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, {max: 100, type: DpsType.ANY});

    assertItemsFound(testItems, actual);
  });

  test('should return items with a DPS value between a minimum and maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Windripper', 'Imperial Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Windripper" in test data');
    }
    testItems.push(getTestItem(items, 'Chin Sol', 'Assassin Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Chin Sol" in test data');
    }
    testItems.push(getTestItem(items, 'Wrath Razor', 'Golden Kris'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Wrath Razor" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, {min: 200, max: 300, type: DpsType.ANY});

    assertItemsFound(testItems, actual);
  });

  test('should return items with a physical DPS value above a minimum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Chin Sol', 'Assassin Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Chin Sol" in test data');
    }
    testItems.push(getTestItem(items, 'Hegemony\'s Era', 'Judgement Staff'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Hegemony\'s Era" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { min: 235, type: DpsType.PHYSICAL });

    assertItemsFound(testItems, actual);
  });

  test('should return items with a physical DPS value below a maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Torment Gutter', 'Harpy Rapier'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Torment Gutter" in test data');
    }
    testItems.push(getTestItem(items, 'Dusk Razor', 'Spiraled Foil'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Dusk Razor" in test data');
    }
    testItems.push(getTestItem(items, null, 'Superior Demon Dagger'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Superior Demon Dagger" in test data');
    }
    testItems.push(getTestItem(items, 'Edge of Madness', 'Etched Greatsword'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Edge of Madness" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { max: 89, type: DpsType.PHYSICAL });

    assertItemsFound(testItems, actual);
  });

  test('should return items with a physical DPS value between a minimum and maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Chin Sol', 'Assassin Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Chin Sol" in test data');
    }
    testItems.push(getTestItem(items, null, 'Honed Vaal Axe of the Worthy'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Honed Vaal Axe of the Worthy" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, {
      max: 300,
      min: 100,
      type: DpsType.PHYSICAL,
    });

    assertItemsFound(testItems, actual);
  });

  test('should return items with an elemental DPS value above a minimum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Windripper', 'Imperial Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Windripper" in test data');
    }
    testItems.push(getTestItem(items, 'Torment Gutter', 'Harpy Rapier'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Torment Gutter" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { min: 100, type: DpsType.ELEMENTAL });

    assertItemsFound(testItems, actual);
  });

  test('should return items with an elemental DPS value below a maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Hegemony\'s Era', 'Judgement Staff'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Hegemony\'s Era" in test data');
    }
    testItems.push(getTestItem(items, null, 'Honed Vaal Axe of the Worthy'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Honed Vaal Axe of the Worthy" in test data');
    }
    testItems.push(getTestItem(items, null, 'Superior Demon Dagger'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Superior Demon Dagger" in test data');
    }
    testItems.push(getTestItem(items, null, 'Malicious Harbinger Bow of the Squall'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'Failed to find expected item "Malicious Harbinger Bow of the Squall" in test data',
      );
    }
    testItems.push(getTestItem(items, 'Edge of Madness', 'Etched Greatsword'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Edge of Madness" in test data');
    }
    testItems.push(getTestItem(items, 'Wrath Razor', 'Golden Kris'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Wrath Razor" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { max: 5, type: DpsType.ELEMENTAL });

    assertItemsFound(testItems, actual);
  });

  test('should return items with an elemental DPS value between a minimum and maximum value',
  () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Chin Sol', 'Assassin Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Chin Sol" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { max: 60, min: 50, type: DpsType.ELEMENTAL });

    assertItemsFound(testItems, actual);
  });

  test('should return items with a chaos DPS value above a minimum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Edge of Madness', 'Etched Greatsword'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Edge of Madness" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { min: 108, type: DpsType.CHAOS });

    assertItemsFound(testItems, actual);
  });
  test('should return items with a chaos DPS value below a maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Windripper', 'Imperial Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Windripper" in test data');
    }
    testItems.push(getTestItem(items, 'Chin Sol', 'Assassin Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Chin Sol" in test data');
    }
    testItems.push(getTestItem(items, 'Torment Gutter', 'Harpy Rapier'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Torment Gutter Harpy Rapier" in test data');
    }
    testItems.push(getTestItem(items, 'Dusk Razor', 'Spiraled Foil'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Dusk Razor" in test data');
    }
    testItems.push(getTestItem(items, 'Hegemony\'s Era', 'Judgement Staff'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Hegemony\'s Era" in test data');
    }
    testItems.push(getTestItem(items, null, 'Honed Vaal Axe of the Worthy'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Honed Vaal Axe of the Worthy" in test data');
    }
    testItems.push(getTestItem(items, null, 'Superior Demon Dagger'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Superior Demon Dagger" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { max: 50, type: DpsType.CHAOS });

    assertItemsFound(testItems, actual);
  });

  test('should return items with a chaos DPS value between a minimum and maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, null, 'Malicious Harbinger Bow of the Squall'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'Failed to find expected item "Malicious Harbinger Bow of the Squall" in test data',
      );
    }
    testItems.push(getTestItem(items, 'Wrath Razor', 'Golden Kris'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Wrath Razor" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(items, { min: 50, max: 109, type: DpsType.CHAOS });

    assertItemsFound(testItems, actual);
  });

  test('should handle multiple DPS value searches', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Chin Sol', 'Assassin Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Chin Sol" in test data');
    }
    testItems.push(getTestItem(items, 'Torment Gutter', 'Harpy Rapier'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Torment Gutter Harpy Rapier" in test data');
    }
    testItems.push(getTestItem(items, null, 'Malicious Harbinger Bow of the Squall'));
    if (!testItems[testItems.length - 1]) {
      throw new Error(
        'Failed to find expected item "Malicious Harbinger Bow of the Squall" in test data',
      );
    }
    testItems.push(getTestItem(items, null, 'Superior Demon Dagger'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Superior Demon Dagger" in test data');
    }
    const filter: DpsFilter = new DpsFilter();
    const actual: IBaseItem[] = filter.filter(
      items,
      [
        { min: 200, max: 300, type: DpsType.PHYSICAL },
        { min: 200, max: 300, type: DpsType.ELEMENTAL },
        { min: 90, max: 100, type: DpsType.CHAOS },
        { min: 80, max: 90, type: DpsType.ANY },
    ]);

    assertItemsFound(testItems, actual);
  });
});
