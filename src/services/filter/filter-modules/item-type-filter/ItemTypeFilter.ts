import { RegexLiteral } from '@babel/types';
import { IBaseItem } from '../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { IItemBase, isIItemBase } from './IItemBase';
import { ItemType as ItemType } from './ItemType';
import { IItemFilterParams } from './ItemTypeFilter';

export interface IItemFilterParams {
  type?: ItemType[];
  base?: IItemBase[];
}

/** IItemFilterParams type guard */
export function isIItemFilterParams(o: any): o is IItemFilterParams {
  return (o as IItemFilterParams).base !== undefined
    || (o as IItemFilterParams).type !== undefined;
}

/** Regex for checking one handed weapon items */
const ONE_HAND_WEAPON_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\//;
/** Regex for checking two handed weapon items */
const TWO_HAND_WEAPON_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\//;
/** Regex for checking bows */
const BOW_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\/Bows\//;
/** Regex for checking claws */
const CLAW_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\/Claws\//;
/** Regex for checking daggers */
const DAGGER_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\/Daggers\//;

class ItemTypeFilter implements IFilterModule<ItemType[] | IItemBase[] | IItemFilterParams[]> {
  public type: string = 'ItemTypeFilter';

  public filter(
    items: IBaseItem[],
    conditions: ItemType[] | IItemBase[] | IItemFilterParams[],
  ): IBaseItem[] {
    if (isIItemFilterParams(conditions)) {
      // TODO ...
    } else if (isIItemBase(conditions)) {
      // TODO ...
    }
    // array of ItemType
    return this.filterItemTypes(items, conditions as ItemType[]);
  }

  /**
   * Filters an array of base items based on their item type
   * @param items The items to filter
   * @param itemTypes The item types to filter against
   */
  private filterItemTypes(items: IBaseItem[], itemTypes: ItemType[]): IBaseItem[] {
    const foundItems: IBaseItem[] = [];

    for (const item of items) {
      for (const itemType of itemTypes) {
        if (this.checkItemTypeMatch(item, itemType)) {
          foundItems.push(item);
          break;
        }
      }
    }
    return foundItems;
  }

  /**
   * Checks if an item belongs to an item type
   * @param item The item to check
   * @param itemType The item type to check against
   */
  private checkItemTypeMatch(item: IBaseItem, itemType: ItemType): boolean {
    switch (itemType) {
      case ItemType.ONE_HAND_WEAPON: return ONE_HAND_WEAPON_TEST_REGEX.test(item.icon);
      case ItemType.TWO_HAND_WEAPON: return TWO_HAND_WEAPON_TEST_REGEX.test(item.icon);
      case ItemType.BOW: return BOW_TEST_REGEX.test(item.icon);
      case ItemType.CLAW: return CLAW_TEST_REGEX.test(item.icon);
      case ItemType.DAGGER: return DAGGER_TEST_REGEX.test(item.icon);
      default: return false;
    }
  }
}
export default ItemTypeFilter;
