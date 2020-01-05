import { IBaseItem } from './IBaseItem';
import { IItemProperty } from './IItemProperty';

/** Beast item model */
export interface IBeast extends IBaseItem {
  /** Description text */
  descrText: string;
  /** Properties */
  properties: IItemProperty[];
  /** Explicit modifiers */
  explicitMods: string[];
}

/** IBeast type guard */
export function isIBeast(o: any): o is IBeast {
  return (o as IBeast).descrText !== undefined
    && (o as IBeast).descrText === 'Right-click to add this to your bestiary.';
}
