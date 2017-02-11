import isempty from 'lodash.isempty';
// project
import Constants from './../constants';
import { ObjectUtils } from './../../core/utils';
import translationKeys from './../../data/translation-keys.json';
import AbstractStore from './../../core/abstracts/AbstractStore';

class ApplicationStore extends AbstractStore {

  constructor (dispatcher) {
    super({
      diff: {},
      translations: {},
      orders: ['en', 'fr'],
      translationkeys: translationKeys
    }, dispatcher);
    this._translations = {};
  }

  getTranslationKeys () {
    return this.getState('translationkeys');
  }

  getTranslations () {
    return this.getState('translations');
  }

  _onCreateNewLanguage ({ langkey }) {
    let obj = {};
    obj[langkey] = this._createEmptyLanguage();
    obj = Object.assign(obj, this.getState('translations'));
    this.setState({
      translations: obj,
      orders: [].concat(this.getState('orders'), [langkey])
    });
  }

  _onLoadLanguages ({ data }) {
    this._translations = ObjectUtils.clone(data);
    this.setState({
      translations: data
    });
  }

  _onUpdateValue ({ data }) {
    const obj = this.getState('translations');
    obj[data.langkey][data.key] = data.value;
    this.setState({
      translations: obj
    });
  }

  _createEmptyLanguage () {
    const obj = {};
    const keys = this.getState('translationkeys');
    Object.keys(keys).reduce((acc, key) => {
      obj[key] = '';
      return acc;
    }, obj);
    return obj;
  }

  _onSaveLanguageDiff () {
    const diff = {};
    let translated = '';
    const updates = this.getState('translations');
    Object.entries(updates).forEach(([langkey, pairs]) => {
      if (!ObjectUtils.has(this._translations, langkey)) {
        // if it's a new language, store all values
        diff[langkey] = ObjectUtils.clone(pairs);

      } else {
        // if not a new language
        Object.entries(pairs).forEach(([key, value]) => {
          translated = this._translations[langkey][key];
          if (value !== translated && !isempty(value)) {
            if (!ObjectUtils.has(diff, langkey)) {
              diff[langkey] = {};
            }
            diff[langkey][key] = value;
          }
        });
      }
    });
    this.setState({
      diff
    });
  }

  _initDispatcher () {
    const token = this._dispatcher.register((obj) => {
      switch (obj.type) {
      case Constants.FLUX.LOAD_LANGUAGES:
        this._onLoadLanguages(obj);
        break;
      case Constants.FLUX.UPDATE_VALUE:
        this._onUpdateValue(obj);
        break;
      case Constants.FLUX.SAVE_LANGUAGES:
        break;
      case Constants.FLUX.SAVE_LANGUAGES_DIFF:
        this._onSaveLanguageDiff();
        break;
      case Constants.FLUX.CREATE_NEW_LANGUAGE:
        this._onCreateNewLanguage(obj);
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
