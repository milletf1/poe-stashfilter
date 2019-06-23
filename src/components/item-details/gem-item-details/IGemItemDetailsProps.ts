import { IGem } from '../../../models/items/IGem';

export interface IGemItemDetailsProps {
  /** gem item to render */
  item: IGem;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for gem item element */
  style?: React.CSSProperties;
}
