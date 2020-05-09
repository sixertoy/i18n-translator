export const PERSIST_STORAGE_KEY = 'i18n_translation_editor::';

export const LANGUAGES_FREE_MAX = 3;

export const LANGUAGES_FREE = {
  // using language keys RFC 3066
  'de-DE': 'Deutsch',
  'en-US': 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'pt-PT': 'Portugues',
};

export const EVENT_TYPES = {
  APP_THEME_CHANGE: 'onThemeChange',
  APP_USER_LOGIN: 'onUserLogin',
  APP_USER_LOGOUT: 'onUserLogout',
  // Language
  LANGUAGE_CLEAR: 'onLanguageClear',
  LANGUAGE_CLONE: 'onLanguageClone',
  LANGUAGE_COLLAPSE: 'onLanguageCollapse',
  LANGUAGE_CREATE: 'onLanguageCreate',
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
};

export const DEFAULT_LANG = 'en-US';

export default EVENT_TYPES;
