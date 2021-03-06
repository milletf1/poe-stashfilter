import { CssBaseline } from '@material-ui/core';
import { lightBlue, red } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Store } from 'redux';
import './sass/styles.scss';
import { buildStore } from './store/util/storeBuilder';
import App from './views/app/App';

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      dark: lightBlue[900],
      light: lightBlue[500],
      main: lightBlue[700],
    },
    secondary: {
      dark: red[900],
      light: red[500],
      main: red[700],
    },
    type: 'dark',
  },
});

buildStore().then((store: Store) => {
  ReactDOM.render((
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <App store={store} />
        </HashRouter>
      </MuiThemeProvider >
    </Provider >
  ), document.getElementById('root'));
});
