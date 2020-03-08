import { BrowseItemCategory } from './BrowseItemCategory';

export default interface IBrowsePageState {
  /** index of selected browse item */
  browseIndex: number | null;
  /** type of selected browse item (character or stash tab) */
  browseCategory: BrowseItemCategory | null;
}
