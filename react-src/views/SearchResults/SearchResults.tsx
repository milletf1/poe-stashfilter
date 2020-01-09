import { withTheme } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchResult from '../../components/search-result/SearchResult';

import { ISearchResult } from '../../models/search/ISearchResult';
import { IAppState } from '../../store/app/appState';
import './search-results.scss';

const mapStateToProps = (state: IAppState, props: any) => ({
  searchResults: state.activeAccount.searchResults,
});

class SearchResults extends React.Component<any, any> {
  public render() {
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
