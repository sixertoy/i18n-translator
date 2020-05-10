import { EVENT_TYPES } from '../../constants';

export function deleteKeysFromProject(state) {
  return state;
}

export function addKeysToProject(state) {
  return state;
}

const keys = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_DELETE:
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
      return deleteKeysFromProject(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
    case EVENT_TYPES.LANGUAGE_KEY_CREATE:
      return addKeysToProject(state, action);
    default:
      return state;
  }
};

export default keys;
