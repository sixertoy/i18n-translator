import { EVENT_TYPES } from '../../constants';

const deleteKey = ({ id: project, key }) => {
  return { key, project, type: EVENT_TYPES.LANGUAGE_DELETE_KEY };
};

export default deleteKey;
