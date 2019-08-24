import { History } from 'history';
import { Store } from 'redux';
import { ILeague } from '../../models/ILeague';
import { ISearchParameters } from '../../models/search/ISearchParameters';
import { IUiState } from '../../models/ui-state/IUiState';
import { IAccountState } from '../../store/account/accountState';
import { IAuthDetailsState } from '../../store/auth-details/authDetailsState';

export interface IAppProps {
  authCredentials: IAuthDetailsState;
  activeAccount: IAccountState;
  isAuthorized: boolean;
  history: History;
  setAccountName: (accountName: string) => any;
  setAuthAccount: (accountName: string) => any;
  setIsAuthorized: (isAuthorized: boolean) => any;
  setLeagues: (leagues: ILeague[]) => any;
  setRememberAuth: (remember: boolean) => any;
  setSearches: (searches: ISearchParameters[]) => any;
  setUiState: (uiState: Partial<IUiState>) => any;
  store: Store;
}
