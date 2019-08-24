import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';
import { IItemProperty } from './IItemProperty';
import { ISocket } from './ISocket';
import { ISocketableItem } from './ISocketableItem';
import { ISocketItem } from './ISocketItem';

export interface IResonator extends ISocketableItem {
  /** Category */
  category: ICategory;
  /** Description text */
  descrText: string;
  /** Explicit modifiers */
  explicitMods: string[];
  /** Properties */
  properties: IItemProperty[];
}

/** IResonator type guard */
export function isIResonator(o: any): o is IResonator {
  return (o as IResonator).category !== undefined
   && (o as IResonator).category.currency !== undefined
   && (o as IResonator).category.currency.findIndex((cat: string) => cat === 'resonator') !== -1;
}
