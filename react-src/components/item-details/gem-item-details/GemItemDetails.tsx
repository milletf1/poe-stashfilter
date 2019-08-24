import * as React from 'react';
import { IGem } from '../../../models/items/IGem';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemRequirements from '../../item-requirements/ItemRequirements';
import ItemDetails from '../ItemDetails';
import { IGemItemDetailsProps } from './IGemItemDetailsProps';

class GemItemDetails extends React.Component<IGemItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IGem = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        {item.properties !== undefined && <ItemProperties properties={item.properties} />}
        {item.requirements !== undefined && <ItemRequirements requirements={item.requirements} />}
        {
          item.secDescrText !== undefined &&
          <ItemMods mods={item.secDescrText} theme={ItemModThemeTypes.GREEN_TEXT} />
        }
        {item.explicitMods !== undefined && <ItemMods mods={item.explicitMods} />}
        {
          item.corrupted &&
          <ItemMods
            mods={'Corrupted'}
            theme={ItemModThemeTypes.RED_TEXT}
            style={{marginTop: 0}}/>
        }
        {
          item.additionalProperties !== undefined &&
          <ItemProperties properties={item.additionalProperties} />
        }
        {
          item.descrText !== undefined &&
          <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
        }
      </ItemDetails>
    );
  }
}

export default GemItemDetails;
