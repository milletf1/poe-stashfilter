import { ItemType } from '../../services/filter/filter-modules/item-type-filter/ItemType';
import { IBaseItem } from '../items/IBaseItem';
import { ItemRarity } from './ItemRarity';

// TODO: redesign this inteface when filter service is finished
export interface ISearchParameters {
  searchTitle: string;
  rarity: ItemRarity[];
  type: ItemType[];

  results: { [league: string]: IBaseItem[] };
}
