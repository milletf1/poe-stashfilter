import { ISearchDropdownLabel } from './ISearchDropdownLabel';

export interface ISearchDropdownProps {
  options: ISearchDropdownLabel[];
  placeholder: string;
  value: ISearchDropdownLabel;
  onChange: (ISearchDropdownLabel) => void;
  theme: any;
}
