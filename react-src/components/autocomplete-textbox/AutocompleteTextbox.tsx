import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as React from 'react';
import './autocomplete-textbox.scss';
import { IAutocompleteTextboxProps } from './IAutocompleteTextboxProps';
import { IAutocompleteTextboxState } from './IAutocompleteTextboxState';

class AutocompleteTextBox extends React.Component
  <IAutocompleteTextboxProps, IAutocompleteTextboxState> {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.renderInputComponent = this.renderInputComponent.bind(this);
  }

  public render(): JSX.Element {
    return (
      <Autocomplete
         id='free-solo-demo'
         freeSolo
         options={this.props.suggestions}
         onInputChange={this.onInputChange}
         renderInput={this.renderInputComponent} />
    );
  }

  private renderInputComponent(inputProps): JSX.Element {
    const style = { width: '100%' };
    return (
        <TextField
          variant='standard'
          placeholder={ this.props.placeholder }
          style={ style }
          {...inputProps} />
    );
  }

  private onInputChange(_: React.SyntheticEvent, value: string): void {
    this.props.onChange(value);
  }
}

export default AutocompleteTextBox;
