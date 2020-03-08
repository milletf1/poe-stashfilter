import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import SearchForm from '../../components/search-form/SearchForm';
import SearchResults from '../../components/search-results/SearchResults';
import { SearchVisibleSection } from '../../models/ui-state/SearchVisibleSection';
import { accountActions } from '../../store/account/accountActions';
import { IAppState } from '../../store/app/appState';
import ISearchPageProps from './ISearchPageProps';
import './search-page.scss';

const expansionPanelClasses = {
  expanded: 'expanded-panel',
  root: 'panel',
};

const expansionPanelSummaryClasses = {
  expanded: 'expanded-panel-summary',
  root: 'panel-summary',
};

const expansionPanelDetailsClasses = {
  root: 'panel-details',
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setVisibleSection: accountActions.setSearchPageVisibleSection,
}, dispatch);

const mapStateToProps = (state: IAppState, props: any) => ({
  ...props,
  openSection: state.activeAccount.uiState.searchPageState.openSection,
});

class SearchPage extends React.Component<ISearchPageProps, {}> {
  constructor(props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className='view-container search-page'>
        <ExpansionPanel
          defaultExpanded
          square
          expanded={this.props.openSection === SearchVisibleSection.SEARCH }
          onChange={this.changePanelFocus(SearchVisibleSection.SEARCH)}
          classes={expansionPanelClasses}>
          <ExpansionPanelSummary classes={expansionPanelSummaryClasses}>
            Search
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={expansionPanelDetailsClasses}>
            <div className='search-view-container'>
              <SearchForm
                nameFilter={this.props.nameFilter}
                itemTypeFilter={this.props.itemTypeFilter}
                modFilter={this.props.modFilter}
                dpsFilter={this.props.dpsFilter}
                socketFilter={this.props.socketFilter}/>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={this.props.openSection === SearchVisibleSection.RESULT }
          onChange={this.changePanelFocus(SearchVisibleSection.RESULT)}
          classes={expansionPanelClasses}>
          <ExpansionPanelSummary classes={expansionPanelSummaryClasses}>
            Results
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={expansionPanelDetailsClasses}>
            <div className='filtered-item-view-container'>
              <SearchResults />
            </div>
          </ExpansionPanelDetails>
          </ExpansionPanel>
      </div>
    );
  }

  private changePanelFocus(
    section: SearchVisibleSection,
  ): (event: React.ChangeEvent, expanded: boolean) => void {
    return (event: React.ChangeEvent, expanded: boolean): void => {
      this.props.setVisibleSection(section);
    };
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
