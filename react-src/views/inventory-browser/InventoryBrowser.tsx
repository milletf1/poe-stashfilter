import { Grid, List, ListItem, ListSubheader } from '@material-ui/core';
import { withTheme } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import StashDisplay from '../../components/stash-display/StashDisplay';
import { ICharacterItems } from '../../models/characters/ICharacterItems';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { IStashTabColour } from '../../models/stash-tabs/IStashTabMetadata';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { accountActions } from '../../store/account/accountActions';
import { IAppState } from '../../store/app/appState';
import IInventoryBrowserProps from './IInventoryBrowserProps';
import './inventory-browser.scss';

const mapStateToProps = (state: IAppState, props: any) => ({
  browseCategory: state.activeAccount.uiState.browsePageState.browseCategory,
  browseIndex: state.activeAccount.uiState.browsePageState.browseIndex,
  leagueIndex: state.activeAccount.uiState.leagueIndex,
  leagues: state.activeAccount.leagues,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setSelectedTab: accountActions.setSelectedTab,
}, dispatch);

class InventoryBrowser extends React.Component<IInventoryBrowserProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className='view-container inventory-browser'>
        <Grid container spacing={2}>
          <Grid item xs={4} md={3} style={{ padding: '8px 0' }}>
            <List className='inventory-browser-list'>
              <ListSubheader className='list-subheader'>Characters</ListSubheader>
              {
                this.props.leagues[this.props.leagueIndex].characters
                  .map((character: ICharacterItems, index: number) => {
                    return (
                      <ListItem
                        button
                        key={character.character.name}
                        className='browse-list-item character'
                        selected={this.props.browseCategory === BrowseItemCategory.CHARACTER
                          && this.props.browseIndex === index}
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
                        selected={this.props.browseCategory === BrowseItemCategory.STASH_TAB
                          && this.props.browseIndex === index}
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
          <Grid item xs={8} md={9}>
            <Grid
              container
              spacing={2}
              style={{ height: '100%', padding: '12px 8px' }}>
              <StashDisplay />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (withTheme(withRouter(InventoryBrowser)));
