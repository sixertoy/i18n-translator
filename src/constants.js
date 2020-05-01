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
  TRANSLATIONS_CREATE: 'onTranslationsCreate',
  TRANSLATIONS_UPDATE: 'onTranslationsUpdate',
};

export default EVENT_TYPES;
