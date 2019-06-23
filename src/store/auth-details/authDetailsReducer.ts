import { AuthDetailsActions, AuthDetailsTypes } from './AuthDetailsActions';
import { IAuthDetailsState, initialState } from './authDetailsState';

export function reducer(
  state: IAuthDetailsState = initialState,
  action: AuthDetailsActions): IAuthDetailsState {

  switch (action.type) {
    case AuthDetailsTypes.SET_AUTH_ACCOUNT:
      const accountName: string = action.payload.accountName;
      return { ...state, accountName };
    case AuthDetailsTypes.SET_REMEMBER_AUTH:
      const remember: boolean = action.payload.remember;
      return { ...state, remember };
    case AuthDetailsTypes.SET_IS_AUTHORIZED:
      const isAuthorized: boolean = action.payload.isAuthorized;
      return { ...state, isAuthorized };
    default:
      return state;
  }
}
