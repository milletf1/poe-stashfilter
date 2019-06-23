import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';

export interface IProphecy extends IBaseItem {
  /** Description text */
  descrText: string;
  /** Flavour text */
  flavourText: string[];
  /** Category */
  category: ICategory;
  /** Prophecy text */
  prophecyText: string;
}

/** IProphecy type guard */
export function isIProphecy(o: any): o is IProphecy {
  return (o as IProphecy).prophecyText !== undefined;
}
