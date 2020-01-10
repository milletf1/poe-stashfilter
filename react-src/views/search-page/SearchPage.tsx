import * as React from 'react';
import SearchForm from '../search-form/SearchForm';
import SearchResults from '../search-results/SearchResults';
import './search-page.scss';

class SearchPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className='view-container search-page'>
        <div className='search-view-container'>
          <SearchForm />
        </div>
        <div className='filtered-item-view-container'>
          <SearchResults />
        </div>
      </div>
    );
  }
}

export default SearchPage;
