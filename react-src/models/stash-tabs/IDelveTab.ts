import { IStashTab } from './IStashTab';
import { ITabLayout } from './ITabLayout';

export interface IDelveTab extends IStashTab {
  delveLayout: ITabLayout;
}

/** IDelveTab type guard */
export function isIDelveTab(o: any): o is IDelveTab {
  return (o as IDelveTab).delveLayout !== undefined;
}
