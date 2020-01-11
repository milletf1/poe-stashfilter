import { Button, Grid, withTheme } from '@material-ui/core';
import * as React from 'react';
import { ChangeEvent } from 'react-autosuggest';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import AutocompleteTextBox from '../../components/autocomplete-textbox/AutocompleteTextbox';
import { ISearchDropdownLabel } from '../../components/search-dropdown/ISearchDropdownLabel';
import SearchDropdown from '../../components/search-dropdown/SearchDropdown';
import { ILeague } from '../../models/ILeague';
import { IBaseItem, isIBaseItem } from '../../models/items/IBaseItem';
import { ISearchResult } from '../../models/search/ISearchResult';
import { IStashTabColour } from '../../models/stash-tabs/IStashTabMetadata';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IItemBase } from '../../services/filter/filter-modules/item-type-filter/IItemBase';
import { ItemType } from '../../services/filter/filter-modules/item-type-filter/ItemType';
import ItemTypeFilter from '../../services/filter/filter-modules/item-type-filter/ItemTypeFilter';
import NameFilter from '../../services/filter/filter-modules/name-filter/NameFilter';
import { accountActions } from '../../store/account/accountActions';
import { IAppState } from '../../store/app/appState';
import SearchResults from '../search-results/SearchResults';
import { ISearchFormProps } from './ISearchFormProps';
import { ISearchFormState } from './ISearchFormState';

// readup https://material-ui.com/demos/autocomplete/
// goal is to make autocomplete and select look the same, no label inclded
const itemNameSuggestions: string[] = [];
const itemBaseTypeSuggestions: string[] = [];

const itemCategories: ISearchDropdownLabel[] = Object.keys(ItemType).map((val: string) => ({
  label: ItemType[val],
  value: ItemType[val],
}));

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setSearchResults: accountActions.setSearchResults,
}, dispatch);

const mapStateToProps = (state: IAppState, props: any) => ({
  leagueIndex: state.activeAccount.uiState.leagueIndex,
  leagues: state.activeAccount.leagues,
  searchResults: state.activeAccount.searchResults,
});

class SearchForm extends React.Component<ISearchFormProps, ISearchFormState> {

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

  public render(): JSX.Element {
    return (
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
      </Grid>
    );
  }

  private async onSearchClick(): Promise<void> {
    this.setState({ searchButtonEnabled: false });
    const league: ILeague = this.props.leagues[this.props.leagueIndex];
    const searchResults: ISearchResult[] = [];

    for (const character of league.characters) {
      const stashName: string = character.character.name;
      const characterItems: IBaseItem[] = this.filterItems(character.items);
      searchResults.push(...characterItems.map((item: IBaseItem) => ({
        containerCategory: BrowseItemCategory.CHARACTER,
        item,
        stashName,
      })));
    }
    for (const stashTab of league.stashTabs) {
      const stashName: string = stashTab.details.n;
      const colour: IStashTabColour = stashTab.details.colour || null;
      const stashItems: IBaseItem[] = this.filterItems(stashTab.items);
      searchResults.push(...stashItems.map((item: IBaseItem) => ({
        colour,
        containerCategory: BrowseItemCategory.STASH_TAB,
        item,
        stashName,
      })));
    }

    this.setState({ searchButtonEnabled: true });
    this.props.setSearchResults(searchResults);
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withRouter(SearchForm)));
