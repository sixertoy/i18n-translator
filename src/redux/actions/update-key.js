import { EVENT_TYPES } from '../../constants';

const updateKey = ({ previous, project, update }) => {
  const values = [previous, update];
  return { project, type: EVENT_TYPES.LANGUAGE_KEY_UPDATE, values };
};

export default updateKey;
