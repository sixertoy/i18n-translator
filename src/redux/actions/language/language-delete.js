import { EVENT_TYPES } from '../../../constants';

const deleteLanguage = lang => ({
  lang,
  type: EVENT_TYPES.LANGUAGE_DELETE,
});

export default deleteLanguage;
