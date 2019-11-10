import { isIFractured } from '../../../../models/items/IFractured';
import ElectronApi from '../../../electron-api/ElectronApi';
import { IBaseItem } from './../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { IModFilterParams } from './IModFilterParams';
import { ModFilterType } from './ModFilterType';

const ATTRIBUTE_VALUE_DIVISOR: number = 10;
const STRENGTH_TO_LIFE_VALUE: number = 5;
const INT_TO_ES_VALUE: number = 2;
const INT_TO_MANA_VALUE: number = 5;
const DEX_TO_ACCURACY_VALUE: number = 20;
const DEX_TO_EVASION_VALUE: number = 2;
const RESISTANCE_REGEX_TEST_REGEX: RegExp = /\\\+\(\\d\+\)% to.*Resistance[s]?\//;
const ALL_ELEMENTAL_RESISTANCE_TEST_REGEX: RegExp = /to all Elemental Resistances/;
const RESISTANCE_TYPE_TEST_REGEX: RegExp = /(Fire|Lightning|Cold|Chaos)/g;

export default class ModFilter implements IFilterModule<IModFilterParams[]> {
  public type: string = 'ModFilter';

  public filter(items: IBaseItem[], conditions: IModFilterParams[]): IBaseItem[] {
    const filteredItems: IBaseItem[] = [];

    for (const item of items) {
      let itemMeetsCondition: boolean = true;
      for (let i = 0; i < conditions.length && itemMeetsCondition; i++) {
        itemMeetsCondition = this.itemMeetsCondition(item, conditions[i]);
      }
      if (itemMeetsCondition) { filteredItems.push(item); }
    }
    return filteredItems;
  }

  /**
   * Checks if an `IBaseItem` instance has a particular mod
   * @param item The item to check
   * @param condition the condition to check
   */
  private itemMeetsCondition(item: IBaseItem, condition: IModFilterParams): boolean {
    switch (condition.mod.type) {
      case ModFilterType.EXPLICIT:
        return this.checkExplicitMod(item, condition);
      case ModFilterType.CRAFTED:
        return this.checkCraftedMod(item, condition);
      case ModFilterType.TOTAL:
        return this.checkTotalMod(item, condition);
      case ModFilterType.PSEUDO:
        return this.checkPseudoMod(item, condition);
      default:
        return false;
    }
  }

  /**
   * Checks if an `IBaseItem` instance has a particular explicit mod value
   * @param item The item to check
   * @param condition The explicit mod that the item should have, and its minimum and maximum
   * numerical value
   */
  private checkExplicitMod(item: IBaseItem, condition: IModFilterParams): boolean {
    if ((item as any).explicitMods) {
      const explicitMods: string[] = (item as any).explicitMods;
      const matchingMod: string = explicitMods.find((mod: string) => this.checkMod(mod, condition));
      if (matchingMod !== undefined) { return true; }
    }
    return false;
  }

  /**
   * Checks if an `IBaseItem` instance has a particular crafted mod value
   * @param item The item to check
   * @param condition The crafted mod that the item should have, and its minimum and maximum
   * numerical value
   */
  private checkCraftedMod(item: IBaseItem, condition: IModFilterParams): boolean {
    if ((item as any).craftedMods) {
      const craftedMods: string[] = (item as any).craftedMods;
      const matchingMod: string = craftedMods.find((mod: string) => this.checkMod(mod, condition));
      if (matchingMod !== undefined) { return true; }
    }
    return false;
  }

  /**
   * Checks if an `IBaseItem` instance has a total mod value
   * @param item The item to check
   * @param condition The total mod that the item should have, and its minimum and maximum
   * numerical value
   */
  private checkTotalMod(item: IBaseItem, condition: IModFilterParams): boolean {
    let totalValue: number = 0;

    if (Array.isArray(condition.mod.regex)) {
      // check edge cases
      switch (condition.mod.label) {
        case '+# to maximum Life':
          return this.checkMaximumLifeTotalMod(
            item,
            condition.mod.regex,
            condition.min,
            condition.max);
        case '#% increased Energy Shield':
          return this.checkPercentIncreasedEnergyShieldTotalMod(
            item,
            condition.mod.regex,
            condition.min,
            condition.max);
        case '+# to maximum Mana':
          return this.checkMaximumManaTotalMod(item,
            condition.mod.regex,
            condition.min,
            condition.max);
        case '+# to Accuracy Rating':
          return this.checkFlatAccuraryTotalMod(item,
            condition.mod.regex,
            condition.min,
            condition.max);
        case '#% increased Evasion Rating':
          return this.checkPercentIncreasedEvasionTotalMod(item,
            condition.mod.regex,
            condition.min,
            condition.max);
      }
      for (const regex of condition.mod.regex) {
        totalValue += this.getTotalModValue(item, regex);
      }
    } else {
      totalValue = this.getTotalModValue(item, condition.mod.regex);
    }
    return this.checkNumberWithinBounds(totalValue, condition.min, condition.max);
  }

  /**
   * Checks if an `IBaseItem` instance has a total maximum life value
   * @param item The item to check
   * @param testRegexes The test regexes to check the item's mods against
   * @param minValue the minimum life value that the item can have
   * @param maxValue the maximum life value that the item can have
   */
  private checkMaximumLifeTotalMod(
    item: IBaseItem,
    testRegexes: RegExp[],
    minValue?: number,
    maxValue?: number,
  ): boolean {

    let totalLife: number = 0;

    for (const regex of testRegexes) {
      let value: number = this.getTotalModValue(item, regex);

      if (regex.toString() !== '/\\+(\\d+) to maximum Life/') {
        value = Math.floor(value / ATTRIBUTE_VALUE_DIVISOR) * STRENGTH_TO_LIFE_VALUE;
      }
      totalLife += value;
    }
    return this.checkNumberWithinBounds(totalLife, minValue, maxValue);
  }

  /**
   * Checks if an `IBaseItem` instance has a total % increased energy shield value
   * @param item The item to check
   * @param testRegexes The test regexes to check the item's mods against
   * @param minValue the minimum % increased energy shield that the item can have
   * @param maxValue the maximum % increased energy shield that the item can have
   */
  private checkPercentIncreasedEnergyShieldTotalMod(
    item: IBaseItem,
    testRegexes: RegExp[],
    minValue?: number,
    maxValue?: number,
  ): boolean {

    let totalEs: number = 0;

    for (const regex of testRegexes) {
      let value: number = this.getTotalModValue(item, regex);

      if (regex.toString() !== '/(\\d+)% increased Energy Shield/') {
        value = Math.floor(value / ATTRIBUTE_VALUE_DIVISOR) * INT_TO_ES_VALUE;
      }
      totalEs += value;
    }
    return this.checkNumberWithinBounds(totalEs, minValue, maxValue);
  }

  /**
   * Checks if an `IBaseItem` instance has a total maximum mana value
   * @param item The item to check
   * @param testRegexes The test regexes to check the item's mods against
   * @param minValue the minimum mana that the item can have
   * @param maxValue the maximum mana that the item can have
   */
  private checkMaximumManaTotalMod(
    item: IBaseItem,
    testRegexes: RegExp[],
    minValue?: number,
    maxValue?: number,
  ): boolean {

    let totalMana: number = 0;

    for (const regex of testRegexes) {
      let value: number = this.getTotalModValue(item, regex);

      if (regex.toString() !== '/\\+(\\d+) to maximum Mana/') {
        value = Math.floor(value / ATTRIBUTE_VALUE_DIVISOR) * INT_TO_MANA_VALUE;
      }
      totalMana += value;
    }
    return this.checkNumberWithinBounds(totalMana, minValue, maxValue);
  }

  /**
   * Checks if an `IBaseItem` instance has a total flat accuracy value
   * @param item The item to check
   * @param testRegexes The test regexes to check the item's mods against
   * @param minValue the minimum accuracy that the item can have
   * @param maxValue the maximum accuracy that the item can have
   */
  private checkFlatAccuraryTotalMod(
    item: IBaseItem,
    testRegexes: RegExp[],
    minValue?: number,
    maxValue?: number,
  ): boolean {

    let totalAccuracy: number = 0;

    for (const regex of testRegexes) {
      let value: number = this.getTotalModValue(item, regex);

      if (regex.toString() !== '/\\+(\\d+) to Accuracy Rating/') {
        value = Math.floor(value / ATTRIBUTE_VALUE_DIVISOR) * DEX_TO_ACCURACY_VALUE;
      }
      totalAccuracy += value;
    }
    return this.checkNumberWithinBounds(totalAccuracy, minValue, maxValue);
  }

  /**
   * Checks if an `IBaseItem` instance has a total % increased evasion rating value
   * @param item The item to check
   * @param testRegexes The test regexes to check the item's mods against
   * @param minValue the minimum % increased evasion rating that the item can have
   * @param maxValue the maximum % increased evasion rating that the item can have
   */
  private checkPercentIncreasedEvasionTotalMod(
    item: IBaseItem,
    testRegexes: RegExp[],
    minValue?: number,
    maxValue?: number,
  ): boolean {

    let totalEvasion: number = 0;

    for (const regex of testRegexes) {
      let value: number = this.getTotalModValue(item, regex);

      if (regex.toString() !== '/(\\d+)% increased Evasion Rating/') {
        value = Math.floor(value / ATTRIBUTE_VALUE_DIVISOR) * DEX_TO_EVASION_VALUE;
      }
      totalEvasion += value;
    }
    return this.checkNumberWithinBounds(totalEvasion, minValue, maxValue);
  }

  /**
   * Checks if an `IBaseItem` instance has a total mod value
   * @param item The item to check
   * @param condition The psuedo mod that the item should have, and its minimum and maximum
   * numerical value
   */
  private checkPseudoMod(item: IBaseItem, condition: IModFilterParams): boolean {
    switch (condition.mod.label) {
      case '+#% total Resistance':
      case '+#% total Elemental Resistance':
        return this.checkPseudoResistanceMod(
            item,
            condition.mod.regex as RegExp[],
            condition.min,
            condition.max);
      case '# Fractured Modifiers':
        return this.checkNumberOfExplicitMods(
          item,
          condition.mod.regex as RegExp[],
          condition.min,
          condition.max);
      default:
        return false;
    }
  }

  /**
   * Checks if an `IBaseItem` instance has a pseudo elemental resistance value
   * @param item The item to check
   * @param testRegexes The test regexes to check the item's mods against
   * @param minValue the minimum elemental resistance value that the item can have
   * @param maxValue the maximum elemental resistance value that the item can have
   */
  private checkPseudoResistanceMod(
    item: IBaseItem,
    testRegexes: RegExp[],
    minValue?: number,
    maxValue?: number,
  ): boolean {

    let totalResistance: number = 0;

    for (const regex of testRegexes) {
      const val: number = this.getTotalModValue(item, regex);

      if (val > 0) {
        const valMultiplier: number = this.getResistanceMultiplier(regex);
        totalResistance = totalResistance + (val * valMultiplier);
      }
    }
    return this.checkNumberWithinBounds(totalResistance, minValue, maxValue);
  }

  /**
   * Checks if an `IBaseItem` instance has a specific number of fractured mods
   * @param item The item to check
   * @param testRegexes The test regexes to check the item's mods against
   * @param minValue the minimum number of fractured mods that the item can have
   * @param maxValue the maximum number of fractured mods that the item can have
   */
  private checkNumberOfExplicitMods(
    item: IBaseItem,
    testRegexes: RegExp[],
    minValue?: number,
    maxValue?: number,
  ): boolean {
    if (!isIFractured(item)) { return false; }
    const totalFracturedMods: number = item.fracturedMods.length;

    return this.checkNumberWithinBounds(totalFracturedMods, minValue, maxValue);
  }

  /**
   * Returns a number that can be used to calculate
   * the total resistance value of a resistance mod
   * @param regex The regex to check
   */
  private getResistanceMultiplier(regex: RegExp): number {
    const regexStr: string = regex.toString();

    if (!RESISTANCE_REGEX_TEST_REGEX.test(regexStr)) {
      return 0;
    }
    const resistTypes: string[] | null = regexStr.match(RESISTANCE_TYPE_TEST_REGEX);

    if (resistTypes !== null && resistTypes.length > 0) {
      return resistTypes.length;
    }
    return ALL_ELEMENTAL_RESISTANCE_TEST_REGEX.test(regexStr) ? 3 : 0;
  }

  /**
   * Returns the total value of all mod types of an `IBaseItem` instance
   * @param item The item to check
   * @param regex The regex to test the item's mods against
   */
  private getTotalModValue(item: IBaseItem, regex: RegExp): number {
    let value: number = 0;
    if ((item as any).implicitMods) {
      value += this.getModValueFromModsArray((item as any).implicitMods, regex);
    }
    if ((item as any).explicitMods) {
      value += this.getModValueFromModsArray((item as any).explicitMods, regex);
    }
    if ((item as any).craftedMods) {
      value += this.getModValueFromModsArray((item as any).craftedMods, regex);
    }
    if ((item as any).fracturedMods) {
      value += this.getModValueFromModsArray((item as any).fracturedMods, regex);
    }
    return value;
  }

  private getModValueFromModsArray(mods: string[], regex: RegExp): number {
    let value: number = 0;
    for (const mod of mods) {
      value += this.getModValue(mod, regex);
    }
    return value;
  }

  /**
   * Checks if an `IBaseItem` instance has a particular mod value
   * @param item The item to check
   * @param condition The mod that the item should have, and its minimum and maximum numerical value
   */
  private checkMod(mod: string, condition: IModFilterParams): boolean {

    if (Array.isArray(condition.mod.regex)) {
      return condition.mod.regex.findIndex((regex: RegExp) =>
        this.checkCondition(mod, regex, condition.min, condition.max)) !== -1;
    }
    return this.checkCondition(mod, condition.mod.regex, condition.min, condition.max);
  }

  /**
   * Tests an item modifer against a regex. If they match a numerical value is extracted from the
   * mod (by a capture group in the regex) and checked to make sure it is within the bounds defined
   * by the `min` and `max` parameters. If a numerical value cannot be extracted, then true is returned
   * @param mod The mod to check
   * @param testRegex The regex to check the `mod` parameter
   * @param min The minimum value that the mod can have
   * @param max The maximum value that the mod can have
   */
  private checkCondition(mod: string, testRegex: RegExp, min?: number, max?: number): boolean {
    const res: RegExpExecArray | null = testRegex.exec(mod);
    if (res !== null) {
      if (res.length > 1) {
        let value: number = res.slice(1).reduce(this.reduceModValue, 0);
        value = value / (res.length - 1);
        if (!isNaN(min) && value < min) { return false; }
        if (!isNaN(max) && value > max) { return false; }
        return true;
      } else if (testRegex.toString().indexOf('(\\d+)') === -1) {
        return true;
      } else {
        const logMessage: string = `Error filtering "${mod}" mod - capture group was empty\nregex: ${testRegex.toString()}\nmod: ${mod}`;
        ElectronApi.log(logMessage);
      }
    }
    return false;
  }

  /**
   * Tests an item modifer against a regex. If they match a numerical value is extracted from the
   * mod (by a capture group in the regex) and returned. Otherwise `0` is returned.
   * @param mod The mod to extract a numerical value from
   * @param testRegex The regex to check against the `mod` parameter
   */
  private getModValue(mod: string, testRegex: RegExp): number {
    const res = testRegex.exec(mod);
    if (res !== null && res.length > 1) {
      let value: number = res.slice(1).reduce(this.reduceModValue, 0);
      value = value / (res.length - 1);
      return value;
    }
    return 0;
  }

  /**
   * Reduce function that converts an array of strings to numbers and returns the total
   * @param total Total value of all mods being reduced
   * @param val Numerical value to be reduced (as a string)
   */
  private reduceModValue(total: number, val: string): number {
    const value: number = parseInt(val, 10);
    return isNaN(value) ? total : total + value;
  }

  /**
   * Checks if a number is within a specific range. Returns true if number
   * is within min and max
   * NOTE: false will always be returned if val is equal to 0
   * @param val Number to be checked
   * @param min The smallest number that val can be
   * @param max The largest number that val can be
   */
  private checkNumberWithinBounds(val: number, min?: number, max?: number): boolean {
    if (val === 0) { return false; }
    if (!isNaN(min) && val < min) { return false; }
    if (!isNaN(max) && val > max) { return false; }
    return true;
  }
}
