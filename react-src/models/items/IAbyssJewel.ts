import { IItemProperty } from './IItemProperty';
import { IJewel, isIJewel } from './IJewel';

export interface IAbyssJewel extends IJewel {
  /** Abyss jewel */
  abyssJewel: boolean;
  /** Requirements */
  requirements: IItemProperty[];
}

/** IAbyssJewel type guard */
export function isIAbyssJewel(o: any): o is IAbyssJewel {
  return isIJewel(o) && (o as IAbyssJewel).abyssJewel;
}
