import { diff, apply } from 'rus-diff';
// project
// import { fillwith, clone, entries } from './../../core/utils/ObjectUtils';
import { alphasort } from './../../core/utils/ArrayUtils';
import Constants from './../constants';
import AbstractStore from './../../core/abstracts/AbstractStore';

class ApplicationStore extends AbstractStore {

  constructor (dispatcher) {
    super({
      json: {},
      langs: [],
      values: [],
      origin: {},
      primarykeys: [],
      openpopin: false
    }, dispatcher);
    // store original languages
    this._origin = [];
  }

  /**
   * @description Get all existing primary keys, filter the params one
   * by checking if already exists in current collection
   * then concat with existing and ordering doing an alphanumeric sort
   *
   * @param {String} langkey
   * @param {String} jsonstring
   */
  _onAddLanguage ([langkey, jsonstring]) {
    let values = JSON.parse(jsonstring);
    const origin = this.getState('origin');
    const langs = this.getState('langs').concat([langkey]);

    // save origin
    origin[langkey] = jsonstring;

    let primarykeys = this.getState('primarykeys');
    primarykeys = Object.keys(values)
      .filter(key => (primarykeys.indexOf(key) === -1))
      .concat(primarykeys)
      .sort(alphasort);

    values = this.getState('values').concat([values]);
    this.setState({
      langs,
      origin,
      values,
      primarykeys
    });
  }

  _onUpdateValue ({ primarykey, lang, value }) {
    const index = this.getState('langs').indexOf(lang);
    const values = this.getState('values');
    values[index][primarykey] = value;
    this.setState({
      values
    });
  }

  _onExportDiffChanges () {
    const langs = this.getState('langs');
    const values = this.getState('values');
    const current = langs.reduce((acc, lang) =>
      Object.assign(acc, { [lang]: values[langs.indexOf(lang)] }), {});
    const json = apply({}, diff(current, this.getState('origin')));
    this.setState({
      json
    });
  }

  _initDispatcher () {
    const token = this._dispatcher.register((obj) => {
      switch (obj.type) {
      case Constants.FLUX.UPDATE_VALUE:
        this._onUpdateValue(obj.data);
        break;
      case Constants.FLUX.EXPORT_DIFF_CHANGES:
        this._onExportDiffChanges();
        break;
      case Constants.FLUX.ADD_LANGUAGE:
        // add a new imported language
        this._onAddLanguage(obj.data);
        break;
      case Constants.FLUX.TOGGLE_POPIN:
        // open/close popin
        this.setState({
          openpopin: !this.getState('openpopin')
            ? obj.data
            : false
        });
        break;
      default:
        // empty case
        break;
      }
    });
    ApplicationStore.DISPATCH_TOKEN = token;
  }

}

export default ApplicationStore;
