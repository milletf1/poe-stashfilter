import * as React from 'react';
import { IFlask } from '../../../models/items/IFlask';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemRequirements from '../../item-requirements/ItemRequirements';
import ItemDetails from '../ItemDetails';
import { IFlaskItemDetailsProps } from './IFlaskItemDetailsProps';

class FlaskItemDetails extends React.Component<IFlaskItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IFlask = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        {
          item.properties !== undefined && <ItemProperties properties={item.properties} />
        }
        {
          item.utilityMods !== undefined &&
          <ItemMods mods={item.utilityMods} style={{marginTop: 0}} />
        }
        {
          !item.identified &&
          <ItemMods mods={'Unidentifed'} theme={ItemModThemeTypes.RED_TEXT} />
        }
        {item.requirements !== undefined && <ItemRequirements requirements={item.requirements} />}
        {item.explicitMods !== undefined && <ItemMods mods={item.explicitMods} />}
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

export default FlaskItemDetails;
