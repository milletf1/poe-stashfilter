import { isIStackableItem, IStackableItem } from './IStackableItem';

export interface ICard extends IStackableItem {
  /** Name of art file */
  artFilename: string;
}

/** ICard type guard */
export function isICard(o: any): o is ICard {
  return (o as ICard).artFilename !== undefined;
}
