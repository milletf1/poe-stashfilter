import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import ElectronApi from '../../services/electron-api/ElectronApi';
import {
  IAuthenticationResponse,
} from '../../services/electron-api/interfaces/IAuthenticationResponse';
import { accountActions } from '../../store/account/accountActions';
import { IAccountState } from '../../store/account/accountState';
import { initialState } from '../../store/account/accountState';
import { IAppState } from '../../store/app/appState';
import { authDetailsActions } from '../../store/auth-details/AuthDetailsActions';
import { ILoginFormProps } from './ILoginFormProps';
import { ILoginFormState } from './ILoginFormState';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setAccountName: accountActions.setAccountName,
  setAuthAccount: authDetailsActions.setAuthAccount,
  setIsAuthorized: authDetailsActions.setIsAuthorized,
  setLeagues: accountActions.setLeagues,
  setRememberAuth: authDetailsActions.setRememberAuth,
  setUiState: accountActions.setUiState,
}, dispatch);

const mapStateToProps = (state: IAppState, props: any) => ({
  activeAccount: state.activeAccount,
  rememberMe: state.authCredentials.remember,
});

class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMessage: '',
      loginButtonEnabled: true,
      password: '',
      sessionId: '',
    };
  }

  public render() {
    return (
      <div className='view-container'>
        <Grid alignContent='center' container spacing={16} style={{height: '100vh'}}>
          <Grid item xs={12}>
          <Typography align='center' variant='h2' gutterBottom>
            Stash Search
          </Typography>
          </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <TextField
                  id='session-id-textfield'
                  label='Session ID'
                  type='password'
                  style={{width: '100%'}}
                  value={this.state.sessionId}
                  onChange={this.onSessionIdChange.bind(this)}
                />
              </Grid>
              <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Grid container justify='space-between'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.props.rememberMe}
                      onChange={this.onRememberMeChange.bind(this)}
                      value='checkedB'
                      color='primary'
                    />
                  }
                  label='Remember me'
                />
                <Button
                  variant='contained'
                  color='primary'
                  disabled={!this.state.loginButtonEnabled}
                  onClick={(e) => this.onSetSessionClick()}>
                    set session id
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
          <Grid item xs={12}>
            <Typography
              align='center'
              variant='body1'>
              {this.state.errorMessage}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }

  protected onPasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ password: event.target.value });
  }

  protected onEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ email: event.target.value });
  }

  protected onRememberMeChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.props.setRememberAuth(event.target.checked);
  }

  protected onSessionIdChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ sessionId: event.target.value });
  }

  protected async onLoginClick(): Promise<void> {
    this.setState({ errorMessage: '', loginButtonEnabled: false });

    try {
      const response: IAuthenticationResponse = await ElectronApi.login(
        this.state.email,
        this.state.password,
        this.props.rememberMe);

      if (response.loggedIn) {
        this.props.setAuthAccount(response.account.accountName);
        this.props.setIsAuthorized(true);
        this.setActiveAccountState(response.account);
        this.props.history.push(this.props.activeAccount.uiState.route);
      } else {
        this.setState({ errorMessage: 'Invalid username or password' });
      }
      this.setState({ loginButtonEnabled: true });
    } catch (err) {
      this.setState({ errorMessage: err.message, loginButtonEnabled: true });
    }
  }

  protected async onSetSessionClick(): Promise<void> {
    this.setState({ errorMessage: '', loginButtonEnabled: false });

    try {
      const response: IAuthenticationResponse =
        await ElectronApi.authWithSessionId(this.state.sessionId, this.props.rememberMe);

      if (response.loggedIn) {
        this.setActiveAccountState(response.account);
        const accountName: string = response.account.accountName;
        this.props.setAuthAccount(accountName);
        this.props.setIsAuthorized(true);
        this.props.history.push(this.props.activeAccount.uiState.route);
      } else {
        this.setState({ errorMessage: 'Failed to authenticate with session id'});
      }
      this.setState({ loginButtonEnabled: true });
    } catch (err) {
      this.setState({ errorMessage: err.message, loginButtonEnabled: true });
    }
  }

  protected setActiveAccountState(accountState: IAccountState = initialState): void {
    this.props.setAccountName(accountState.accountName);
    this.props.setLeagues(accountState.leagues);

    if (!accountState.uiState.route) {
      this.props.setUiState({...accountState.uiState, route: '/browse'});
    } else {
      this.props.setUiState(accountState.uiState);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
