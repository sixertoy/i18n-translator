import { EVENT_TYPES } from '../../constants';

const updateTranslation = ({ key, lang, project, value }) => {
  const action = { key, lang, project, value };
  return { ...action, type: EVENT_TYPES.LANGUAGE_UPDATE_TRANSLATION };
};

export default updateTranslation;
