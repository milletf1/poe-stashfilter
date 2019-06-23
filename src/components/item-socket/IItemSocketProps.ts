import { ISocket } from '../../models/items/ISocket';
import { ISocketItem } from '../../models/items/ISocketItem';

export interface IItemSocketProps {
  /** Flag to indicate if the socket's item is a belt */
  isBelt?: boolean;
  /** Flag to indicate if socket's item is in a thin item, which is an item with width == 1 */
  isThinItem?: boolean;
  /** Flag to indicate if socket's item is in a quad stash-tab */
  quadStash?: boolean;
  /** Index of socket when compared to other item sockets */
  socketIndex: number;
  /** Socket to render */
  socket: ISocket;
  /** Item socketed in socket */
  socketItem?: ISocketItem;
  /** Absolute left position of socket item tooltip */
  tooltipLeft?: number;
  /** Absolute top position of socket item tooltip */
  tooltipTop?: number;
}
