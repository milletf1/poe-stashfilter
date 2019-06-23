import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';
import { IItemProperty } from './IItemProperty';

/** Beast item model */
export interface IBeast extends IBaseItem {
  /** Description text */
  descrText: string;
  /** Category */
  category: ICategory;
  /** Properties */
  properties: IItemProperty[];
  /** Explicit modifiers */
  explicitMods: string[];
}

/** IBeast type guard */
export function isIBeast(o: any): o is IBeast {
  return (o as IBeast).category !== undefined && (o as IBeast).category.monsters !== undefined;
}
