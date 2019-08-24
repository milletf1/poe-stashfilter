import { IGear } from '../../../models/items/IGear';

export interface IGearItemDetailsProps {
  /** Gear item to render */
  item: IGear;
  /** Callback for passing a ref of the underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for gear item element */
  style?: React.CSSProperties;
}
