import * as React from 'react';
import { IItemProperty } from '../../models/items/IItemProperty';
import ItemHeader from '../item-header/ItemHeader';
import ItemMods from '../item-mods/ItemMods';
import { ItemModThemeTypes } from '../item-mods/ItemModThemeTypes';
import ItemProperties from '../item-properties/ItemProperties';
import { IItemDetailsProps } from './IItemDetailsProps';

import './item-details.scss';

class ItemDetails extends React.Component<IItemDetailsProps, {}> {
  public elementRef: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props) {
    super(props);
    this.invokeElementRefCallback = this.invokeElementRefCallback.bind(this);
  }

  public render(): JSX.Element {
    const itemLevelProperty: IItemProperty[] = this.createItemLevelProperty();
    return (
      <div
          className='item-details'
          ref={this.elementRef}
          key={this.props.item.id}
          style={this.props.style}
          onMouseOver={this.props.onMouseOver}>
          <ItemHeader item={this.props.item} />
          {itemLevelProperty && <ItemProperties properties={itemLevelProperty} />}
          {this.props.children}
          {
            this.props.item.note !== undefined &&
            <ItemMods mods={this.props.item.note} theme={ItemModThemeTypes.NOTE_TEXT} />
          }
        </div>
    );
  }

  public componentDidMount(): void {
    this.invokeElementRefCallback();
    window.addEventListener('resize', this.invokeElementRefCallback);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.invokeElementRefCallback);
  }

  /** Creates an item property to display item level */
  private createItemLevelProperty(): IItemProperty[] {
    if (!this.props.item.ilvl) {
      return null;
    }
    return [{
      displayMode: 0,
      name: 'Item Level',
      type: 0,
      values: [
        [
          `${this.props.item.ilvl}`,
          0,
        ],
      ],
    }];
  }

  /** Passes this.elementRef to callback prop */
  private invokeElementRefCallback(): void {
    if (!this.props.elementRefCallback) { return; }
    this.props.elementRefCallback(this.elementRef);
  }
}
export default ItemDetails;
