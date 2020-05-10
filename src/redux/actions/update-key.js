import { EVENT_TYPES } from '../../constants';

const updateKey = ({ previous, project, update }) => {
  return { previous, project, type: EVENT_TYPES.LANGUAGE_KEY_UPDATE, update };
};

export default updateKey;
