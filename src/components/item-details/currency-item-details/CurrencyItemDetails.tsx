import * as React from 'react';
import { ICurrency } from '../../../models/items/ICurrency';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemDetails from '../ItemDetails';
import { ICurrencyItemDetailsProps } from './ICurrenyItemDetailsProps';

class CurrencyItemDetails extends React.Component<ICurrencyItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: ICurrency = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        <ItemProperties properties={item.properties} />
        {item.explicitMods && <ItemMods mods={item.explicitMods} />}
        {
          item.flavourText &&
          <ItemMods mods={item.flavourText} theme={ItemModThemeTypes.FLAVOUR_TEXT} />
        }
        {
          item.descrText &&
          <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
        }
      </ItemDetails>
    );
  }
}

export default CurrencyItemDetails;
