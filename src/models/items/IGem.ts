import { FrameTypes } from './FrameTypes';
import { IBaseItem, isIBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';
import { IAdditionalItemProperty, IItemProperty } from './IItemProperty';
import { IVaalGem } from './IVaalGem';

export interface IGem extends IBaseItem {
  /** Requirements */
  requirements: IItemProperty[];
  /** Next level requirements */
  nextLevelRequirements: IItemProperty[];
  /** Properties */
  properties: IItemProperty[];
  /** Additional properties */
  additionalProperties: IAdditionalItemProperty[];
  /** Explicit modifiers */
  explicitMods: string[];
  /** Support gem */
  support: boolean;
  /** Description text */
  descrText: string;
  /** Secondary description text */
  secDescrText: string;
  /** Mirrored gem */
  duplicated: boolean;
  /** Corrupted gem */
  corrupted: boolean;
  /** Category */
  category: ICategory;
}

/** IGem type guard */
export function isIGem(o: any): o is IGem {
  return (o as IGem).category !== undefined && (o as IGem).category.gems !== undefined
    && (o as IVaalGem).vaal === undefined;
}
