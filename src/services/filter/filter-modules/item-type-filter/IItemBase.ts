import { ItemType } from './ItemType';

export interface IItemBase {
  /** Type of item */
  type: ItemType;
  /** Item base */
  base: string;
}

/** IItemBase type guard */
export function isIItemBase(o: any): o is IItemBase {
  return (o as IItemBase).type !== undefined
    && (o as IItemBase).base !== undefined;
}
