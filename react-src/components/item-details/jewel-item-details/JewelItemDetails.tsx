import * as React from 'react';
import { isIAbyssJewel } from '../../../models/items/IAbyssJewel';
import { IJewel } from '../../../models/items/IJewel';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemRequirements from '../../item-requirements/ItemRequirements';
import ItemDetails from '../ItemDetails';
import { IJewelItemDetailsProps } from './IJewelItemDetailsProps';

class JewelItemDetails extends React.Component<IJewelItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IJewel = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        {
          item.properties !== undefined && <ItemProperties properties={item.properties} />
        }
        {
          isIAbyssJewel(item) && item.requirements !== undefined &&
          <ItemRequirements requirements={item.requirements} />
        }
        {!item.identified && <ItemMods mods={'Unidentifed'} theme={ItemModThemeTypes.RED_TEXT} />}
        {item.explicitMods !== undefined && <ItemMods mods={item.explicitMods} />}
        {item.duplicated && <ItemMods mods={'Mirrored'} style={{marginTop: 0}}/>}
        {
          item.corrupted &&
          <ItemMods mods={'Corrupted'} theme={ItemModThemeTypes.RED_TEXT} style={{marginTop: 0}} />
        }
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

export default JewelItemDetails;
