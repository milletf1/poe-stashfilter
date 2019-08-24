import * as React from 'react';
import { ILeagueStone } from '../../../models/items/ILeagueStone';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemDetails from '../ItemDetails';
import { ILeaguestoneItemDetailsProps } from './ILeaguestoneItemDetailsProps';

class LeaguestoneItemDetails extends React.Component<ILeaguestoneItemDetailsProps, {}> {
  public render() {
    const item: ILeagueStone = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        {item.properties !== undefined && <ItemProperties properties={item.properties} />}
        {item.implicitMods !== undefined && <ItemMods mods={item.implicitMods} />}
        {item.explicitMods !== undefined && <ItemMods mods={item.explicitMods} />}
        {
          item.corrupted &&
          <ItemMods mods={'Corrupted'} theme={ItemModThemeTypes.RED_TEXT} style={{marginTop: 0}} />
        }
        {
          item.descrText !== undefined &&
          <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
        }
      </ItemDetails>
    );
  }
}

export default LeaguestoneItemDetails;
