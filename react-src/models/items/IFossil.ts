import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';

export interface IFossil extends IBaseItem {
  /** Category */
  category: ICategory;
  /** Description text */
  descrText: string;
  /** Explicit modifiers */
  explicitMods: string[];
}

/** IFossil type guard */
export function isIFossil(o: any): o is IFossil {
  return (o as IFossil).category !== undefined
   && (o as IFossil).category.currency !== undefined
   && (o as IFossil).category.currency.findIndex((cat: string) => cat === 'fossil') !== -1;
}
