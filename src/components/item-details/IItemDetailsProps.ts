import { IBaseItem } from '../../models/items/IBaseItem';

export interface IItemDetailsProps {
  /** Item to render */
  item: IBaseItem;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Mouse over event listener */
  onMouseOver?: (event: React.MouseEvent) => void;
  /** Additional styling for item element */
  style?: React.CSSProperties;
}
