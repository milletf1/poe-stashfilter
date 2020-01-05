import { IBaseItem } from './IBaseItem';
import { IItemProperty } from './IItemProperty';

/** Jewel item model */
export interface IJewel extends IBaseItem {
  /** Properties */
  properties: IItemProperty[];
  /** Description text */
  descrText: string;
  /** Explicit modifiers */
  explicitMods: string[];
  /** Flavour text */
  flavourText: string[];
  /** Mirrored jewel */
  duplicated?: boolean;
  /** Corrupted jewel */
  corrupted?: boolean;
}

/** IJewel type guard */
export function isIJewel(o: any): o is IJewel {
  return (o as IJewel).icon !== undefined &&
    /\/2DItems\/Jewels/.test((o as IJewel).icon);
}
