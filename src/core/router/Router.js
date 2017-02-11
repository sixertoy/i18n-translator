import isstring from 'lodash.isstring';
// punkbeer
import URLUtils from './../utils/URLUtils';

class Router {

  /**
   * @param  {ApplicationFacade} facade
   * @param  {Array} routes
   * @param  {Object} opts
   */
  constructor (facade, routes) {
    const valid = arguments.length >= 2;
    if (!valid) {
      // eslint-disable-next-line
      console.log('Router() :: unable to initialize router');
      return;
    }
    this._facade = facade;
    this._currentRoute = null;
    this._routes = Router.pathToRegExp(routes);
  }

  /**
   * Internal to check if urlHash match a route defined pattern
   * Return an route object
   * @param {String} urlHash Hash without the # prefix
   * @return {Boolean|Object}
   */
  _getMatchingRoute (surl) {
    let hash = null;
    let params = null;
    let matches = null;

    if (!isstring(surl)) {
      throw new Error('Router.getMatchingRoute :: expects a string');
    }

    // remove hash prefix
    hash = URLUtils.removeURLHashPrefix(surl);
    matches = this._routes.map((value) => {
      params = value.pattern.exec(hash);
      return params ? [value, params] : null;
    });
    if (!matches || !matches.length) {
      return false;
    }
    return matches.filter(item => item).shift();
  }

  /* ---------------------------------------------------------------

   Publics

  --------------------------------------------------------------- */

  getRoute (key) {
    let result = [].concat(this._routes);
    if (key && isstring(key)) {
      result = result.filter(item => (item.name === key)).shift();
    }
    return result;
  }

  compile (routename, params) {
    const obj = this.getRoute(routename);
    const urlhash = URLUtils.compile(obj, params, true);
    return urlhash;
  }

  /**
   * Check if an url match with a registered routes pattern
   * @param {String} url
   * @return {Object}
   */
  matchURL (url) {
    let route = null;
    let params = null;
    let matches = false;
    if (!isstring(url)) {
      throw new Error('Router.matchURL :: expects a string');
    }
    // check if hash in param is matching a pattern
    matches = this._getMatchingRoute(url);
    if (!matches) {
      // redirect to 404
      return false;
    }
    [route, params] = matches;
    // first param return by path-to-regExp is current URL hash
    route.hash = params.shift();
    route.params = route.keys.reduce((map, { name }) => map.set(name, params.shift()), new Map());
    return route;
  }

  /* ---------------------------------------------------------------

   Statics

  --------------------------------------------------------------- */

  static pathToRegExp (routes) {
    const valid = arguments.length && Array.isArray(routes) && routes.length;
    if (!valid) {
      // eslint-disable-next-line
      console.log('Router.pathToRegExp :: can not parse routes expressions');
      return false;
    }
    return routes.map(({ path, name, redirect }) => {
      const { pattern, keys } = URLUtils.pathToRegexp(path);
      return {
        keys,
        name,
        path,
        pattern,
        redirect
      };
    });
  }

}

export default Router;
