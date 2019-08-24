import { IFlask } from '../../../models/items/IFlask';

export interface IFlaskItemDetailsProps {
  /** flask item to render */
  item: IFlask;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for flask item element */
  style?: React.CSSProperties;
}
