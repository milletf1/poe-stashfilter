import { Button, Grid, Input, Typography, withTheme } from '@material-ui/core';
import * as React from 'react';
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
import { DpsType, IDpsFilterParams } from '../../services/filter/filter-modules/dps-filter/IDpsFilterParams';
import { IItemBase } from '../../services/filter/filter-modules/item-type-filter/IItemBase';
import { ItemType } from '../../services/filter/filter-modules/item-type-filter/ItemType';
import { IModFilterParams } from '../../services/filter/filter-modules/mod-filter/IModFilterParams';
import { ISocketFilterParams } from '../../services/filter/filter-modules/socket-filter/ISocketFilterParams';
import { accountActions } from '../../store/account/accountActions';
import { IAppState } from '../../store/app/appState';
import DpsSearch from '../dps-search/DpsSearch';
import ModSearch from '../mod-search/ModSearch';
import SocketSearch from '../socket-search/SocketSearch';
import ISearchFormProps from './ISearchFormProps';
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
import { itemNames } from './item-names';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setAbyssSockets: accountActions.setAbyssSockets,
  setBlueSockets: accountActions.setBlueSockets,
  setElementalDpsMax: accountActions.setElementalDpsMax,
  setElementalDpsMin: accountActions.setElementalDpsMin,
  setGreenSockets: accountActions.setGreenSockets,
  setItemBase: accountActions.setItemBase,
  setItemName: accountActions.setItemName,
  setItemNameSuggestions: accountActions.setItemNameSuggestions,
  setItemType: accountActions.setItemType,
  setMods: accountActions.setMods,
  setModsMax: accountActions.setModsMax,
  setModsMin: accountActions.setModsMin,
  setPhysicalDpsMax: accountActions.setPhysicalDpsMax,
  setPhysicalDpsMin: accountActions.setPhysicalDpsMin,
  setRedSockets: accountActions.setRedSockets,
  setSearchButtonEnabled: accountActions.setSearchButtonEnabled,
  setSearchResults: accountActions.setSearchResults,
  setSocketsMax: accountActions.setSocketsMax,
  setSocketsMin: accountActions.setSocketsMin,
  setTotalDpsMax: accountActions.setTotalDpsMax,
  setTotalDpsMin: accountActions.setTotalDpsMin,
  setWhiteSockets: accountActions.setWhiteSockets,
}, dispatch);

const mapStateToProps = (state: IAppState, props: any) => ({
  ...props,
  abyssSockets: state.activeAccount.uiState.searchPageState.searchFormState.abyssSockets,
  blueSockets: state.activeAccount.uiState.searchPageState.searchFormState.blueSockets,
  elementalDpsMax: state.activeAccount.uiState.searchPageState.searchFormState.elementalDpsMax,
  elementalDpsMin: state.activeAccount.uiState.searchPageState.searchFormState.elementalDpsMin,
  greenSockets: state.activeAccount.uiState.searchPageState.searchFormState.greenSockets,
  itemBase: state.activeAccount.uiState.searchPageState.searchFormState.itemBase,
  itemName: state.activeAccount.uiState.searchPageState.searchFormState.itemName,
  itemNameSuggestions:
    state.activeAccount.uiState.searchPageState.searchFormState.itemNameSuggestions,
  itemType: state.activeAccount.uiState.searchPageState.searchFormState.itemType,
  leagueIndex: state.activeAccount.uiState.leagueIndex,
  leagues: state.activeAccount.leagues,
  mods: state.activeAccount.uiState.searchPageState.searchFormState.mods,
  modsMax: state.activeAccount.uiState.searchPageState.searchFormState.modsMax,
  modsMin: state.activeAccount.uiState.searchPageState.searchFormState.modsMin,
  physicalDpsMax: state.activeAccount.uiState.searchPageState.searchFormState.physicalDpsMax,
  physicalDpsMin: state.activeAccount.uiState.searchPageState.searchFormState.physicalDpsMin,
  redSockets: state.activeAccount.uiState.searchPageState.searchFormState.redSockets,
  searchButtonEnabled:
    state.activeAccount.uiState.searchPageState.searchFormState.searchButtonEnabled,
  searchResults: state.activeAccount.uiState.searchPageState.searchResults,
  socketsMax: state.activeAccount.uiState.searchPageState.searchFormState.socketsMax,
  socketsMin: state.activeAccount.uiState.searchPageState.searchFormState.socketsMin,
  totalDpsMax: state.activeAccount.uiState.searchPageState.searchFormState.totalDpsMax,
  totalDpsMin: state.activeAccount.uiState.searchPageState.searchFormState.totalDpsMin,
  whiteSockets: state.activeAccount.uiState.searchPageState.searchFormState.whiteSockets,
});

class SearchForm extends React.Component<ISearchFormProps, {}> {

  constructor(props) {
    super(props);
    this.props.setSearchResults([]);

    // search form event listeners
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onAddModClick = this.onAddModClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onItemNameSuggestionValueChange = this.onItemNameSuggestionValueChange.bind(this);
    this.onItemCategoryChange = this.onItemCategoryChange.bind(this);
    this.onItemBaseChange = this.onItemBaseChange.bind(this);
    // dps filter event listeners
    this.onTotalDpsMinChange = this.onTotalDpsMinChange.bind(this);
    this.onTotalDpsMaxChange = this.onTotalDpsMaxChange.bind(this);
    this.onPhysicalDpsMinChange = this.onPhysicalDpsMinChange.bind(this);
    this.onPhysicalDpsMaxChange = this.onPhysicalDpsMaxChange.bind(this);
    this.onElementalDpsMinChange = this.onElementalDpsMinChange.bind(this);
    this.onElementalDpsMaxChange = this.onElementalDpsMaxChange.bind(this);
    // socket filter event listeners
    this.onSocketsMinChange = this.onSocketsMinChange.bind(this);
    this.onSocketsMaxChange = this.onSocketsMaxChange.bind(this);
    this.onRedSocketChange = this.onRedSocketChange.bind(this);
    this.onBlueSocketChange = this.onBlueSocketChange.bind(this);
    this.onGreenSocketChange = this.onGreenSocketChange.bind(this);
    this.onWhiteSocketChange = this.onWhiteSocketChange.bind(this);
    this.onAbyssSocketChange = this.onAbyssSocketChange.bind(this);
    // mod search event listeners
    this.updateMods = this.updateMods.bind(this);
    this.updateModsMin = this.updateModsMin.bind(this);
    this.updateModsMax = this.updateModsMax.bind(this);
    this.removeItemMod = this.removeItemMod.bind(this);
  }

  private get itemCategories(): ISearchDropdownLabel[] {
    return Object.keys(ItemType).map((val: string) => ({
      label: ItemType[val],
      value: ItemType[val],
    }));
  }

  private get itemBases(): ISearchDropdownLabel[] {
    if (this.props.itemType === null) { return []; }

    switch (this.props.itemType.value) {
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
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <AutocompleteTextBox
            suggestions={this.props.itemNameSuggestions}
            placeholder='Name'
            onChange={this.onItemNameSuggestionValueChange} />
        </Grid>
        <Grid item xs={2}>
          <SearchDropdown
            options={this.itemCategories}
            placeholder='Category'
            value={this.props.itemType}
            onChange={this.onItemCategoryChange} />
        </Grid>
        <Grid item xs={2}>
          <SearchDropdown
            options={this.itemBases}
            placeholder='Base'
            value={this.props.itemBase}
            onChange={this.onItemBaseChange} />
        </Grid>
        <Grid container item xs={3} justify='space-between'>
          <Button
            size='small'
            variant='contained'
            color='primary'
            disabled={!this.props.searchButtonEnabled}
            onClick={this.onSearchClick}>
            Search
          </Button>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            onClick={this.onAddModClick}>
            Mod
          </Button>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            onClick={this.onClearClick}>
            Clear
            </Button>
        </Grid>
        <ModSearch
          mods={this.props.mods}
          modsMin={this.props.modsMin}
          modsMax={this.props.modsMax}
          updateMods={this.updateMods}
          updateModsMin={this.updateModsMin}
          updateModsMax={this.updateModsMax}
          removeItemMod={this.removeItemMod} />
        <DpsSearch
          physicalDpsMin={this.props.physicalDpsMin}
          physicalDpsMax={this.props.physicalDpsMax}
          elementalDpsMin={this.props.elementalDpsMin}
          elementalDpsMax={this.props.elementalDpsMax}
          totalDpsMin={this.props.totalDpsMin}
          totalDpsMax={this.props.totalDpsMax}
          onPhysicalDpsMinChange={this.onPhysicalDpsMinChange}
          onPhysicalDpsMaxChange={this.onPhysicalDpsMaxChange}
          onElementalDpsMinChange={this.onElementalDpsMinChange}
          onElementalDpsMaxChange={this.onElementalDpsMaxChange}
          onTotalDpsMinChange={this.onTotalDpsMinChange}
          onTotalDpsMaxChange={this.onTotalDpsMaxChange} />
        <Grid container item xs={6} spacing={2} alignContent='flex-start'>
          <Grid item xs={12} style={{ paddingBottom: 0 }}>
            <Typography variant='h6'>Sockets</Typography>
          </Grid>
          <SocketSearch
            socketsMin={this.props.socketsMin}
            onSocketsMinChange={this.onSocketsMinChange}
            socketsMax={this.props.socketsMax}
            onSocketsMaxChange={this.onSocketsMaxChange}
            redSockets={this.props.redSockets}
            onRedSocketChange={this.onRedSocketChange}
            greenSockets={this.props.greenSockets}
            onGreenSocketChange={this.onGreenSocketChange}
            blueSockets={this.props.blueSockets}
            onBlueSocketChange={this.onBlueSocketChange}
            whiteSockets={this.props.whiteSockets}
            onWhiteSocketChange={this.onWhiteSocketChange}
            abyssSockets={this.props.abyssSockets}
            onAbyssSocketChange={this.onAbyssSocketChange} />
        </Grid>
      </Grid>
    );
  }

  private convertIItemBasesToISearchDropdownLabel(itemBases: IItemBase[]): ISearchDropdownLabel[] {
    return itemBases.map((val: IItemBase) => ({ label: val.base, value: val }));
  }

  private onTotalDpsMinChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const totalDpsMin: string = event.target.value;
    this.props.setTotalDpsMin(totalDpsMin);
  }

  private onTotalDpsMaxChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const totalDpsMax: string = event.target.value;
    this.props.setTotalDpsMax(totalDpsMax);
  }

  private onPhysicalDpsMinChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const physicalDpsMin: string = event.target.value;
    this.props.setPhysicalDpsMin(physicalDpsMin);
  }

  private onPhysicalDpsMaxChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const physicalDpsMax: string = event.target.value;
    this.props.setPhysicalDpsMax(physicalDpsMax);
  }

  private onElementalDpsMinChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const elementalDpsMin: string = event.target.value;
    this.props.setElementalDpsMin(elementalDpsMin);
  }

  private onElementalDpsMaxChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const elementalDpsMax: string = event.target.value;
    this.props.setElementalDpsMax(elementalDpsMax);
  }

  private onSocketsMinChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const socketsMin: string = event.target.value;
    this.props.setSocketsMin(socketsMin);
  }

  private onSocketsMaxChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const socketsMax: string = event.target.value;
    this.props.setSocketsMax(socketsMax);
  }

  private onRedSocketChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const redSockets: string = event.target.value;
    this.props.setRedSockets(redSockets);
  }

  private onBlueSocketChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const blueSockets: string = event.target.value;
    this.props.setBlueSockets(blueSockets);
  }

  private onGreenSocketChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const greenSockets: string = event.target.value;
    this.props.setGreenSockets(greenSockets);
  }

  private onWhiteSocketChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const whiteSockets: string = event.target.value;
    this.props.setWhiteSockets(whiteSockets);
  }

  private onAbyssSocketChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const abyssSockets: string = event.target.value;
    this.props.setAbyssSockets(abyssSockets);
  }

  private onAddModClick(): void {
    const mods: ISearchDropdownLabel[] = [...this.props.mods];
    const modsMin: string[] = [...this.props.modsMin];
    const modsMax: string[] = [...this.props.modsMax];

    mods.push(null);
    modsMin.push(undefined);
    modsMax.push(undefined);

    this.props.setMods(mods);
    this.props.setModsMin(modsMin);
    this.props.setModsMax(modsMax);
  }

  private onClearClick(): void {
    this.props.setAbyssSockets('');
    this.props.setBlueSockets('');
    this.props.setElementalDpsMax('');
    this.props.setElementalDpsMin('');
    this.props.setGreenSockets('');
    this.props.setItemBase(null);
    // TODO: need to add a value prop to autocomplete textbox which gets passed down to
    // its textfield (see https://material-ui.com/api/text-field/#textfield-api)
    // this.props.setItemName(null);
    this.props.setItemNameSuggestions([]);
    this.props.setItemType(null);
    this.props.setMods([null]);
    this.props.setModsMax(['']);
    this.props.setModsMin(['']);
    this.props.setPhysicalDpsMax('');
    this.props.setPhysicalDpsMin('');
    this.props.setRedSockets('');
    this.props.setSearchResults([]);
    this.props.setSocketsMax('');
    this.props.setSocketsMin('');
    this.props.setTotalDpsMax('');
    this.props.setTotalDpsMin('');
    this.props.setWhiteSockets('');
  }

  private async onSearchClick(): Promise<void> {
    this.props.setSearchButtonEnabled(false);
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
    this.props.setSearchButtonEnabled(true);
    this.props.setSearchResults(searchResults);
  }

  private filterItems(items: IBaseItem[]): IBaseItem[] {
    let results: IBaseItem[] = [];
    results = this.filterName(items);
    results = this.filterItemTypeAndBase(results);
    results = this.filterDps(results);
    results = this.filterItemSockets(results);
    return this.filterItemMods(results);
  }

  private filterName(items: IBaseItem[]): IBaseItem[] {
    const itemName: string = this.props.itemName.trim();
    return !!itemName ? this.props.nameFilter.filter(items, itemName) : items;
  }

  private filterItemTypeAndBase(items: IBaseItem[]): IBaseItem[] {
    if (this.props.itemBase !== null) {
      return this.props.itemTypeFilter.filter(items, [this.props.itemBase.value]);
    }
    if (this.props.itemType !== null) {
      return this.props.itemTypeFilter.filter(items, [this.props.itemType.value]);
    }
    return items;
  }

  private filterItemMods(items: IBaseItem[]): IBaseItem[] {
    const modFilterParams: IModFilterParams[] = [];
    for (let i = 0; i < this.props.mods.length; i++) {
      if (this.props.mods[i] != null) {
        const mod: IModFilterParams = { mod: this.props.mods[i].value };
        const min: number = parseInt(this.props.modsMin[i], 10);
        const max: number = parseInt(this.props.modsMax[i], 10);
        mod.min = !isNaN(min) ? min : 1;
        if (!isNaN(max)) { mod.max = max; }
        modFilterParams.push(mod);
      }
    }
    return modFilterParams.length > 0 ? this.props.modFilter.filter(items, modFilterParams) : items;
  }

  private filterItemSockets(items: IBaseItem[]): IBaseItem[] {
    const socketFilterParams: ISocketFilterParams = {};
    let shouldSearch: boolean = false;
    const minSockets: number = parseInt(this.props.socketsMin, 10);
    const maxSockets: number = parseInt(this.props.socketsMax, 10);
    const redSockets: number = parseInt(this.props.redSockets, 10);
    const greenSockets: number = parseInt(this.props.greenSockets, 10);
    const blueSockets: number = parseInt(this.props.blueSockets, 10);
    const whiteSockets: number = parseInt(this.props.whiteSockets, 10);
    const abyssSockets: number = parseInt(this.props.abyssSockets, 10);

    if (!isNaN(minSockets)) {
      socketFilterParams.minSockets = minSockets;
      shouldSearch = true;
    }
    if (!isNaN(maxSockets)) {
      socketFilterParams.maxSockets = maxSockets;
      shouldSearch = true;
    }
    if (!isNaN(redSockets)) {
      socketFilterParams.redSockets = redSockets;
      shouldSearch = true;
    }
    if (!isNaN(greenSockets)) {
      socketFilterParams.greenSockets = greenSockets;
      shouldSearch = true;
    }
    if (!isNaN(blueSockets)) {
      socketFilterParams.blueSockets = blueSockets;
      shouldSearch = true;
    }
    if (!isNaN(whiteSockets)) {
      socketFilterParams.whiteSockets = whiteSockets;
      shouldSearch = true;
    }
    if (!isNaN(abyssSockets)) {
      socketFilterParams.abyssSockets = abyssSockets;
      shouldSearch = true;
    }

    return shouldSearch ? this.props.socketFilter.filter(items, socketFilterParams) : items;
  }

  private filterDps(items: IBaseItem[]): IBaseItem[] {
    const dpsFilterParams: IDpsFilterParams[] = [];
    const minTotal: number = parseInt(this.props.totalDpsMin, 10);
    const maxTotal: number = parseInt(this.props.totalDpsMax, 10);
    const minElemental: number = parseInt(this.props.elementalDpsMin, 10);
    const maxElemental: number = parseInt(this.props.elementalDpsMax, 10);
    const minPhysical: number = parseInt(this.props.physicalDpsMin, 10);
    const maxPhysical: number = parseInt(this.props.physicalDpsMax, 10);

    if (!isNaN(minTotal) || !isNaN(maxTotal)) {
      const totalParams: IDpsFilterParams = { type: DpsType.ANY };
      if (!isNaN(minTotal)) { totalParams.min = minTotal; }
      if (!isNaN(maxTotal)) { totalParams.max = maxTotal; }
      dpsFilterParams.push(totalParams);
    }
    if (!isNaN(minElemental) || !isNaN(maxElemental)) {
      const elementalParams: IDpsFilterParams = { type: DpsType.ELEMENTAL };
      if (!isNaN(minElemental)) { elementalParams.min = minElemental; }
      if (!isNaN(maxElemental)) { elementalParams.max = maxElemental; }
      dpsFilterParams.push(elementalParams);
    }
    if (!isNaN(minPhysical) || !isNaN(maxPhysical)) {
      const physicalParams: IDpsFilterParams = { type: DpsType.PHYSICAL };
      if (!isNaN(minPhysical)) { physicalParams.min = minPhysical; }
      if (!isNaN(maxPhysical)) { physicalParams.max = maxPhysical; }
      dpsFilterParams.push(physicalParams);
    }

    return dpsFilterParams.length > 0 ? this.props.dpsFilter.filter(items, dpsFilterParams) : items;
  }

  private onItemCategoryChange(itemType: ISearchDropdownLabel) {
    if (this.props.itemType !== null
      && itemType !== null
      && this.props.itemType.value === itemType.value) { return; }
    this.props.setItemBase(null);
    this.props.setItemType(itemType);
  }

  private onItemBaseChange(itemBase: ISearchDropdownLabel | null) {
    this.props.setItemBase(itemBase);
  }

  private onItemNameSuggestionValueChange(itemName: string): void {
    const itemNameSuggestions: string[] = itemNames
      .filter((name: string) => name.toLowerCase().indexOf(itemName.toLowerCase()) !== -1);
    this.props.setItemName(itemName);
    this.props.setItemNameSuggestions(itemNameSuggestions);
  }

  private updateMods(index: number, mod: ISearchDropdownLabel): void {
    const mods: ISearchDropdownLabel[] = [...this.props.mods];
    mods[index] = mod;
    this.props.setMods(mods);
  }

  private updateModsMin(index: number, value: string): void {
    const modsMin: string[] = [...this.props.modsMin];
    modsMin[index] = value;
    this.props.setModsMin(modsMin);
  }

  private updateModsMax(index, value: string): void {
    const modsMax: string[] = [...this.props.modsMax];
    modsMax[index] = value;
    this.props.setModsMax(modsMax);
  }

  private removeItemMod(index: number): void {
    const modsMin: string[] = [...this.props.modsMin];
    const modsMax: string[] = [...this.props.modsMax];
    const mods: ISearchDropdownLabel[] = [...this.props.mods];

    modsMin.splice(index, 1);
    modsMax.splice(index, 1);
    mods.splice(index, 1);

    this.props.setMods(mods);
    this.props.setModsMin(modsMin);
    this.props.setModsMax(modsMax);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(withRouter(SearchForm)));
