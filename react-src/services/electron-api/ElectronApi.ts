import { ipcRenderer } from 'electron';
import * as ipcChannels from '../../../electron-src/ipc-channels';
import { ICharacter } from '../../models/characters/ICharacter';
import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { ILeague } from '../../models/ILeague';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { IAccountNameResponse } from './interfaces/IAccountNameResponse';
import { IAuthenticationResponse } from './interfaces/IAuthenticationResponse';
import { IGetCharacterItemsResponse } from './interfaces/IGetCharacterItemsResponse';
import { IGetCharactersResponse } from './interfaces/IGetCharactersResponse';
import { IGetLeaguesResponse } from './interfaces/IGetLeaguesResponse';
import { IGetStashTabResponse } from './interfaces/IGetStashTabResponse';

class ElectronApi {

  public static async login(
    email: string,
    password: string,
    rememberLogin: boolean): Promise<IAuthenticationResponse> {

    return new Promise<IAuthenticationResponse>((
      res: (b: IAuthenticationResponse) => void,
      rej: (e: Error) => void) => {
      ipcRenderer.once(ipcChannels.LOGIN_RESPONSE, (event, args: IAuthenticationResponse) => {
        if (args.loggedIn) {
          res(args);
        } else if (!args.loggedIn) {
          rej(new Error(args.error));
        } else {
          rej(new Error('Failed to authenticate with login credentials'));
        }
      });
      ipcRenderer.send(ipcChannels.LOGIN_REQUEST, { email, password, rememberLogin });
    });
  }

  public static async authWithSessionId(
    sessionId: string,
    rememberLogin: boolean): Promise<IAuthenticationResponse> {

    return new Promise<IAuthenticationResponse>((
      res: (b: IAuthenticationResponse) => void,
      rej: (e: Error) => void) => {

      ipcRenderer.once(ipcChannels.SET_SESSION_RESPONSE, (event, args: IAuthenticationResponse) => {
        if (args.loggedIn) {
          res(args);
        } else if (!args.loggedIn) {
          rej(new Error(args.error));
        } else {
          rej(new Error('Failed to authenticate with session id'));
        }
      });
      ipcRenderer.send(ipcChannels.SET_SESSION_REQUEST, { sessionId, rememberLogin });
    });
  }

  public static async logout(): Promise<void> {
    return new Promise<void>((res: () => void, rej: () => void) => {
      ipcRenderer.once(ipcChannels.LOGOUT_RESPONSE, () => res());
      ipcRenderer.send(ipcChannels.LOGOUT_REQUEST);
    });
  }

  public static async getAccountName(): Promise<string> {
    return new Promise<string>((res: (s: string) => void, rej: (e: Error) => void) => {
      ipcRenderer.once(ipcChannels.GET_ACCOUNT_NAME_RESPONSE, (
        event,
        args: IAccountNameResponse) => {

        if (args.accountName) {
          res(args.accountName);
        } else if (args.error) {
          rej(new Error(args.error));
        } else {
          rej(new Error('Failed to retrieve account name'));
        }
      });
      ipcRenderer.send(ipcChannels.GET_ACCOUNT_NAME_REQUEST);
    });
  }

  public static async getCharacters(accountName: string): Promise<ICharacter[]> {
    return new Promise<ICharacter[]>((res: (c: ICharacter[]) => void, rej: (e: Error) => void) => {
      ipcRenderer.once(ipcChannels.GET_CHARACTERS_RESPONSE, (
        event,
        args: IGetCharactersResponse) => {

        if (args.characters) {
          res(args.characters);
        } else if (args.error) {
          rej(new Error(args.error));
        } else {
          rej(new Error('Failed to retrieve characters'));
        }
      });
      ipcRenderer.send(ipcChannels.GET_CHARACTERS_REQUEST, { accountName });
    });
  }

  public static async getCharacterItems(
    accountName: string,
    character: string): Promise<ICharacterItems> {

    return new Promise<ICharacterItems>((
      res: (c: ICharacterItems) => void,
      rej: (e: Error) => void) => {

      ipcRenderer.once(ipcChannels.GET_CHAR_ITEMS_RESPONSE, (
        event,
        args: IGetCharacterItemsResponse) => {

        if (args.characterItems) {
          res(args.characterItems);
        } else if (args.error) {
          rej(new Error(args.error));
        } else {
          rej(new Error('Failed to retrieve character items'));
        }
      });
      ipcRenderer.send(ipcChannels.GET_CHAR_ITEMS_REQUEST, { accountName, character });
    });
  }

  public static async getStashTab(
    accountName: string,
    tabIndex: number,
    league: string,
    includeTabList: boolean,
  ): Promise<IStashTab> {
    return new Promise<IStashTab>((res: (s: IStashTab) => void, rej: (e: Error) => void) => {

      ipcRenderer.once(ipcChannels.GET_STASH_TAB_RESPONSE, (
        event,
        args: IGetStashTabResponse) => {

        if (args.stashTab) {
          res(args.stashTab);
        } else if (args.error) {
          rej(new Error(args.error));
        } else {
          rej(new Error('Failed to retrieve stash tab'));
        }
      });
      ipcRenderer.send(ipcChannels.GET_STASH_TAB_REQUEST, {
        accountName,
        includeTabList,
        league,
        tabIndex,
      });
    });
  }

  public static async getLeagues(accountName: string): Promise<ILeague[]> {
    return new Promise<ILeague[]>((res: (leagues: ILeague[]) => void, rej: (e: Error) => void) => {

      ipcRenderer.once(ipcChannels.GET_LEAGUES_RESPONSE, (event, args: IGetLeaguesResponse) => {
        if (args.leagues) {
          res(args.leagues);
        } else if (args.error) {
          rej(new Error(args.error));
        } else {
          rej(new Error('Failed to retrieve leagues'));
        }
      });
      ipcRenderer.send(ipcChannels.GET_LEAGUES_REQUEST, { accountName });
    });
  }

  /** Sends a request to log a message */
  public static log(message: string): void {
    ipcRenderer.send(ipcChannels.LOG_MESSAGE, { message });
  }
}

export default ElectronApi;
