import { BaseItemTypes } from '../../services/filter/filter-modules/item-type-filter/BaseItemTypes';
import { IBaseItem } from '../items/IBaseItem';
import { ItemRarity } from './ItemRarity';

// TODO: redesign this inteface when filter service is finished
export interface ISearchParameters {
  searchTitle: string;
  rarity: ItemRarity[];
  type: BaseItemTypes[];

  results: { [league: string]: IBaseItem[] };
}
