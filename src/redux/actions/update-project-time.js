import { EVENT_TYPES } from '../../constants';

const updateProjectTime = ({ project }) => {
  return { project, type: EVENT_TYPES.PROJECT_TIME_UPDATE };
};

export default updateProjectTime;
