import { ORGAN_TEST_REGEX } from './../../services/filter/filter-modules/item-type-filter/item-type-test-regexps';
import { IBaseItem } from './IBaseItem';
import { IItemProperty } from './IItemProperty';

export interface IOrgan extends IBaseItem {
  /** Item level */
  itemLevel: number;
  /** Description text */
  descrText: string;
  /** Explicit modifiers */
  explicitMods: string[];
  /** Properties */
  properties: IItemProperty[];
}

/** IOrgan type guard */
export function isIOrgan(o: any): o is IOrgan {
  return (o as IOrgan).icon !== undefined && ORGAN_TEST_REGEX.test((o as IOrgan).icon);
}
