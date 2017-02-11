import AppConstants from './../core/AppConstants';

class AbstractRouteAction {

  constructor (facade, dispatcher) {
    this._facade = facade;
    this._dispatcher = dispatcher;
  }

  getFacade () {
    return this._facade;
  }

  getDispatcher () {
    return this._dispatcher;
  }

  onRouteLeave (routename) {
    this.getDispatcher().dispatch({
      type: AppConstants.FLUX.ROUTE_LEAVE,
      data: routename
    });
  }

}

export default AbstractRouteAction;
