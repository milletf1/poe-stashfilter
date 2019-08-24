import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Select from 'react-select';
import { ISearchDropdownProps } from './ISearchDropdownProps';

import { MenuItem, Paper, TextField, Typography } from '@material-ui/core';
import { zIndex } from 'material-ui/styles';

class SearchDropdown extends React.Component<ISearchDropdownProps, {}> {

  public render() {
    const { theme } = this.props;
    const components = {
      Control: this.renderControl.bind(this),
      Menu: this.renderMenu.bind(this),
      NoOptionsMessage: this.renderNoOptionsMessage.bind(this),
      Option: this.renderOption.bind(this),
      SingleValue: this.renderSingleValue.bind(this),
    };
    const selectStyles = {
      clearIndicator: (base) => ({
        ...base,
        '&:hover': {
          color: theme.palette.text.primary,
        },
        'cursor': 'pointer',
      }),
      dropdownIndicator: (base) => ({
        ...base,
        '&:hover': {
          color: theme.palette.text.primary,
        },
        'cursor': 'pointer',
      }),
      indicatorSeparator: (base) => ({
        ...base,
        margin: 0,
      }),
      input: (base) => ({
        ...base,
        '& input': {
          font: 'inherit',
        },
        'color': theme.palette.text.primary,
      }),
      valueContainer: (base) => ({
        ...base,
        paddingLeft: 0,
      }),
    };
    return (
      <div>
        <Select
          styles={selectStyles}
          isClearable={true}
          components={components}
          value={this.props.value}
          options={this.props.options}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }

  protected renderNoOptionsMessage(props): JSX.Element {
    return (
      <MenuItem>
        {props.children}
      </MenuItem>
    );
  }

  protected renderInputComponent({ inputRef, ...props }): JSX.Element {

    return (
      <div
        style={{
          display: 'flex',
          height: '19px',
        }}
        ref={inputRef}
        {...props}
      />
    );
  }

  protected renderControl(props): JSX.Element {
    return (
      <TextField
        fullWidth
        style={{
          fontWeight: 500,
        }}
        InputProps={{
          inputComponent: this.renderInputComponent,
          inputProps: {
            children: props.children,
            inputRef: props.innerRef,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    );
  }

  protected renderOption(props): JSX.Element {
    return (
      <MenuItem
        buttonRef={props.innerRef}
        selected={props.isFocused}
        component='div'
        style={{
          fontWeight: props.isSelected ? 500 : 400,
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        {...props.innerProps}
      >
        {props.children}
      </MenuItem>
    );
  }

  protected renderSingleValue(props): JSX.Element {
    return (
      <Typography
        variant='subtitle1'
        style={{
          lineHeight: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        {...props.innerProps}>
        {props.children}
      </Typography>
    );
  }

  protected renderMenu(props): JSX.Element {
    return (
      <Paper square {...props.innerProps} style={{
        left: '0',
        maxHeight: '200px',
        overflowY: 'scroll',
        position: 'absolute',
        right: '0',
        zIndex: '10'}}>
        {props.children}
      </Paper>
    );
  }
}

export default withStyles({}, {withTheme: true})(SearchDropdown);
