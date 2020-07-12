export const KEY_CODE_ENTER = 13;
export const PERSIST_STORAGE_KEY = 'i18n_translation_editor::';

export const MAX_FREE_PROJECTS = 1;
export const MAX_FREE_LANGUAGES = 3;
export const MAX_FREE_TRANSLATIONS = 50;
export const RESPONSIVE_BREAKPOINT = 600;

export const FIREBASE_AUTH_LOCAL = 'local';
export const FIREBASE_AUTH_SESSION = 'session';
export const FIREBASE_EMAIL_SIGNIN_FALLBACK = 'https://typpo.space';

export const FIREBASE_PROVIDER_EMAIL = 'email';
export const FIREBASE_PROVIDER_GOOGLE = 'google.com';
export const FIREBASE_PROVIDER_GITHUB = 'github.com';
export const FIREBASE_PROVIDER_ANON = 'anonymous';

export const DEFAULT_LANGUAGES = {
  // http://www.i18nguy.com/unicode/language-identifiers.html
  'de-DE': 'Deutsch',
  'en-GB': 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'pt-PT': 'Português',
};

export const EVENT_TYPES = {
  APP_UPDATE_SUBSCRIBING_EMAIL: 'onAppUpdateSubscribingEmail',
  APP_UPDATE_THEME: 'onAppUpdateTheme',
  APP_UPDATE_VERSION: 'onAppUpdateVersion',
  DRAFT_COMMIT: 'onDraftCommit',
  DRAFT_CREATE: 'onDraftCreate',
  DRAFT_HYDRATE: 'onDraftHydrate',
  DRAFT_UPDATE: 'onDraftUpdate',
  LANGUAGE_ADD: 'onLanguageAdd',
  LANGUAGE_CLEAR: 'onLanguageClear',
  LANGUAGE_DELETE: 'onLanguageDelete',
  LANGUAGE_KEY_CREATE: 'onLanguageKeyCreate',
  LANGUAGE_KEY_DELETE: 'onLanguageKeyDelete',
  LANGUAGE_KEY_UPDATE: 'onLanguageKeyUpdate',
  LANGUAGE_TOGGLE_COLLAPSE: 'onLanguageToggleCollapse',
  LANGUAGE_TRANSLATION_UPDATE: 'onLanguageTranslationUpdate',
  LOADING_COMPLETE: 'onLoadingComplete',
  LOADING_START: 'onLoadingStart',
  PROJECT_CLEAR: 'onProjectClear',
  PROJECT_CLONE: 'onProjectClone',
  PROJECT_CREATE: 'onProjectCreate',
  PROJECT_DELETE: 'onProjectDelete',
  PROJECT_NAME_UPDATE: 'onProjectNameUpdate',
  PROJECT_TIME_UPDATE: 'onProjectTimeUpdate',
  PROJECT_TOGGLE_FAV: 'onProjectToggleFav',
  USER_DELETE: 'onUserDelete',
  USER_UPDATE: 'onUserUpdate',
};

export const EDITOR_DEFAULT_CONTENT = JSON.stringify(
  {
    LOGIN_SIGN_IN: 'Sign in',
    LOGIN_SIGN_UP: 'Sign up',
    MENU_ABOUT: 'About us',
    MENU_ACCOUNT: 'My Account',
    MENU_CONTACT: 'Contact us',
    MENU_HOME: 'Home',
  },
  null,
  2
);
