export interface IAuthDetailsState {
  accountName: string;
  isAuthorized: boolean;
  remember: boolean;
}

export const initialState: IAuthDetailsState = {
  accountName: null,
  isAuthorized: false,
  remember: false,
};
