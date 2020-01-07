import { IGem, isIGem } from './IGem';
import { IItemProperty } from './IItemProperty';

export interface IVaalGem extends IGem {
  vaal: IVaalGemAttribute;
}

export interface IVaalGemAttribute {
  baseTypeName: string;
  explicitMods: string[];
  properties: IItemProperty[];
  secDescrText: string;
}

/** IVaalGem type guard */
export function isIVaalGem(o: any): o is IVaalGem {
  return isIGem(o as IVaalGem) && (o as IVaalGem).vaal !== undefined;
}
