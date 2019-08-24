import { IAccountState } from './../../../store/account/accountState';
import { IError } from './IError';

export interface IAuthenticationResponse extends IError {
  account: IAccountState;
  loggedIn: boolean;
}
