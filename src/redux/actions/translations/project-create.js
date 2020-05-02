import { EVENT_TYPES } from '../../../constants';

const create = (json, lang) => ({
  json,
  lang,
  type: EVENT_TYPES.TRANSLATIONS_PROJECT_CREATE,
});

export default create;
