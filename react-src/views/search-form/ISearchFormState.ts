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
}
