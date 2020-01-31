import { Button, FormLabel, Grid, Input, Typography, withStyles, withTheme } from '@material-ui/core';
import * as React from 'react';
import { ChangeEvent } from 'react-autosuggest';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import AutocompleteTextBox from '../../components/autocomplete-textbox/AutocompleteTextbox';
import { ISearchDropdownLabel } from '../../components/search-dropdown/ISearchDropdownLabel';
import SearchDropdown from '../../components/search-dropdown/SearchDropdown';
import { ILeague } from '../../models/ILeague';
import { IBaseItem } from '../../models/items/IBaseItem';
import { ISearchResult } from '../../models/search/ISearchResult';
import { IStashTabColour } from '../../models/stash-tabs/IStashTabMetadata';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IItemBase } from '../../services/filter/filter-modules/item-type-filter/IItemBase';
import { ItemType } from '../../services/filter/filter-modules/item-type-filter/ItemType';
import ItemTypeFilter from '../../services/filter/filter-modules/item-type-filter/ItemTypeFilter';
import { IMod, IModFilterParams } from '../../services/filter/filter-modules/mod-filter/IModFilterParams';
import { abyssModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/abyss-mods';
import { bestiaryModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/bestiary-mods';
import { craftedModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/crafted-mods';
import { enchantmentModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/enchantment-mods';
import { explicitModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/explicit-mods';
import { fracturedModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/fractured-mods';
import { implicitModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/implicit-mods';
import { leaguestoneModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/leaguestone-mods';
import { mapModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/map-mods';
import { organModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/organ-mods';
import { propheciesModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/prophecy-mods';
import { pseudoModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/pseudo-mods';
import { totalModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/total-mods';
import { uniqueModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/unique-mods';
import ModFilter from '../../services/filter/filter-modules/mod-filter/ModFilter';
import NameFilter from '../../services/filter/filter-modules/name-filter/NameFilter';
import { accountActions } from '../../store/account/accountActions';
import { IAppState } from '../../store/app/appState';
import { ISearchFormProps } from './ISearchFormProps';
import { ISearchFormState } from './ISearchFormState';
import { amuletBases } from './item-bases/amulet-bases';
import { beltBases } from './item-bases/belt-bases';
import { bodyArmourBases } from './item-bases/body-armour-bases';
import { bootBases } from './item-bases/boot-bases';
import { bowBases } from './item-bases/bow-bases';
import { breachstoneBases } from './item-bases/breachstone-bases';
import { cardBases } from './item-bases/card-bases';
import { clawBases } from './item-bases/claw-bases';
import { currencyBases } from './item-bases/currency-bases';
import { daggerBases } from './item-bases/dagger-bases';
import { essenceBases } from './item-bases/essence-bases';
import { flaskBases } from './item-bases/flask-bases';
import { fossilBases } from './item-bases/fossil-bases';
import { gemBases } from './item-bases/gem-bases';
import { gloveBases } from './item-bases/glove-bases';
import { helmetBases } from './item-bases/helmet-bases';
import { incubatorBases } from './item-bases/incubator-bases';
import { jewelBases } from './item-bases/jewel-bases';
import { leaguestoneBases } from './item-bases/leaguestone-bases';
import { mapBases } from './item-bases/map-bases';
import { mapFragmentBases } from './item-bases/map-fragment-bases';
import { netBases } from './item-bases/net-bases';
import { oilBases } from './item-bases/oil-bases';
import { oneHandAxeBases } from './item-bases/one-hand-axe-bases';
import { oneHandMaceBases } from './item-bases/one-hand-mace-bases';
import { oneHandSwordBases } from './item-bases/one-hand-sword-bases';
import { organBases } from './item-bases/organ-bases';
import { prophecyBases } from './item-bases/prophecy-bases';
import { quiverBases } from './item-bases/quiver-bases';
import { resonatorBases } from './item-bases/resonator-bases';
import { ringBases } from './item-bases/ring-bases';
import { scarabBases } from './item-bases/scarab-bases';
import { sceptreBases } from './item-bases/sceptre-bases';
import { shieldBases } from './item-bases/shield-bases';
import { splinterBases } from './item-bases/splinter-bases';
import { staffBases } from './item-bases/staff-bases';
import { twoHandAxeBases } from './item-bases/two-hand-axe-bases';
import { twoHandMaceBases } from './item-bases/two-hand-mace-bases';
import { twoHandSwordBases } from './item-bases/two-hand-sword-bases';
import { wandBases } from './item-bases/wand-bases';

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
      itemBase: null,
      itemName: '',
      itemNameSuggestions: [],
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
    this.onAddModClick = this.onAddModClick.bind(this);
    this.onModChange = this.onModChange.bind(this);
    this.onModMinChange = this.onModMinChange.bind(this);
    this.onModMaxChange = this.onModMaxChange.bind(this);
    this.removeItemModElement = this.removeItemModElement.bind(this);
    this.onItemNameSuggestionValueChange = this.onItemNameSuggestionValueChange.bind(this);
    this.onItemCategoryChange = this.onItemCategoryChange.bind(this);
    this.onItemBaseChange = this.onItemBaseChange.bind(this);
  }

  private get mods(): ISearchDropdownLabel[] {
    return [
      ...totalModRegexes.map((val: IMod) => ({ label: `[Total] ${val.label}`, value: val })),
      ...pseudoModRegexes.map((val: IMod) => ({ label: `[Pseudo] ${val.label}`, value: val })),
      ...explicitModRegexes.map((val: IMod) => ({ label: `[Explicit] ${val.label}`, value: val })),
      ...uniqueModRegexes.map((val: IMod) => ({ label: `[Unique] ${val.label}`, value: val })),
      ...mapModRegexes.map((val: IMod) => ({ label: `[Map] ${val.label}`, value: val })),
      ...abyssModRegexes.map((val: IMod) => ({ label: `[Abyss] ${val.label}`, value: val })),
      ...bestiaryModRegexes.map((val: IMod) => ({ label: `[Beastiary] ${val.label}`, value: val })),
      ...craftedModRegexes.map((val: IMod) => ({ label: `[Craft] ${val.label}`, value: val })),
      ...enchantmentModRegexes.map((val: IMod) => ({
        label: `[Enchantment] ${val.label}`,
        value: val,
      })),
      ...fracturedModRegexes.map((val: IMod) => ({
        label: `[Fractured] ${val.label}`,
        value: val,
      })),
      ...implicitModRegexes.map((val: IMod) => ({ label: `[Implicit] ${val.label}`, value: val })),
      ...leaguestoneModRegexes.map((val: IMod) => ({
        label: `[Leaguestone] ${val.label}`,
        value: val,
      })),
      ...organModRegexes.map((val: IMod) => ({ label: `[Organ] ${val.label}`, value: val })),
      ...propheciesModRegexes.map((val: IMod) => ({
        label: `[Prophecy] ${val.label}`,
        value: val,
      })),
    ];
  }

  private get itemCategories(): ISearchDropdownLabel[] {
    return Object.keys(ItemType).map((val: string) => ({
      label: ItemType[val],
      value: ItemType[val],
    }));
  }

  private get itemBases(): ISearchDropdownLabel[] {
    if (this.state.itemType === null) { return []; }

    switch (this.state.itemType.value) {
      case ItemType.ONE_HAND_WEAPON:
        return this.convertIItemBasesToISearchDropdownLabel([
          ...oneHandAxeBases,
          ...oneHandMaceBases,
          ...oneHandSwordBases,
          ...sceptreBases,
          ...clawBases,
          ...daggerBases,
          ...wandBases,
        ].sort((a: IItemBase, b: IItemBase) => {
          const aBase: string = a.base.toUpperCase();
          const bBase: string = b.base.toUpperCase();
          if (aBase < bBase) { return -1; }
          if (aBase > bBase) { return 1; }
          return 0;
        }));
      case ItemType.TWO_HAND_WEAPON:
        return this.convertIItemBasesToISearchDropdownLabel([
          ...bowBases,
          ...staffBases,
          ...twoHandAxeBases,
          ...twoHandMaceBases,
          ...twoHandSwordBases,
        ].sort((a: IItemBase, b: IItemBase) => {
          const aBase: string = a.base.toUpperCase();
          const bBase: string = b.base.toUpperCase();
          if (aBase < bBase) { return -1; }
          if (aBase > bBase) { return 1; }
          return 0;
        }));
      case ItemType.BOW:
        return this.convertIItemBasesToISearchDropdownLabel(bowBases);
      case ItemType.CLAW:
        return this.convertIItemBasesToISearchDropdownLabel(clawBases);
      case ItemType.DAGGER:
        return this.convertIItemBasesToISearchDropdownLabel(daggerBases);
      case ItemType.ONE_HAND_AXE:
        return this.convertIItemBasesToISearchDropdownLabel(oneHandAxeBases);
      case ItemType.ONE_HAND_MACE:
        return this.convertIItemBasesToISearchDropdownLabel(oneHandMaceBases);
      case ItemType.ONE_HAND_SWORD:
        return this.convertIItemBasesToISearchDropdownLabel(oneHandSwordBases);
      case ItemType.SCEPTRE:
        return this.convertIItemBasesToISearchDropdownLabel(sceptreBases);
      case ItemType.STAFF:
        return this.convertIItemBasesToISearchDropdownLabel(staffBases);
      case ItemType.TWO_HAND_AXE:
        return this.convertIItemBasesToISearchDropdownLabel(twoHandAxeBases);
      case ItemType.TWO_HAND_MACE:
        return this.convertIItemBasesToISearchDropdownLabel(twoHandMaceBases);
      case ItemType.TWO_HAND_SWORD:
        return this.convertIItemBasesToISearchDropdownLabel(twoHandSwordBases);
      case ItemType.WAND:
        return this.convertIItemBasesToISearchDropdownLabel(wandBases);
      case ItemType.BODY_ARMOUR:
        return this.convertIItemBasesToISearchDropdownLabel(bodyArmourBases);
      case ItemType.BOOTS:
        return this.convertIItemBasesToISearchDropdownLabel(bootBases);
      case ItemType.GLOVES:
        return this.convertIItemBasesToISearchDropdownLabel(gloveBases);
      case ItemType.HELMET:
        return this.convertIItemBasesToISearchDropdownLabel(helmetBases);
      case ItemType.SHIELD:
        return this.convertIItemBasesToISearchDropdownLabel(shieldBases);
      case ItemType.AMULET:
        return this.convertIItemBasesToISearchDropdownLabel(amuletBases);
      case ItemType.BELT:
        return this.convertIItemBasesToISearchDropdownLabel(beltBases);
      case ItemType.CURRENCY:
        return this.convertIItemBasesToISearchDropdownLabel(currencyBases);
      case ItemType.CARD:
        return this.convertIItemBasesToISearchDropdownLabel(cardBases);
      case ItemType.ESSENCE:
        return this.convertIItemBasesToISearchDropdownLabel(essenceBases);
      case ItemType.FLASK:
        return this.convertIItemBasesToISearchDropdownLabel(flaskBases);
      case ItemType.GEM:
        return this.convertIItemBasesToISearchDropdownLabel(gemBases);
      case ItemType.INCUBATOR:
        return this.convertIItemBasesToISearchDropdownLabel(incubatorBases);
      case ItemType.JEWEL:
        return this.convertIItemBasesToISearchDropdownLabel(jewelBases);
      case ItemType.LEAGUESTONE:
        return this.convertIItemBasesToISearchDropdownLabel(leaguestoneBases);
      case ItemType.MAP:
        return this.convertIItemBasesToISearchDropdownLabel(mapBases);
      case ItemType.NET:
        return this.convertIItemBasesToISearchDropdownLabel(netBases);
      case ItemType.PROPHECY:
        return this.convertIItemBasesToISearchDropdownLabel(prophecyBases);
      case ItemType.QUIVER:
        return this.convertIItemBasesToISearchDropdownLabel(quiverBases);
      case ItemType.RING:
        return this.convertIItemBasesToISearchDropdownLabel(ringBases);
      case ItemType.SCARAB:
        return this.convertIItemBasesToISearchDropdownLabel(scarabBases);
      case ItemType.MAP_FRAGMENT:
        return this.convertIItemBasesToISearchDropdownLabel(mapFragmentBases);
      case ItemType.SPLINTER:
        return this.convertIItemBasesToISearchDropdownLabel(splinterBases);
      case ItemType.RESONATOR:
        return this.convertIItemBasesToISearchDropdownLabel(resonatorBases);
      case ItemType.FOSSIL:
        return this.convertIItemBasesToISearchDropdownLabel(fossilBases);
      case ItemType.BREACHSTONE:
        return this.convertIItemBasesToISearchDropdownLabel(breachstoneBases);
      case ItemType.OIL:
        return this.convertIItemBasesToISearchDropdownLabel(oilBases);
      case ItemType.ORGAN:
        return this.convertIItemBasesToISearchDropdownLabel(organBases);
      case ItemType.BEAST:
      case ItemType.FISHING_ROD:
      default:
        return [];
    }
  }

  public render(): JSX.Element {
    return (
      <Grid container spacing={16}>
        <Grid item xs={5}>
          <AutocompleteTextBox
            suggestions={this.state.itemNameSuggestions}
            value={this.state.itemName}
            placeholder='Name'
            onChange={this.onItemNameSuggestionValueChange} />
        </Grid>
        <Grid item xs={2}>
          <SearchDropdown
            options={this.itemCategories}
            placeholder='Category'
            value={this.state.itemType}
            onChange={this.onItemCategoryChange} />
        </Grid>
        <Grid item xs={2}>
          <SearchDropdown
            options={this.itemBases}
            placeholder='Base'
            value={this.state.itemBase}
            onChange={this.onItemBaseChange} />
        </Grid>
        <Grid container item xs={3} justify='flex-end'>
          <Button
            variant='contained'
            color='primary'
            disabled={!this.state.searchButtonEnabled}
            onClick={this.onSearchClick}
            style={{ marginRight: '16px' }}>
            Search
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={this.onAddModClick}>
            Add mod
          </Button>
        </Grid>
        {
          this.state.mods.length > 0
            ? this.state.mods.map((mod: ISearchDropdownLabel, index: number) => {
              const key: string = `${index}-${new Date().getTime()}`;

              return (
                <Grid
                  container
                  item xs={12}
                  spacing={16}
                  key={key}
                  style={{ boxSizing: 'content-box' }}>
                  <Grid item xs={7}>
                    <SearchDropdown
                      options={this.mods}
                      placeholder='Mod'
                      value={mod}
                      onChange={this.onModChange(index)} />
                  </Grid>
                  <Grid container item xs={2} spacing={0}>
                    <Grid item xs={6}>
                      <Input
                        id={`mods-min-${index}`}
                        placeholder='min'
                        value={this.state.modsMin[index]}
                        onChange={this.onModMinChange}
                        style={{ marginRight: '8px' }} />
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        id={`mods-max-${index}`}
                        placeholder='max'
                        value={this.state.modsMax[index]}
                        onChange={this.onModMaxChange}
                        style={{ marginLeft: '8px' }} />
                    </Grid>
                  </Grid>
                  <Grid container item xs={3} justify='flex-end'>
                    <Button
                      id={`mods-delete-${index}`}
                      color='secondary'
                      onClick={this.removeItemModElement}>
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              );
            })
            : <Grid item xs={12}></Grid>
        }
        <Grid container item xs={6} spacing={16} >
          <Grid item xs={12} style={{ paddingBottom: 0 }}>
            <Typography variant='h6'>DPS</Typography>
          </Grid>
          <Grid container item xs={3} alignItems='center' style={{ paddingTop: 0 }}>
            <Typography variant='body2'>Physical DPS</Typography>
          </Grid>
          <Grid container item xs={9} style={{ paddingTop: 0 }} spacing={0}>
            <Grid item xs={6}>
              <Input placeholder='min' style={{ marginRight: '8px' }} />
            </Grid>
            <Grid item xs={6}>
              <Input placeholder='max' style={{ marginLeft: '8px' }} />
            </Grid>
          </Grid>
          <Grid container item xs={3} alignItems='center'>
            <Typography variant='body2'>Elemental DPS</Typography>
          </Grid>
          <Grid container item xs={9} spacing={0}>
            <Grid item xs={6}>
              <Input placeholder='min' style={{ marginRight: '8px' }} />
            </Grid>
            <Grid item xs={6}>
              <Input placeholder='max' style={{ marginLeft: '8px' }} />
            </Grid>
          </Grid>
          <Grid container item xs={3} alignItems='center'>
            <Typography variant='body2'>Total DPS</Typography>
          </Grid>
          <Grid container item xs={9} spacing={0}>
            <Grid item xs={6}>
              <Input placeholder='min' style={{ marginRight: '8px' }} />
            </Grid>
            <Grid item xs={6}>
              <Input placeholder='max' style={{ marginLeft: '8px' }} />
            </Grid>
          </Grid>
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

  private convertIItemBasesToISearchDropdownLabel(itemBases: IItemBase[]): ISearchDropdownLabel[] {
    return itemBases.map((val: IItemBase) => ({ label: val.base, value: val }));
  }

  private removeItemModElement(event: React.MouseEvent<HTMLElement>): void {
    const index: number = parseInt(event.currentTarget.id.split('-')[2], 10);
    if (!isNaN(index)) {
      const stateModsMin: string[] = this.state.modsMin;
      const stateModsMax: string[] = this.state.modsMax;
      const stateMods: ISearchDropdownLabel[] = this.state.mods;
      stateModsMin.splice(index, 1);
      stateModsMax.splice(index, 1);
      stateMods.splice(index, 1);
      this.setState({
        mods: stateMods,
        modsMax: stateModsMax,
        modsMin: stateModsMin,
      });
    }
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

  private onAddModClick(): void {
    const stateMods: ISearchDropdownLabel[] = this.state.mods;
    const stateModsMin: string[] = this.state.modsMin;
    const stateModsMax: string[] = this.state.modsMax;

    stateMods.push(null);
    stateModsMin.push(undefined);
    stateModsMax.push(undefined);

    this.setState({
      mods: stateMods,
      modsMax: stateModsMax,
      modsMin: stateModsMin,
    });
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
    const baseName: string = this.state.itemBase !== null
      ? this.state.itemBase.value.base.trim()
      : '';
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
        results = this.itemTypeFilter.filter(hasFiltered ? results : items, [itemBase]);
      } else {
        // filter item type
        results = this.itemTypeFilter.filter(hasFiltered ? results : items, [itemType]);
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
        if (mod.min != null || mod.max != null || mod.mod.label.indexOf('#') === -1) {
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
    if (this.state.itemType !== null
      && itemType !== null
      && this.state.itemType.value === itemType.value) { return; }
    this.setState({ itemBase: null, itemType });
  }

  private onItemBaseChange(itemBase: ISearchDropdownLabel | null) {
    this.setState({ itemBase });
  }

  private onItemNameSuggestionValueChange(
    event: React.ChangeEvent<HTMLInputElement>,
    payload: ChangeEvent): void {
    const itemName: string = payload.newValue;
    this.setState({ itemName });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withRouter(SearchForm)));
