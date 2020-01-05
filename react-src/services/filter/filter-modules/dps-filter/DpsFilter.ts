import { checkIsWeapon, IGear } from '../../../../models/items/IGear';
import { IItemProperty } from '../../../../models/items/IItemProperty';
import { IBaseItem } from './../../../../models/items/IBaseItem';
import { IFilterModule } from './../IFilterModule';
import { DpsType, IDpsFilterParams } from './IDpsFilterParams';

/** Regex for finding percentage increased physical damage */
const PERCENT_PHYSICAL_DAMAGE_REGEX: RegExp = /(\d*)% increased Physical Damage/;
const BASE_DPS_MODIFIER: number = 100;
const FULL_QUALITY_DPS_MODIFIER: number = 120;
/** Physical damage property name */
const PHYSICAL_DAMAGE_PROP_NAME: string = 'Physical Damage';
/** Attacks per second property name */
const APS_PROP_NAME: string = 'Attacks per Second';
/** Elemental damage property name */
const ELEMENTAL_DAMAGE_PROP_NAME: string = 'Elemental Damage';
/** Chaos damage property name */
const CHAOS_DAMAGE_PROP_NAME: string = 'Chaos Damage';

class DpsFilter implements IFilterModule<IDpsFilterParams | IDpsFilterParams[]> {
  public type: string = 'DpsFilter';

  public filter(
    items: IBaseItem[],
    conditions: IDpsFilterParams | IDpsFilterParams[]): IBaseItem[] {

    const filteredItems: IBaseItem[] = [];

    for (const item of items) {
      if (Array.isArray(conditions)) {
        for (const condition of conditions) {
          if (this.itemMeetsCondition(item, condition)) {
            filteredItems.push(item);
            break;
          }
        }
      } else if (this.itemMeetsCondition(item, conditions)) {
        filteredItems.push(item);
      }
    }
    return filteredItems;
  }

  /**
   * Checks if an `IBaseItem` instance has a dps value within the bounds specified by the
   * `condition` parameter
   * @param item The item to check
   * @param condition The criteria that the item should be checked against
   */
  private itemMeetsCondition(item: IBaseItem, condition: IDpsFilterParams): boolean {
    if (!checkIsWeapon(item) || (condition.min === undefined && condition.max === undefined)) {
      return false;
    }
    const weapon: IGear = item as IGear;
    switch (condition.type) {
      case DpsType.ANY: return this.filterItemOnAnyDps(weapon, condition.min, condition.max);
      case DpsType.CHAOS: return this.filterItemOnChaosDps(weapon, condition.min, condition.max);
      case DpsType.PHYSICAL:
        return this.filterItemOnPhysicalDps(weapon, condition.min, condition.max);
      case DpsType.ELEMENTAL:
        return this.filterItemOnElementalDps(weapon, condition.min, condition.max);
      default: return false;
    }
  }

  /**
   * Checks if an `IGear` instance has a dps value within the bounds specified by the
   * `condition` parameter
   * @param item The item to check
   * @param minDps The minimum dps value (inclusive) that the item must have
   * @param maxDps The maximum dps value (inclusive) that the item must have
   */
  private filterItemOnAnyDps(item: IGear, minDps?: number, maxDps?: number): boolean {
    const elementalDps: number = this.calculateElementalDps(item);
    const physicalDps: number = this.calculatePhysicalDps(item);
    const chaosDps: number = this.calculateChaosDps(item);
    const totalDps = elementalDps + physicalDps + chaosDps;
    let withinDpsBounds: boolean = true;
    if (minDps !== undefined) { withinDpsBounds = totalDps >= minDps; }
    if (maxDps !== undefined && withinDpsBounds) { withinDpsBounds = totalDps <= maxDps; }

    return withinDpsBounds;
  }

  /**
   * Checks if an `IGear` instance has a chaos dps value within the bounds specified by the
   * `condition` parameter
   * @param item The item to check
   * @param minDps The minimum chaos dps value (inclusive) that the item must have
   * @param maxDps The maximum chaos dps value (inclusive) that the item must have
   */
  private filterItemOnChaosDps(item: IGear, minDps?: number, maxDps?: number): boolean {
    const chaosDps: number = this.calculateChaosDps(item);
    let withinDpsBounds: boolean = true;

    if (minDps !== undefined) { withinDpsBounds = chaosDps >= minDps; }
    if (maxDps !== undefined && withinDpsBounds) { withinDpsBounds = chaosDps <= maxDps; }

    return withinDpsBounds;
  }

  /**
   * Checks if an `IGear` instance has a physical dps value within the bounds specified by the
   * `condition` parameter
   * @param item The item to check
   * @param minDps The minimum physical dps value (inclusive) that the item must have
   * @param maxDps The maximum physical dps value (inclusive) that the item must have
   */
  private filterItemOnPhysicalDps(item: IGear, minDps?: number, maxDps?: number): boolean {
    const physicalDps: number = this.calculatePhysicalDps(item);
    let withinDpsBounds: boolean = true;

    if (minDps !== undefined) { withinDpsBounds = physicalDps >= minDps; }
    if (maxDps !== undefined && withinDpsBounds) { withinDpsBounds = physicalDps <= maxDps; }

    return withinDpsBounds;
  }

  /**
   * Checks if an `IGear` instance has an elemental dps value within the bounds specified by the
   * `condition` parameter
   * @param item The item to check
   * @param minDps The minimum elemental dps value (inclusive) that the item must have
   * @param maxDps The maximum elemental dps value (inclusive) that the item must have
   */
  private filterItemOnElementalDps(item: IGear, minDps?: number, maxDps?: number): boolean {
    const elementalDps: number = this.calculateElementalDps(item);
    let withinDpsBounds: boolean = true;

    if (minDps !== undefined) { withinDpsBounds = elementalDps >= minDps; }
    if (maxDps !== undefined && withinDpsBounds) { withinDpsBounds = elementalDps <= maxDps; }

    return withinDpsBounds;
  }

  /**
   * Calculates the elemental dps for an `IGear` instance
   * @param item The `IGear` instance to calculate elemental dps for
   */
  private calculateElementalDps(item: IGear): number {
    const damageProp: IItemProperty = item.properties
    .find((prop: IItemProperty) => prop.name === ELEMENTAL_DAMAGE_PROP_NAME);
    if (!damageProp) { return 0; }

    const apsProp: IItemProperty = item.properties
      .find((prop: IItemProperty) => prop.name === APS_PROP_NAME);
    if (!apsProp) { return 0; }

    const aps: number = parseFloat(apsProp.values[0][0]);
    if (isNaN(aps)) {
      throw new Error(`Invalid attacks per second value:\n${JSON.stringify(item, null, 2)}`);
    }

    const totalElementalDamage: number = damageProp.values
      .map<number>((value: [string, number]) => {
        const damageValues: [number, number] = this.extractDamageValues(value);
        return damageValues[0] + damageValues[1];
      })
      .reduce((total: number, value: number) => total + value, 0);

    return (totalElementalDamage / 2) * aps;
  }

  /**
   * Calculates the pyhsical dps for an `IGear` instance
   * @param item The `IGear` instance to calculate physical dps for
   */
  private calculatePhysicalDps(item: IGear): number {
    const damageProp: IItemProperty = item.properties
      .find((prop: IItemProperty) => prop.name === PHYSICAL_DAMAGE_PROP_NAME);
    if (!damageProp) { return 0; }

    const apsProp: IItemProperty = item.properties
      .find((prop: IItemProperty) => prop.name === APS_PROP_NAME);
    if (!apsProp) { return 0; }

    const aps: number = parseFloat(apsProp.values[0][0]);
    if (isNaN(aps)) {
      throw new Error(`Invalid attacks per second value:\n${JSON.stringify(item, null, 2)}`);
    }

    const damageValues: [number, number] = this.extractDamageValues(damageProp.values[0]);
    const minValue: number = damageValues[0];
    const maxValue: number = damageValues[1];
    const quality: number = this.getQuality(item.properties);
    const rawDps: number = ((minValue + maxValue) / 2) * aps;
    // return physical dps if the item has full quality
    if (quality >= 20) { return rawDps; }
    // calculate physical dps with 20% quality
    const percentDamage: number = this.getPercentPhysicalDamageMods(item)
      .map<number>((mod: string) => parseInt(mod.match(PERCENT_PHYSICAL_DAMAGE_REGEX)[1], 10))
      .reduce((total: number, value: number) => total + value, 0);
    const rawDpsDivisor: number = quality + percentDamage + BASE_DPS_MODIFIER;
    const unamplifiedDps: number = (rawDps / rawDpsDivisor) * BASE_DPS_MODIFIER;
    const fullDpsMultiplier: number =
      (percentDamage + FULL_QUALITY_DPS_MODIFIER) / BASE_DPS_MODIFIER;
    return unamplifiedDps * fullDpsMultiplier;
  }

  /**
   * Calculates the chaos dps for an `IGear` instance
   * @param item The `IGear` instance to calculate chaos dps for
   */
  private calculateChaosDps(item: IGear): number {
    const damageProp: IItemProperty = item.properties
    .find((prop: IItemProperty) => prop.name === CHAOS_DAMAGE_PROP_NAME);
    if (!damageProp) { return 0; }

    const apsProp: IItemProperty = item.properties
      .find((prop: IItemProperty) => prop.name === APS_PROP_NAME);
    if (!apsProp) { return 0; }

    const aps: number = parseFloat(apsProp.values[0][0]);
    if (isNaN(aps)) {
      throw new Error(`Invalid attacks per second value:\n${JSON.stringify(item, null, 2)}`);
    }

    const damageValues: [number, number] = this.extractDamageValues(damageProp.values[0]);
    const totalChaosDamage: number = damageValues[0] + damageValues[1];
    return (totalChaosDamage / 2) * aps;
  }

  /**
   * Checks if quality property exists in an array of
   * item properties. If it does it returns its numeric
   * value. Returns 0 if quality property is not found.
   * @param properties Properties to extract quality value from
   */
  private getQuality(properties: IItemProperty[]): number {
    const qualityProp: IItemProperty = properties
      .find((prop: IItemProperty) => prop.name === 'Quality');

    if (!qualityProp) { return 0; }

    const qualityMatches: RegExpMatchArray = qualityProp.values[0][0].match(/\d+/);
    return qualityMatches && qualityMatches.length > 0 ? parseInt(qualityMatches[0], 10) : 0;
  }

  /**
   * Gets all the percentage physical damage mods from an `IGear` instance
   * and returns them.
   * @param gear The `IGear` instance to get percentage physical damage mods from
   */
  private getPercentPhysicalDamageMods(gear: IGear): string[] {
    const physicalDamageMods: string[] = [];

    if (gear.explicitMods) {
      physicalDamageMods.push(...gear.explicitMods
        .filter((mod: string) => PERCENT_PHYSICAL_DAMAGE_REGEX.test(mod)));
    }
    if (gear.implicitMods) {
      physicalDamageMods.push(...gear.implicitMods
        .filter((mod: string) => PERCENT_PHYSICAL_DAMAGE_REGEX.test(mod)));
    }
    if (gear.craftedMods) {
      physicalDamageMods.push(...gear.craftedMods
        .filter((mod: string) => PERCENT_PHYSICAL_DAMAGE_REGEX.test(mod)));
    }
    return physicalDamageMods;
  }

  /**
   * Extracts the damage values from the `values` attribute of an `IItemProperty` instance,
   * converts them to a number and returns them in an array.
   * @param damagePropValue The value attribute of a damage value property to extract damage values
   * from
   */
  private extractDamageValues(damagePropValue: [string, number]): [number, number] {
    const damageValueMatches: RegExpMatchArray = damagePropValue[0].match(/\d+/g);
    if (!damageValueMatches || damageValueMatches.length !== 2) {
      const errorMessage: string =
        `Invalid damage property value:\n${JSON.stringify(damagePropValue, null, 2)}`;
      throw new Error(errorMessage);
    }
    return [parseInt(damageValueMatches[0], 10), parseInt(damageValueMatches[1], 10)];
  }
}

export default DpsFilter;
