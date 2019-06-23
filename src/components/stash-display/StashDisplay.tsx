import * as React from 'react';
import { connect } from 'react-redux';
import { IBaseItem } from '../../models/items/IBaseItem';
import { isICurrencyTab } from '../../models/stash-tabs/ICurrencyTab';
import { isIDivinationTab } from '../../models/stash-tabs/IDivinationTab';
import { isIEssenceTab } from '../../models/stash-tabs/IEssenceTab';
import { isIFragmentTab } from '../../models/stash-tabs/IFragmentTab';
import { isIQuadTab } from '../../models/stash-tabs/IQuadTab';
import { IStashTab } from '../../models/stash-tabs/IStashTab';
import { ITabLayout, ITabLayoutItem } from '../../models/stash-tabs/ITabLayout';
import { StashTypes } from '../../models/stash-tabs/StashTypes';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IAppState } from '../../store/app/appState';
import CharacterInventory from '../character-inventory/CharacterInventory';
import { IStashDisplayItemPositionStyle } from '../stash-display-item/IStashDisplayItemPositionStyle';
import StashDisplayItem from '../stash-display-item/StashDisplayItem';
import { IStashDisplayProps } from './IStashDisplayProps';

import './stash-display.scss';

const mapStateToProps = (state: IAppState, props: any) => ({
  browseCategory: state.activeAccount.uiState.browseCategory,
  browseIndex: state.activeAccount.uiState.browseIndex,
  leagueIndex: state.activeAccount.uiState.leagueIndex,
  leagues: state.activeAccount.leagues,
});

const NORMAL_STASH_ITEM_SIZE: number = 45;
const NORMAL_STASH_DIVIDER_SIZE: number = 2.5;
const QUAD_STASH_ITEM_SIZE: number = 22;
const QUAD_STASH_DIVIDER_SIZE: number = 1.7;
// TODO: pass cell size as props to stash display items
class StashDisplay extends React.Component<IStashDisplayProps, {}> {
  public render(): JSX.Element {
    if (this.stashType === StashTypes.CHARACTER) {
      return <CharacterInventory items={this.items} />;
    }
    return (
      <div className={'stash-display ' + this.stashTypeClass}>
        {this.items && this.items.map((item: IBaseItem) => this.createItemElement(item))}
      </div>
    );
  }
  /**
   * Creates an element to display an item
   * @param item Item to create element for
   */
  private createItemElement(item: IBaseItem): JSX.Element {
    const style: IStashDisplayItemPositionStyle = this.getItemElementPositionStyling(item);

    return (
      <StashDisplayItem
        key={item.id}
        style={style}
        item={item}
        quadStash={this.stashType === StashTypes.QUAD}
        stashTabContext={this.stashType}/>
    );
  }

  /**
   * Creates and returns inline style attributes for item positioning
   * @param item The item we want to get position styling for
   */
  private getItemElementPositionStyling(item: IBaseItem): IStashDisplayItemPositionStyle {
    let left: number;
    let top: number;
    switch (this.stashType) {
      case StashTypes.NORMAL:
        left = item.x * NORMAL_STASH_ITEM_SIZE + (item.x * NORMAL_STASH_DIVIDER_SIZE);
        top = item.y * NORMAL_STASH_ITEM_SIZE + (item.y * NORMAL_STASH_DIVIDER_SIZE);
        break;
      case StashTypes.QUAD:
        left = item.x * QUAD_STASH_ITEM_SIZE + (item.x * QUAD_STASH_DIVIDER_SIZE);
        top = item.y * QUAD_STASH_ITEM_SIZE + (item.y * QUAD_STASH_DIVIDER_SIZE);
        break;
      case StashTypes.ESSENCE:
      case StashTypes.CURRENCY:
      case StashTypes.FRAGMENT:
        const layout: ITabLayout = this.getStashTabLayout();
        const itemPosition: ITabLayoutItem = layout[item.x];
        left = itemPosition.x;
        top = itemPosition.y;
        break;
      case StashTypes.DIVINATION_CARD:
        return {position: 'relative'};
      default:
        return {};
    }
    return { left, top };
  }

  /** Gets stash tab layout for stash types that have a layout */
  private getStashTabLayout(): ITabLayout {
    const stashTab: IStashTab = this.props.leagues[this.props.leagueIndex]
          .stashTabs[this.props.browseIndex];
    if (isIEssenceTab(stashTab)) { return stashTab.essenceLayout; }
    if (isICurrencyTab(stashTab)) { return stashTab.currencyLayout; }
    if (isIFragmentTab(stashTab)) { return stashTab.fragmentLayout; }
    return null;
  }

  /** Gets items from selected stash tab or character */
  private get items(): IBaseItem[] {
    const { browseCategory, browseIndex, leagues, leagueIndex } = this.props;

    if (browseCategory === BrowseItemCategory.CHARACTER) {
      return leagues[leagueIndex].characters[browseIndex]
        ? leagues[leagueIndex].characters[browseIndex].items
        : [];
    } else {
      return leagues[leagueIndex].stashTabs[browseIndex]
        ? leagues[leagueIndex].stashTabs[browseIndex].items
        : [];
    }
  }

  /** Gets type of selected stash tab */
  private get stashType(): StashTypes {
    const { browseCategory, browseIndex, leagues, leagueIndex } = this.props;

    if (browseCategory === BrowseItemCategory.CHARACTER) {
      return StashTypes.CHARACTER;
    }
    const stashTab: IStashTab = leagues[leagueIndex].stashTabs[browseIndex];

    if (!stashTab) {
      return StashTypes.NORMAL;
    }
    if (isIQuadTab(stashTab)) {
      return StashTypes.QUAD;
    }
    if (isICurrencyTab(stashTab)) {
      return StashTypes.CURRENCY;
    }
    if (isIDivinationTab(stashTab)) {
      return StashTypes.DIVINATION_CARD;
    }
    if (isIEssenceTab(stashTab)) {
      return StashTypes.ESSENCE;
    }
    if (isIFragmentTab(stashTab)) {
      return StashTypes.FRAGMENT;
    }
    return StashTypes.NORMAL;
  }

  /** Gets class name for selected stash tab */
  private get stashTypeClass(): string {
    switch (this.stashType) {
      case StashTypes.QUAD:
        return 'tab quad';
      case StashTypes.CURRENCY:
        return 'tab currency';
      case StashTypes.DIVINATION_CARD:
        return 'tab divination';
      case StashTypes.ESSENCE:
        return 'tab essence';
      case StashTypes.FRAGMENT:
        return 'tab fragment';
      case StashTypes.NORMAL:
      default:
        return 'tab';
    }
  }
}

export default connect(mapStateToProps)(StashDisplay);
