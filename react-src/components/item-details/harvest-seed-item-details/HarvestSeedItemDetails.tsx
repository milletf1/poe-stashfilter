import * as React from 'react';
import { IHarvestSeed } from '../../../models/items/IHarvestSeed';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemDetails from '../ItemDetails';

class HarvestSeedItemDetails extends React.Component<any, {}> {
  public render(): JSX.Element {
    const item: IHarvestSeed = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
        <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
          <ItemProperties properties={item.properties} />
          { item.harvestRequirements && <ItemProperties properties={item.harvestRequirements} />}
          { item.craftedMods && <ItemMods mods={item.craftedMods}/> }
          {
            item.descrText &&
            <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
          }
        </ItemDetails>
      );
  }
}

export default HarvestSeedItemDetails;
