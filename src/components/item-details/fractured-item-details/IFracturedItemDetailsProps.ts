import { IFractured } from '../../../models/items/IFractured';

export interface IFracturedItemDetailsProps {
  /** fractured item to render */
  item: IFractured;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for fractured item element */
  style?: React.CSSProperties;
}
