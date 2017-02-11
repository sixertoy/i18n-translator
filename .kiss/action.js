import AbstractAction from './../../core/abstracts/AbstractAction';
// lib
import Constants from './../constants';

class %%name%%Action extends AbstractAction {

  %%methodName%% (emmid) {
    const service = this.getFacade().getService('');
    service.getAllTags()
      .then((data) => {});
  }

}

export default %%name%%Action;
