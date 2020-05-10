import { EVENT_TYPES } from '../../constants';

const deleteKey = ({ key, project }) => {
  return { key, project, type: EVENT_TYPES.LANGUAGE_KEY_DELETE };
};

export default deleteKey;
