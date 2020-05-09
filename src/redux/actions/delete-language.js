import { EVENT_TYPES } from '../../constants';

const deleteLanguage = ({ lang, project }) => {
  return { lang, project, type: EVENT_TYPES.LANGUAGE_DELETE };
};

export default deleteLanguage;
