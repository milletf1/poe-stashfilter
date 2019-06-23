
import { IStashTab } from '../../../models/stash-tabs/IStashTab';
import { IError } from './IError';

export interface IGetStashTabResponse extends IError {
  stashTab: IStashTab;
}
