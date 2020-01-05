import { IBaseItem } from './IBaseItem';
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
  /** Flavour text */
  flavourText: string[];
  /** Explicit modifiers */
  explicitMods?: string[];
  /** Implicit modifiers */
  implicitMods?: string[];
  /** Crafted modifiers */
  craftedMods?: string[];
  /** Enchanted modifiers */
  enchantMods?: string[];
  /** Incubated item */
  incubatedItem?: IIncubatedItem;
}

export interface IIncubatedItem {
  name: string;
  level: number;
  progress: number;
  total: number;
}

/** IGear type guard */
export function isIGear(o: any): o is IGear {
  return (o as IGear).icon !== undefined
    && /\/2DItems\/(Rings|Armours|Weapons|Amulets|Belts)\//.test((o as IGear).icon);
}

/** Checks if an object is a weapon */
export function checkIsWeapon(o: any): boolean {
  return isIGear(o) && /\/2DItems\/Weapons\//.test(o.icon);
}

/** Checks if an object is a belt */
export function checkIsBelt(o: any): boolean {
  return isIGear(o) && /\/2DItems\/Belts\//.test(o.icon);
}
