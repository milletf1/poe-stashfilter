import { ITabLayoutItem } from './ITabLayout';

export interface IMetamorphTabLayout {
  [i: string]: IMetamorphTabLayoutItem;
}

export interface IMetamorphTabLayoutItem extends ITabLayoutItem {
  section?: string;
}
