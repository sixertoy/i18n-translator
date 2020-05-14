import { EVENT_TYPES } from '../../constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.USER_UPDATE:
      return action.user || {};
    default:
      return state;
  }
};

export default user;
