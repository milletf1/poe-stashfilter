export interface IAutocompleteTextboxProps {
  suggestions: string[];
  placeholder: string;
  onChange: (value: string) => void;
}
