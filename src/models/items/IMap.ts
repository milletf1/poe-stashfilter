import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';
import { IItemProperty } from './IItemProperty';

export interface IMap extends IBaseItem {
  /** Mirrored map */
  duplicated?: boolean;
  /** Flavour text */
  flavourText: string[];
  /** Category */
  category: ICategory;
  /** Explicit modifiers */
  explicitMods: string[];
  /** Corrupted map */
  corrupted: boolean;
  /** Description text */
  descrText: string;
  /** Properties */
  properties: IItemProperty[];
}

/** IMap type guard */
export function isIMap(o: any): o is IMap {
  return (o as IMap).category !== undefined && (o as IMap).category.maps !== undefined;
}
