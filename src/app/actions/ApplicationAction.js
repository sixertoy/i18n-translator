import AbstractAction from './../../core/abstracts/AbstractAction';
// lib
import Constants from './../constants';

class ApplicationAction extends AbstractAction {

  togglePopin () {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.TOGGLE_POPIN
    });
  }

  createNewLanguage (key) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.CREATE_NEW_LANGUAGE,
      data: key
    });
  }

  initializeStore (locales, tablekeys) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.INITIALIZE_APP,
      data: {
        locales,
        tablekeys
      }
    });
  }

  updateValue (data) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.UPDATE_VALUE,
      data
    });
  }

  saveLocales () {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.SAVE_LOCALES
    });
  }

}

export default ApplicationAction;
