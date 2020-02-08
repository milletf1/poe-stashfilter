import { isISocketableItem } from '../../../../models/items/ISocketableItem';
import { IBaseItem } from './../../../../models/items/IBaseItem';
import { ISocket } from './../../../../models/items/ISocket';
import { IFilterModule } from './../IFilterModule';
import { ISocketFilterParams } from './ISocketFilterParams';

export default class SocketFilter implements IFilterModule<ISocketFilterParams> {
  public type: string = 'SocketFilter';

  public filter(items: IBaseItem[], condition: ISocketFilterParams): IBaseItem[] {
    const filteredItems: IBaseItem[] = [];

    for (const item of items) {
      if (this.itemMeetsCondition(item, condition)) { filteredItems.push(item); }
    }
    return filteredItems;
  }

  /**
   * Checks if an `IBaseItem` instance has a specific number of total or coloured sockets
   * @param item The item to check
   * @param condition the condition to check
   */
  private itemMeetsCondition(item: IBaseItem, condition: ISocketFilterParams): boolean {
    if (!isISocketableItem(item)) { return false; }
    let meetsCondition: boolean = true;

    if (condition.redSockets != null) {
      meetsCondition = condition.redSockets <= item.sockets
        .filter((socket: ISocket) => socket.sColour === 'R').length;
    }
    if (meetsCondition && condition.blueSockets != null) {
      meetsCondition = condition.blueSockets <= item.sockets
        .filter((socket: ISocket) => socket.sColour === 'B').length;
    }
    return meetsCondition;
  }
}
