import * as React from 'react';

import { IItemModsProps } from './IItemModsProps';
import './item-mods.scss';
import { ItemModThemeTypes } from './ItemModThemeTypes';

class ItemMods extends React.Component<IItemModsProps, {}> {
  public render(): JSX.Element {
    const mods: string | string[] = this.props.mods;
    const style: React.CSSProperties = this.props.style;
    return (
      <div className={this.itemModsClass} style={style}>
        {
          typeof mods === 'string' ? mods
            : !!mods && mods.map((mod: string, index: number) => <span key={index}>{mod}</span>)
        }
      </div>
    );
  }

  /** Gets class name for item mods element */
  private get itemModsClass(): string {
    if (this.props.theme !== undefined) {
      switch (this.props.theme) {
        case ItemModThemeTypes.FLAVOUR_TEXT: return 'item-mods flavour';
        case ItemModThemeTypes.DESCRIPTION_TEXT: return 'item-mods description';
        case ItemModThemeTypes.RED_TEXT: return 'item-mods red';
        case ItemModThemeTypes.NOTE_TEXT: return 'item-mods note';
        case ItemModThemeTypes.GREEN_TEXT: return 'item-mods green';
        case ItemModThemeTypes.CRAFT_TEXT: return 'item-mods craft';
        case ItemModThemeTypes.FRACTURED_TEXT: return 'item-mods fractured';
        case ItemModThemeTypes.INCUBATED_TEXT: return 'item-mods incubated';
      }
    }
    return 'item-mods';
  }
}

export default ItemMods;
