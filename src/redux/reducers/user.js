import isEmpty from 'lodash.isempty';

import { EVENT_TYPES } from '../../constants';
import hydrate from '../hydrate';
import { user as model } from '../models';

const createUser = (state, action) => {
  const { user } = action;
  const next = hydrate(model, user);
  return next;
};

const createProject = (state, action) => {
  const { draft } = action;
  const mtime = Date.now();
  return { ...state, mtime, projects: [draft.id] };
};

const updateUserTime = state => {
  const mtime = Date.now();
  return { ...state, mtime };
};

const user = (state = {}, action) => {
  let isempty = true;
  switch (action.type) {
    case EVENT_TYPES.USER_DELETE:
      return {};
    case EVENT_TYPES.USER_UPDATE:
      isempty = isEmpty(action.user);
      if (isempty) return state;
      return createUser(state, action);
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.PROJECT_CLEAR:
    case EVENT_TYPES.PROJECT_DELETE:
    case EVENT_TYPES.LANGUAGE_CLEAR:
    case EVENT_TYPES.LANGUAGE_CREATE:
    case EVENT_TYPES.LANGUAGE_DELETE:
    case EVENT_TYPES.PROJECT_NAME_UPDATE:
    case EVENT_TYPES.LANGUAGE_KEY_CREATE:
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
    case EVENT_TYPES.LANGUAGE_KEY_UPDATE:
    case EVENT_TYPES.LANGUAGE_TRANSLATION_UPDATE:
      return updateUserTime(state);
    default:
      return state;
  }
};

export default user;
