import AbstractAction from './../../core/abstracts/AbstractAction';
// lib
import Constants from './../constants';

class ApplicationAction extends AbstractAction {

  togglePopin (type) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.TOGGLE_POPIN,
      data: type
    });
  }

  updateValue (data) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.UPDATE_VALUE,
      data
    });
  }

  exportDiffChanges () {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.EXPORT_DIFF_CHANGES
    });
  }

  addLanguage (langkey, json) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.ADD_LANGUAGE,
      data: [langkey, json]
    });
  }

}

export default ApplicationAction;
