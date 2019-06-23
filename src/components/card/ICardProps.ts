import { ICard } from '../../models/items/ICard';

export interface ICardProps {
  /** Card to render */
  card: ICard;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for card element */
  style?: React.CSSProperties;
}
