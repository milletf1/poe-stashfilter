import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';
import { IItemProperty } from './IItemProperty';

/** Jewel item model */
export interface IJewel extends IBaseItem {
  /** Properties */
  properties: IItemProperty[];
  /** Description text */
  descrText: string;
  /** Explicit modifiers */
  explicitMods: string[];
  /** Category */
  category: ICategory;
  /** Flavour text */
  flavourText: string[];
  /** Mirrored jewel */
  duplicated?: boolean;
  /** Corrupted jewel */
  corrupted?: boolean;
}

/** IJewel type guard */
export function isIJewel(o: any): o is IJewel {
  return (o as IJewel).category !== undefined && (o as IJewel).category.jewels !== undefined;
}
