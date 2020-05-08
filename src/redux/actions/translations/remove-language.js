import { EVENT_TYPES } from '../../../constants';

const removeLanguage = lang => ({
  lang,
  type: EVENT_TYPES.LANGUAGE_DELETE,
});

export default removeLanguage;
