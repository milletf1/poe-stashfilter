import { ipcRenderer } from 'electron';
import * as React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import * as ipcChannels from '../../../electron-src/ipc-channels';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import { ILeague } from '../../models/ILeague';
import ElectronApi from '../../services/electron-api/ElectronApi';
import DpsFilter from '../../services/filter/filter-modules/dps-filter/DpsFilter';
import ItemTypeFilter from '../../services/filter/filter-modules/item-type-filter/ItemTypeFilter';
import ModFilter from '../../services/filter/filter-modules/mod-filter/ModFilter';
import NameFilter from '../../services/filter/filter-modules/name-filter/NameFilter';
import SocketFilter from '../../services/filter/filter-modules/socket-filter/SocketFilter';
import { accountActions } from '../../store/account/accountActions';
import { IAccountState, initialState } from '../../store/account/accountState';
import { IAppState } from '../../store/app/appState';
import { authDetailsActions } from '../../store/auth-details/AuthDetailsActions';
import InventoryBrowser from '../inventory-browser/InventoryBrowser';
import LoginForm from '../login-form/LoginForm';
import SearchPage from '../search-page/SearchPage';
import SplashPage from '../splash-page/SplashPage';
import './app.scss';
import { IAppProps } from './IAppProps';

const mapStateToProps = (state: IAppState, props: any) => ({
  activeAccount: state.activeAccount,
  authCredentials: state.authCredentials,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setAccountName: accountActions.setAccountName,
  setAuthAccount: authDetailsActions.setAuthAccount,
  setIsAuthorized: authDetailsActions.setIsAuthorized,
  setLeagues: accountActions.setLeagues,
  setRememberAuth: authDetailsActions.setRememberAuth,
  setUiState: accountActions.setUiState,
}, dispatch);

class App extends React.Component<IAppProps, {}> {

  private nameFilter: NameFilter;
  private itemTypeFilter: ItemTypeFilter;
  private modFilter: ModFilter;
  private dpsFilter: DpsFilter;
  private socketFilter: SocketFilter;

  constructor(props) {
    super(props);
    this.nameFilter = new NameFilter();
    this.itemTypeFilter = new ItemTypeFilter();
    this.modFilter = new ModFilter();
    this.dpsFilter = new DpsFilter();
    this.socketFilter = new SocketFilter();
  }

  public render() {
    return (
      <HashRouter>
        <div className='app-container'>
          { this.props.authCredentials.isAuthorized && <NavigationBar /> }
          <Route exact path='/' render={(props) => <SplashPage {...props} />} />
          <Route path='/login' render={(props) => <LoginForm {...props} />} />
          <Route path='/browse' render={(props) => <InventoryBrowser {...props} />} />
          <Route
            path='/search'
            render={(props) =>
              <SearchPage {...props}
                nameFilter={this.nameFilter}
                itemTypeFilter={this.itemTypeFilter}
                modFilter={this.modFilter}
                dpsFilter={this.dpsFilter}
                socketFilter={this.socketFilter}/>
            } />
        </div>
      </HashRouter>

    );
  }

  public componentDidMount(): void {
      window.addEventListener('beforeunload', () => {
        ipcRenderer.send(ipcChannels.SAVE_STATE, this.props.store.getState());
      });
      if (this.props.authCredentials.isAuthorized && this.props.authCredentials.accountName) {
        this.updateLeagues();
        this.props.history.push(this.props.activeAccount.uiState.route);
      } else {
        this.props.history.push('/login');
      }
  }

  private async updateLeagues(): Promise<void> {
    try {
      const apiLeagues: ILeague[] = await
        ElectronApi.getLeagues(this.props.activeAccount.accountName);
      const leagues: ILeague[] = [];

      for (const apiLeague of apiLeagues) {
        const league: ILeague = this.props.activeAccount.leagues
          .find((l: ILeague) => l.name === apiLeague.name);

        if (league !== undefined) {
          leagues.push(league);
        } else {
          leagues.push(apiLeague);
        }
      }
      this.props.setLeagues(leagues);
    } catch (err) {
      /* no-op */
    }
  }

  private setActiveAccountState(accountState: IAccountState = initialState): void {
    this.props.setAccountName(accountState.accountName);
    this.props.setLeagues(accountState.leagues);

    if (!accountState.uiState.route) {
      this.props.setUiState({...accountState.uiState, route: '/browse'});
    } else {
      this.props.setUiState(accountState.uiState);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
