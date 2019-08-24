import { IBaseItem } from '../../../models/items/IBaseItem';
import { IFilterInstructions } from './IFilterInstructions';

export interface IFilterModule<T> {
  /** Type of filter */
  type: string;
  /** Function to filter items */
  filter: (items: IBaseItem[], conditions: T) => IBaseItem[];
}
