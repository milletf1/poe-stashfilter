import { ISearchDropdownLabel } from './../../components/search-dropdown/ISearchDropdownLabel';

export interface ISearchFormState {
  itemBase: string;
  itemName: string;
  itemType: ISearchDropdownLabel;
  searchButtonEnabled: boolean;
}