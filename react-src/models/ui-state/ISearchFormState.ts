import { ISearchDropdownLabel } from './../../components/search-dropdown/ISearchDropdownLabel';

export default interface ISearchFormState {
  /** Currently selected item base */
  itemBase: ISearchDropdownLabel | null;
  /** Search item name */
  itemName: string;
  /** Currently selected item type */
  itemType: ISearchDropdownLabel | null;
  /** Flag to indicate if the search button is enabled */
  searchButtonEnabled: boolean;
  /** List of mods */
  mods: ISearchDropdownLabel[];
  /** List of minimum mod values */
  modsMin: string[]; // number
  /** List of maximum mod values */
  modsMax: string[]; // number
  /** Name suggestion for item name search input */
  itemNameSuggestions: string[];
  /** Minimum total dps value */
  totalDpsMin: string; // number
  /** Maximum total dps value */
  totalDpsMax: string; // number
  /** Minimum physical dps value */
  physicalDpsMin: string; // number
  /** Maximum physical dps value */
  physicalDpsMax: string; // number
  /** Minimum elemental dps value */
  elementalDpsMin: string; // number
  /** Maximum elemental dps value */
  elementalDpsMax: string; // number
  /** Minimum sockets value */
  socketsMin: string; // number
  /** Maximum sockets value */
  socketsMax: string; // number
  /** Total number of red sockets */
  redSockets: string; // number
  /** Total number of green sockets */
  greenSockets: string; // number
  /** Total number of blue sockets */
  blueSockets: string; // number
  /** Total number of white sockets */
  whiteSockets: string; // number
  /** Total number of abyss sockets */
  abyssSockets: string; // number
}
