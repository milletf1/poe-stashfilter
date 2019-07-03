import { ItemType } from './ItemType';

export interface IItemBase {
  /** Type of item */
  type: ItemType;
  /** Item base */
  base: string;
}
