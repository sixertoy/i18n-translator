import { EVENT_TYPES } from '../../constants';

const clearLanguage = ({ lang, project }) => {
  return { lang, project, type: EVENT_TYPES.LANGUAGE_CLEAR };
};

export default clearLanguage;
