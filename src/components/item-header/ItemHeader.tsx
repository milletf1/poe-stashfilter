import * as React from 'react';
import { FrameTypes } from '../../models/items/FrameTypes';
import { isICurrency } from '../../models/items/ICurrency';
import { IItemHeaderProps } from './IItemHeaderProps';
import './item-header.scss';

class ItemHeader extends React.Component<IItemHeaderProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={this.headerClass}>
        {
          this.showItemName &&
          <div className='name'>
            {this.props.item.name}
          </div>
        }
        <div className='type-line'>
          {this.props.item.typeLine}
        </div>
      </div>
    );
  }

  /** Gets class name for header element */
  private get headerClass(): string {
    if (this.showItemName) {
      return `item-header double ${this.itemRarity}`;
    }
    return `item-header ${this.itemRarity}`;
  }

  /** Maps item frametype to a string that describes item rarity */
  private get itemRarity(): string {

    switch (this.props.item.frameType) {
      case FrameTypes.MAGIC: return 'magic';
      case FrameTypes.RARE: return 'rare';
      case FrameTypes.UNIQUE: return 'unique';
      case FrameTypes.GEM: return 'gem';
      case FrameTypes.CURRENCY: return 'currency';
      case FrameTypes.PROPHECY: return 'prophecy';
      case FrameTypes.RELIC: return 'relic';
      default: return '';
    }
  }

  /** Checks if the item name should be displayed */
  private get showItemName(): boolean {
    if (isICurrency(this.props.item)) {
      return false;
    }
    return this.props.item.name.length > 0;
  }
}

export default ItemHeader;
