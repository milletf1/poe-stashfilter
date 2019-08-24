/** StashDisplayItem component state */
export interface IStashDisplayItemState {
  /** Fixed left position of item image */
  imageLeft: number;
  /** Fixed top position of item image */
  imageTop: number;
  /** Flag to indicate if hovered over the item image */
  isHovered: boolean;
  /** Width of item tooltip element */
  tooltipWidth: number;
  /** Height of item tooltip element */
  tooltipHeight: number;
}
