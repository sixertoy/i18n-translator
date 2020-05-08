import { EVENT_TYPES } from '../../../constants';

const cloneLanguage = lang => ({
  lang,
  type: EVENT_TYPES.LANGUAGE_CLONE,
});

export default cloneLanguage;
