import { FrameTypes } from './FrameTypes';
import { isIStackableItem, IStackableItem } from './IStackableItem';

export interface ICurrency extends IStackableItem {
  /** Locked to character */
  lockedToCharacter: boolean;
}

/** ICurrency type guard */
export function isICurrency(o: any): o is ICurrency {
  return (o as ICurrency).category.currency !== undefined;
}
