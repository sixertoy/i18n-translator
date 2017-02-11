import isempty from 'lodash.isempty';
import queryString from 'query-string';
import isstring from 'lodash.isstring';
// punkbeer
import URLUtils from './../utils/URLUtils';
import AppConstants from './../core/AppConstants';
import BrowserUtils from './../utils/BrowserUtils';

class RouteObserver {

  constructor (facade) {
    this._facade = facade;
    this._previous = false;
    this._islistening = false;
    this._router = facade.getRouter();
  }

  _beforeRouteChangeHandler (evt) {
    let action;
    const store = this.getFacade().getStore('RouteStore');
    const previousname = store.getState().active;
    if (isstring(previousname) && !isempty(previousname)) {
      // eslint-disable-next-line
      console.log(`RouteObserver._beforeRouteChangeHandler :: call ${previousname}.onRouteLeave`);
      action = this.getFacade().getRouteAction(previousname);
      action.onRouteLeave(previousname);
    }
    this._onURLChangeHandler(evt);
  }

  /**
  * Called each time URL change without reloading the page
  * @param  {Object} evt https://mzl.la/2je41D6
  */
  _onURLChangeHandler (evt) {
    const params = {};
    let parsed = null;
    let action = null;
    let search = false;
    let routeObj = false;
    let valid = (arguments.length && evt);

    valid = valid && isstring(evt.newURL) && !isempty(evt.newURL);
    if (!valid) {
      // eslint-disable-next-line
      console.log('RouteObserver._onURLChangeHandler :: invalid URL argument');
      return false;
    }

    parsed = URLUtils.parse(evt.newURL);
    if (parsed.href !== evt.newURL) {
      // if url has changed during parsing will reload with new URL
      return BrowserUtils.navigateTo(parsed.toString());
    }

    routeObj = this.getRouter().matchURL(parsed.hash);
    if (routeObj.params && routeObj.params.has('search')) {
      // if current URL got search/query parameters
      search = routeObj.params.get('search');
      search = queryString.parse(search);
      // remove empty values
      Object.entries(search).reduce((acc, [key, value]) => {
        if (value) {
          params[key] = value;
        }
        return acc;
      }, params);
    }

    if (!routeObj || isstring(routeObj.redirect)) {
      // if no route matching => home
      action = this.getFacade().getAction('BrowserHistoryAction');
      return action.redirectTo(routeObj, params);
    }

    action = this.getFacade().getRouteAction(routeObj.name);
    if (!action) {
      // eslint-disable-next-line
      console.log(`RouteObserver._onURLChangeHandler :: no route action found ${routeObj.name}`);
      action = this.getFacade().getAction('BrowserHistoryAction');
      routeObj = this._router.getRoute(AppConstants.ROUTES.NOT_FOUND);
      return action.redirectTo(routeObj, params);
    }

    // eslint-disable-next-line
    console.log(`RouteObserver._onURLChangeHandler :: call ${routeObj.name}.onRouteEnter`);
    action.onRouteEnter(routeObj, params);
    return true;
  }

  /* ------------------------------------------

   Getters

   ------------------------------------------ */

  getFacade () {
    return this._facade;
  }

  getRouter () {
    return this._router;
  }

  /* ------------------------------------------

   Publics

   ------------------------------------------ */

  /**
   * Start listening URL changes
   */
  start () {
    this._islistening = true;
    // start listening hash change event
    window.addEventListener('hashchange', e => this._beforeRouteChangeHandler(e));
    // simulate hash change event object
    setTimeout(() => {
      this._onURLChangeHandler({
        oldURL: false,
        newURL: BrowserUtils.getCurrentUrl()
      });
    });
  }

  /**
   * Start listening URL changes
   */
  stop () {
    this._islistening = false;
    window.removeEventListener('hashchange', e => this._beforeRouteChangeHandler(e));
  }

}

export default RouteObserver;
