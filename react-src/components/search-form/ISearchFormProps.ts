import { IModFilterParams } from '../../services/filter/filter-modules/mod-filter/IModFilterParams';
import { ISocketFilterParams } from '../../services/filter/filter-modules/socket-filter/ISocketFilterParams';
import { ILeague } from './../../models/ILeague';
import { ISearchResult } from './../../models/search/ISearchResult';
import { IDpsFilterParams } from './../../services/filter/filter-modules/dps-filter/IDpsFilterParams';
import { IFilterModule } from './../../services/filter/filter-modules/IFilterModule';
import { IItemBase } from './../../services/filter/filter-modules/item-type-filter/IItemBase';
import { IItemFilterParams } from './../../services/filter/filter-modules/item-type-filter/IItemTypeFilterParams';
import { ItemType } from './../../services/filter/filter-modules/item-type-filter/ItemType';
import { ISearchDropdownLabel } from './../search-dropdown/ISearchDropdownLabel';

export default interface ISearchFormProps {
  leagueIndex: number;
  leagues: ILeague[];
  setSearchResults: (searchResults: ISearchResult[]) => any;
  searchResults: ISearchResult[];
  nameFilter: IFilterModule<string | string>;
  itemTypeFilter: IFilterModule<ItemType[] | IItemBase[] | IItemFilterParams>;
  modFilter: IFilterModule<IModFilterParams[]>;
  dpsFilter: IFilterModule<IDpsFilterParams | IDpsFilterParams[]>;
  socketFilter: IFilterModule<ISocketFilterParams>;
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
  setTotalDpsMin: (totalDpsMin: string) => void;
  setTotalDpsMax: (totalDpsMax: string) => void;
  setPhysicalDpsMin: (physicalDpsMin: string) => void;
  setPhysicalDpsMax: (physicalDpsMax: string) => void;
  setElementalDpsMin: (elementalDpsMin: string) => void;
  setElementalDpsMax: (elementalDpsMax: string) => void;
  setSocketsMin: (socketsMin: string) => void;
  setSocketsMax: (socketsMax: string) => void;
  setRedSockets: (redSockets: string) => void;
  setBlueSockets: (blueSockets: string) => void;
  setGreenSockets: (greenSockets: string) => void;
  setWhiteSockets: (whiteSockets: string) => void;
  setAbyssSockets: (abyssSockets: string) => void;
  setModsMin: (modsMin: string[]) => void;
  setModsMax: (modsMax: string[]) => void;
  setMods: (mods: ISearchDropdownLabel[]) => void;
  setSearchButtonEnabled: (enabled: boolean) => void;
  setItemBase: (itemBase: ISearchDropdownLabel | null) => void;
  setItemType: (itemType: ISearchDropdownLabel | null) => void;
  setItemNameSuggestions: (itemNameSuggestions: string[]) => void;
  setItemName: (itemName: string) => void;
}
