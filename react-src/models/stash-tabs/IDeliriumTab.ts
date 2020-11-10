import { IStashTab } from './IStashTab';
import { ITabLayout } from './ITabLayout';

export interface IDeliriumTab extends IStashTab {
  deliriumLayout: ITabLayout;
}

/** IDeliriumTab type guard */
export function isIDeliriumTab(o: any): o is IDeliriumTab {
  return (o as IDeliriumTab).deliriumLayout !== undefined;
}
