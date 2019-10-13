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
   * Checks if an `IBaseItem` instance has a particular mod value
   * @param item The item to check
   * @param condition The mod that the item should have, and its minimum and maximum numerical value
   */
  private checkMod(mod: string, condition: IModFilterParams): boolean {
    const res: RegExpExecArray | null = condition.mod.regex.exec(mod);

    if (res !== null) {
      // mod matches regex
      if (res.length > 1) {
        let value: number = res.slice(1)
          .reduce((total: number, val: string) => total += parseInt(val, 10), 0);
        value = value / (res.length - 1);
        if (condition.min !== undefined && value < condition.min) { return false; }
        if (condition.max !== undefined && value > condition.max) { return false; }
        return true;
      } else if (condition.mod.regex.toString().indexOf('(\\d+)') === -1) {
        return true;
      } else {
        const logMessage: string = `Error filtering ${condition.mod.type} mod - capture group was empty\nregex: ${condition.mod.regex.toString()}\nmod: ${mod}`;
        ElectronApi.log(logMessage);
      }
    }
    return false;
  }
}
