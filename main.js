'use strict';
const { app, BrowserWindow } = require('electron');
const Store = require('electron-store');
const webApi = require('./web-api');
const storeKeys = require('./electron-store-keys');
const ipcChannelsListeners = require('./ipc-channel-listeners');

let appState = { clearSessionOnExit: false };
let store; // instance of electron-store

function createWindow() {
    let win = new BrowserWindow();
    win.maximize();

    if (process.env.NODE_ENV === 'dev') {
      win.loadURL('http://localhost:8080');
      store = new Store();
    } else {
      win.loadFile('./dist/index.html');
      store = new Store({ encryptionKey: 'Le toucan has arrived' });
    }

    win.on('closed', () => {
        win = null;
        if (appState.clearSessionOnExit) {
          store.set(storeKeys.LAST_LOGGED_IN_KEY, {
            accountName: null,
            isAuthorized: false,
            remember: false,
          });
          webApi.clearSession();
        }
    });
    ipcChannelsListeners.setupChannels(store, appState);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

