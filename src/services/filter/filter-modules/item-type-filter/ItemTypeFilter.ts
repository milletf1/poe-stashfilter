import { IBaseItem } from '../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { IItemBase, isIItemBase } from './IItemBase';
import { ItemType as ItemType } from './ItemType';
import { IItemFilterParams } from './ItemTypeFilter';

/** ItemTypeFilter parameter for querying item type  and base at same time  */
export interface IItemFilterParams {
  type: ItemType[];
  base: IItemBase[];
}

/** IItemFilterParams type guard */
export function isIItemFilterParams(o: any): o is IItemFilterParams {
  return (o as IItemFilterParams).base !== undefined
    && (o as IItemFilterParams).type !== undefined;
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
/** Regex for checking one handed axes */
const ONE_HAND_AXE_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\/OneHandAxes\//;
/** Regex for checking one handed maces */
const ONE_HAND_MACE_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\/OneHandMaces\//;
/** Regex for checking one handed swords */
const ONE_HAND_SWORD_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\/OneHandSwords\//;
/** Regex for checking sceptre typeline */
const SCEPTRE_TYPELINE_TEST_REGEX: RegExp = /(Sceptre$)|(Sceptre\ of\ .+)/;
/** Regex for checking staves */
const STAFF_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\/Staves\//;
/** Regex for checking two handed axes */
const TWO_HAND_AXE_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\/TwoHandAxes\//;
/** Regex for checking two handed maces */
const TWO_HAND_MACE_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\/TwoHandMaces\//;
/** Regex for checking two handed swords */
const TWO_HAND_SWORD_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\/TwoHandSwords\//;
/** Regex for checking wands */
const WAND_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\/Wands\//;
/** Regex for checking body armours */
const BODY_ARMOUR_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/BodyArmours\//;
/** Regex for checking boots */
const BOOTS_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/Boots\//;
/** Regex for checking gloves */
const GLOVES_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/Gloves\//;
/** Regex for checking helmets */
const HELMET_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/Helmets\//;
/** Regex for checking shields */
const SHIELD_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/Shields\//;
/** Regex for checking amulets */
const AMULET_TEST_REGEX: RegExp = /.*\/2DItems\/Amulets\//;
/** Regex for checking beasts */
const BEAST_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/BestiaryOrbFull\.png/;
/** Regex for checking belts */
const BELT_TEST_REGEX: RegExp = /.*\/2DItems\/Belts\//;
/** Regex for checking cards */
const CARD_TEST_REGEX: RegExp = /.*\/2DItems\/Divination\//;
/** Regex for checking essences */
const ESSENCE_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Essence\//;
/** Regex for checking fishing rods */
const FISHING_ROD_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\/FishingRods\//;
/** Regex for checking flasks */
const FLASK_TEST_REGEX: RegExp = /https:\/\/web\.poecdn\.com\/gen\/image\/.*\/Item\.png/;
/** Regex for checking gems */
const GEM_TEST_REGEX: RegExp = /.*\/2DItems\/Gems\//;
/** Regex for checking incubators */
const INCUBATOR_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Incubation\//;
/** Regex for checking jewels */
const JEWEL_TEST_REGEX: RegExp = /.*\/2DItems\/Jewels\//;
/** Regex for checking leaguestones */
const LEAGUESTONE_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Classic\//;
/** Regex for checking maps */
const MAP_TEST_REGEX: RegExp = /.*\/2DItems\/Maps\/AtlasMaps\/(?!Fragment).*/;
/** Regex for testing nets */
const NET_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/BestiaryTrap/;
/** Regex for prophecies */
const PROPHECY_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/ProphecyOrb/;
/** Regex for quivers */
const QUIVER_TEST_REGEX: RegExp = /.*\/2DItems\/Quivers\//;

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
      case ItemType.ONE_HAND_AXE: return ONE_HAND_AXE_TEST_REGEX.test(item.icon);
      case ItemType.ONE_HAND_MACE: return ONE_HAND_MACE_TEST_REGEX.test(item.icon);
      case ItemType.ONE_HAND_SWORD: return ONE_HAND_SWORD_TEST_REGEX.test(item.icon);
      case ItemType.SCEPTRE:
        return ONE_HAND_MACE_TEST_REGEX.test(item.icon)
          && SCEPTRE_TYPELINE_TEST_REGEX.test(item.typeLine);
      case ItemType.STAFF: return STAFF_TEST_REGEX.test(item.icon);
      case ItemType.TWO_HAND_AXE: return TWO_HAND_AXE_TEST_REGEX.test(item.icon);
      case ItemType.TWO_HAND_MACE: return TWO_HAND_MACE_TEST_REGEX.test(item.icon);
      case ItemType.TWO_HAND_SWORD: return TWO_HAND_SWORD_TEST_REGEX.test(item.icon);
      case ItemType.WAND: return WAND_TEST_REGEX.test(item.icon);
      case ItemType.BODY_ARMOUR: return BODY_ARMOUR_TEST_REGEX.test(item.icon);
      case ItemType.BOOTS: return BOOTS_TEST_REGEX.test(item.icon);
      case ItemType.GLOVES: return GLOVES_TEST_REGEX.test(item.icon);
      case ItemType.HELMET: return HELMET_TEST_REGEX.test(item.icon);
      case ItemType.SHIELD: return SHIELD_TEST_REGEX.test(item.icon);
      case ItemType.AMULET: return AMULET_TEST_REGEX.test(item.icon);
      case ItemType.BEAST: return BEAST_TEST_REGEX.test(item.icon);
      case ItemType.BELT: return BELT_TEST_REGEX.test(item.icon);
      case ItemType.CARD: return CARD_TEST_REGEX.test(item.icon);
      case ItemType.ESSENCE: return ESSENCE_TEST_REGEX.test(item.icon);
      case ItemType.FISHING_ROD: return FISHING_ROD_TEST_REGEX.test(item.icon);
      case ItemType.FLASK: return FLASK_TEST_REGEX.test(item.icon);
      case ItemType.GEM: return GEM_TEST_REGEX.test(item.icon);
      case ItemType.INCUBATOR: return INCUBATOR_TEST_REGEX.test(item.icon);
      case ItemType.JEWEL: return JEWEL_TEST_REGEX.test(item.icon);
      case ItemType.LEAGUESTONE: return LEAGUESTONE_TEST_REGEX.test(item.icon);
      case ItemType.MAP: return MAP_TEST_REGEX.test(item.icon);
      case ItemType.NET: return NET_TEST_REGEX.test(item.icon);
      case ItemType.PROPHECY: return PROPHECY_TEST_REGEX.test(item.icon);
      case ItemType.QUIVER: return QUIVER_TEST_REGEX.test(item.icon);
      default: return false;
    }
  }
}
export default ItemTypeFilter;
