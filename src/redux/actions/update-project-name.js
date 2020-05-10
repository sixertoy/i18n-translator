import { EVENT_TYPES } from '../../constants';

const deleteKey = ({ name, project }) => {
  return { name, project, type: EVENT_TYPES.PROJECT_NAME_UPDATE };
};

export default deleteKey;
