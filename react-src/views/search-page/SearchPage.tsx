import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import * as React from 'react';
import SearchForm from '../../components/search-form/SearchForm';
import SearchResults from '../../components/search-results/SearchResults';
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

class SearchPage extends React.Component<ISearchPageProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: 'search',
    };
  }

  public render(): JSX.Element {
    return (
      <div className='view-container search-page'>
        <ExpansionPanel
          defaultExpanded
          square
          expanded={this.state.expanded === 'search'}
          onChange={this.changePanelFocus('search')}
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
          expanded={this.state.expanded === 'results'}
          onChange={this.changePanelFocus('results')}
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

  private changePanelFocus(panel: string): (event: React.ChangeEvent, expanded: boolean) => void {
    return (event: React.ChangeEvent, expanded: boolean): void => {
      this.setState({
        expanded: expanded ? panel : false,
      });
    };
  }
}

export default SearchPage;
