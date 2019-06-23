import { IBaseItem } from '../items/IBaseItem';
import { BaseItemType } from './BaseItemType';
import { ItemRarity } from './ItemRarity';

export interface ISearchParameters {
  searchTitle: string;
  rarity: ItemRarity[];
  type: BaseItemType[];

  results: { [league: string]: IBaseItem[] };
}
