import { IItemBase } from './IItemBase';
import { ItemType } from './ItemType';

/** ItemTypeFilter parameter for querying item type and base at same time  */
export interface IItemFilterParams {
  type: ItemType[];
  base: IItemBase[];
}

/** IItemFilterParams type guard */
export function isIItemFilterParams(o: any): o is IItemFilterParams {
  return (o as IItemFilterParams).base !== undefined
    && (o as IItemFilterParams).type !== undefined;
}
