import { EventEmitter } from 'events';
import isstring from 'lodash.isstring';
// punkbeer
import { clone, update } from './../utils/ObjectUtils';

class AbstractStore {

  constructor (ostate, dispatcher) {
    this._state = clone(ostate);
    this._dispatcher = dispatcher;
    this._emitter = new EventEmitter();
    this._initDispatcher();
  }

  /**
   * Update store's states
   * @param {Object} ostate
   */
  setState (ostate) {
    this._state = update(this._state, ostate);
    this._emitChange();
  }

  getState (key) {
    const state = clone(this._state);
    if (key && isstring(key)) {
      return state[key];
    }
    return state;
  }

  _initDispatcher () {
    const name = this.constructor.NAME;
    this._dispatcher.register(
      // eslint-disable-next-line
      () => console.error(`missing _initDispatcher override for ${name}`)
    );
  }

  _emitChange () {
    const evt = this.constructor.CHANGE_EVENT;
    this._emitter.emit(evt, this._state);
  }

  subscribe (cb) {
    const evt = this.constructor.CHANGE_EVENT;
    this._emitter.addListener(evt, cb);
  }

  unsubscribe (cb) {
    const evt = this.constructor.CHANGE_EVENT;
    this._emitter.removeListener(evt, cb);
  }

}

export default AbstractStore;
