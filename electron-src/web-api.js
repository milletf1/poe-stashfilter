'use strict';
const FileCookieStore = require('tough-cookie-file-store');
const RateLimiter = require('limiter').RateLimiter;
const request = require('request');
const { app } = require('electron');
const limiter = new RateLimiter(1, 1500);
const cookie = new FileCookieStore(app.getPath('userData') + '/cookie.json');
const jar = request.jar(cookie);
const toughCookie = require('tough-cookie');

const COOKIE_KEY = 'https://pathofexile.com';
const BASE_URL = 'https://www.pathofexile.com';
const LOGIN = '/login';
const MY_ACCOUNT = '/my-account';
const GET_CHARACTERS = '/character-window/get-characters';
const GET_CHARACTER_ITEMS = '/character-window/get-items';
const GET_STASH_ITEMS = '/character-window/get-stash-items';

function login(email, password, rememberLogin) {
  return new Promise((resolve, reject) => {
    getLoginHash()
      .then(hash => {
        apiRequest({
          jar,
          form: {
            hash,
            login: 'Login',
            login_email: email,
            login_password: password,
            remember_me: rememberLogin ? '1' : '0',
          },
          method: 'POST',
          url: BASE_URL + LOGIN
        }, (err, res, body) => {
          if (res.statusCode === 302) {
            getAccountName().then(accountName => {
              resolve({ loggedIn: true, accountName: accountName });
            })
              .catch(err => {
                resolve({ loggedIn: false })
              });
          } else {
            resolve({ loggedIn: false });
          }
        });
      })
      .catch(err => {
        reject(err)
      });
  });
}

function logout() {
  return new Promise((resolve, reject) => {
    this.clearSession();
    resolve();
  });
}

function getLoginHash() {
  return new Promise((resolve, reject) => {
    apiRequest({ jar, url: BASE_URL + LOGIN }, (err, res, body) => {
      const needsCaptcha = body.match(/<input name="captcha/);
      if (needsCaptcha) {
        reject(new Error('Login requires captcha, use session id instead'));
      } else {
        const regexParts = body.match(/<input type="hidden" name="hash" value="([^"]*)"/);
        if (!!regexParts && regexParts.length > 1) {
          resolve(regexParts[1]);
        } else {
          reject(new Error('Failed to extract token from login page'));
        }
      }
    });
  });
}

function setSessionId(sessionId, rejectIfMissingCookie = false) {
  const cookies = jar.getCookies(COOKIE_KEY);

  if (!cookies || cookies.length === 0) {
    if (rejectIfMissingCookie) {
      return Promise.reject('Failed to get cookie from website');
    }
    // get cookies from website
    return new Promise((resolve, reject) => {
      apiRequest({ url: BASE_URL }, (err, res, body) => {
        setSessionCookie(cookies, sessionId);
        setSessionId(sessionId, true)
          .then(result => resolve(result))
          .catch(err => reject(err));
      });
    });
  }

  return new Promise((resolve, reject) => {
    setSessionCookie(cookies, sessionId);
    getAccountName()
      .then(accountName => resolve({ loggedIn: true, accountName: accountName }))
      .catch(err => reject(new Error('Invalid session id')));
  });
}

function setSessionCookie(cookies, sessionId) {
  let cookie = cookies.find(cookie => cookie.key === 'POESESSID');

  if (!cookie) {
    cookie = new toughCookie.Cookie({
      key: 'POESESSID',
      path: '/',
      httpOnly: true,
      hostOnly: false,
      domain: '.pathofexile.com'
    });
  }
  cookie.value = sessionId.trim();
  jar.setCookie(cookie.toString(), COOKIE_KEY);
}

function clearSession() {
  const cookies = jar.getCookies(COOKIE_KEY);

  if (cookies && cookies.length > 0) {
    cookies[0].value = 'deleted';
    jar.setCookie(cookies[0].toString(), COOKIE_KEY);
  }
}

function getAccountName() {
  return new Promise((resolve, reject) => {
    apiRequest({ jar, url: BASE_URL + MY_ACCOUNT }, (err, res, body) => {
      const regexParts = body.match(/<h1 class="name">([^<]*)</);
      if (!!regexParts && regexParts.length > 1) {
        resolve(regexParts[1]);
      } else {
        reject(new Error('Failed to find account name'));
      }
    });
  });
}

function getCharacters(accountName) {
  return new Promise((resolve, reject) => {
    apiRequest({
      jar,
      json: true,
      form: { accountName },
      method: 'POST',
      url: BASE_URL + GET_CHARACTERS,
    }, (err, res, body) => {
      if (!!res && res.statusCode === 200) {
        resolve(body);
      } else {
        reject(new Error('Failed to retrieve characters'));
      }
    });
  });
}

function getCharacterItems(accountName, character) {
  return new Promise((resolve, reject) => {
    apiRequest({
      jar,
      json: true,
      form: { accountName, character },
      method: 'POST',
      url: BASE_URL + GET_CHARACTER_ITEMS,
    }, (err, res, body) => {
      if (!!res && res.statusCode === 200) {
        resolve(body);
      } else {
        reject(new Error('Failed to retrieve character items'));
      }
    });
  });
}

function getStashTab(accountName, tabIndex, league, includeTabList) {
  return new Promise((resolve, reject) => {
    apiRequest({
      jar,
      json: true,
      url: BASE_URL + GET_STASH_ITEMS,
      qs: {
        accountName,
        tabIndex,
        league,
        tabs: includeTabList ? '1' : '0',
      }
    }, (err, res, body) => {
      if (!!res && res.statusCode === 200) {
        resolve(body);
      } else {
        reject(new Error('Failed to retrieve stash tab: '));
      }
    });
  });
}

function apiRequest(options, callback) {
  limiter.removeTokens(1, () => request(options, callback));
}

module.exports = {
  login,
  logout,
  setSessionId,
  clearSession,
  getAccountName,
  getCharacters,
  getCharacterItems,
  getStashTab,
};