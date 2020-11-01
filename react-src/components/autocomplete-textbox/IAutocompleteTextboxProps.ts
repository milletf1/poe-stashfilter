export interface IAutocompleteTextboxProps {
  suggestions: string[];
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
}
