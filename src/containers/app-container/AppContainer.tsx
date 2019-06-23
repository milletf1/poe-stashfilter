import { ipcRenderer } from 'electron';
import * as React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import * as ipcChannels from '../../../ipc-channels';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import { IAccountState, initialState } from '../../store/account/accountState';
import { IAppState } from '../../store/app/appState';
import InventoryBrowser from '../inventory-browser/InventoryBrowser';
import LoginForm from '../login-form/LoginForm';
import SearchForm from '../search-form/SearchForm';
import SplashPage from '../splash-page/SplashPage';
import './app-container.scss';

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
  setSearches: accountActions.setSearches,
  setUiState: accountActions.setUiState,
}, dispatch);
import { bindActionCreators, Dispatch } from 'redux';
import { accountActions } from '../../store/account/accountActions';
import { authDetailsActions } from '../../store/auth-details/AuthDetailsActions';
import { IAppContainerProps } from './IAppContainerProps';

class AppContainer extends React.Component<IAppContainerProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <HashRouter>
        <div className='app-container'>
          { this.props.authCredentials.isAuthorized && <NavigationBar /> }
          <Route exact path='/' component={SplashPage} />
          <Route path='/login' component={LoginForm} />
          <Route path='/browse' component={InventoryBrowser} />
          <Route path='/search' component={SearchForm} />
        </div>
      </HashRouter>

    );
  }

  public componentDidMount(): void {
      window.addEventListener('beforeunload', () => {
        ipcRenderer.send(ipcChannels.SAVE_STATE, this.props.store.getState());
      });
      if (this.props.authCredentials.isAuthorized && this.props.authCredentials.accountName) {
        this.props.history.push(this.props.activeAccount.uiState.route);
      } else {
        this.props.history.push('/login');
      }
  }

  protected setActiveAccountState(accountState: IAccountState = initialState): void {
    this.props.setAccountName(accountState.accountName);
    this.props.setLeagues(accountState.leagues);
    this.props.setSearches(accountState.searches);

    if (!accountState.uiState.route) {
      this.props.setUiState({...accountState.uiState, route: '/browse'});
    } else {
      this.props.setUiState(accountState.uiState);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppContainer));
