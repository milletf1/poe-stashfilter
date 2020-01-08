import { Button, Grid, withTheme } from '@material-ui/core';
import { Item } from 'electron';
import * as React from 'react';
import { ChangeEvent } from 'react-autosuggest';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AutocompleteTextBox from '../../components/autocomplete-textbox/AutocompleteTextbox';
import { ISearchDropdownLabel } from '../../components/search-dropdown/ISearchDropdownLabel';
import SearchDropdown from '../../components/search-dropdown/SearchDropdown';
import { ILeague } from '../../models/ILeague';
import { IBaseItem } from '../../models/items/IBaseItem';
import { IItemBase } from '../../services/filter/filter-modules/item-type-filter/IItemBase';
import { ItemType } from '../../services/filter/filter-modules/item-type-filter/ItemType';
import ItemTypeFilter from '../../services/filter/filter-modules/item-type-filter/ItemTypeFilter';
import NameFilter from '../../services/filter/filter-modules/name-filter/NameFilter';
import { IAppState } from '../../store/app/appState';
// readup https://material-ui.com/demos/autocomplete/
// goal is to make autocomplete and select look the same, no label inclded
const itemNameSuggestions: string[] = [];
const itemBaseTypeSuggestions: string[] = [];

const itemCategories: ISearchDropdownLabel[] = Object.keys(ItemType).map((val: string) => ({
  label: ItemType[val],
  value: ItemType[val],
}));

const mapStateToProps = (state: IAppState, props: any) => ({
  leagueIndex: state.activeAccount.uiState.leagueIndex,
  leagues: state.activeAccount.leagues,
});

class SearchForm extends React.Component<any, any> {

  private nameFilter: NameFilter;
  private itemTypeFilter: ItemTypeFilter;

  constructor(props) {
    super(props);
    this.state = {
      itemBase: '',
      itemName: '',
      itemType: null,
      searchButtonEnabled: true,
    };
    this.nameFilter = new NameFilter();
    this.itemTypeFilter = new ItemTypeFilter();
    this.onSearchClick = this.onSearchClick.bind(this);
 }

  public render() {
    return (
      <div className='page-container'>
        <Grid container spacing={16}>
          {/* Search results history */}
          {/* <Grid item xs={3} md={2} style={{padding: '8px 0'}}>
            Search results here
          </Grid> */}
          {/* Main window */}
          {/* <Grid item xs={9} md={10}> */}
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <AutocompleteTextBox
                  suggestions={itemNameSuggestions}
                  value={this.state.itemName}
                  placeholder='Name'
                  onChange={this.onItemNameSuggestionValueChange.bind(this)}
                />
              </Grid>
              <Grid item xs={6}>
                <SearchDropdown
                  options={itemCategories}
                  placeholder='Category'
                  value={this.state.itemType}
                  onChange={this.onItemCategoryChange.bind(this)}
                />
              </Grid>
              <Grid item xs={6}>
                <AutocompleteTextBox
                  suggestions={itemBaseTypeSuggestions}
                  value={this.state.itemBase}
                  placeholder='Base'
                  onChange={this.onItemBaseNameSuggestionValueChange.bind(this)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={!this.state.searchButtonEnabled}
                  onClick={this.onSearchClick}>
                  Search
                </Button>
              </Grid>
              <Grid item xs={12}>
                Search results here
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

  private async onSearchClick(): Promise<void> {
    this.setState({ searchButtonEnabled: false });

    // console.log('search league ', this.props.leagues[this.props.leagueIndex].name);
    const league: ILeague = this.props.leagues[this.props.leagueIndex];
    const results: IBaseItem[] = [];

    for (const character of league.characters) {
      results.push(...this.filterItems(character.items));
    }
    for (const stashTab of league.stashTabs) {
      results.push(...this.filterItems(stashTab.items));
    }
    console.log('found items', results);
    this.setState({ searchButtonEnabled: true });
  }

  private filterItems(items: IBaseItem[]): IBaseItem[] {
    let results: IBaseItem[] = [];
    let hasFiltered: boolean = false;
    const itemName: string = this.state.itemName.trim();
    const baseName: string = this.state.itemBase.trim();
    if (!!itemName) {
      // filter item name
      results = this.nameFilter.filter(items, itemName);
      hasFiltered = true;
      if (results.length === 0) { return results; }
    }
    if (this.state.itemType !== null) {
      const itemType: ItemType = this.state.itemType.value as ItemType;
      if (!!baseName) {
        // filter item base
        const itemBase: IItemBase = { type: itemType, base: baseName };
        results = this.itemTypeFilter.filter(hasFiltered ? results : items, [ itemBase ]);
      } else {
        // filter item type
        results = this.itemTypeFilter.filter(hasFiltered ? results : items, [ itemType ]);
      }
      hasFiltered = true;
      if (results.length === 0) { return results; }
    }
    return results;
  }

  private onItemCategoryChange(itemType: ISearchDropdownLabel) {
    this.setState({ itemType });
  }

  private onItemNameSuggestionValueChange(
    event: React.ChangeEvent<HTMLInputElement>,
    payload: ChangeEvent): void {
    const itemName: string = payload.newValue;
    this.setState({ itemName });
  }

  private onItemBaseNameSuggestionValueChange(
    event: React.ChangeEvent<HTMLInputElement>,
    payload: ChangeEvent): void {
    const itemBase: string = payload.newValue;
    this.setState({ itemBase });
  }
}

// export default SearchForm;
export default connect(mapStateToProps)(withTheme()(withRouter(SearchForm)));
