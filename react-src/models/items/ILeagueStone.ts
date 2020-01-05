import { IBaseItem } from './IBaseItem';
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
}

/** ILeagueStone type guard */
export function isILeagueStone(o: any): o is ILeagueStone {
  return (o as ILeagueStone).descrText !== undefined
    && (o as ILeagueStone).descrText === 'Right-click to open your Legacy Panel and place a Leaguestone in an empty slot. It will apply to the next new area you enter.';
}
