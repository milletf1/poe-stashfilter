import { IResonator } from '../../../models/items/IResonator';

/** Props for IResonatorItemDetails component */
export interface IResonatorItemDetailsProps {
  /** Resonator item to render */
  item: IResonator;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for resonator item element */
  style?: React.CSSProperties;
}
