import { Button, Grid, Input } from '@material-ui/core';
import * as React from 'react';
import { IMod } from '../../services/filter/filter-modules/mod-filter/IModFilterParams';
import { abyssModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/abyss-mods';
import { bestiaryModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/bestiary-mods';
import { craftedModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/crafted-mods';
import { enchantmentModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/enchantment-mods';
import { explicitModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/explicit-mods';
import { fracturedModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/fractured-mods';
import { harvestSeedModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/harvest-seed-mods';
import { implicitModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/implicit-mods';
import { leaguestoneModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/leaguestone-mods';
import { mapModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/map-mods';
import { organModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/organ-mods';
import { propheciesModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/prophecy-mods';
import { pseudoModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/pseudo-mods';
import { totalModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/total-mods';
import { uniqueModRegexes } from '../../services/filter/filter-modules/mod-filter/mod-regexes/unique-mods';
import { ISearchDropdownLabel } from '../search-dropdown/ISearchDropdownLabel';
import SearchDropdown from '../search-dropdown/SearchDropdown';
import IModSearchProps from './IModSearchProps';

import './mod-search.scss';

class ModSearch extends React.Component<IModSearchProps, {}> {
  constructor(props) {
    super(props);
    // mod filter event listeners
    this.onModChange = this.onModChange.bind(this);
    this.onModMinChange = this.onModMinChange.bind(this);
    this.onModMaxChange = this.onModMaxChange.bind(this);
    this.removeItemModElement = this.removeItemModElement.bind(this);
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
      ...harvestSeedModRegexes.map((val: IMod) => ({
        label: `[Harvest] ${val.label}`,
        value: val,
      })),
    ];
  }

  public render(): JSX.Element {
    return (
      <Grid container item xs={12} spacing={0} className='mod-search'>
        {
          this.props.mods.map((mod: ISearchDropdownLabel, index: number) => {
            const key: string = `${index}-${new Date().getTime()}`;
            return (
              <Grid
                container
                item xs={12}
                spacing={2}
                key={key}
                className='mod-row'>
                <Grid item xs={7} className='input-container'>
                  <SearchDropdown
                    options={this.mods}
                    placeholder='Mod'
                    value={mod}
                    onChange={this.onModChange(index)} />
                </Grid>
                <Grid container item xs={2} spacing={0} >
                  <Grid item xs={6}>
                    <Input
                      id={`mods-min-${index}`}
                      placeholder='min'
                      value={this.props.modsMin[index]}
                      onChange={this.onModMinChange}
                      style={{ marginRight: '8px', marginLeft: '4px' }} />
                  </Grid>
                  <Grid item xs={6}>
                    <Input
                      id={`mods-max-${index}`}
                      placeholder='max'
                      value={this.props.modsMax[index]}
                      onChange={this.onModMaxChange}
                      style={{ marginLeft: '8px' }} />
                  </Grid>
                </Grid>
                <Grid container item xs={3} className='button-container'>
                  <Button
                    id={`mods-delete-${index}`}
                    size='small'
                    color='secondary'
                    onClick={this.removeItemModElement}
                    style={{ marginLeft: '8px' }}>
                    Remove
                    </Button>
                </Grid>
              </Grid>
            );
          })
        }
      </Grid>
    );
  }

  private onModChange(index: number): (mod: ISearchDropdownLabel) => void {
    return (mod: ISearchDropdownLabel): void => {
      this.props.updateMods(index, mod);
    };
  }

  private onModMinChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    const elementId: string = event.target.id;
    const index: number = parseInt(elementId.split('-')[2], 10);
    const selectStart: number = event.target.selectionStart;
    const selectEnd: number = event.target.selectionEnd;
    this.props.updateModsMin(index, event.target.value);
    setTimeout(() => this.focusInputElement(elementId, selectStart, selectEnd));
  }

  private onModMaxChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    const elementId: string = event.target.id;
    const index: number = parseInt(elementId.split('-')[2], 10);
    const selectStart: number = event.target.selectionStart;
    const selectEnd: number = event.target.selectionEnd;
    this.props.updateModsMax(index, event.target.value);
    setTimeout(() => this.focusInputElement(elementId, selectStart, selectEnd));
  }

  private focusInputElement(elementId: string, selectStart: number, selectEnd: number): void {
    const inputEl: HTMLInputElement = document.getElementById(elementId) as HTMLInputElement;
    inputEl.focus();
    inputEl.setSelectionRange(selectStart, selectEnd);
  }

  private removeItemModElement(event: React.MouseEvent<HTMLElement>): void {
    const index: number = parseInt(event.currentTarget.id.split('-')[2], 10);
    if (!isNaN(index)) {
      this.props.removeItemMod(index);
    }
  }
}

export default ModSearch;
