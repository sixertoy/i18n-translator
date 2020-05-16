export const MAX_FREE_LANGUAGES = 3;

export const DEFAULT_LANGUAGES = {
  // using language keys RFC 3066
  'de-DE': 'Deutsch',
  'en-US': 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'pt-PT': 'Portugues',
};

export const EVENT_TYPES = {
  APP_UPDATE_ANON: 'onAppUpdateAnonymous',
  APP_UPDATE_SUBSCRIBING_EMAIL: 'onAppUpdateSubscribingEmail',
  APP_UPDATE_THEME: 'onAppUpdateTheme',
  APP_UPDATE_VERSION: 'onAppUpdateVersion',
  LANGUAGE_CLEAR: 'onLanguageClear',
  LANGUAGE_CREATE: 'onLanguageCreate',
  LANGUAGE_DELETE: 'onLanguageDelete',
  LANGUAGE_KEY_CREATE: 'onLanguageKeyCreate',
  LANGUAGE_KEY_DELETE: 'onLanguageKeyDelete',
  LANGUAGE_KEY_UPDATE: 'onLanguageKeyUpdate',
  LANGUAGE_TOGGLE_COLLAPSE: 'onLanguageToggleCollapse',
  LANGUAGE_TRANSLATION_UPDATE: 'onLanguageTranslationUpdate',
  LOADING_COMPLETE: 'onLoadingComplete',
  LOADING_START: 'onLoadingStart',
  PROJECT_CLEAR: 'onProjectClear',
  PROJECT_CREATE: 'onProjectCreate',
  PROJECT_DELETE: 'onProjectDelete',
  PROJECT_NAME_UPDATE: 'onProjectNameUpdate',
  PROJECT_TOGGLE_FAV: 'onProjectToggleFav',
  USER_UPDATE: 'onUserUpdate',
};

export const EDITOR_DEFAULT_CONTENT = JSON.stringify(
  {
    ACTION_CHANGE_PWD: 'Change your password',
    ACTION_CHOOSE_AVATAR: 'Select an avatar (less than 300Kb)',
    ACTION_CHOOSE_PICTURE: 'Choose a picture',
    ACTION_CHOOSE_VIDEO: 'Choose a video (mp4)',
    ACTION_FOLLOW_USERNAME: 'Follow {username}',
    ACTION_SIGN_IN: 'Log in',
    ACTION_SIGN_UP: 'Sign up',
    ACTION_TO_BOOKMARK_NAME: 'Bookmark {name}',
    ACTION_TO_LIKE_NAME: 'Like {name}',
    ACTION_UNFOLLOW_USERNAME: 'Unfollow {username}',
    AVAILABLE_ON_APPSTORE: 'Available on the AppStore',
  },
  null,
  2
);

export const PERSIST_STORAGE_KEY = 'i18n_translation_editor::';
