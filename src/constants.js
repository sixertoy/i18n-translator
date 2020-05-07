export const LANGS = {
  // using language keys RFC 3066
  'de-DE': 'Deutsch',
  'en-US': 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'pt-PT': 'Portugues',
};

export const EVENT_TYPES = {
  LOADING_COMPLETE: 'onLoadingComplete',
  LOADING_START: 'onLoadingStart',
  THEME_CHANGE: 'onThemeChange',
  // TRANSLATIONS_PRIMARY_KEY_ADD: 'onTranslationsPrimaryKeyAdd',
  // TRANSLATIONS_PRIMARY_KEY_DELETE: 'onTranslationsPrimaryKeyDelete',
  // TRANSLATIONS_PRIMARY_KEY_UPDATE: 'onTranslationsPrimaryKeyUpdate',
  TRANSLATIONS_LANG_CLEAR: 'onTranslationsLangClear',
  TRANSLATIONS_LANG_REMOVE: 'onTranslationsLangRemove',
  // TRANSLATIONS_PROJECT_TOGGLE_FAV: 'onTranslationsProjectToggleFav',
  // TRANSLATIONS_VALUE_ADD: 'onTranslationsValueAdd',
  // TRANSLATIONS_VALUE_DELETE: 'onTranslationsValueDelete',
  TRANSLATIONS_PROJECT_CREATE: 'onTranslationsProjectCreate',
  TRANSLATIONS_VALUE_UPDATE: 'onTranslationsValueUdpate',
};

export const DEFAULT_LANG = 'en-US';

export default EVENT_TYPES;
