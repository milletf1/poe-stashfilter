import { IStashTab } from './IStashTab';

export interface IDivinationTab extends IStashTab {
  divinationLayout: IDivinationTabLayout;
}

export interface IDivinationTabLayout {
  cards: IDivinationTabLayoutItem[];
}

export interface IDivinationTabLayoutItem {
  name: string;
}

/** IDivinationTab type guard */
export function isIDivinationTab(o: any): o is IDivinationTab {
  return (o as IDivinationTab).divinationLayout !== undefined;
}
