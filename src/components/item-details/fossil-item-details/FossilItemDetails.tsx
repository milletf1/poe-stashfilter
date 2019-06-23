import * as React from 'react';
import { IFossil } from '../../../models/items/IFossil';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import ItemDetails from '../ItemDetails';
import { IFossilItemDetailsProps } from './IFossilItemDetailsProps';

class FossilItemDetails extends React.Component<IFossilItemDetailsProps, {}> {
  public render(): JSX.Element {
    const item: IFossil = this.props.item;
    const style: React.CSSProperties = this.props.style;
    const elementRefCallback: (ref: React.RefObject<HTMLElement>) => void =
      this.props.elementRefCallback;

    return (
      <ItemDetails item={item} style={style} elementRefCallback={elementRefCallback}>
        {
          item.explicitMods !== undefined &&
          <ItemMods mods={this.splitExplicitMods(item.explicitMods)} />
        }
        {
          item.descrText !== undefined &&
          <ItemMods mods={item.descrText} theme={ItemModThemeTypes.DESCRIPTION_TEXT} />
        }
      </ItemDetails>
    );
  }

  private splitExplicitMods(mods: string[]): string[] {
    const newMods: string[] = [];
    for (const mod of mods) {
      const splitMods: string[] = mod.split('\r\n');
      for (const splitMod of splitMods) {
        newMods.push(splitMod);
      }
    }
    return newMods;
  }
}

export default FossilItemDetails;
