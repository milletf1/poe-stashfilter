import { IItemBase } from './IItemBase';
import { ItemType } from './ItemType';

/** ItemTypeFilter parameter for querying item type and base at same time  */
export interface IItemFilterParams {
  types: ItemType[];
  bases: IItemBase[];
}

/** IItemFilterParams type guard */
export function isIItemFilterParams(o: any): o is IItemFilterParams {
  return (o as IItemFilterParams).bases !== undefined
    && (o as IItemFilterParams).types !== undefined;
}
