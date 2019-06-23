import * as React from 'react';
import { isIAbyssJewel } from '../../models/items/IAbyssJewel';
import { isIFossil } from '../../models/items/IFossil';
import { isIGem } from '../../models/items/IGem';

import { isIVaalGem } from '../../models/items/IVaalGem';

import FossilItemDetails from '../item-details/fossil-item-details/FossilItemDetails';
import GemItemDetails from '../item-details/gem-item-details/GemItemDetails';
import JewelItemDetails from '../item-details/jewel-item-details/JewelItemDetails';
import VaalGemItem from '../vaal-gem-item/VaalGemItem';
import { IItemSocketProps } from './IItemSocketProps';
import { IItemSocketState } from './IItemSocketState';
import './item-socket.scss';

/** Position of first socket */
const SOCKET_POSITION_0_0: React.CSSProperties = {left: 0, top: 0};
/** Position of second socket for items with 2 width */
const SOCKET_POSITION_0_1: React.CSSProperties = {left: 47, top: 0};
/** Position of second socket for items with 2 width in a quad stash */
const SOCKET_POSITION_0_1_QUAD: React.CSSProperties = {left: 23, top: 0};
/** Position of third socket for items with 2 width */
const SOCKET_POSITION_1_1: React.CSSProperties = {left: 47, top: 47};
/** Position of third socket for items with 2 width in a quad stash */
const SOCKET_POSITION_1_1_QUAD: React.CSSProperties = {left: 23, top: 23};
/** Position of fourth socket for items with 2 width and second socket for items with 1 width */
const SOCKET_POSITION_1_0: React.CSSProperties = {left: 0, top: 47};
/**
 * Position of fourth socket for items with 2 width and
 * second socket for items with 1 width in a quad stash
 */
const SOCKET_POSITION_1_0_QUAD: React.CSSProperties = {left: 0, top: 23};
/** Position of fith socket for items with 2 width and third socket for items with 1 width */
const SOCKET_POSITION_2_0: React.CSSProperties = {left: 0, top: 94};
/**
 * Position of fith socket for items with 2 width and
 * third socket for items with 1 width in a quad stash
 */
const SOCKET_POSITION_2_0_QUAD: React.CSSProperties = {left: 0, top: 47};
/** Position of sixth socket */
const SOCKET_POSITION_2_1: React.CSSProperties = {left: 47, top: 94};
/** Position of sixth socket in a quad stash */
const SOCKET_POSITION_2_1_QUAD: React.CSSProperties = {left: 23, top: 47};
/** Position of a belt socket */
const BELT_SOCKET_POSITION: React.CSSProperties = {left: 24, top: 0};
/** Position of a belt socket in a quad stash */
const BELT_SOCKET_POSITION_QUAD: React.CSSProperties = {left: 12, top: 0};

class ItemSocket extends React.Component<IItemSocketProps, IItemSocketState> {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.onMouseOverSocketedItem = this.onMouseOverSocketedItem.bind(this);
    this.onMouseLeaveSocketedItem = this.onMouseLeaveSocketedItem.bind(this);
  }

  public render(): JSX.Element {
    const socketClass: string = `socket-${this.props.socket.sColour}`;
    const socketItemClass: string = this.getSocketItemClass();
    const socketPosition: React.CSSProperties = this.getSocketPositionStyle();

    return (
      <div
        className={`socket-container`}
        onMouseMove={this.onMouseOverSocketedItem}
        onMouseLeave={this.onMouseLeaveSocketedItem}>
        <span
          className={
            `socket ${socketClass}${this.props.quadStash ? ' quad-stash' : ''}${this.state.isHovered ? ' hover' : ''}`
          }
          style={socketPosition}/>
        {
          this.props.socketItem &&
          <span
            className={`${socketItemClass}${this.props.quadStash ? ' quad-stash' : ''}`}
            style={socketPosition}/>
        }
        {this.createItemTooltipElement()}
      </div>
    );
  }

  /** Gets class name for socket */
  private getSocketItemClass(): string {
    if (!this.props.socketItem) { return ''; }

    if (this.props.socketItem.colour) {
      const supportClass: string = isIGem(this.props.socketItem) && this.props.socketItem.support
        ? ' support'
        : '';
      return `item-colour-${this.props.socketItem.colour}${supportClass}`;
    } else if (isIAbyssJewel(this.props.socketItem)) {
      return 'item-colour-A';
    } else if (isIFossil(this.props.socketItem)) {
      return 'item-colour-F';
    }
    return 'item-socketed';
  }

  /** Creates a tooltip element for a socketed item */
  private createItemTooltipElement(): JSX.Element {
    if (this.props.socketItem) {
      const style: React.CSSProperties = {left: this.props.tooltipLeft, top: this.props.tooltipTop};
      if (isIGem(this.props.socketItem)) {
        return (
          <GemItemDetails
            item={this.props.socketItem}
            style={style} />
        );
      } else if (isIVaalGem(this.props.socketItem)) {
        return (
          <VaalGemItem
            item={this.props.socketItem}
            style={style} />
        );
      } else if (isIFossil(this.props.socketItem)) {
        return (
          <FossilItemDetails
            item={this.props.socketItem}
            style={style} />
        );
      } else if (isIAbyssJewel(this.props.socketItem)) {
        return (
          <JewelItemDetails
            item={this.props.socketItem}
            style={style} />
        );
      }
    }
    return null;
  }

  /** Mouse over event listener */
  private onMouseOverSocketedItem(): void {
    if (!this.props.socketItem) { return; }
    // TODO: bounds check
    this.setState({ isHovered: true });
  }

  /** Mouse leave event listener */
  private onMouseLeaveSocketedItem(event: React.MouseEvent): void {
    this.setState({isHovered: false});
  }

  /**
   * Gets inline style attributes for an item socket
   */
  private getSocketPositionStyle(): React.CSSProperties {
    switch (this.props.socketIndex) {
      case 0:
        if (this.props.isBelt) {
          return this.props.quadStash ? BELT_SOCKET_POSITION_QUAD : BELT_SOCKET_POSITION;
        }
        return SOCKET_POSITION_0_0;
      case 1:
        if (this.props.isThinItem) {
          return this.props.quadStash ? SOCKET_POSITION_1_0_QUAD : SOCKET_POSITION_1_0;
        }
        return this.props.quadStash ? SOCKET_POSITION_0_1_QUAD : SOCKET_POSITION_0_1;
      case 2:
        if (this.props.isThinItem) {
          return this.props.quadStash ? SOCKET_POSITION_2_0_QUAD : SOCKET_POSITION_2_0;
        }
        return this.props.quadStash ? SOCKET_POSITION_1_1_QUAD : SOCKET_POSITION_1_1;
      case 3: return this.props.quadStash ? SOCKET_POSITION_1_0_QUAD : SOCKET_POSITION_1_0;
      case 4: return this.props.quadStash ? SOCKET_POSITION_2_0_QUAD : SOCKET_POSITION_2_0;
      case 5: return this.props.quadStash ? SOCKET_POSITION_2_1_QUAD : SOCKET_POSITION_2_1;
      default: return {};
    }
  }
}

export default ItemSocket;
