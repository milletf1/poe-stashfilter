import { ISearchDropdownLabel } from './../../components/search-dropdown/ISearchDropdownLabel';

export interface ISearchFormState {
  itemBase: ISearchDropdownLabel;
  itemName: string;
  itemType: ISearchDropdownLabel;
  searchButtonEnabled: boolean;
  mods: ISearchDropdownLabel[];
  modsMin: string[]; // number
  modsMax: string[]; // number
  itemNameSuggestions: string[];
  totalDpsMin: string; // number
  totalDpsMax: string; // number
  physicalDpsMin: string; // number
  physicalDpsMax: string; // number
  elementalDpsMin: string; // number
  elementalDpsMax: string; // number
  socketsMin: string; // number
  socketsMax: string; // number
  redSockets: string; // number
  greenSockets: string; // number
  blueSockets: string; // number
  whiteSockets: string; // number
  abyssSockets: string; // number
}
