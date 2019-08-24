import { IIncubatedItem } from '../../../models/items/IGear';

export interface IIncubatedDetailsProps {
  /** Incubated item details */
  incubatedItem: IIncubatedItem;
  /** Additional styling for incubated details element */
  style?: React.CSSProperties;
}
