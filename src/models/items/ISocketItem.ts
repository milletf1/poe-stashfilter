import { IBaseItem } from './IBaseItem';
import { IFossil } from './IFossil';
import { IGem } from './IGem';

export interface ISocketItem extends IBaseItem {
  /** Socket index? */
  socket: number;
  /** Socket colour (might be gem colour) */
  colour?: string;
}
