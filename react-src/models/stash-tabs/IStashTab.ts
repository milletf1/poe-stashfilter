import { IBaseItem } from '../items/IBaseItem';
import { IStashTabMetadata } from './IStashTabMetadata';

export interface IStashTab {
  details?: IStashTabMetadata;
  /** Number of stash tabs */
  numTabs?: number;
  /** Items in stash tab */
  items: IBaseItem[];
  /** Stash tab metadata */
  tabs?: IStashTabMetadata[];
}
