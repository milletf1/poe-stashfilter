'use strict';
const { ipcMain } = require('electron');
const Store = require('electron-store');
const ipcChannels = require('./ipc-channels');
const log = require('./logger');
const webApi = require('./web-api');
const storeKeys = require('./electron-store-keys');

/**
 * Sets up IPC channel listeners
 * @param {any} store Instance of electron store for saving app state to disk
 * @param {any} appState App state model
 */
function setupChannels(store, appState) {

  /** Login request listener */
  ipcMain.on(ipcChannels.LOGIN_REQUEST, (event, args) => {
    appState.clearSessionOnExit = !args.rememberLogin;

    webApi.login(args.email, args.password, args.rememberLogin).then(response => {
      if (response.loggedIn) {
        const account = getAccountFromStore(response.accountName, store);
        if (!account) {
          // first time account has logged in through the app
          createEmptyAccount(response.accountName).then(newAccount => {
            event.sender.send(ipcChannels.LOGIN_RESPONSE, {
              account: newAccount,
              loggedIn: response.loggedIn,
            });
          });
        } else {
          event.sender.send(ipcChannels.LOGIN_RESPONSE, { account, loggedIn: response.loggedIn });
        }
      } else {
        event.sender.send(ipcChannels.LOGIN_RESPONSE, { loggedIn, error: 'Failed to login' });
      }
    })
    .catch(err => {
      log.warn(err.message);
      event.sender.send(ipcChannels.LOGIN_RESPONSE, {
        loggedIn: false,
        error: err.message,
      });
    });
  });

  /** Set session id request listener */
  ipcMain.on(ipcChannels.SET_SESSION_REQUEST, (event, args) => {
    appState.clearSessionOnExit = !args.rememberLogin;

    webApi.setSessionId(args.sessionId).then(response => {
      if (response.loggedIn) {
        const account = getAccountFromStore(response.accountName, store);
        if (!account) {
          // first time account has logged in through the app
          createEmptyAccount(response.accountName).then(newAccount => {
            event.sender.send(ipcChannels.SET_SESSION_RESPONSE, {
              account: newAccount,
              loggedIn: response.loggedIn,
            });
          });
        } else {
          event.sender.send(ipcChannels.SET_SESSION_RESPONSE, {
            account,
            loggedIn: response.loggedIn,
          });
        }
      } else {
        event.sender.send(ipcChannels.SET_SESSION_RESPONSE, {
          loggedIn,
          error: 'Failed to authenicate with session id',
        });
      }
    })
    .catch(err => {
      log.warn(err.message);
      event.sender.send(ipcChannels.SET_SESSION_RESPONSE, {
        loggedIn: false,
        error: err.message,
      });
    })
  });

  /** Save app state request listener */
  ipcMain.on(ipcChannels.SAVE_STATE, (event, args) => {
    store.set(storeKeys.LAST_LOGGED_IN_KEY, args.authCredentials);
    appState.clearSessionOnExit = !args.authCredentials.remember;

    if (args.activeAccount) {
      store.set(`${storeKeys.ACCOUNT_KEY_PREFIX}${args.activeAccount.accountName}`,
        args.activeAccount);
    }
  });

  /** Get app state request listener */
  ipcMain.on(ipcChannels.GET_STATE_REQUEST, (event, args) => {
    let authCredentials = store.get(storeKeys.LAST_LOGGED_IN_KEY, null);
    if (authCredentials === null) {
      authCredentials = {
        accountName: null,
        isAuthorized: false,
        remember: false,
      }
    }
    const activeAccount = getAccountFromStore(authCredentials.accountName, store);
    event.sender.send(ipcChannels.GET_STATE_RESPONSE, { activeAccount, authCredentials });
  });

  /** Get account state request listener */
  ipcMain.on(ipcChannels.GET_ACCOUNT_STATE_REQUEST, (event, args) => {
    const account = getAccountFromStore(args.accountName, store);
    event.sender.send(ipcChannels.GET_ACCOUNT_STATE_RESPONSE, account)
  });

  /** Logout request listener */
  ipcMain.on(ipcChannels.LOGOUT_REQUEST, (event, args) => {
    appState.clearSessionOnExit = true;
    webApi.logout().then(event.sender.send(ipcChannels.LOGOUT_RESPONSE));
  });

  /** Get account name request listener */
  ipcMain.on(ipcChannels.GET_ACCOUNT_NAME_REQUEST, (event, args) => {
    webApi.getAccountName().then(accountName => {
      event.sender.send(ipcChannels.GET_ACCOUNT_NAME_RESPONSE, { accountName });
    })
    .catch(err => {
      log.warn(err.message);
      event.sender.send(ipcChannels.GET_ACCOUNT_NAME_RESPONSE, {
        accountName: null,
        error: err.message,
      });
    });
  });

  /** Get leagues request listener */
  ipcMain.on(ipcChannels.GET_LEAGUES_REQUEST, (event, args) => {
    webApi.getCharacters(args.accountName).then(characters => {
      const leagues = mapCharactersToLeagues(characters);
      event.sender.send(ipcChannels.GET_LEAGUES_RESPONSE, { leagues });
    })
    .catch(err => {
      log.warn(err.message);
      event.sender.send(ipcChannels.GET_LEAGUES_RESPONSE, {
        leagues: null,
        error: err.message,
      });
    });
  });

  /** Get characters request listener */
  ipcMain.on(ipcChannels.GET_CHARACTERS_REQUEST, (event, args) => {
    webApi.getCharacters(args.accountName).then(characters => {
      event.sender.send(ipcChannels.GET_CHARACTERS_RESPONSE, { characters });
    })
    .catch(err => {
      log.warn(err.message);
      event.sender.send(ipcChannels.GET_CHARACTERS_RESPONSE, {
        characters: null,
        error: err.message,
      });
    });
  });

  /** Get character items request listener */
  ipcMain.on(ipcChannels.GET_CHAR_ITEMS_REQUEST, (event, args) => {
    webApi.getCharacterItems(args.accountName, args.character).then(characterItems => {
      event.sender.send(ipcChannels.GET_CHAR_ITEMS_RESPONSE, { characterItems });
    })
    .catch(err => {
      log.warn(err.message);
      event.sender.send(ipcChannels.GET_CHAR_ITEMS_RESPONSE, {
        characterItems: null,
        error: err.message,
      });
    });
  });

  /** Get stash items request listener */
  ipcMain.on(ipcChannels.GET_STASH_TAB_REQUEST, (event, args) => {
    webApi.getStashTab(args.accountName, args.tabIndex, args.league, args.includeTabList)
    .then(stashTab => {
      event.sender.send(ipcChannels.GET_STASH_TAB_RESPONSE, { stashTab });
    })
    .catch(err => {
      log.warn(err.message);
      event.sender.send(ipcChannels.GET_STASH_TAB_RESPONSE, {
        stashTab: null,
        error: err.message
      });
    });
  });

  /** Logs a message */
  ipcMain.on(ipcChannels.LOG_MESSAGE, (event, args) => {
    log.warn(args.message);
  });
}

/**
 * Returns an account from an Electron Store instance. Returns null if acccount is not found.
 * @param {string} accountName Name of the account
 * @param {any} store Store that contains the account to get
 */
function getAccountFromStore(accountName, store) {
  return !!accountName
    ? store.get(`${storeKeys.ACCOUNT_KEY_PREFIX}${accountName}`, null)
    : null;
}

/**
 * Creates an account with that contains the account's characters
 * @param {string} accountName Name of account
 */
function createEmptyAccount(accountName) {
  const emptyAccount = {
    accountName: accountName,
    leagues: [],
    searches: [],
    uiState: {
      browseCategory: null,
      browseIndex: null,
      leagueIndex: 0,
      route: '/browse',
      searchIndex: null,
    },
  };

  return webApi.getCharacters(accountName).then(characters => {
    const leagues = mapCharactersToLeagues(characters);
    return { ...emptyAccount, leagues };
  })
  .catch(err => {
    log.warn(err.message);
    return emptyAccount;
  });
}

/** 
 * Creates an array of ILeague instances that the characters from the league
 * and returns it
 * @param {any} characters Characters to map to leagues
 */
function mapCharactersToLeagues(characters) {
  const leagueNames = Array.from(new Set(characters.map(c => c.league)));
  return leagueNames.map((leagueName) => {
    return {
      name: leagueName,
      characters: [],
      stashTabs: [],
    };
  });
}

module.exports = { setupChannels };