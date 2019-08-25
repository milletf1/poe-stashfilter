import { Grid, List, ListItem, ListSubheader } from '@material-ui/core';
import { withTheme } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import StashDisplay from '../../components/stash-display/StashDisplay';
import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { accountActions } from '../../store/account/accountActions';
import { IAppState } from '../../store/app/appState';
import IInventoryBrowserProps from './IInventoryBrowserProps';
import './inventory-browser.scss';

const mapStateToProps = (state: IAppState, props: any) => ({
  leagueIndex: state.activeAccount.uiState.leagueIndex,
  leagues: state.activeAccount.leagues,
  uiState: state.activeAccount.uiState,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setSelectedTab: accountActions.setSelectedTab,
}, dispatch);

class InventoryBrowser extends React.Component<IInventoryBrowserProps, any> {
  constructor(props) {
    super(props);
}

  public render() {
    return (
    <div className='page-container inventory-browser'>
      <Grid container spacing={16}>
        <Grid item xs={3} md={2} style={{padding: '8px 0'}}>
          <List className='inventory-browser-list'>
            <ListSubheader className='list-subheader'>Characters</ListSubheader>
            {
              this.props.leagues[this.props.leagueIndex].characters
                .map((character: ICharacterItems, index: number) => {
                  return (
                    <ListItem
                      button
                      key={character.character.name}
                      className='browse-list-item'
                      selected={this.props.uiState.browseCategory === BrowseItemCategory.CHARACTER
                        && this.props.uiState.browseIndex === index}
                      onClick={(e) => this.props.setSelectedTab(
                        index,
                        BrowseItemCategory.CHARACTER)}
                      title={character.character.name}>
                      {character.character.name}
                    </ListItem>
                  );
                })
              }
            <ListSubheader className='list-subheader'>Stash Tabs</ListSubheader>
            {
              this.props.leagues[this.props.leagueIndex].stashTabs
                .map((stashTab: IStashTab, index: number) => {
                  return (
                    <ListItem
                      button
                      key={stashTab.details.id}
                      className='browse-list-item'
                      selected={this.props.uiState.browseCategory === BrowseItemCategory.STASH_TAB
                        && this.props.uiState.browseIndex === index}
                      onClick={(e) => this.props.setSelectedTab(
                        index,
                        BrowseItemCategory.STASH_TAB)}
                      title={stashTab.details.n}>
                      {stashTab.details.n}
                    </ListItem>
                  );
                })
            }
          </List>
        </Grid>
        <Grid item xs={9} md={10}>
          <Grid
            container
            spacing={16}
            style={{height: '100%', padding: '12px 8px'}}>
            <StashDisplay />
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
  }

  protected onListItemClick(browseCategory: BrowseItemCategory, index: number): void {
    this.props.setSelectedTab(index, browseCategory);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withTheme()(withRouter(InventoryBrowser)));
