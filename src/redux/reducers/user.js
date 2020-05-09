import { EVENT_TYPES } from '../../constants';

const user = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.APP_USER_LOGIN:
      return { ...state, logged: true };
    case EVENT_TYPES.APP_USER_LOGOUT:
      return { ...state, logged: false };
    default:
      return state;
  }
};

export default user;
