import { CURRENCY_TEST_REGEX } from './../../services/filter/filter-modules/item-type-filter/item-type-test-regexps';
import { IStackableItem } from './IStackableItem';

export interface ICurrency extends IStackableItem {
  /** Locked to character */
  lockedToCharacter?: boolean;
}

/** ICurrency type guard */
export function isICurrency(o: any): o is ICurrency {

  return (o as ICurrency).category
    ? (o as ICurrency).category.currency !== undefined
    : CURRENCY_TEST_REGEX.test((o as ICurrency).icon);
}
