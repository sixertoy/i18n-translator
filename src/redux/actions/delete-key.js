import { EVENT_TYPES } from '../../constants';

const deleteKey = ({ key, project }) => {
  return { key, project, type: EVENT_TYPES.LANGUAGE_DELETE_KEY };
};

export default deleteKey;
