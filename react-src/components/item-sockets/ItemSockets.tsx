import * as React from 'react';
import { checkIsBelt } from '../../models/items/IGear';
import { ISocketableItem } from '../../models/items/ISocketableItem';
import { ISocketItem } from '../../models/items/ISocketItem';
import ItemSocket from '../item-socket/ItemSocket';
import IItemSocketsProps from './IItemSocketsProps';
import './item-sockets.scss';

/** Position of first link for items with 1 width */
const SOCKET_LINK_0_1_THIN: React.CSSProperties = {left: 6, top: 20};
/** Position of first link for items with 1 width in quad stash */
const SOCKET_LINK_0_1_THIN_QUAD: React.CSSProperties = {left: 5, top: 11};
/** Position of second link for items with 1 width */
const SOCKET_LINK_1_2_THIN: React.CSSProperties = {left: 6, top: 67};
/** Position of second link for items with 1 width in a quad stash */
const SOCKET_LINK_1_2_THIN_QUAD: React.CSSProperties = {left: 5, top: 33};
/** Position of first link for items with 2 width */
const SOCKET_LINK_0_1: React.CSSProperties = {left: 23, top: 6};
/** Position of first link for items with 2 width in a quad stash */
const SOCKET_LINK_0_1_QUAD: React.CSSProperties = {left: 10, top: 5};
/** Position of second link for items with 2 width */
const SOCKET_LINK_1_2: React.CSSProperties = {left: 53, top: 22};
/** Position of second link for items with 2 width in a quad stash */
const SOCKET_LINK_1_2_QUAD: React.CSSProperties = {left: 28, top: 11};
/** Position of third link for items with 2 width */
const SOCKET_LINK_2_3: React.CSSProperties = {left: 23, top: 54};
/** Position of third link for items with 2 width in a quad stash */
const SOCKET_LINK_2_3_QUAD: React.CSSProperties = {left: 10, top: 28};
/** Position of fourth link for items with 2 width */
const SOCKET_LINK_3_4: React.CSSProperties = {left: 6, top: 69};
/** Position of fourth link for items with 2 width in a quad stash */
const SOCKET_LINK_3_4_QUAD: React.CSSProperties = {left: 4, top: 35};
/** Position of fifth link for items with 2 width */
const SOCKET_LINK_4_5: React.CSSProperties = {left: 23, top: 101};
/** Position of fifth link for items with 2 width in a quad stash */
const SOCKET_LINK_4_5_QUAD: React.CSSProperties = {left: 10, top: 53};

class ItemSockets extends React.Component<IItemSocketsProps, {}> {
  public render(): JSX.Element {
    const style: React.CSSProperties = this.props.style;
    const sockets: JSX.Element[] = this.createSockets();

    return <div className='sockets-container' style={style}>{sockets}</div>;
  }

  /**
   * Creates and returns an array of item socket elements
   */
  private createSockets(): JSX.Element[] {
    const item: ISocketableItem = this.props.item;
    const socketElements: JSX.Element[] = [];
    for (let i = 0; i < item.sockets.length; i++) {
      const socketItem: ISocketItem = item.socketedItems.find((sItem) => sItem.socket === i);

      const socket: JSX.Element = (
        <ItemSocket
          key={`socket-${i}`}
          isBelt={checkIsBelt(item)}
          isThinItem={item.w === 1}
          socketIndex={i}
          socket={item.sockets[i]}
          socketItem={socketItem}
          quadStash={this.props.quadStash}
          tooltipLeft={this.props.tooltipLeft}
          tooltipTop={this.props.tooltipTop}/>
      );
      socketElements.push(socket);

      // create a link element
      if (i > 0 && item.sockets[i].group === item.sockets[i - 1].group) {
        const linkPosition: React.CSSProperties = this.getSocketLinkPositionStyle(item, i - 1);
        const linkDirection: string = item.w === 1 || i % 2 === 0 ? 'vertical' : 'horizontal';
        const quadStash: string = this.props.quadStash ? ' quad-stash' : '';
        const linkClassName: string = `link ${linkDirection}${quadStash}`;
        const link: JSX.Element = (
          <span key={`link-${i - 1}-${i}`} className={linkClassName} style={linkPosition} />
        );
        socketElements.push(link);
      }
    }
    return socketElements;
  }

  /**
   * Returns inline style attributes for a socket link
   * @param item The item that has the sockets to be linked
   * @param socketIndex The first socket of the socket pair to link
   */
  private getSocketLinkPositionStyle(
    item: ISocketableItem,
    socketIndex: number,
  ): React.CSSProperties {
    if (socketIndex + 1 >= item.sockets.length) { return {}; }
    switch (socketIndex) {
      case 0:
        if (item.w === 1) {
          return this.props.quadStash ? SOCKET_LINK_0_1_THIN_QUAD : SOCKET_LINK_0_1_THIN;
        }
        return this.props.quadStash ? SOCKET_LINK_0_1_QUAD : SOCKET_LINK_0_1;
      case 1:
        if (item.w === 1) {
          return this.props.quadStash ? SOCKET_LINK_1_2_THIN_QUAD : SOCKET_LINK_1_2_THIN;
        }
        return this.props.quadStash ? SOCKET_LINK_1_2_QUAD : SOCKET_LINK_1_2;
      case 2:
        return this.props.quadStash ? SOCKET_LINK_2_3_QUAD : SOCKET_LINK_2_3;
      case 3:
        return this.props.quadStash ? SOCKET_LINK_3_4_QUAD : SOCKET_LINK_3_4;
      case 4:
        return this.props.quadStash ? SOCKET_LINK_4_5_QUAD : SOCKET_LINK_4_5;
      default: return {};
    }
  }
}

export default ItemSockets;
