import { IFossil } from '../../../models/items/IFossil';

export interface IFossilItemDetailsProps {
  /** Fossil item to render */
  item: IFossil;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for fossil item element */
  style?: React.CSSProperties;
}
