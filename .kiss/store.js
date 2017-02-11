import Constants from './../constants';
import AbstractStore from './../../core/abstracts/AbstractStore';

class %%name%%Store extends AbstractStore {

  constructor (dispatcher) {
    super({}, dispatcher);
  }

  _initDispatcher () {
    const token = this._dispatcher.register((obj) => {
      switch (obj.type) {
      default:
        // empty case
        break;
      }
    });
    %%name%%Store.DISPATCH_TOKEN = token;
  }

}

export default %%name%%Store;
