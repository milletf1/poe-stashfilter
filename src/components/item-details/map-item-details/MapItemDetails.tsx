import * as React from 'react';
import { IMap } from '../../../models/items/IMap';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemDetails from '../ItemDetails';
import { IMapItemDetailsProps } from './IMapItemDetailsProps';

class MapItemDetails extends React.Component<IMapItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IMap = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
    this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        {item.properties !== undefined && <ItemProperties properties={item.properties} />}
        {
          !item.identified &&
          <ItemMods mods={'Unidentifed'} theme={ItemModThemeTypes.RED_TEXT} />
        }
        {
          item.explicitMods !== undefined &&
          <ItemMods mods={item.explicitMods} />
        }
        {item.duplicated && <ItemMods mods={'Mirrored'} />}
        {item.corrupted && <ItemMods mods={'Corrupted'} theme={ItemModThemeTypes.RED_TEXT} />}
        {
          item.flavourText !== undefined &&
          <ItemMods mods={item.flavourText} theme={ItemModThemeTypes.FLAVOUR_TEXT} />
        }
        {
          item.descrText !== undefined &&
          <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
        }
      </ItemDetails>
    );
  }
}

export default MapItemDetails;
