import { IGear } from '../../models/items/IGear';
import { IResonator } from '../../models/items/IResonator';
import { ISocketableItem } from '../../models/items/ISocketableItem';
import { ISocketItem } from './../../models/items/ISocketItem';

export default interface IItemSocketsProps {
  style?: React.CSSProperties;
  item: ISocketableItem;
  hasTooltip?: boolean;
  tooltipLeft?: number;
  tooltipTop?: number;
  quadStash?: boolean;
}
