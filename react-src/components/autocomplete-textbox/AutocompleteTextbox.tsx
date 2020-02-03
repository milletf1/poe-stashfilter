import { MenuItem, Paper, TextField } from '@material-ui/core';
import * as React from 'react';
import AutoSuggest from 'react-autosuggest';
import './autocomplete-textbox.scss';
import { IAutocompleteTextboxProps } from './IAutocompleteTextboxProps';
import { IAutocompleteTextboxState } from './IAutocompleteTextboxState';

class AutocompleteTextBox extends React.Component
  <IAutocompleteTextboxProps, IAutocompleteTextboxState> {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
    };
  }

  public render(): JSX.Element {
    const inputProps = {
      onChange: this.props.onChange,
      placeholder: this.props.placeholder,
      value: this.props.value,
    };

    return (
      <AutoSuggest
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.getSuggestions.bind(this)}
        onSuggestionsClearRequested={this.clearSuggestions.bind(this)}
        renderInputComponent={this.renderInputComponent.bind(this)}
        renderSuggestionsContainer={this.renderSuggestionsContainer.bind(this)}
        renderSuggestion={this.renderSuggestion.bind(this)}
        getSuggestionValue={(suggestion: string) => suggestion}
        inputProps={inputProps}
      />
    );
  }

  protected getSuggestions(value: AutoSuggest.SuggestionsFetchRequestedParams): void {
    const searchValue: string = value.value.toLowerCase();
    const suggestions: string[] = this.props.suggestions.filter((item: string) =>
      item.toLowerCase().indexOf(searchValue) !== -1);

    this.setState({ suggestions });
  }

  protected clearSuggestions(): void {
    this.setState({
      suggestions: [],
    });
  }

  protected renderInputComponent(inputProps): JSX.Element {
    const style = { width: '100%' };
    return (
      <div>
        <TextField
          style={ style }
          {...inputProps}
        />
      </div>
    );
  }

  protected renderSuggestionsContainer(
    options: AutoSuggest.RenderSuggestionsContainerParams): JSX.Element {
    return (
      <Paper {...options.containerProps} style={{
        left: '0',
        overflowX: 'hidden',
        position: 'absolute',
        zIndex: 10}}>
        {options.children}
      </Paper>
    );
  }

  protected renderSuggestion(
    suggestion: string, params: AutoSuggest.RenderSuggestionParams): JSX.Element {
    return (
      <MenuItem selected={params.isHighlighted} component='div'>
        <div className='suggestion-item'>
          {suggestion}
        </div>
      </MenuItem>
    );
  }
}

export default AutocompleteTextBox;
