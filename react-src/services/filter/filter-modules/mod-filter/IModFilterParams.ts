import { IMod } from './IModFilterParams';
import { ModFilterType } from './ModFilterType';

export interface IModFilterParams {
  mod: IMod;
  min?: number;
  max?: number;
}

export interface IMod {
  type: ModFilterType;
  label: string;
  regex: RegExp | RegExp[];
}
