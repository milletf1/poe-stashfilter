import { PositionProperty } from 'csstype';

/**
 * Inline styling for positioning a StashDisplayItem element.
 * NOTE: I'm using this interface instead of React.CSSProperties because
 * React.CSSProperties converts left and top to 'ReactText', and I need
 * them as numbers so I can calculate tooltip position.
 */
export interface IStashDisplayItemPositionStyle {
  /** Element left */
  left?: number;
  /** Element top */
  top?: number;
  /** Position of element */
  position?: PositionProperty;
}
