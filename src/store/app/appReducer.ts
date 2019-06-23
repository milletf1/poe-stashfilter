import { combineReducers } from 'redux';
import { reducer as activeAccount } from '../account/accountReducer';
import { reducer as authCredentials } from '../auth-details/authDetailsReducer';
import { IAppState, initialState } from './appState';

export const reducer = combineReducers({ activeAccount, authCredentials });
