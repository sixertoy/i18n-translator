import { EVENT_TYPES } from '../../../constants';

const updateAnonymous = () => {
  return { type: EVENT_TYPES.APP_UPDATE_ANON, value: true };
};

export default updateAnonymous;
