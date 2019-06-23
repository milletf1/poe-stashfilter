import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';
import { IItemProperty } from './IItemProperty';
import { ISocket } from './ISocket';
import { ISocketableItem } from './ISocketableItem';
import { ISocketItem } from './ISocketItem';

export interface IGear extends ISocketableItem {
  /** Mirrored gear */
  duplicated?: boolean;
  /** Corrupted gear */
  corrupted?: boolean;
  /** Properties */
  properties: IItemProperty[];
  /** Requirements */
  requirements: IItemProperty[];
  /** Category */
  category: ICategory;
  /** Flavour text */
  flavourText: string[];
  /** Explicit modifiers */
  explicitMods: string[];
  /** Implicit modifiers */
  implicitMods: string[];
  /** Crafted modifiers */
  craftedMods: string[];
  /** Enchanted modifiers */
  enchantMods: string[];
}

/** IGear type guard */
export function isIGear(o: any): o is IGear {
  return (o as IGear).category !== undefined
    && ((o as IGear).category.accessories !== undefined
    || (o as IGear).category.armour !== undefined
    || (o as IGear).category.weapons !== undefined);
}

/** Checks if an object is a belt */
export function checkIsBelt(o: any): boolean {
  return isIGear(o) && o.category.accessories !== undefined && o.category.accessories[0] === 'belt';
}
