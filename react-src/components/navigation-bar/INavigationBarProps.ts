import { History } from 'history';
import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { ILeague } from '../../models/ILeague';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { IUiState } from '../../models/ui-state/IUiState';

/** Props for NavigationBar component */
export interface INavigationBarProps {
  /** Name of logged in account */
  accountName: string;
  /** Flag to indicate if an account is loggeed in */
  isAuthorised: boolean;
  /** Account leagues */
  leagues: ILeague[];
  /** Index of active league in INavigationProps#leagues */
  leagueIndex: number;
  /** Active route */
  route: string;
  /** Route history */
  history: History;
  /** Sets account name */
  setAccountName: (accountName: string) => any;
  /** Sets isAuthorized */
  setIsAuthorized: (isAuthorized: boolean) => any;
  /** Sets stash tabs for a league */
  setStashTabs: (leagueName: string, stashTabs: IStashTab[]) => any;
  /** Sets character items for a league */
  setCharacterItems: (leagueName: string, characters: ICharacterItems[]) => any;
  /** Sets ui state */
  setUiState: (uiState: Partial<IUiState>) => any;
}
