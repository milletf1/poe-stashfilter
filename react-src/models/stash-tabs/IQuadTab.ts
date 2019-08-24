import { IStashTab } from './IStashTab';

export interface IQuadTab extends IStashTab {
  /** Quad layout */
  quadLayout: boolean;
}

/** IQuadTab type guard */
export function isIQuadTab(o: any): o is IQuadTab {
  return (o as IQuadTab).quadLayout !== undefined;
}
