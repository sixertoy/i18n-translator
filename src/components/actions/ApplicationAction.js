import AbstractAction from '../../core/abstracts/AbstractAction';
import Constants from '../constants';

class ApplicationAction extends AbstractAction {
  toggleScreen(type) {
    this.getDispatcher().dispatch({
      data: type,
      type: Constants.FLUX.TOGGLE_SCREEN,
    });
  }

  selectExport(index) {
    this.getDispatcher().dispatch({
      data: index,
      type: Constants.FLUX.SELECT_EXPORT,
    });
  }

  toggleColumn(key) {
    this.getDispatcher().dispatch({
      data: key,
      type: Constants.FLUX.TOGGLE_COLUMN,
    });
  }

  addLanguage(langkey, json) {
    this.getDispatcher().dispatch({
      data: [langkey, json],
      type: Constants.FLUX.ADD_LANGUAGE,
    });
  }

  updateValue(data) {
    this.getDispatcher().dispatch({
      data,
      type: Constants.FLUX.UPDATE_VALUE,
    });
  }

  exportDiffChanges() {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.EXPORT_DIFF_CHANGES,
    });
  }
}

export default ApplicationAction;
