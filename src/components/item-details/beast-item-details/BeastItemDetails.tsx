import * as React from 'react';
import { IBeast } from '../../../models/items/IBeast';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemDetails from '../ItemDetails';
import { IBeastItemDetailsProps } from './IBeastItemDetailsProps';

class BeastItemDetails extends React.Component<IBeastItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IBeast = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        {item.properties !== undefined && <ItemProperties properties={item.properties} />}
        {item.explicitMods !== undefined && <ItemMods mods={item.explicitMods} />}
        {
          item.descrText !== undefined &&
          <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
        }
      </ItemDetails>
    );
  }
}

export default BeastItemDetails;
