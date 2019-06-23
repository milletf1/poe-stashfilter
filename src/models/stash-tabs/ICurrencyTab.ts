import { IStashTab } from './IStashTab';
import { ITabLayout } from './ITabLayout';

export interface ICurrencyTab extends IStashTab {
  currencyLayout: ITabLayout;
}

/** ICurrencyTab type guard */
export function isICurrencyTab(o: any): o is ICurrencyTab {
  return (o as ICurrencyTab).currencyLayout !== undefined;
}
