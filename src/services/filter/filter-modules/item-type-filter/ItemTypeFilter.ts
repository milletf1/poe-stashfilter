import { IBaseItem } from '../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { IItemBase, isIItemBase } from './IItemBase';
import { IItemFilterParams, isIItemFilterParams } from './IItemTypeFilterParams';
import * as itemTypeTestRegExps from './item-type-test-regexps';
import { ItemType } from './ItemType';

class ItemTypeFilter implements IFilterModule<ItemType[] | IItemBase[] | IItemFilterParams[]> {
  public type: string = 'ItemTypeFilter';

  public filter(
    items: IBaseItem[],
    conditions: ItemType[] | IItemBase[] | IItemFilterParams[],
  ): IBaseItem[] {
    if (!conditions || conditions.length === 0) {
      return [];
    }
    if (isIItemFilterParams(conditions)) {
      // TODO ...
    } else if (isIItemBase(conditions[0])) {
      return this.filterItemBases(items, conditions as IItemBase[]);
    }
    // array of ItemType
    return this.filterItemTypes(items, conditions as ItemType[]);
  }

  /**
   * Filters an array of base items based on their item base
   * @param items Thie items to filter
   * @param itemBases The item bases to filter against
   */
  private filterItemBases(items: IBaseItem[], itemBases: IItemBase[]): IBaseItem[] {
    const foundItems: IBaseItem[] = [];

    for (const item of items) {
      for (const itemBase of itemBases) {
        if (this.checkItemBaseMatch(item, itemBase)) {
          foundItems.push(item);
        }
      }
    }
    return foundItems;
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
   * Checks if an item belongs to an item base
   * @param item The item to check
   * @param itemBase The item base to check against
   */
  private checkItemBaseMatch(item: IBaseItem, itemBase: IItemBase): boolean {
    return this.checkItemTypeMatch(item, itemBase.type)
      && item.typeLine.indexOf(itemBase.base) !== -1;
  }

  /**
   * Checks if an item belongs to an item type
   * @param item The item to check
   * @param itemType The item type to check against
   */
  private checkItemTypeMatch(item: IBaseItem, itemType: ItemType): boolean {
    switch (itemType) {
      case ItemType.ONE_HAND_WEAPON:
        return itemTypeTestRegExps.ONE_HAND_WEAPON_TEST_REGEX.test(item.icon);
      case ItemType.TWO_HAND_WEAPON:
        return itemTypeTestRegExps.TWO_HAND_WEAPON_TEST_REGEX.test(item.icon);
      case ItemType.BOW:
        return itemTypeTestRegExps.BOW_TEST_REGEX.test(item.icon);
      case ItemType.CLAW:
        return itemTypeTestRegExps.CLAW_TEST_REGEX.test(item.icon);
      case ItemType.DAGGER:
        return itemTypeTestRegExps.DAGGER_TEST_REGEX.test(item.icon);
      case ItemType.ONE_HAND_AXE:
        return itemTypeTestRegExps.ONE_HAND_AXE_TEST_REGEX.test(item.icon);
      case ItemType.ONE_HAND_MACE:
        return itemTypeTestRegExps.ONE_HAND_MACE_TEST_REGEX.test(item.icon);
      case ItemType.ONE_HAND_SWORD:
        return itemTypeTestRegExps.ONE_HAND_SWORD_TEST_REGEX.test(item.icon);
      case ItemType.SCEPTRE:
        return itemTypeTestRegExps.ONE_HAND_MACE_TEST_REGEX.test(item.icon)
          && itemTypeTestRegExps.SCEPTRE_TYPELINE_TEST_REGEX.test(item.typeLine);
      case ItemType.STAFF:
        return itemTypeTestRegExps.STAFF_TEST_REGEX.test(item.icon);
      case ItemType.TWO_HAND_AXE:
        return itemTypeTestRegExps.TWO_HAND_AXE_TEST_REGEX.test(item.icon);
      case ItemType.TWO_HAND_MACE:
        return itemTypeTestRegExps.TWO_HAND_MACE_TEST_REGEX.test(item.icon);
      case ItemType.TWO_HAND_SWORD:
        return itemTypeTestRegExps.TWO_HAND_SWORD_TEST_REGEX.test(item.icon);
      case ItemType.WAND:
        return itemTypeTestRegExps.WAND_TEST_REGEX.test(item.icon);
      case ItemType.BODY_ARMOUR:
        return itemTypeTestRegExps.BODY_ARMOUR_TEST_REGEX.test(item.icon);
      case ItemType.BOOTS:
        return itemTypeTestRegExps.BOOTS_TEST_REGEX.test(item.icon);
      case ItemType.GLOVES:
        return itemTypeTestRegExps.GLOVES_TEST_REGEX.test(item.icon);
      case ItemType.HELMET:
        return itemTypeTestRegExps.HELMET_TEST_REGEX.test(item.icon);
      case ItemType.SHIELD:
        return itemTypeTestRegExps.SHIELD_TEST_REGEX.test(item.icon);
      case ItemType.AMULET:
        return itemTypeTestRegExps.AMULET_TEST_REGEX.test(item.icon);
      case ItemType.BEAST:
        return itemTypeTestRegExps.BEAST_TEST_REGEX.test(item.icon);
      case ItemType.BELT:
        return itemTypeTestRegExps.BELT_TEST_REGEX.test(item.icon);
      case ItemType.CARD:
        return itemTypeTestRegExps.CARD_TEST_REGEX.test(item.icon);
      case ItemType.ESSENCE:
        return itemTypeTestRegExps.ESSENCE_TEST_REGEX.test(item.icon);
      case ItemType.FISHING_ROD:
        return itemTypeTestRegExps.FISHING_ROD_TEST_REGEX.test(item.icon);
      case ItemType.FLASK:
        return itemTypeTestRegExps.FLASK_TEST_REGEX.test(item.icon);
      case ItemType.GEM:
        return itemTypeTestRegExps.GEM_TEST_REGEX.test(item.icon);
      case ItemType.INCUBATOR:
        return itemTypeTestRegExps.INCUBATOR_TEST_REGEX.test(item.icon);
      case ItemType.JEWEL:
        return itemTypeTestRegExps.JEWEL_TEST_REGEX.test(item.icon);
      case ItemType.LEAGUESTONE:
        return itemTypeTestRegExps.LEAGUESTONE_TEST_REGEX.test(item.icon);
      case ItemType.MAP:
        return itemTypeTestRegExps.MAP_TEST_REGEX.test(item.icon);
      case ItemType.NET:
        return itemTypeTestRegExps.NET_TEST_REGEX.test(item.icon);
      case ItemType.PROPHECY:
        return itemTypeTestRegExps.PROPHECY_TEST_REGEX.test(item.icon);
      case ItemType.QUIVER:
        return itemTypeTestRegExps.QUIVER_TEST_REGEX.test(item.icon);
      case ItemType.RING:
        return itemTypeTestRegExps.RING_TEST_REGEX.test(item.icon);
      case ItemType.SCARAB:
        return itemTypeTestRegExps.SCARAB_TEST_REGEX.test(item.icon);
      case ItemType.MAP_FRAGMENT:
        return itemTypeTestRegExps.MAP_FRAGMENT_TEST_REGEX.test(item.icon);
      case ItemType.RESONATOR:
        return itemTypeTestRegExps.RESONATOR_TYPELINE_TEST_REGEX.test(item.typeLine);
      case ItemType.FOSSIL:
        return itemTypeTestRegExps.FOSSIL_TEST_REGEX.test(item.icon);
      case ItemType.DIVINE_VESSEL:
        return itemTypeTestRegExps.DIVINE_VESSEL_TEST_REGEX.test(item.icon);
      case ItemType.SPLINTER:
          return itemTypeTestRegExps.SPLINTER_TEST_REGEX.test(item.icon)
            && itemTypeTestRegExps.SPLINTER_TYPELINE_TEST_REGEX.test(item.typeLine);
      case ItemType.BREACHSTONE:
          return itemTypeTestRegExps.BREACHSTONE_TEST_REGEX.test(item.icon);
      case ItemType.CURRENCY:
          return itemTypeTestRegExps.CURRENCY_TEST_REGEX.test(item.icon);
      default: return false;
    }
  }
}
export default ItemTypeFilter;
