import { EVENT_TYPES } from '../../constants';

const clearLanguage = ({ project }) => {
  return { project, type: EVENT_TYPES.PROJECT_CLEAR };
};

export default clearLanguage;
