import { IBaseItem } from '../../models/items/IBaseItem';
import { StashTypes } from '../../models/stash-tabs/StashTypes';
import { IStashDisplayItemPositionStyle } from './IStashDisplayItemPositionStyle';

/** Props for StashDisplayItem component */
export interface IStashDisplayItemProps {
  /** The item to display */
  item: IBaseItem;
  /** Inline element style */
  style: IStashDisplayItemPositionStyle;
  /** The type of stash tab the item will be displayed in */
  stashTabContext: StashTypes;
  quadStash?: boolean;
}
