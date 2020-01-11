import * as React from 'react';
import { IBaseItem } from '../../models/items/IBaseItem';
import { isIBeast } from '../../models/items/IBeast';
import { ICard, isICard } from '../../models/items/ICard';
import { ICurrency, isICurrency } from '../../models/items/ICurrency';
import { isIFlask } from '../../models/items/IFlask';
import { isIFossil } from '../../models/items/IFossil';
import { isIFractured } from '../../models/items/IFractured';
import { isIGear } from '../../models/items/IGear';
import { isIGem } from '../../models/items/IGem';
import { isIJewel } from '../../models/items/IJewel';
import { isILeagueStone } from '../../models/items/ILeagueStone';
import { IMap, isIMap } from '../../models/items/IMap';
import { isIOrgan } from '../../models/items/IOrgan';
import { isIProphecy } from '../../models/items/IProphecy';
import { isIResonator } from '../../models/items/IResonator';
import { isISocketableItem } from '../../models/items/ISocketableItem';
import { isIStackableItem } from '../../models/items/IStackableItem';
import { isIVaalGem } from '../../models/items/IVaalGem';
import { StashTypes } from '../../models/stash-tabs/StashTypes';
import { INCUBATOR_TEST_REGEX, MAP_FRAGMENT_TEST_REGEX } from '../../services/filter/filter-modules/item-type-filter/item-type-test-regexps';
import Card from '../card/Card';
import BeastItemDetails from '../item-details/beast-item-details/BeastItemDetails';
import CurrencyItemDetails from '../item-details/currency-item-details/CurrencyItemDetails';
import FlaskItemDetails from '../item-details/flask-item-details/FlaskItemDetails';
import FossilItemDetails from '../item-details/fossil-item-details/FossilItemDetails';
import FracturedItemDetails from '../item-details/fractured-item-details/FracturedItemDetails';
import GearItemDetails from '../item-details/gear-item-details/GearItemDetails';
import GemItemDetails from '../item-details/gem-item-details/GemItemDetails';
import ItemDetails from '../item-details/ItemDetails';
import JewelItemDetails from '../item-details/jewel-item-details/JewelItemDetails';
import LeaguestoneItemDetails from '../item-details/leaguestone-item-details/LeaguestoneItemDetails';
import MapItemDetails from '../item-details/map-item-details/MapItemDetails';
import OrganItemDetails from '../item-details/organ-item-details/OrganItemDetails';
import ProphecyItemDetails from '../item-details/prophecy-item-details/ProphecyItemDetails';
import ResonatorItemDetails from '../item-details/resonator-item-details/ResonatorItemDetails';
import ItemSockets from '../item-sockets/ItemSockets';
import VaalGemItem from '../vaal-gem-item/VaalGemItem';
import { IStashDisplayItemProps } from './IStashDisplayItemProps';
import { IStashDisplayItemState } from './IStashDisplayItemState';
import './stash-display-item.scss';

class StashDisplayItem extends React.Component<IStashDisplayItemProps, IStashDisplayItemState> {
  private imageRef: React.RefObject<HTMLImageElement> = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      imageLeft: -1,
      imageTop: -1,
      isHovered: false,
      tooltipHeight: -1,
      tooltipWidth: -1,
    };

    this.onItemMouseOver = this.onItemMouseOver.bind(this);
    this.onItemMouseLeave = this.onItemMouseLeave.bind(this);
    this.onElementRefUpdate = this.onElementRefUpdate.bind(this);
    this.setImagePositionState = this.setImagePositionState.bind(this);
  }

  public render(): JSX.Element {
    const item: IBaseItem = this.props.item;
    const style: React.CSSProperties = {
      left: this.props.style.left,
      position: this.props.style.position,
      top: this.props.style.top,
    };
    const stashType: StashTypes = this.props.stashTabContext;
    const cellSize: number = this.props.cellSize;
    const tooltipTop: number = this.tooltipPositionStyle.top + this.state.tooltipHeight;
    const tooltipLeft: number = this.state.imageLeft + (item.w * cellSize);
    const itemWidth: number = cellSize * item.w;
    const itemHeight: number = cellSize * item.h;
    // divination tab doesn't display icon icon or tooltip
    if (stashType === StashTypes.DIVINATION_CARD) { return <Card card={(item as ICard)} />; }
    return (
      <div
        className={`stash-display-item ${this.state.isHovered ? 'hover' : ''}`}
        style={style}
        onMouseMove={this.onItemMouseOver}
        onMouseLeave={this.onItemMouseLeave}>
        <img
          ref={this.imageRef}
          className='item-image'
          src={item.icon}
          width={itemWidth}
          height={itemHeight}
          style={{position: 'fixed'}}/>
        {
          isISocketableItem(item) &&
          <ItemSockets
            hasTooltip={true}
            tooltipTop={tooltipTop}
            tooltipLeft={tooltipLeft}
            quadStash={this.props.quadStash}
            item={item} />
        }
        {
          isIStackableItem(item) && <span className='stack-size'>{item.stackSize}</span>
        }
        <div className='item-tooltip'>{this.createItemTooltipElement()}</div>
      </div>
    );
  }

  public componentDidMount(): void {
    this.setImagePositionState();
    window.addEventListener(`resize`, this.setImagePositionState);
  }

  public componentWillUnmount(): void {
    window.removeEventListener(`resize`, this.setImagePositionState);
  }

  /** Sets position of item image */
  private setImagePositionState(): void {
    if (!this.imageRef.current) { return; }
    // get fixed position of item image
    const viewportOffset: ClientRect | DOMRect = this.imageRef.current.getBoundingClientRect();
    const imageLeft: number = viewportOffset.left;
    const imageTop: number = viewportOffset.top;
    this.setState({ imageLeft, imageTop });
  }

  /**
   * Mouse-over item event listener. Sets this.state.hover to true if over the item image,
   * which adds the hover class to the item element.
   */
  private onItemMouseOver(event: React.MouseEvent): void {
    const mouseX: number = event.nativeEvent.x;
    const mouseY: number = event.nativeEvent.y;

    const imageLeft: number = this.state.imageLeft;
    const imageTop: number = this.state.imageTop;
    const imageRight: number =  imageLeft + (this.props.item.w * this.props.cellSize);
    const imageBottom: number = imageTop + (this.props.item.h * this.props.cellSize);
    // perform a bounds check to make sure the mouse pointer is over the item image
    const isHovered: boolean = mouseX >= imageLeft && mouseX <= imageRight && mouseY >= imageTop
      && mouseY <= imageBottom;
    this.setState({ isHovered });
  }

  /**
   * Mouse-over item event listener. Sets this.state.hover to false,
   * which adds the hover class to the item element.
   */
  private onItemMouseLeave(): void {
    this.setState({ isHovered: false });
  }

  /** Returns inline style attributes for an tooltip element */
  private get tooltipPositionStyle(
  ): {left: number, top: number, zIndex: number, position: string} {
    // TODO: create interface for return type
    const tooltipWidth: number = this.state.tooltipWidth;
    const tooltipHeight: number = this.state.tooltipHeight;
    const itemLeft: number = this.state.imageLeft;
    const itemTop: number = this.state.imageTop;
    const itemWidth: number = this.props.item.w * this.props.cellSize;
    let left: number = 0;
    let top: number = 0;

    if (tooltipWidth === -1 || tooltipHeight === -1 || itemLeft === -1 || itemTop === -1) {
      return {left, top, zIndex: 2, position: 'fixed'};
    }

    if (itemTop - tooltipHeight < 0) {
      left = itemLeft + itemWidth;
    } else {
      top = itemTop - tooltipHeight;
      left = Math.max(0, itemLeft + (itemWidth / 2) - (tooltipWidth / 2));
    }
    return {left, top, zIndex: 2, position: 'fixed'};
  }

  /** Creates and returns an onhover tooltip for the item prop */
  private createItemTooltipElement(): JSX.Element {
    const style: React.CSSProperties = (this.tooltipPositionStyle as React.CSSProperties);
    if (isICurrency(this.props.item) || INCUBATOR_TEST_REGEX.test(this.props.item.icon)) {
      return (
        <CurrencyItemDetails
          item={this.props.item as ICurrency}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIMap(this.props.item) || MAP_FRAGMENT_TEST_REGEX.test(this.props.item.icon)) {
      return (
        <MapItemDetails
        item={this.props.item as IMap}
        style={style}
        elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIGear(this.props.item)) {

      return isIFractured(this.props.item)
      ? (
        <FracturedItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      )
      : (
        <GearItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIGem(this.props.item)) {
      return (
        <GemItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIJewel(this.props.item)) {
      return (
        <JewelItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIFlask(this.props.item)) {
      return (
        <FlaskItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIProphecy(this.props.item)) {
      return (
        <ProphecyItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIResonator(this.props.item)) {
      return (
        <ResonatorItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIFossil(this.props.item)) {
      return (
        <FossilItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isILeagueStone(this.props.item)) {
      return (
        <LeaguestoneItemDetails
        item={this.props.item}
        style={style}
        elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIVaalGem(this.props.item)) {
      return (
        <VaalGemItem
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isICard(this.props.item)) {
      return (
        <Card
          card={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIBeast(this.props.item)) {
      return (
        <BeastItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    if (isIOrgan(this.props.item)) {
      return (
        <OrganItemDetails
          item={this.props.item}
          style={style}
          elementRefCallback={this.onElementRefUpdate}/>
      );
    }
    return (
      <ItemDetails
        item={this.props.item}
        style={style}
        elementRefCallback={this.onElementRefUpdate}/>
    );
  }

  /**
   * Calback used by item statistics element to return a ref
   * @param ref The ref to the item statistics element
   */
  private onElementRefUpdate(ref: React.RefObject<HTMLElement>): void {
    const tooltipHeight: number = ref.current.clientHeight;
    const tooltipWidth: number = ref.current.clientWidth;
    ref.current.getBoundingClientRect();
    this.setState({ tooltipHeight, tooltipWidth });
  }
}

export default StashDisplayItem;
