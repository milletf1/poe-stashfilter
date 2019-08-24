import * as React from 'react';
import { IFractured } from '../../../models/items/IFractured';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemProperties from '../../item-properties/ItemProperties';
import ItemRequirements from '../../item-requirements/ItemRequirements';
import ItemDetails from '../ItemDetails';
import { IFracturedItemDetailsProps } from './IFracturedItemDetailsProps';

class FracturedItemDetails extends React.Component<IFracturedItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IFractured = this.props.item;
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
        {
          item.fracturedMods !== undefined &&
          <ItemMods
            mods={item.fracturedMods}
            theme={ItemModThemeTypes.FRACTURED_TEXT}
            style={{marginBottom: 0}} />
        }
        {
          item.explicitMods !== undefined &&
          <ItemMods mods={item.explicitMods} style={{marginTop: 0}} />
        }
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

export default FracturedItemDetails;
