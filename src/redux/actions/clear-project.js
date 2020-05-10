import { EVENT_TYPES } from '../../constants';

const clearProject = ({ project }) => {
  return { project, type: EVENT_TYPES.PROJECT_CLEAR };
};

export default clearProject;
