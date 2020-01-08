import { AppBar, Button, Grid, Input, MenuItem, Select, Tab, Tabs, Typography} from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { ICharacter } from '../../models/characters/ICharacter';
import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { ILeague } from '../../models/ILeague';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { IStashTabMetadata } from '../../models/stash-tabs/IStashTabMetadata';
import ElectronApi from '../../services/electron-api/ElectronApi';
import { accountActions } from '../../store/account/accountActions';
import { IAppState } from '../../store/app/appState';
import { authDetailsActions } from '../../store/auth-details/AuthDetailsActions';
import { INavigationBarProps } from './INavigationBarProps';
import { INavigationBarState } from './INavigationBarState';

const mapStateToProps = (state: IAppState, props: any) => ({
  accountName: state.activeAccount.accountName,
  isAuthorized: state.authCredentials.isAuthorized,
  leagueIndex: state.activeAccount.uiState.leagueIndex,
  leagues: state.activeAccount.leagues,
  route: state.activeAccount.uiState.route,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setAccountName: authDetailsActions.setAuthAccount,
  setCharacterItems: accountActions.setLeagueCharacterItems,
  setIsAuthorized: authDetailsActions.setIsAuthorized,
  setStashTabs: accountActions.setLeagueStashTabs,
  setUiState: accountActions.setUiState,
}, dispatch);

class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {
  constructor(props) {
    super(props);
    this.state = {
      importItemsButtonEnabled: true,
      logoutButtonEnabled: true,
    };
    this.onChangeTab = this.onChangeTab.bind(this);
    this.onLeagueDropdownValueChanged = this.onLeagueDropdownValueChanged.bind(this);
    this.onImportItemsClick = this.onImportItemsClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  public render(): JSX.Element {
    const flexStyle: React.CSSProperties = { alignItems: 'center', display: 'flex' };
    const flexEndStyle: React.CSSProperties = { ...flexStyle, justifyContent: 'flex-end' };
    const leagueSelectStyle: React.CSSProperties = { width: '100%' };
    const accountNameStyle: React.CSSProperties = { display: 'inline-block', marginRight: '8px' };
    const importItemsButtonStyle: React.CSSProperties = { marginLeft: '24px'};

    return (
      <AppBar position='static'>
        <Grid container>
          {/* Tabs section */}
          <Grid item xs={4}>
            <Tabs
              value={this.tabIndex}
              onChange={this.onChangeTab}>
              <Tab label='Browse' />
              <Tab label='Search' />
            </Tabs>
          </Grid>
          {/* League select */}
          <Grid item xs={3} style={flexEndStyle}>
            <Select
              style={leagueSelectStyle}
              value={this.props.leagues[this.props.leagueIndex].name}
              onChange={this.onLeagueDropdownValueChanged}
              input={<Input name='league' />}
              displayEmpty
              disabled={!this.state.importItemsButtonEnabled}
              name='league'>
            {
              this.props.leagues.map((league) => {
                 return <MenuItem key={league.name} value={league.name}> {league.name} </MenuItem>;
              })
            }
            </Select>
          </Grid>
          {/* Import items button */}
          <Grid item xs={2} style={flexStyle}>
            <Button
              variant='text'
              color='default'
              disabled={!this.state.importItemsButtonEnabled}
              onClick={this.onImportItemsClick}
              style={importItemsButtonStyle}>
              {
                this.state.importItemsButtonEnabled ? 'Import Items' : 'Importing'
              }
            </Button>
          </Grid>
          <Grid item xs={3} style={flexEndStyle}>
            {/* Account name */}
            <Typography variant='caption' style={accountNameStyle}>
              {this.props.accountName}
            </Typography>
            {/* Logout button */}
            <Button
              variant='text'
              color='default'
              disabled={!this.state.logoutButtonEnabled}
              onClick={this.onLogoutClick}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    );
  }

  /**
   * Maps the current route to a tab index
   */
  private get tabIndex(): number {
    switch (this.props.route) {
      case '/search': return 1;
      case '/browse':
      default:
        return 0;
    }
  }

  /**
   * Maps a tab index to a route
   * @param tabIndex Tab index
   */
  private getRouteFromTabIndex(tabIndex: number): string {
    switch (tabIndex) {
      case 1: return '/search';
      case 0:
      default:
        return '/browse';
    }
  }

  /**
   * Change tab event listener. Updates the selected route.
   * @param event The onChange event
   * @param value The number of the tab that fired the change event
   */
  private onChangeTab(event: React.ChangeEvent, value: number): void {
    const route = this.getRouteFromTabIndex(value);
    this.props.setUiState({ route });
    this.props.history.push(route);
  }

  /**
   * League select event listener. Updates the selected league.
   * @param event The dropdown change event
   */
  private onLeagueDropdownValueChanged(event: React.ChangeEvent<HTMLSelectElement>): void {
    const leagueIndex = this.props.leagues.findIndex((league: ILeague) => {
      return league.name === event.target.value;
    });
    this.props.setUiState({ leagueIndex });
  }

  /**
   * Import items button click listener. Disables the button while getting
   * all the stash tabs and character inventories for the selected league.
   */
  private async onImportItemsClick(): Promise<void> {
    this.setState({ importItemsButtonEnabled: false });

    const stashTabs: IStashTab[] = await this.getStashTabs();
    const leagueIndex: number = this.props.leagueIndex;
    const leagueName: string = this.props.leagues[leagueIndex].name;
    const characterItems: ICharacterItems[] = await this.getCharacterItems();

    this.props.setStashTabs(leagueName, stashTabs);
    this.props.setCharacterItems(leagueName, characterItems);
    this.setState({ importItemsButtonEnabled: true });
  }

  /**
   * Logout button click listener. Logs out the current active account.
   */
  private async onLogoutClick(): Promise<void> {
    this.setState({ logoutButtonEnabled: false });
    await ElectronApi.logout();

    this.props.history.push('/login');
    this.props.setIsAuthorized(false);
    this.props.setAccountName(null);

    this.setState({ logoutButtonEnabled: true });
  }

  /**
   * Gets and returns the inventories for all characters in the
   * currently selected league from the Path of Exile website
   * @returns Promise<ICharacterItems[]> character inventories retrieved from website
   */
  private async getCharacterItems(): Promise<ICharacterItems[]> {
    const characterItems: ICharacterItems[] = [];
    try {
      const leagueIndex: number = this.props.leagueIndex;
      const leagueName: string = this.props.leagues[leagueIndex].name;
      const accountName: string = this.props.accountName;
      const characters: ICharacter[] = await ElectronApi.getCharacters(accountName);
      const leagueCharacters: ICharacter[] = characters.filter((character: ICharacter) => {
        return character.league === leagueName;
      });
      for (const character of leagueCharacters) {
        const items = await ElectronApi.getCharacterItems(accountName, character.name);
        characterItems.push(items);
      }
      return characterItems;
    } catch (err) {
      ElectronApi.log(err.message);
      return characterItems;
    }
  }

  /**
   * Gets and returns all stash tabs for the current
   * league from the Path of Exile website
   * @returns Promise<IStashTab[]> stash tabs retrieved from website
   */
  private async getStashTabs(): Promise<IStashTab[]> {
    const stashTabs: IStashTab[] = [];
    try {
      const leagueIndex: number = this.props.leagueIndex;
      const leagueName: string = this.props.leagues[leagueIndex].name;
      const accountName: string = this.props.accountName;
      const firstStashTab: IStashTab = await ElectronApi
        .getStashTab(accountName, 0, leagueName, true);
      firstStashTab.details = firstStashTab.tabs[0];
      const stashTabDetails: IStashTabMetadata[] = firstStashTab.tabs;
      firstStashTab.tabs = null;
      stashTabs.push(firstStashTab);

      for (let i = 1; i < stashTabDetails.length; i++) {
        const tab: IStashTab = await ElectronApi.getStashTab(accountName, i, leagueName, false)
          .then((result: IStashTab) => {
            return { ...result, details: stashTabDetails[i] };
          });
        stashTabs.push(tab);
      }
      return stashTabs;
    } catch (err) {
      ElectronApi.log(err.message);
      return stashTabs;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));
