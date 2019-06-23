import { IMap } from '../../../models/items/IMap';

/** Props for MapItemDetails component */
export interface IMapItemDetailsProps {
  /** Map item to render */
  item: IMap;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for map item element */
  style?: React.CSSProperties;
}
