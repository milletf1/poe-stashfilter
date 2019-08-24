import { ItemModThemeTypes } from './ItemModThemeTypes';

export interface IItemModsProps {
  /** Item mod(s) to render */
  mods: string | string[];
  /** Additional styling for item mods element */
  style?: React.CSSProperties;
  /** Item mod theme that is used to determine class name */
  theme?: ItemModThemeTypes;
}
