export const LANGS = {
  // using language keys RFC 3066
  'de-DE': 'Deutsch',
  'en-US': 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'pt-PT': 'Portugues',
};

export const DEFAULT_LANG = 'en-US';

export const EVENT_TYPES = {
  LOADING_COMPLETE: 'onLoadingComplete',
  LOADING_START: 'onLoadingStart',
  THEME_CHANGE: 'onThemeChange',
  TRANSLATIONS_ALL_CREATE: 'onTranslationsAllCreate',
  TRANSLATIONS_ALL_TOGGLE_FAV: 'onTranslationsAllToggleFav',
  TRANSLATIONS_PRIMARY_KEY_ADD: 'onTranslationsPrimaryKeyAdd',
  TRANSLATIONS_PRIMARY_KEY_DELETE: 'onTranslationsPrimaryKeyDelete',
  TRANSLATIONS_PRIMARY_KEY_UPDATE: 'onTranslationsPrimaryKeyUpdate',
  TRANSLATIONS_VALUE_ADD: 'onTranslationsValueAdd',
  TRANSLATIONS_VALUE_DELETE: 'onTranslationsValueDelete',
  TRANSLATIONS_VALUE_UPDATE: 'onTranslationsValueUdpate',
};

export default EVENT_TYPES;
