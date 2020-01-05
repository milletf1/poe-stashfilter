import { IItemProperty } from './IItemProperty';
import { ISocketableItem } from './ISocketableItem';

export interface IResonator extends ISocketableItem {
  /** Description text */
  descrText: string;
  /** Explicit modifiers */
  explicitMods: string[];
  /** Properties */
  properties: IItemProperty[];
}

/** IResonator type guard */
export function isIResonator(o: any): o is IResonator {
  return (o as IResonator).icon !== undefined
    && /\/2DItems\/Currency\/Delve/.test((o as IResonator).icon)
    && (o as IResonator).typeLine !== undefined
    && (o as IResonator).typeLine.indexOf('Resonator') !== -1;
}
