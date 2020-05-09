import { EVENT_TYPES } from '../../constants';

const deleteLanguage = ({ lang, project }) => {
  const params = { lang, project };
  return { ...params, type: EVENT_TYPES.LANGUAGE_DELETE };
};

export default deleteLanguage;
