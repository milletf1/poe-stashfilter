import { ChangeEvent } from 'react-autosuggest';

export interface IAutocompleteTextboxProps {
  suggestions: string[];
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent, payload: ChangeEvent) => void;
}
