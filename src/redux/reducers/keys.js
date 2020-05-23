import get from 'lodash.get';
import omit from 'lodash.omit';
import uniq from 'lodash.uniq';

import { EVENT_TYPES } from '../../constants';

export function languageCreate(state, action) {
  const { project, translations } = action;
  const previous = get(state, project);
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
  const { draft } = action;
  const obj = JSON.parse(draft.content);
  const keys = Object.keys(obj);
  return { ...state, [draft.id]: keys };
}

export function createKey(state, action) {
  const { key, project } = action;
  const previous = get(state, project);
  const update = [...previous, key].sort();
  return { ...state, [project]: update };
}

export function deleteKey(state, action) {
  const { key, project } = action;
  const keys = get(state, project);
  const update = keys.filter(k => k !== key);
  return { ...state, [project]: update };
}

export function updateKey(state, action) {
  const { previous, project, update } = action;
  const keys = get(state, project);
  const next = keys.map(v => (v !== previous ? v : update));
  return { ...state, [project]: next };
}

const keys = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
      return languageCreate(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_CREATE:
      return createKey(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
      return deleteKey(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_UPDATE:
      return updateKey(state, action);
    default:
      return state;
  }
};

export default keys;
