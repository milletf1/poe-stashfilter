import * as React from 'react';
import Card from '../../components/card/Card';
import BeastItemDetails from '../../components/item-details/beast-item-details/BeastItemDetails';
import CurrencyItemDetails from '../../components/item-details/currency-item-details/CurrencyItemDetails';
import FlaskItemDetails from '../../components/item-details/flask-item-details/FlaskItemDetails';
import FossilItemDetails from '../../components/item-details/fossil-item-details/FossilItemDetails';
import FracturedItemDetails from '../../components/item-details/fractured-item-details/FracturedItemDetails';
import GearItemDetails from '../../components/item-details/gear-item-details/GearItemDetails';
import GemItemDetails from '../../components/item-details/gem-item-details/GemItemDetails';
import ItemDetails from '../../components/item-details/ItemDetails';
import JewelItemDetails from '../../components/item-details/jewel-item-details/JewelItemDetails';
import LeaguestoneItemDetails from '../../components/item-details/leaguestone-item-details/LeaguestoneItemDetails';
import MapItemDetails from '../../components/item-details/map-item-details/MapItemDetails';
import OrganItemDetails from '../../components/item-details/organ-item-details/OrganItemDetails';
import ProphecyItemDetails from '../../components/item-details/prophecy-item-details/ProphecyItemDetails';
import ResonatorItemDetails from '../../components/item-details/resonator-item-details/ResonatorItemDetails';
import ItemSockets from '../../components/item-sockets/ItemSockets';
import VaalGemItem from '../../components/vaal-gem-item/VaalGemItem';
import { IBaseItem } from '../../models/items/IBaseItem';
import { isIBeast } from '../../models/items/IBeast';
import { isICard } from '../../models/items/ICard';
import { ICurrency, isICurrency } from '../../models/items/ICurrency';
import { isIFlask } from '../../models/items/IFlask';
import { isIFossil } from '../../models/items/IFossil';
import { isIFractured } from '../../models/items/IFractured';
import { isIGear } from '../../models/items/IGear';
import { isIGem } from '../../models/items/IGem';
import { isIJewel } from '../../models/items/IJewel';
import { isILeagueStone } from '../../models/items/ILeagueStone';
import { IMap, isIMap } from '../../models/items/IMap';
import { IOrgan, isIOrgan } from '../../models/items/IOrgan';
import { isIProphecy } from '../../models/items/IProphecy';
import { isIResonator } from '../../models/items/IResonator';
import { isISocketableItem } from '../../models/items/ISocketableItem';
import { isIStackableItem } from '../../models/items/IStackableItem';
import { isIVaalGem } from '../../models/items/IVaalGem';
import { ISearchResult } from '../../models/search/ISearchResult';
import { IStashTabColour } from '../../models/stash-tabs/IStashTabMetadata';
import { INCUBATOR_TEST_REGEX, MAP_FRAGMENT_TEST_REGEX } from '../../services/filter/filter-modules/item-type-filter/item-type-test-regexps';
import { ISearchResultProps } from './ISearchResultProps';
import './search-result.scss';

const CELL_WIDTH: number = 45;

class SearchResult extends React.Component<ISearchResultProps, {}> {
  public render() {
    const result: ISearchResult = this.props.searchResult;
    return (
      <div className='search-result'>
        <div className='item-display'>
          <div className='item-wrapper'>
            <img
              className='item-image'
              src={result.item.icon}
              width={result.item.w * CELL_WIDTH}
              height={result.item.h * CELL_WIDTH}/>
            {
              isISocketableItem(result.item) &&
              <ItemSockets
                hasTooltip={false}
                quadStash={false}
                item={result.item}
                style={{top: 0, pointerEvents: 'none'}} />
            }
            {
              isIStackableItem(result.item) &&
              <span className='stack-size'>{result.item.stackSize}</span>
            }
          </div>
        </div>
        { this.createItemElement(result.item) }
        <div className='stash-display'>
          <div className='name' style={{color: this.getStashColour()}}>
            {result.stashName}
          </div>
        </div>
      </div>
    );
  }

  private createItemElement(item: IBaseItem): JSX.Element {
    if (isICurrency(item) || INCUBATOR_TEST_REGEX.test(item.icon)) {
      return <CurrencyItemDetails item={item as ICurrency} />;
    }
    if (isIMap(item) || MAP_FRAGMENT_TEST_REGEX.test(item.icon)) {
      return <MapItemDetails item={item as IMap} />;
    }
    if (isIGear(item)) {
      return isIFractured(item)
      ? <FracturedItemDetails item={item} />
      : <GearItemDetails item={item} />;
    }
    if (isIGem(item)) { return <GemItemDetails item={item} />; }
    if (isIJewel(item)) { return <JewelItemDetails item={item} />; }
    if (isIFlask(item)) { return <FlaskItemDetails item={item} />; }
    if (isIProphecy(item)) { return <ProphecyItemDetails item={item} />; }
    if (isIResonator(item)) { return <ResonatorItemDetails item={item} />; }
    if (isIFossil(item)) { return <FossilItemDetails item={item} />; }
    if (isILeagueStone(item)) { return <LeaguestoneItemDetails item={item} />; }
    if (isIVaalGem(item)) { return <VaalGemItem item={item} />; }
    if (isICard(item)) { return <Card card={item} />; }
    if (isIBeast(item)) { return <BeastItemDetails item={item} />; }
    if (isIOrgan(item)) { return <OrganItemDetails item={item} />; }
    return <ItemDetails item={item} />;
  }

  private getStashColour(): string {
    if (this.props.searchResult.colour === undefined) {
      return '#ECCBA9';
    }
    const colour: IStashTabColour = this.props.searchResult.colour;
    return `rgb(${colour.r}, ${colour.g}, ${colour.b})`;
  }
}

export default SearchResult;
