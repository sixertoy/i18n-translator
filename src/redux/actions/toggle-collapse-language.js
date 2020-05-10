import { EVENT_TYPES } from '../../constants';

const toggleCollapseLanguage = ({ id: project, lang }) => {
  return { lang, project, type: EVENT_TYPES.LANGUAGE_TOGGLE_COLLAPSE };
};

export default toggleCollapseLanguage;
