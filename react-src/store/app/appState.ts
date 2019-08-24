import { IAccountState,
  initialState as activeAccount,
} from '../account/accountState';
import {
  IAuthDetailsState,
  initialState as authCredentials,
} from '../auth-details/authDetailsState';

export interface IAppState {
  activeAccount: IAccountState;
  authCredentials: IAuthDetailsState;
}

export const initialState: IAppState = { activeAccount, authCredentials };
