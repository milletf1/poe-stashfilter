import { IModFilterParams } from '../../services/filter/filter-modules/mod-filter/IModFilterParams';
import { ISocketFilterParams } from '../../services/filter/filter-modules/socket-filter/ISocketFilterParams';
import { ILeague } from './../../models/ILeague';
import { ISearchResult } from './../../models/search/ISearchResult';
import { IDpsFilterParams } from './../../services/filter/filter-modules/dps-filter/IDpsFilterParams';
import { IFilterModule } from './../../services/filter/filter-modules/IFilterModule';
import { IItemBase } from './../../services/filter/filter-modules/item-type-filter/IItemBase';
import { IItemFilterParams } from './../../services/filter/filter-modules/item-type-filter/IItemTypeFilterParams';
import { ItemType } from './../../services/filter/filter-modules/item-type-filter/ItemType';

export default interface ISearchFormProps {
  leagueIndex: number;
  leagues: ILeague[];
  setSearchResults: (searchResults: ISearchResult[]) => any;
  searchResults: ISearchResult[];
  nameFilter: IFilterModule<string | string>;
  itemTypeFilter: IFilterModule<ItemType[] | IItemBase[] | IItemFilterParams>;
  modFilter: IFilterModule<IModFilterParams[]>;
  dpsFilter: IFilterModule<IDpsFilterParams | IDpsFilterParams[]>;
  socketFilter: IFilterModule<ISocketFilterParams>;
}
