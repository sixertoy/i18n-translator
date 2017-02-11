import AbstractAction from './../../core/abstracts/AbstractAction';
// lib
import Constants from './../constants';
// languages
import locales from './../../data/locales';

class ApplicationAction extends AbstractAction {

  createNewLanguage (key) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.CREATE_NEW_LANGUAGE,
      data: key
    });
  }

  loadLanguages () {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.LOAD_LANGUAGES,
      data: locales
    });
  }

  updateLanguageValue (data) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.UPDATE_VALUE,
      data
    });
  }

  saveLanguages () {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.SAVE_LANGUAGES
    });
  }

  saveLanguagesDiff () {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.SAVE_LANGUAGES_DIFF
    });
  }

}

export default ApplicationAction;
