import { IFilterModule } from './IFilterModule';

export interface IFilterInstructions<T> {
  /** Target filter module type */
  filterModuleType: string;
  /** Conditions to filter on */
  conditions: T;
}
