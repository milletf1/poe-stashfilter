import { IOrgan } from '../../../models/items/IOrgan';

export interface IOrganItemDetailsProps {
  /** Organ item to render */
  item: IOrgan;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for currency item element */
  style?: React.CSSProperties;
}
