import * as React from 'react';
import { IProphecy } from '../../../models/items/IProphecy';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemDetails from '../ItemDetails';
import { IProphecyItemDetailsProps } from './IProphecyItemDetailsProps';

class ProphecyItemDetails extends React.Component<IProphecyItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IProphecy = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        {
          item.flavourText !== undefined &&
          <ItemMods mods={item.flavourText} theme={ItemModThemeTypes.FLAVOUR_TEXT} />
        }
        {
          item.prophecyText !== undefined &&
          <ItemMods mods={item.prophecyText} style={{color: 'white'}} />
        }
        {
          item.descrText !== undefined &&
          <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
        }
      </ItemDetails>
    );
  }
}

export default ProphecyItemDetails;
