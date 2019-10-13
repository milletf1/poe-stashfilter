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
      const testRegex: RegExp = condition.mod.regex;

      for (const mod of explicitMods) {
        const res: RegExpExecArray | null = testRegex.exec(mod);

        if (res !== null) {
          // mod matches regex
          if (res.length > 1) {
            let value: number = res.slice(1)
              .reduce((total: number, val: string) => total += parseInt(val, 10), 0);
            value = value / (res.length - 1);
            if (condition.min !== undefined && value < condition.min) { return false; }
            if (condition.max !== undefined && value > condition.max) { return false; }
            return true;
          } else if (testRegex.toString().indexOf('(\\d+)') === -1) {
            return true;
          } else {
            const logMessage: string = `Error filtering explicit mod - capture group was empty\nregex: ${testRegex.toString()}\nmod: ${mod}`;
            ElectronApi.log(logMessage);
          }
        }
      }
    }
    return false;
  }
}
