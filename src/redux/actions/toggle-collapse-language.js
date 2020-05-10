import { EVENT_TYPES } from '../../constants';

const toggleCollapseLanguage = ({ lang, project }) => {
  return { lang, project, type: EVENT_TYPES.LANGUAGE_TOGGLE_COLLAPSE };
};

export default toggleCollapseLanguage;
