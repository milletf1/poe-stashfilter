import { IMod, IModFilterParams } from '../../services/filter/filter-modules/mod-filter/IModFilterParams';
import ModFilter from '../../services/filter/filter-modules/mod-filter/ModFilter';
import { assertItemsFound, getTestItem } from '../utils';
import { IBaseItem } from './../../models/items/IBaseItem';
import { abyssModRegexes, craftedModRegexes, enchantmentsModRegexes, explicitModRegexes, fracturedModRegexes, implicitModRegexes, pseudoModRegexes, totalModRegexes } from './../../services/filter/filter-modules/mod-filter/mod-regexes';
import craftedModJson from './crafted-mod-filter-test-items.json';
import explicitModJson from './explicit-mod-filter-test-items.json';
import otherModJson from './other-mod-filter-test-items.json';
import pseudoModJson from './pseudo-mod-filter-test-items.json';
import totalModJson from './total-mod-filter-test-items.json';

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

  test('should return items that have 2 numerical values that can be checked', () => {
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

  test('should return items that match multiple conditions', () => {
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
      { mod: aoeMod, min: 15, max: 25 },
    ];
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, filterParams);

    assertItemsFound(testItems, actual);
  });

  test('should return items that don\'t a have a numerical value that can be checked', () => {
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

describe('crafted mod tests', () => {

  const items: IBaseItem[] = (craftedModJson as IBaseItem[]);

  test('should return items with a maximum life value above a minimum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Dread Vise', 'Carnal Mitts'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Dread Vise Carnal Mitts" in test data');
    }
    testItems.push(getTestItem(items, 'Onslaught Nails', 'Mesh Gloves'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Onslaught Nails Mesh Gloves" in test data');
    }
    const modFilterParams: IMod = craftedModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find crafted "+# to maximum Life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 60 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with a maximum life value below a maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Plague Tether', 'Stygian Vise'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Plague Tether Stygian Vise" in test data');
    }
    testItems.push(getTestItem(items, 'Corruption Knot', 'Diamond Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Corruption Knot Diamond Ring" in test data');
    }
    const modFilterParams: IMod = craftedModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find crafted "+# to maximum Life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, max: 60 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with a maximum life value between a minimum and maximum value', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Plague Tether', 'Stygian Vise'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Plague Tether Stygian Vise" in test data');
    }
    testItems.push(getTestItem(items, 'Dread Vise', 'Carnal Mitts'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Dread Vise Carnal Mitts" in test data');
    }
    const modFilterParams: IMod = craftedModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find crafted "+# to maximum Life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 50, max: 69 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with a maximum life mod', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Dread Vise', 'Carnal Mitts'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Dread Vise Carnal Mitts" in test data');
    }
    testItems.push(getTestItem(items, 'Onslaught Nails', 'Mesh Gloves'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Onslaught Nails Mesh Gloves" in test data');
    }
    testItems.push(getTestItem(items, 'Plague Tether', 'Stygian Vise'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Plague Tether Stygian Vise" in test data');
    }
    testItems.push(getTestItem(items, 'Corruption Knot', 'Diamond Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Corruption Knot Diamond Ring" in test data');
    }
    const modFilterParams: IMod = craftedModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find crafted "+# to maximum Life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items that have 2 numerical values that can be checked', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Hate Sever', 'Dragoon Sword'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Hate Sever Dragoon Sword" in test data');
    }
    const modFilterParams: IMod = craftedModRegexes
      .find((modRegex: IMod) => modRegex.label === 'Adds # to # Physical Damage');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find crafted "Adds # to # Physical Damage" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 10, max: 20 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items that don\'t a have a numerical value that can be checked', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Hate Sever', 'Dragoon Sword'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Hate Sever Dragoon Sword" in test data');
    }
    testItems.push(getTestItem(items, 'Death Bane', 'Ambusher'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Death Bane Ambusher" in test data');
    }
    const modFilterParams: IMod = craftedModRegexes
      .find((modRegex: IMod) => modRegex.label === 'Can have multiple Crafted Modifiers');
    if (!modFilterParams) {
      // tslint:disable-next-line:max-line-length
      throw new Error('Couldn\'t find crafted "Can have multiple Crafted Modifiers" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 10, max: 20 }]);

    assertItemsFound(testItems, actual);
  });

  // multiple conditions
  test('should return items that match multiple conditions', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Death Bane', 'Ambusher'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Death Bane Ambusher" in test data');
    }
    const increasedAttackSpeedMod: IMod = craftedModRegexes
      .find((modRegex: IMod) => modRegex.label === '#% increased Attack Speed');
    if (!increasedAttackSpeedMod) {
      throw new Error('Couldn\'t find crafted "#% increased Attack Speede" mod filter param');
    }
    const increasedPhysicalDpsMod: IMod = craftedModRegexes
      .find((modRegex: IMod) => modRegex.label === '#% increased Physical Damage');
    if (!increasedPhysicalDpsMod) {
      throw new Error('Couldn\'t find crafted "#% increased Physical Damage" mod filter param');
    }
    const filterParams: IModFilterParams[] = [
      { mod: increasedAttackSpeedMod, min: 10, max: 20 },
      { mod: increasedPhysicalDpsMod, min: 40, max: 50 },
    ];
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, filterParams);

    assertItemsFound(testItems, actual);
  });
});

describe('total mod tests', () => {
  const items: IBaseItem[] = (totalModJson as IBaseItem[]);

  test('should return items with total life', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Headhunter', 'Leather Belt'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Headhunter Leather Belt" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find total "+# to maximum Life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(
      items,
      [{ mod: modFilterParams, min: 100, max: 120 }],
    );

    assertItemsFound(testItems, actual);
  });

  test('should return items with total energy shield', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Armageddon Shroud', 'Vaal Regalia'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Armageddon Shroud Vaal Regalia" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === '#% increased Energy Shield');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find total "#% increased Energy Shield" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 126 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with total mana', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Golem Gyre', 'Paua Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Golem Gyre Paua Ring" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Mana');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find total "+# to maximum Mana" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 75, max: 80 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with total flat accuracy', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Golem Eye', 'Two-Stone Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Golem Eye Two-Stone Ring" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to Accuracy Rating');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find total "+# to Accuracy Rating" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 260 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with total evasion rating', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Corpse Crown', 'Ursine Pelt'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Corpse Crown Ursine Pelt" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === '#% increased Evasion Rating');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find total "#% increased Evasion Rating" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(
      items,
      [{ mod: modFilterParams, min: 100, max: 110 }],
    );

    assertItemsFound(testItems, actual);
  });

  test('should return items with total fire resistance', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Golem Eye', 'Two-Stone Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Golem Eye Two-Stone Ring" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === '+#% to Fire Resistance');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find total "+#% to Fire Resistance" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 19, max: 21 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with total chaos resistance', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Soul Finger', 'Amethyst Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Soul Finger Amethyst Ring" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === '+#% to Chaos Resistance');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find total "+#% to Chaos Resistance" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 20, max: 25 }]);

    assertItemsFound(testItems, actual);
  });

  // something that is not an edge case with array of regexes
  test('should return items with total dexterity', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Oblivion Pendant', 'Onyx Amulet'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Oblivion Pendant Onyx Amulet" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to Dexterity');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find total "+# to Dexterity" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 30, max: 31 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with total adds cold damage to attacks', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Windripper', 'Imperial Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Windripper Imperial Bow" in test data');
    }
    testItems.push(getTestItem(items, 'Torment Gutter', 'Harpy Rapier'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Torment Gutter Harpy Rapier" in test data');
    }
    const modFilterParams: IMod = totalModRegexes
      .find((modRegex: IMod) => modRegex.label === 'Adds # to # Cold Damage');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find explicit "Adds # to # Cold Damage" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 40, max: 50 }]);

    assertItemsFound(testItems, actual);
  });
});

describe('pseudo mod tests', () => {
  const items: IBaseItem[] = (pseudoModJson as IBaseItem[]);

  test('should return items with total element resistance', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Apocalypse Turn', 'Two-Stone Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Apocalypse Turn Two-Stone Ring" in test data');
    }
    const modFilterParams: IMod = pseudoModRegexes
      .find((modRegex: IMod) => modRegex.label === '+#% total Elemental Resistance');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find pseudo "+#% total Elemental Resistance" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 100 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with number of fractured mods', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Beast Fletch', 'Assassin Bow'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Beast Fletch Assassin Bow" in test data');
    }
    const modFilterParams: IMod = pseudoModRegexes
      .find((modRegex: IMod) => modRegex.label === '# Fractured Modifiers');
    if (!modFilterParams) {
      throw new Error('Couldnt\'t find pseudo "# Fractured Modifiers" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 2 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with total resistance', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Pain Band', 'Diamond Ring'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Pain Band Diamond Ring" in test data');
    }
    const modFilterParams: IMod = pseudoModRegexes
      .find((modRegex: IMod) => modRegex.label === '+#% total Resistance');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find pseudo "+#% total Resistance" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 80, max: 100 }]);

    assertItemsFound(testItems, actual);
  });
});

describe('other mod tests', () => {
  const items: IBaseItem[] = (otherModJson as IBaseItem[]);

  test('should return items with implicit mods', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Victario\'s Charity', 'Laminated Kite Shield'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Victario\'s Charity" in test data');
    }
    const modFilterParams: IMod = implicitModRegexes
      .find((modRegex: IMod) => modRegex.label === '+#% to all Elemental Resistances');
    if (!modFilterParams) {
      // tslint:disable-next-line:max-line-length
      throw new Error('Couldn\'t find implicit "+#% to all Elemental Resistances" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 5, max: 10 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with an enchantment', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Corpse Crown', 'Ursine Pelt'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Corpse Crown Ursine Pelt" in test data');
    }
    const modFilterParams: IMod = enchantmentsModRegexes
      .find((modRegex: IMod) => modRegex.label === '#% increased Elemental Weakness Curse Effect');
    if (!modFilterParams) {
      // tslint:disable-next-line:max-line-length
      throw new Error('Couldn\'t find enchantment "#% increased Elemental Weakness Curse Effect" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 15, max: 25 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with a fractured mod', () => {
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Agony Wrap', 'Golden Plate'));
    if (!testItems[testItems.length - 1]) {
      throw new Error('Failed to find expected item "Agony Wrap Golden Plate" in test data');
    }
    const modFilterParams: IMod = fracturedModRegexes
      .find((modRegex: IMod) => modRegex.label === '+# to maximum Life');
    if (!modFilterParams) {
      throw new Error('Couldn\'t find fractured "+# to maximum Life" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 80 }]);

    assertItemsFound(testItems, actual);
  });

  test('should return items with an abyss mod', () => {
    // TODO: abyss mod tests : Foul Iridescence : Adds 15 to 31 Fire Damage to Attacks
    const testItems: IBaseItem[] = [];
    testItems.push(getTestItem(items, 'Foul Iridescence', 'Searching Eye Jewel'));
    if (!testItems[testItems.length - 1]) {
      // tslint:disable-next-line:max-line-length
      throw new Error('Failed to find expected item "Foul Iridescence Searching Eye Jewel" in test data');
    }
    const modFilterParams: IMod = abyssModRegexes
      .find((modRegex: IMod) => modRegex.label === 'Adds # to # Fire Damage to Attacks');
    if (!modFilterParams) {
      // tslint:disable-next-line:max-line-length
      throw new Error('Couldn\'t find fractured "Adds # to # Fire Damage to Attacks" mod filter param');
    }
    const filter: ModFilter = new ModFilter();
    const actual: IBaseItem[] = filter.filter(items, [{ mod: modFilterParams, min: 15 }]);

    assertItemsFound(testItems, actual);
  });

  // TODO: unique mod tests : The tempest : No physical damage

  // TODO: beastiary tests : Grayclaw the Mangy : Fertile Presence

  // TODO: map tests : Cursed Panorama : Monsters reflect 14% of elemental damage

  // TODO: prophecy tests : A master seeks help : You will find jun and complete her mission

  // TODO: leaguestone tests : Enduring Breach Leaguestone : +3 to Maximum Charges
});
