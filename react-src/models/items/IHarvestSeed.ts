import { HARVEST_SEED_TEST_REGEX } from './../../services/filter/filter-modules/item-type-filter/item-type-test-regexps';
import { IItemProperty } from './IItemProperty';
import { IStackableItem } from './IStackableItem';

export interface IHarvestSeed extends IStackableItem {
  /** Requirements */
  harvestRequirements?: IItemProperty[];
}

/** IHarvestSeed type guard */
export function isIHarvestSeed(o: any): o is IHarvestSeed {
  return (o as IHarvestSeed).icon !== undefined
    && HARVEST_SEED_TEST_REGEX.test((o as IHarvestSeed).icon);
}
