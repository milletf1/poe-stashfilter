import { IBaseItem } from './IBaseItem';
import { IItemProperty } from './IItemProperty';

export interface IStackableItem extends IBaseItem {
  /** Number of items in stack */
  stackSize: number;
  /** Maximum stack size */
  maxStackSize: number;
  /** Description text */
  descrText: string;
  /** Item properties */
  properties: IItemProperty[];
  /** Explicit modifiers */
  explicitMods?: string[];
  /** Crafted modifiers */
  craftedMods?: string[];
  /** Flavour text */
  flavourText?: string[];
}

/** IStackableItem type guard */
export function isIStackableItem(o: any): o is IStackableItem {
  return (o as IStackableItem).maxStackSize !== undefined;
}
