import * as React from 'react';
import { IOrgan } from '../../../models/items/IOrgan';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemDetails from '../ItemDetails';
import { IOrganItemDetailsProps } from './IOrganItemDetailsProps';

class OrganItemDetails extends React.Component<IOrganItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IOrgan = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        <ItemProperties properties={item.properties} />
        {item.explicitMods && <ItemMods mods={item.explicitMods} />}
        {
          item.descrText &&
          <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
        }
      </ItemDetails>
    );
  }
}

export default OrganItemDetails;
