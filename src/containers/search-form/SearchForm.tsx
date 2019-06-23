import { Grid } from '@material-ui/core';
import * as React from 'react';
import { ChangeEvent } from 'react-autosuggest';
import AutocompleteTextBox from '../../components/autocomplete-textbox/AutocompleteTextbox';
import { ISearchDropdownLabel } from '../../components/search-dropdown/ISearchDropdownLabel';
import SearchDropdown from '../../components/search-dropdown/SearchDropdown';
// readup https://material-ui.com/demos/autocomplete/
// goal is to make autocomplete and select look the same, no label inclded
const autoCompleteSuggestions: string[] = [
  'thing',
  'other thing',
  'stuff',
  'other stuff',
];

const options: ISearchDropdownLabel[] = autoCompleteSuggestions.map((suggestion) => ({
  label: suggestion,
  value: suggestion,
}));

class SearchForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      autoSuggestValue: '',
      searchDropdownValue: null,
   };
 }

  public render() {
    return (
      <div className='page-container'>
        <Grid container spacing={40}>
          <Grid item xs={12}>
            <AutocompleteTextBox
              suggestions={autoCompleteSuggestions}
              value={this.state.autoSuggestValue}
              placeholder='Search'
              onChange={this.onAutoSuggestionValueChange.bind(this)}
            />
          </Grid>
          <Grid item xs={6}>
            <SearchDropdown
              options={options}
              placeholder='Category'
              value={this.state.searchDropdownValue}
              onChange={this.onDropdownValueChange.bind(this)}
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <SearchDropdown
              options={options}
              placeholder='Base'
              value={this.state.searchDropdownValue}
              onChange={this.onDropdownValueChange.bind(this)}
            />
          </Grid>
        </Grid>
      </div>
    );
  }

  protected onDropdownValueChange(searchDropdownValue: ISearchDropdownLabel) {
    this.setState({ searchDropdownValue });
  }

  protected onAutoSuggestionValueChange(
    event: React.ChangeEvent<HTMLInputElement>,
    payload: ChangeEvent): void {
    const autoSuggestValue: string = payload.newValue;
    this.setState({ autoSuggestValue });
  }
}

export default SearchForm;
