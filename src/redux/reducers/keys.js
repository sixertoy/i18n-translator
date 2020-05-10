import omit from 'lodash.omit';
import uniq from 'lodash.uniq';

import { EVENT_TYPES } from '../../constants';

export function deleteKey(state, action) {
  const { key, project } = action;
  const previous = state[project];
  const update = previous.filter(k => k !== key);
  return { ...state, [project]: update };
}

export function languageCreate(state, action) {
  const { project, translations } = action;
  const previous = state[project];
  const next = Object.keys(translations);
  const merged = [...previous, ...next];
  const sorted = uniq(merged).sort();
  return { ...state, [project]: sorted };
}

export function deleteProject(state, action) {
  const { project } = action;
  const next = omit(state, [project]);
  return next;
}

export function createProject(state, action) {
  const { id } = action;
  return { ...state, [id]: [] };
}

const keys = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
      return languageCreate(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
      return deleteKey(state, action);
    default:
      return state;
  }
};

export default keys;
