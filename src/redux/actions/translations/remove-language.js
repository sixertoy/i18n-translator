import { EVENT_TYPES } from '../../../constants';

const removeLanguage = lang => ({
  lang,
  type: EVENT_TYPES.TRANSLATIONS_LANG_REMOVE,
});

export default removeLanguage;
