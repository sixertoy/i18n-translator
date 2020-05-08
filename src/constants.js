export const PERSIST_STORAGE_KEY = 'i18n_translation_editor::';

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
  // Language
  LANGUAGE_CLEAR: 'onLanguageClear',
  LANGUAGE_CLONE: 'onLanguageClone',
  LANGUAGE_COLLAPSE: 'onLanguageCollapse',
  LANGUAGE_DELETE: 'onLanguageDelete',
  LANGUAGE_DELETE_KEY: 'onLanguageDeleteKey',
  LANGUAGE_UPDATE_VALUE: 'onLanguageUpdateValue',
  // Loading
  LOADING_COMPLETE: 'onLoadingComplete',
  LOADING_START: 'onLoadingStart',
  // Projects
  PROJECT_CLONE: 'onProjectClone',
  PROJECT_CREATE: 'onProjectCreate',
  PROJECT_DELETE: 'onProjectDelete',
  PROJECT_UPDATE: 'onProjectUpdate',
  // Theme
  THEME_CHANGE: 'onThemeChange',
  // TRANSLATIONS_PROJECT_TOGGLE_FAV: 'onTranslationsProjectToggleFav',
  // TRANSLATIONS_VALUE_ADD: 'onTranslationsValueAdd',
  // TRANSLATIONS_VALUE_DELETE: 'onTranslationsValueDelete',
  // TRANSLATIONS_PRIMARY_KEY_ADD: 'onTranslationsPrimaryKeyAdd',
  // TRANSLATIONS_PRIMARY_KEY_DELETE: 'onTranslationsPrimaryKeyDelete',
  // TRANSLATIONS_PRIMARY_KEY_UPDATE: 'onTranslationsPrimaryKeyUpdate',
};

export const DEFAULT_LANG = 'en-US';

export default EVENT_TYPES;
