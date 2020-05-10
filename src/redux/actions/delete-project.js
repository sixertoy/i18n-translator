import { EVENT_TYPES } from '../../constants';

const deleteProject = project => {
  return { project, type: EVENT_TYPES.PROJECT_DELETE };
};

export default deleteProject;
