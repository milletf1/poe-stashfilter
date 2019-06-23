import { IBaseItem } from './IBaseItem';
import { ICategory } from './ICategory';
import { IItemProperty } from './IItemProperty';

export interface ILeagueStone extends IBaseItem {
  /** Properties */
  properties: IItemProperty[];
  /** Description text */
  descrText: string;
  /** Corrupted leaguestone */
  corrupted: boolean;
  /** Implicit modifiers */
  implicitMods: string[];
  /** Explicit modifiers */
  explicitMods: string[];
  /** Category */
  category: ICategory;
}

/** ILeagueStone type guard */
export function isILeagueStone(o: any): o is ILeagueStone {
  return (o as ILeagueStone).category !== undefined
    && (o as ILeagueStone).category.leaguestones !== undefined;
}
