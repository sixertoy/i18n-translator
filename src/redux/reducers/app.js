import { EVENT_TYPES } from '../../constants';

export const loading = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.LOADING_START:
      return true;
    case EVENT_TYPES.LOADING_COMPLETE:
      return false;
    default:
      return state;
  }
};

export const version = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const logged = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.APP_USER_LOGIN:
      return true;
    case EVENT_TYPES.APP_USER_LOGOUT:
      return false;
    default:
      return state;
  }
};

export const project = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_CREATE:
      return action.id;
    default:
      return state;
  }
};
