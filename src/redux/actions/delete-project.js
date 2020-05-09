import { EVENT_TYPES } from '../../constants';

const deleteProject = id => {
  return { id, type: EVENT_TYPES.PROJECT_DELETE };
};

export default deleteProject;
