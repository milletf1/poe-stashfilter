import * as React from 'react';
import { IBaseItem } from '../../models/items/IBaseItem';
import { StashTypes } from '../../models/stash-tabs/StashTypes';
import { IStashDisplayItemPositionStyle } from '../stash-display-item/IStashDisplayItemPositionStyle';
import StashDisplayItem from '../stash-display-item/StashDisplayItem';
import { ICharacterInventoryProps } from './ICharacterInventoryProps';
import { ICharacterInventoryState } from './ICharacterInventoryState';

import './character-inventory.scss';

/** Left offset of character's flasks */
const FLASK_LEFT_OFFSET: number = 185;
/** Top offset of character's flasks */
const FLASK_TOP_OFFSET: number = 418;
/** Size of stash tab cell in pixels */
const ITEM_CELL_SIZE: number = 47.5;
/** Left offset of character's inventory */
const MAIN_INVENTORY_LEFT_OFFSET: number = 15;
/** Top offset of character's inventory */
const MAIN_INVENTORY_TOP_OFFSET: number = 530;
/** Value to indicate that weapon slot 1 is has been selected */
const WEAPON_SLOT_1: number = 1;
/** Value to indicate that weapon slot 2 is has been selected */
const WEAPON_SLOT_2: number = 2;
/** Position to display character's belt */
const BELT_POSITION: IStashDisplayItemPositionStyle = { left: 251, top: 358 };
/** Position to display character's boots */
const BOOTS_POSITION: IStashDisplayItemPositionStyle = { left: 368, top: 312 };
/** Position to display character's helmet */
const HELM_POSITION: IStashDisplayItemPositionStyle = { left: 251, top: 99 };
/** Position to display character's weapon */
const WEAPON_POSITION: IStashDisplayItemPositionStyle = { left: 65, top: 110 };
/** Position to display character's offhand weapon / shield / quiver */
const OFFHAND_POSITION: IStashDisplayItemPositionStyle = { left: 438, top: 110 };
/** Position to display character's gloves */
const GLOVES_POSITION: IStashDisplayItemPositionStyle = { left: 135, top: 312 };
/** Position to display character's amulet */
const AMULET_POSITION: IStashDisplayItemPositionStyle = { left: 368, top: 193 };
/** Position to display character's body armour */
const ARMOUR_POSITION: IStashDisplayItemPositionStyle = { left: 251, top: 205 };
/** Position to display character's first ring */
const RING_1_POSITION: IStashDisplayItemPositionStyle = { left: 182, top: 252 };
/** Position to display character's second ring */
const RING_2_POSITION: IStashDisplayItemPositionStyle = { left: 368, top: 252 };
/** Size of stash cell */
const CELL_SIZE: number = 47;

class CharacterInventory extends
  React.Component<ICharacterInventoryProps, ICharacterInventoryState> {
  constructor(props) {
    super(props);
    this.state = { weaponSlot: WEAPON_SLOT_1 };
    this.switchWeaponSlot = this.switchWeaponSlot.bind(this);
  }

  public render(): JSX.Element {
    const items: IBaseItem[] = this.props.items;
    const style: React.CSSProperties = this.props.style;
    return (
      <div className='character-inventory' style={style}>
        <span
          className={`weapon-switch left slot-${this.state.weaponSlot}`}
          onClick={this.switchWeaponSlot} />
        <span
          className={`weapon-switch right slot-${this.state.weaponSlot}`}
          onClick={this.switchWeaponSlot} />
        {items && items.map((item: IBaseItem) => this.createItemElement(item))}
      </div>
    );
  }

  /**
   * Creates an element to display an item
   * @param item The item to display
   */
  private createItemElement(item: IBaseItem): JSX.Element {
    const position: IStashDisplayItemPositionStyle = this.getItemElementPositionStyling(item);
    return (
      <div key={item.id} className={`${item.inventoryId} slot-${this.state.weaponSlot}`}>
        <StashDisplayItem
          style={position}
          item={item}
          cellSize={CELL_SIZE}
          stashTabContext={StashTypes.CHARACTER}/>
      </div>
    );
  }

  /**
   * Changes the selected weapon slot
   */
  private switchWeaponSlot(): void {
    const weaponSlot: number = this.state.weaponSlot === WEAPON_SLOT_1
      ? WEAPON_SLOT_2
      : WEAPON_SLOT_1;
    this.setState({weaponSlot});
  }

  /**
   * Gets coordinates for setting an item's display position
   * @param item Item to get position coordinates for
   */
  private getItemElementPositionStyling(item: IBaseItem): IStashDisplayItemPositionStyle {
    switch (item.inventoryId) {
      case 'Belt': return BELT_POSITION;
      case 'Boots': return BOOTS_POSITION;
      case 'Flask':
        const flaskLeft: number = FLASK_LEFT_OFFSET + (item.x * ITEM_CELL_SIZE);
        return { left: flaskLeft, top: FLASK_TOP_OFFSET };
      case 'Helm': return HELM_POSITION;
      case 'Weapon':
      case 'Weapon2':
        return WEAPON_POSITION;
      case 'Offhand':
      case 'Offhand2':
        return OFFHAND_POSITION;
      case 'Gloves': return GLOVES_POSITION;
      case 'Amulet': return AMULET_POSITION;
      case 'BodyArmour': return ARMOUR_POSITION;
      case 'Ring': return RING_1_POSITION;
      case 'Ring2': return RING_2_POSITION;
      case 'MainInventory':
        const inventoryLeft: number = MAIN_INVENTORY_LEFT_OFFSET + (item.x * ITEM_CELL_SIZE);
        const inventoryTop: number = MAIN_INVENTORY_TOP_OFFSET + (item.y * ITEM_CELL_SIZE);
        return {left: inventoryLeft, top: inventoryTop};
      default: return {};
    }
  }
}

export default CharacterInventory;
