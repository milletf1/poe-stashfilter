import { IJewel } from '../../../models/items/IJewel';

/** Props for JewelItemDetails component */
export interface IJewelItemDetailsProps {
  /** Jewel item to render */
  item: IJewel;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for jewel item element */
  style?: React.CSSProperties;
}
