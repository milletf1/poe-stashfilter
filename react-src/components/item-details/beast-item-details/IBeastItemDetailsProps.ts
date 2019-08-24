import { IBeast } from '../../../models/items/IBeast';

export interface IBeastItemDetailsProps {
  /** Beast item to render */
  item: IBeast;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for beast item element */
  style?: React.CSSProperties;
}
