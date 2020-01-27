import { ItemType } from '../../../services/filter/filter-modules/item-type-filter/ItemType';
import { IItemBase } from './../../../services/filter/filter-modules/item-type-filter/IItemBase';

export const organBases: IItemBase[] = [
  {
    base: 'Brain',
    type: ItemType.ORGAN,
  },
  {
    base: 'Eye',
    type: ItemType.ORGAN,
  },
  {
    base: 'Liver',
    type: ItemType.ORGAN,
  },
  {
    base: 'Lung',
    type: ItemType.ORGAN,
  },
  {
    base: 'Heart',
    type: ItemType.ORGAN,
  },
];
