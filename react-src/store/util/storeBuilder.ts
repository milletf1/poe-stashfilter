import { ipcRenderer } from 'electron';
import { createStore, Store } from 'redux';
import * as ipcChannels from '../../../electron-src/ipc-channels';
import { reducer } from '../app/appReducer';
import { IAppState, initialState } from '../app/appState';
import { IAccountState } from './../account/accountState';

export function buildStore(): Promise<Store> {
  return new Promise<Store>((resolve: (s: Store) => void, reject: () => void) => {
    ipcRenderer.once(ipcChannels.GET_STATE_RESPONSE, (event, state: IAppState) => {
      if (!!state) {
        resolve(createStore(reducer, state));
      } else {
        resolve(createStore(reducer, initialState));
      }
    });
    ipcRenderer.send(ipcChannels.GET_STATE_REQUEST);
  });
}

export function getAccountState(accountName: string): Promise<IAccountState> {
  return new Promise<IAccountState>((resolve: (s: IAccountState) => void, reject: () => void) => {
    ipcRenderer.once(ipcChannels.GET_ACCOUNT_STATE_RESPONSE, (event, account: IAccountState) => {
      resolve(account);
    });
    ipcRenderer.send(ipcChannels.GET_ACCOUNT_STATE_REQUEST, { accountName });
  });
}
