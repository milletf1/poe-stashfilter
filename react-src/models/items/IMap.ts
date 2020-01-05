import { IBaseItem } from './IBaseItem';
import { IItemProperty } from './IItemProperty';

export interface IMap extends IBaseItem {
  /** Mirrored map */
  duplicated?: boolean;
  /** Flavour text */
  flavourText: string[];
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
  return (o as IMap).icon !== undefined &&
    /\/2DItems\/Maps/.test((o as IMap).icon);
}
