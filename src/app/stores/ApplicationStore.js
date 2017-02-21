import { diff, apply } from 'rus-diff';
// project
import Constants from './../constants';
import { ObjectUtils } from './../../core/utils';
import AbstractStore from './../../core/abstracts/AbstractStore';

class ApplicationStore extends AbstractStore {

  constructor (dispatcher) {
    super({
      json: {},
      locales: {},
      openpopin: false,
      primarykeys: false,
      orders: ['en', 'fr']
    }, dispatcher);
    // store original languages
    this._origin = {};
  }

  _onImportLanguages ({ data }) {
    // @TODO clone data
    this._origin = data;
    const primarykeys = ObjectUtils.clone(data[0]);
    this.setState({
      primarykeys,
      openpopin: false,
      locales: [].concat(data)
    });
  }

  _onCreateNewLanguage ({ primarykey }) {
    const locales = this.getState('locales');
    // duplicate table keys, add new language to currents
    locales[primarykey] = Object.keys(this.getState('primarykeys'))
      .reduce((acc, k) => Object.assign(acc, { [k]: '' }), {});
    this.setState({
      locales,
      orders: [].concat(this.getState('orders'), [primarykey])
    });
  }

  _onUpdateValue ({ data }) {
    const locales = this.getState('locales');
    locales[data.lang][data.primarykey] = data.value;
    this.setState({
      locales
    });
  }

  _onSaveLocales () {
    let json = diff(this._origin, this.getState('locales'));
    json = apply({}, json);
    this.setState({
      json
    });
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
      case Constants.FLUX.IMPORT_LANGUAGES:
        // create a new language
        this._onImportLanguages(obj);
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
