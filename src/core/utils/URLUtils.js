import URLParser from 'url-parse';
import isempty from 'lodash.isempty';
import isstring from 'lodash.isstring';
import pathToRegexp from 'path-to-regexp';
// punkbeer
import { SLASH, URL_HASH } from './StringUtils';

class URLUtils {

  static removeURLHashPrefix (url) {
    if (url.indexOf(URL_HASH) === 0) {
      return url.substring(1);
    }
    return url;
  }

  /**
   * Move a query string before a hash
   * To after the hash
   * @param {String} url
   * @return {Object} https://github.com/unshiftio/url-parse
   */
  static parse (url) {
    let query = '';
    const parsed = URLParser(url);
    if (!isstring(parsed.pathname) || (parsed.pathname.length - 1 !== SLASH)) {
      // if no pathname or no slash ending pathname add one
      parsed.pathname = SLASH;
    }
    if (!isstring(parsed.hash) || isempty(parsed.hash)) {
      // if no hash add a new one
      parsed.set('hash', `${URL_HASH}${SLASH}`);
    }
    if (parsed.hash.charAt(1) !== SLASH) {
      // if no slash after the first hash add one
      parsed.set('hash', `${URL_HASH}${SLASH}${parsed.hash.slice(1)}`);
    }
    if (isstring(parsed.query) && !isempty(parsed.query)) {
      // if query, move it at after the hash
      query = parsed.query;
      parsed.set('query', '');
    }
    // move query params at after the hash
    parsed.set('hash', `${parsed.hash}${query}`);
    return parsed;
  }

  static compile (obj, oparams, ishash) {
    let query = '';
    const params = oparams || {};
    const comp = pathToRegexp.compile(obj.path);
    if (params.search) {
      // c pas beau...
      query = `?${params.search}`;
      params.search = null;
    }
    let value = comp(params);
    if (ishash) {
      value = `${URL_HASH}${value}${SLASH}${query}`;
    }
    return value;
  }

  static pathToRegexp (path) {
    const keys = [];
    let pattern = false;
    let valid = arguments.length && isstring(path) && !isempty(path);
    valid = valid && (path.indexOf('/') >= 0);
    if (!valid) {
      // eslint-disable-next-line
      console.log('URLUtils.pathToRegexp :: wrong arguments');
      return false;
    }
    pattern = pathToRegexp(path, keys);
    return {
      pattern,
      keys
    };
  }

}

export default URLUtils;
