import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';
import { IItemProperty } from './IItemProperty';

export interface IFlask extends IBaseItem {
  /** Properties */
  properties: IItemProperty[];
  /** Requirements */
  requirements: IItemProperty[];
  /** Utility modifiers */
  utilityMods: string[];
  /** Explicit modifiers */
  explicitMods: string[];
  /** Flavour text */
  flavourText: string[];
  /** Category */
  category: ICategory;
  /** Description text */
  descrText: string;
}

/** IFlask type guard */
export function isIFlask(o: any): o is IFlask {
  return (o as IFlask).category !== undefined && (o as IFlask).category.flasks !== undefined;
}
