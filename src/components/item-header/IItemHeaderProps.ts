import { IBaseItem } from '../../models/items/IBaseItem';

export interface IItemHeaderProps {
  /** Item to render */
  item: IBaseItem;
  /** Additional styling for item header */
  style?: React.CSSProperties;
}
