import { Button, Grid, Input, withTheme } from '@material-ui/core';
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
import { IMod, IModFilterParams } from '../../services/filter/filter-modules/mod-filter/IModFilterParams';
import { totalModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes';
import ModFilter from '../../services/filter/filter-modules/mod-filter/ModFilter';
import NameFilter from '../../services/filter/filter-modules/name-filter/NameFilter';
import { accountActions } from '../../store/account/accountActions';
import { IAppState } from '../../store/app/appState';
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

const mods: ISearchDropdownLabel[] = [];
mods.push(...totalModRegexes.map((val: IMod) => ({
  label: `[Total] ${val.label}`,
  value: val,
})));

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
  private modFilter: ModFilter;

  constructor(props) {
    super(props);
    this.state = {
      itemBase: '',
      itemName: '',
      itemType: null,
      mods: [null],
      modsMax: [undefined],
      modsMin: [undefined],
      searchButtonEnabled: true,
    };
    this.nameFilter = new NameFilter();
    this.itemTypeFilter = new ItemTypeFilter();
    this.modFilter = new ModFilter();
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onModChange = this.onModChange.bind(this);
    this.onModMinChange = this.onModMinChange.bind(this);
    this.onModMaxChange = this.onModMaxChange.bind(this);
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
        {
          this.state.mods.map((mod: ISearchDropdownLabel, index: number) => {
            const key: string = `${new Date().getTime()}-${Math.random}`;
            return (
              <Grid container item xs={12} spacing={16} key={key}>
                <Grid item xs={8}>
                  <SearchDropdown
                    options={mods}
                    placeholder='Mod'
                    value={mod}
                    onChange={this.onModChange(index)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Input
                    id={`mods-min-${index}`}
                    placeholder='min'
                    value={this.state.modsMin[index]}
                    onChange={this.onModMinChange}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Input
                    id={`mods-max-${index}`}
                    placeholder='max'
                    value={this.state.modsMax[index]}
                    onChange={this.onModMaxChange}
                  />
                </Grid>
              </Grid>
            );
          })
        }
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

  private onModMinChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    const elementId: string = event.target.id;
    const index: number = parseInt(elementId.split('-')[2], 10);
    const stateModsMin: string[] = this.state.modsMin;
    const selectStart: number = event.target.selectionStart;
    const selectEnd: number = event.target.selectionEnd;
    stateModsMin[index] = event.target.value;
    this.setState({ modsMin: stateModsMin });
    setTimeout(() => {
      const inputEl: HTMLInputElement = document.getElementById(elementId) as HTMLInputElement;
      inputEl.focus();
      inputEl.setSelectionRange(selectStart, selectEnd);
    });
  }

  private onModMaxChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    const elementId: string = event.target.id;
    const index: number = parseInt(elementId.split('-')[2], 10);
    const stateModsMax: string[] = this.state.modsMax;
    const selectStart: number = event.target.selectionStart;
    const selectEnd: number = event.target.selectionEnd;
    stateModsMax[index] = event.target.value;
    this.setState({ modsMax: stateModsMax });
    setTimeout(() => {
      const inputEl: HTMLInputElement = document.getElementById(elementId) as HTMLInputElement;
      inputEl.focus();
      inputEl.setSelectionRange(selectStart, selectEnd);
    });
  }

  private onModChange(index: number): (mod: ISearchDropdownLabel) => void {
    return (mod: ISearchDropdownLabel): void => {
      const stateMods: ISearchDropdownLabel[] = this.state.mods;
      stateMods[index] = mod;
      this.setState({ mods: stateMods });
    };
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
    // filter mods
    const modFilterParams: IModFilterParams[] = [];
    for (let i = 0; i < this.state.mods.length; i++) {
      if (this.state.mods[i] != null) {
        const mod: IModFilterParams = { mod: this.state.mods[i].value };

        if (this.state.modsMin[i] != null) {
          const min: number = parseInt(this.state.modsMin[i], 10);
          if (!isNaN(min)) {
            mod.min = min;
          }
        }
        if (this.state.modsMax[i] != null) {
          const max: number = parseInt(this.state.modsMax[i], 10);
          if (!isNaN(max)) {
            mod.max = max;
          }
        }
        if (mod.min != null || mod.max != null) {
          modFilterParams.push(mod);
        }
      }
    }
    if (modFilterParams.length > 0) {
      results = this.modFilter.filter(hasFiltered ? results : items, modFilterParams);
      hasFiltered = true;
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
