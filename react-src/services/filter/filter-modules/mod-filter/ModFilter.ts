import { isIFractured } from '../../../../models/items/IFractured';
import { isIGear } from '../../../../models/items/IGear';
import ElectronApi from '../../../electron-api/ElectronApi';
import { IBaseItem } from './../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { IModFilterParams } from './IModFilterParams';
import { ModFilterType } from './ModFilterType';

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

    // check edge cases
    if (condition.mod.label === '+# to maximum Life') {
      if (Array.isArray(condition.mod.regex)) {
        return this.checkMaximumLifeTotalMod(
          item,
          condition.mod.regex,
          condition.min,
          condition.max);
      } else {
        const logMessage: string = `Error filtering "+# to maximum Life [TOTAL]" mod. Expected an array of test regexes but found one`;
        ElectronApi.log(logMessage);
      }
    }
    // +# to maximum Energy Shield (intelligence)
    // +# to maximum Mana (intelligence)
    // +# to Accuracy Rating (dexterity)
    // #% increased Evasion Rating (dexterity)

    if (Array.isArray(condition.mod.regex)) {
      for (const regex of condition.mod.regex) {
        totalValue += this.getTotalModValue(item, regex);
      }
    } else {
      totalValue = this.getTotalModValue(item, condition.mod.regex);
    }

    if (totalValue === 0) { return false; }
    if (!isNaN(condition.min) && totalValue < condition.min) { return false; }
    if (!isNaN(condition.max) && totalValue > condition.max) { return false; }
    return true;
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
        value = Math.floor(value / 10) * 5;
      }
      totalLife += value;
    }

    if (totalLife === 0) { return false; }
    if (!isNaN(minValue) && totalLife < minValue) { return false; }
    if (!isNaN(maxValue) && totalLife > maxValue) { return false; }
    return true;
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
   * by the `min` and `max` parameters.
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
}
