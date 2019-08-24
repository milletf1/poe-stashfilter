import { IProphecy } from '../../../models/items/IProphecy';

/** Props for ProphecyItemDetails component */
export interface IProphecyItemDetailsProps {
  /** Prophecy item to render */
  item: IProphecy;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for prophecy item element */
  style?: React.CSSProperties;
}
