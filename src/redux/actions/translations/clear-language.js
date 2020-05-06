import { EVENT_TYPES } from '../../../constants';

const clearLanguage = lang => ({
  lang,
  type: EVENT_TYPES.TRANSLATIONS_LANG_CLEAR,
});

export default clearLanguage;
