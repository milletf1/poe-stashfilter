import { IBaseItem } from '../../models/items/IBaseItem';

export interface ICharacterInventoryProps {
  /** Items in character inventory */
  items: IBaseItem[];
  /** Additional styling for character inventory */
  style?: React.CSSProperties;
}
