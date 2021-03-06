import { History } from 'history';
import { ILeague } from '../../models/ILeague';
import { IUiState } from '../../models/ui-state/IUiState';
import { IAccountState } from '../../store/account/accountState';

export interface ILoginFormProps {
  activeAccount: IAccountState;
  history: History;
  rememberMe: boolean;
  setAccountName: (accountName: string) => any;
  setAuthAccount: (accountName: string) => any;
  setIsAuthorized: (isAuthorized: boolean) => any;
  setLeagues: (leagues: ILeague[]) => any;
  setRememberAuth: (remember: boolean) => any;
  setUiState: (uiState: Partial<IUiState>) => any;
}
