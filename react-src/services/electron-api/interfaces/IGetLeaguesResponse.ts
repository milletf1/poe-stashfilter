
import { ILeague } from '../../../models/ILeague';
import { IError } from './IError';

export interface IGetLeaguesResponse extends IError {
  leagues: ILeague[];
}
