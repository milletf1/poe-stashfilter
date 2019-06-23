import { IStashTab } from './IStashTab';
import { ITabLayout } from './ITabLayout';

export interface IEssenceTab extends IStashTab {
  essenceLayout: ITabLayout;
}

/** IEssenceTab type guard */
export function isIEssenceTab(o: any): o is IEssenceTab {
  return (o as IEssenceTab).essenceLayout !== undefined;
}
