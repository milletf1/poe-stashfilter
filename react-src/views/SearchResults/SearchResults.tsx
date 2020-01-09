import { withTheme } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
import { isICurrency } from '../../models/items/ICurrency';
import { isIFlask } from '../../models/items/IFlask';
import { isIFossil } from '../../models/items/IFossil';
import { isIFractured } from '../../models/items/IFractured';
import { isIGear } from '../../models/items/IGear';
import { isIGem } from '../../models/items/IGem';
import { isIJewel } from '../../models/items/IJewel';
import { isILeagueStone } from '../../models/items/ILeagueStone';
import { isIMap } from '../../models/items/IMap';
import { IOrgan, isIOrgan } from '../../models/items/IOrgan';
import { isIProphecy } from '../../models/items/IProphecy';
import { isIResonator } from '../../models/items/IResonator';
import { isISocketableItem } from '../../models/items/ISocketableItem';
import { isIStackableItem } from '../../models/items/IStackableItem';
import { isIVaalGem } from '../../models/items/IVaalGem';
import { ISearchResult } from '../../models/search/ISearchResult';
import { IAppState } from '../../store/app/appState';
import './search-results.scss';

const mapStateToProps = (state: IAppState, props: any) => ({
  searchResults: state.activeAccount.searchResults,
});

class SearchResults extends React.Component<any, any> {
  public render() {
    return (
      <div className='search-results'>
        {
          this.props.searchResults.length === 0
            ? <div>No items</div>
            : this.props.searchResults.map((result: ISearchResult) => {
              return (
                <div className='search-result' key={result.item.id}>
                  <div className='item-display'>
                    <img
                      className='item-image'
                      src={result.item.icon}
                      width={result.item.w * 45}
                      height={result.item.h * 45}/>
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
                  { this.createItemElement(result.item) }
                </div>
              );
            })
        }
      </div>
    );
  }

  private createItemElement(item: IBaseItem): JSX.Element {
    if (isICurrency(item)) { return <CurrencyItemDetails item={item} />; }
    if (isIMap(item)) { return <MapItemDetails item={item} />; }
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
}

export default connect(mapStateToProps)(withTheme()(withRouter(SearchResults)));
