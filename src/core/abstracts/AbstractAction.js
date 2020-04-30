class AbstractAction {
  constructor(facade, dispatcher) {
    this._facade = facade;
    this._dispatcher = dispatcher;
  }

  getFacade() {
    return this._facade;
  }

  getDispatcher() {
    return this._dispatcher;
  }
}

export default AbstractAction;
