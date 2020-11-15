import { IMetamorphTabLayoutItem } from './IMetamorphTabLayout';
import { IStashTab } from './IStashTab';

export interface IMetamorphTab extends IStashTab {
  metamorphLayout: {
    section_start_x: number;
    sections: string[];
    layout: IMetamorphTabLayoutItem
  };
}

/** IMetamorphTab type guard */
export function isIMetamorphTab(o: any): o is IMetamorphTab {
  return (o as IMetamorphTab).metamorphLayout !== undefined;
}
