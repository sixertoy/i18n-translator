import { EVENT_TYPES } from '../../../constants';

const clearLanguage = lang => ({
  lang,
  type: EVENT_TYPES.LANGUAGE_CLEAR,
});

export default clearLanguage;
