import { Dispatcher } from 'flux';
// core
import { StringUtils } from './../utils';

class AbstractFacade {

  constructor (appconfig) {
    this._stores = null;
    this._actions = null;
    this._services = null;
    this._routesActions = null;
    this._dispatcher = new Dispatcher();
    this._config = new Map(
      Object.entries(appconfig).filter(
        // keep only 'REACT_APP_' prefixed .env's variables
        item => (item[0].indexOf('REACT_APP_') >= 0)
      )
    );
    this._initialize();
  }

  /* ------------------------------------------------

    Initialize

  ------------------------------------------------ */

  // eslint-disable-next-line
  _initialize () {
    // should be overrided by children
  }

  _beforeStart ({ services, stores, actions, routesActions }) {
    this._initServices(services, [this._config]);
    this._initStores(stores, [this._dispatcher]);
    this._initActions(actions, [this, this._dispatcher]);
    this._initRoutesActions(routesActions, [this, this._dispatcher]);
  }

  /**
   *
   */
  _initServices (imports, params) {
    let service = null;
    this._services = new Map();
    imports.forEach((classname, name) => {
      service = Reflect.construct(classname, params);
      this._services.set(name, service);
    });
  }

  /**
   *
   */
  _initStores (imports, params) {
    let store = null;
    this._stores = new Map();
    imports.forEach((classname, name) => {
      store = Reflect.construct(classname, params);
      this._stores.set(name, store);
    });
  }

  /**
   *
   */
  _initActions (imports, params) {
    let action = null;
    this._actions = new Map();
    imports.forEach((classname, name) => {
      action = Reflect.construct(classname, params);
      this._actions.set(name, action);
    });
  }

  /**
   *
   */
  _initRoutesActions (imports, params) {
    let route = null;
    this._routesActions = new Map();
    imports.forEach((classname, name) => {
      route = Reflect.construct(classname, params);
      this._routesActions.set(name, route);
    });
  }

  /* ------------------------------------------------

    Getters

  ------------------------------------------------ */

  /**
   *
   */
  getDispacther () {
    return this._dispatcher;
  }

  /**
   *
   */
  getService (name) {
    return this._services.get(name);
  }

  /**
   *
   */
  getAction (name) {
    return this._actions.get(name);
  }

  /**
   *
   */
  getRouteAction (name) {
    let routename = name;
    let index = routename.indexOf('.');
    if (index !== -1) {
      // is a child of...
      index = (routename.lastIndexOf('.') + 1);
      routename = routename.slice(index);
    }
    routename = `${StringUtils.ucfirst(routename)}RouteAction`;
    return this._routesActions.get(routename);
  }

  /**
   *
   */
  getStore (name) {
    return this._stores.get(name);
  }

  // eslint-disable-next-line
  start () {
    // should be overrided
    // this._beforeStart(stores, services, actions, routesActions);
  }

}

export default AbstractFacade;
