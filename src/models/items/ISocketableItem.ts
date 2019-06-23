import { IBaseItem } from './IBaseItem';
import { ISocket } from './ISocket';
import { ISocketItem } from './ISocketItem';

export interface ISocketableItem extends IBaseItem {
  /** Sockets */
  sockets: ISocket[];
  /** Socketed items */
  socketedItems: ISocketItem[];
}

/** ISocketable type guard */
export function isISocketableItem(o: any): o is ISocketableItem {
  return (o as ISocketableItem).sockets !== undefined
    && (o as ISocketableItem).socketedItems !== undefined;
}
