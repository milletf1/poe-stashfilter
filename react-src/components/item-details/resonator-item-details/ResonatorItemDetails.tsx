import * as React from 'react';
import { IResonator } from '../../../models/items/IResonator';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemDetails from '../ItemDetails';
import { IResonatorItemDetailsProps } from './IResonatorItemDetailsProps';

class ResonatorItemDetails extends React.Component<IResonatorItemDetailsProps, {}> {
  public render() {
    const item: IResonator = this.props.item;
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

export default ResonatorItemDetails;
