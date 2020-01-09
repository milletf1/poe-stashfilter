import { withTheme } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResult from '../../components/search-result/SearchResult';
import { ISearchResult } from '../../models/search/ISearchResult';
import { IAppState } from '../../store/app/appState';
import { ISearchResultsProps } from './ISearchResultsProps';
import './search-results.scss';

const mapStateToProps = (state: IAppState, props: any) => ({
  searchResults: state.activeAccount.searchResults,
});

class SearchResults extends React.Component<ISearchResultsProps, {}> {
  constructor(props) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <div className='search-results'>
        {
          this.props.searchResults.length === 0
            ? <div>No items</div>
            : this.props.searchResults.map((result: ISearchResult) => {
              return <SearchResult searchResult={result} key={result.item.id} />;
            })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(withTheme()(withRouter(SearchResults)));
