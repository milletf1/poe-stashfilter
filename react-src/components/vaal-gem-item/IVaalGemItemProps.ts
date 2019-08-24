import { IVaalGem } from '../../models/items/IVaalGem';

/** Props for VaalGemItem component */
export interface IVaalGemItemProps {
  /** Vaal gem item to render */
  item: IVaalGem;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for vaal gem item element */
  style?: React.CSSProperties;
}
