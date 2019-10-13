import { IMod, IModFilterParams } from '../../services/filter/filter-modules/mod-filter/IModFilterParams';
import ModFilter from '../../services/filter/filter-modules/mod-filter/ModFilter';
import { assertItemsFound, getTestItem } from '../utils';
import { IBaseItem } from './../../models/items/IBaseItem';
import { explicitModRegexes } from './../../services/filter/filter-modules/mod-filter/mod-regexes';
import explicitModJson from './explicit-mod-filter-test-items.json';

describe('explicit mod tests', () => {

  const items: IBaseItem[] = (explicitModJson as IBaseItem[]);

  test('should return items with a maximum life value above a minimum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Kaom\'s Roots', 'Titan Greaves'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Kaom\'s Roots" in test data');
    }
    const modFilterParams: IMod = explicitModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find explicit "+# to maximum life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 100 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with a maximum life value below a maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Dragon Coil', 'Paua Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Dragon Coil Paua Ring" in test data');
    }
    const modFilterParams: IMod = explicitModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find explicit "+# to maximum life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, max: 57 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with a maximum life value between a minimum and maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Carcass Jack', 'Varnished Coat'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Carcass Jack" in test data');
    }
    const modFilterParams: IMod = explicitModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find explicit "+# to maximum life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 57, max: 100 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with a maximum life mod', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Carcass Jack', 'Varnished Coat'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Carcass Jack" in test data');
    }
    testItems.push(getTestItem(items, 'Dragon Coil', 'Paua Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Dragon Coil Paua Ring" in test data');
    }
    testItems.push(getTestItem(items, 'Kaom\'s Roots', 'Titan Greaves'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Kaom\'s Roots" in test data');
    }
    const modFilterParams: IMod = explicitModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find explicit "+# to maximum life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams }]);

    assertItemsFound(testItems, actual);
  });

  it ('should return items that have 2 numerical values that can be checked', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Windripper', 'Imperial Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Windripper Imperial Bow" in test data');
    }
    const modFilterParams: IMod = explicitModRegexes
      .find((modRegex: IMod) => modRegex.label === 'Adds # to # Cold Damage');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find explicit "Adds # to # Cold Damage" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 40, max: 50 }]);

    assertItemsFound(testItems, actual);
  });

  it('should return items that match multiple conditions', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Carcass Jack', 'Varnished Coat'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Carcass Jack" in test data');
    }
    const lifeMod: IMod = explicitModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!lifeMod) {
      throw new Error('Couldn\'t find explicit "+# to maximum life" mod filter param');
    }
    const aoeMod: IMod = explicitModRegexes
      .find((modRegex: IMod) => modRegex.label === '#% increased Area of Effect');
    if (!aoeMod) {
      throw new Error('Couldn\'t find explicit "#% increased Area of Effect" mod filter param');
    }
    const filterParams: IModFilterParams[] = [
      { mod: lifeMod, min: 55, max: 65 },
      { mod: aoeMod , min: 15, max: 25 },
    ];
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, filterParams);

    assertItemsFound(testItems, actual);
  });

  it('should return items that don\'t a have a numerical value that can be checked', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Wanderlust', 'Wool Shoes'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Wanderlust Wool Shoes" in test data');
    }
    const modFilterParams: IMod = explicitModRegexes
      .find((modRegex: IMod) => modRegex.label === 'Cannot be Frozen');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find explicit "Cannot be Frozen" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams }]);

    assertItemsFound(testItems, actual);
  });
});

describe('total mod tests', () => {
  // maximum life
  // energy shield
  // mana
  // accuracy,
  // %evasion rating
  // fire resistance
});

describe('psuedo mod tests', () => {
  // total elemental resistance
  // armour + evasion
  // fractured modifiers
  // total resistance
});

describe('crafted mod tests', () => {
  // increased physical damage %
  // critical strike
  // maximum life
  // %es
});

// implicit mod tests
// fractured mod tests
// abyss mod tests
// unique mod tests
// leaguestone tests
// beastiary tests
// enchantment tests
// prophecy tests
// map tests
