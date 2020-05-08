import { EVENT_TYPES } from '../../../constants';

const updateProject = id => {
  return {
    id,
    type: EVENT_TYPES.PROJECT_UPDATE,
  };
};

export default updateProject;
