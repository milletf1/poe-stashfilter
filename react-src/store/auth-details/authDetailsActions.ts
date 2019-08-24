import { ActionsUnion } from '../util/actionsUnion';
import { createAction } from '../util/createActionUtil';

export const enum AuthDetailsTypes {
  SET_AUTH_ACCOUNT = 'SET_AUTH_ACCOUNT',
  SET_REMEMBER_AUTH = 'SET_REMEMBER_AUTH',
  SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED',
}

export const authDetailsActions = {
  setAuthAccount: (accountName: string) =>
    createAction(AuthDetailsTypes.SET_AUTH_ACCOUNT, { accountName }),
  setIsAuthorized: (isAuthorized: boolean) =>
    createAction(AuthDetailsTypes.SET_IS_AUTHORIZED, { isAuthorized }),
  setRememberAuth: (remember: boolean) =>
    createAction(AuthDetailsTypes.SET_REMEMBER_AUTH, { remember }),
};

export type AuthDetailsActions = ActionsUnion<typeof authDetailsActions>;
