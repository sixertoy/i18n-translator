import { diff, apply } from 'rus-diff';
// project
import Constants from './../constants';
import { ObjectUtils } from './../../core/utils';
import AbstractStore from './../../core/abstracts/AbstractStore';

class ApplicationStore extends AbstractStore {

  constructor (dispatcher) {
    super({
      json: null,
      locales: null,
      tablekeys: null,
      openpopin: false,
      orders: ['en', 'fr']
    }, dispatcher);
    // store original languages
    this._origin = {};
  }

  /**
   * called when all locales files are loaded
   * store origin files data
   */
  _onApplicationInit ({ data }) {
    const { tablekeys, locales } = data;
    this._origin = ObjectUtils.clone(locales);
    this.setState({
      locales: ObjectUtils.clone(locales),
      tablekeys: ObjectUtils.clone(tablekeys)
    });
  }

  _onCreateNewLanguage (langkey) {
    const locales = this.getState('locales');
    // duplicate table keys, add new language to currents
    locales[langkey] = Object.keys(this.getState('tablekeys'))
      .reduce((acc, k) => Object.assign(acc, { [k]: '' }), {});
    this.setState({
      locales,
      orders: [].concat(this.getState('orders'), [langkey])
    });
  }

  _onUpdateValue ({ data }) {
    const locales = this.getState('locales');
    locales[data.langkey][data.key] = data.value;
    this.setState({
      locales
    });
  }

  _onSaveLocales (usediff) {
    let json = this.getState('locales');
    if (usediff) {
      json = diff(this._origin, this.getState('locales'));
      json = apply({}, json);
    }
    this.setState({
      json
    });
  }

  _initDispatcher () {
    const token = this._dispatcher.register((obj) => {
      switch (obj.type) {
      case Constants.FLUX.INITIALIZE_APP:
        this._onApplicationInit(obj);
        break;
      case Constants.FLUX.UPDATE_VALUE:
        this._onUpdateValue(obj);
        break;
      case Constants.FLUX.SAVE_LOCALES:
        // save current translation
        this._onSaveLocales(obj.data);
        break;
      case Constants.FLUX.CREATE_NEW_LANGUAGE:
        // create a new language
        this._onCreateNewLanguage(obj.data);
        break;
      case Constants.FLUX.TOGGLE_POPIN:
        // open/close popin
        this.setState({
          openpopin: !this.getState('openpopin')
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
