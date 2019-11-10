import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';

export interface IFossil extends IBaseItem {
  /** Category */
  category?: ICategory;
  /** Description text */
  descrText: string;
  /** Explicit modifiers */
  explicitMods: string[];
}

/** IFossil type guard */
export function isIFossil(o: any): o is IFossil {
  return (o as IFossil).descrText !== undefined
    && (o as IFossil).descrText === 'Place in a Resonator to influence item crafting.';
}
