import { IStashTab } from './IStashTab';
import { ITabLayout } from './ITabLayout';

export interface IFragmentTab extends IStashTab {
  fragmentLayout: ITabLayout;
}

/** IFragmentTab type guard */
export function isIFragmentTab(o: any): o is IFragmentTab {
  return (o as IFragmentTab).fragmentLayout !== undefined;
}
