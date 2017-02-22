// import { diff, apply } from 'rus-diff';
// project
import { fillwith, clone, entries } from './../../core/utils/ObjectUtils';
import { deduplicate, alphasort } from './../../core/utils/ArrayUtils';
import Constants from './../constants';
import AbstractStore from './../../core/abstracts/AbstractStore';

class ApplicationStore extends AbstractStore {

  constructor (dispatcher) {
    super({
      json: {},
      langs: [],
      values: [],
      openpopin: false,
      primarykeys: false
    }, dispatcher);
    // store original languages
    this._origin = [];
  }

  _onAddLanguage ([langkey, jsonstring]) {
    const langs = [langkey]
      .concat(this.getState('langs'));
    const values = [JSON.parse(jsonstring)]
      .concat(this.getState('values'));
    this.setState({
      langs,
      values
    });
  }
    /*
    const primarykeys = values.reduce((acc, obj) => acc.concat(Object.keys(obj)), [])
      .filter(deduplicate)
      .sort(alphasort);
    // languages
    const langs = [];
    // check if all keys are in values
    values = values.map(obj => fillwith(obj, primarykeys, ''));
    */

  _onCreateNewLanguage ({ primarykey }) {
    /*
    const values = this.getState('values');
    // duplicate table keys, add new language to currents
    values[primarykey] = Object.keys(this.getState('primarykeys'))
      .reduce((acc, k) => Object.assign(acc, { [k]: '' }), {});
    this.setState({
      values,
      langs: [].concat(this.getState('langs'), [primarykey])
    });
    */
  }

  _onUpdateValue ({ data }) {
    /*
    const values = this.getState('values');
    values[data.lang][data.primarykey] = data.value;
    this.setState({
      values
    });
    */
  }

  _onSaveLocales () {
    /*
    let json = diff(this._origin, this.getState('values'));
    json = apply({}, json);
    this.setState({
      json
    });
    */
  }

  _initDispatcher () {
    const token = this._dispatcher.register((obj) => {
      switch (obj.type) {
      case Constants.FLUX.UPDATE_VALUE:
        this._onUpdateValue(obj);
        break;
      case Constants.FLUX.SAVE_LOCALES:
        // save current translation
        this._onSaveLocales();
        break;
      case Constants.FLUX.CREATE_NEW_LANGUAGE:
        // create a new language
        this._onCreateNewLanguage(obj);
        break;
      case Constants.FLUX.ADD_LANGUAGE:
        // add a new imported language
        this._onAddLanguage(obj.data);
        break;
      case Constants.FLUX.TOGGLE_POPIN:
        // open/close popin
        this.setState({
          openpopin: !this.getState('openpopin') ? obj.data : false
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
