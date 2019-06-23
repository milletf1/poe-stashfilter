import * as React from 'react';
import { IGear } from '../../../models/items/IGear';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemRequirements from '../../item-requirements/ItemRequirements';
import ItemDetails from '../ItemDetails';
import { IGearItemDetailsProps } from './IGearItemDetailsProps';

class GearItemDetails extends React.Component<IGearItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IGear = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails
        item={item}
        style={style}
        elementRefCallback={elementRefCallback}>
        {
          item.properties !== undefined && <ItemProperties properties={item.properties} />
        }
        {item.requirements !== undefined && <ItemRequirements requirements={item.requirements} />}
        {item.implicitMods !== undefined && <ItemMods mods={item.implicitMods} />}
        {
          item.enchantMods !== undefined &&
          <ItemMods mods={item.enchantMods} theme={ItemModThemeTypes.CRAFT_TEXT} />
        }
        {!item.identified && <ItemMods mods={'Unidentifed'} theme={ItemModThemeTypes.RED_TEXT} />}
        {item.explicitMods !== undefined && <ItemMods mods={item.explicitMods} />}
        {item.duplicated && <ItemMods mods={'Mirrored'} style={{marginTop: 0}} />}
        {
          item.craftedMods !== undefined &&
          <ItemMods
            mods={item.craftedMods}
            style={{marginTop: 0}}
            theme={ItemModThemeTypes.CRAFT_TEXT} />
        }
        {
          item.corrupted &&
          <ItemMods mods={'Corrupted'} theme={ItemModThemeTypes.RED_TEXT} style={{marginTop: 0}} />
        }
        {
          item.flavourText !== undefined &&
          <ItemMods mods={item.flavourText} theme={ItemModThemeTypes.FLAVOUR_TEXT} />
        }
      </ItemDetails>
    );
  }
}

export default GearItemDetails;
