import { IStashTab } from './IStashTab';
import { ITabLayout } from './ITabLayout';

export interface IBlightTab extends IStashTab {
  blightLayout: ITabLayout;
}

/** IBlightTab type guard */
export function isIBlightTab(o: any): o is IBlightTab {
  return (o as IBlightTab).blightLayout !== undefined;
}
