import { ILeagueStone } from '../../../models/items/ILeagueStone';

/** Props for LeaguestoneItem component */
export interface ILeaguestoneItemDetailsProps {
  /** Leaguestone item to render */
  item: ILeagueStone;
  /** Callback for passing a ref to underlying html element to parent */
  elementRefCallback?: (ref: React.RefObject<HTMLElement>) => void;
  /** Additional styling for leaguestone item element */
  style?: React.CSSProperties;
}
