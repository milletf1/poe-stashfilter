import { combineReducers } from 'redux';
import { reducer as activeAccount } from '../account/accountReducer';
import { reducer as authCredentials } from '../auth-details/authDetailsReducer';

export const reducer = combineReducers({ activeAccount, authCredentials });
