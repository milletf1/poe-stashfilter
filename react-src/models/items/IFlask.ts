import { IBaseItem } from './IBaseItem';
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
  /** Description text */
  descrText: string;
}

/** IFlask type guard */
export function isIFlask(o: any): o is IFlask {
  return (o as IFlask).descrText !== undefined
    && (o as IFlask).descrText === 'Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.';
}
