import URLParser from 'url-parse';
import queryString from 'query-string';

class AbstractService {

  constructor (config) {
    this._config = config;
    this._cache = new Map();
  }

  getConfig (name) {
    return this._config.get(name);
  }

  request (url, opts) {
    let json;
    if (this._cache.has(url)) {
      json = this._cache.get(url);
      return Promise.resolve(json);
    }
    return fetch(url, opts)
      .then((response) => {
        json = response.json();
        this._cache.set(url, json);
        return json;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  static getQueryURL (base, params) {
    const url = URLParser(base);
    const opts = queryString.stringify(params);
    url.set('query', opts);
    return url.toString();
  }

}

export default AbstractService;
