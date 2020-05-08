import { EVENT_TYPES } from '../../../constants';

const cloneProject = id => {
  return {
    id,
    type: EVENT_TYPES.PROJECT_CLONE,
  };
};

export default cloneProject;
