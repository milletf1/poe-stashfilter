import { ICurrency } from '../../../models/items/ICurrency';

export interface ICurrencyItemDetailsProps {
  /** Currency item to render */
  item: ICurrency;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for currency item element */
  style?: React.CSSProperties;
}
