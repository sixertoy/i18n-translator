import fromPairs from 'lodash.frompairs';
import get from 'lodash.get';

import { EVENT_TYPES } from '../../../constants';
import hydrate from '../../hydrate';
import { language as model } from '../../models';
import clearLanguage from './clear-language';
import createProject from './create-project';
import deleteKey from './delete-key';
import deleteLanguage from './delete-language';
import deleteProject from './delete-project';
import updateTranslation from './update-translation';

export function createLanguage(state, action) {
  const next = hydrate(model, action);
  return [...state, next];
}

export function toggleCollapse(state, action) {
  const { lang, project } = action;
  const next = state.map(obj => {
    if (obj.project !== project) return obj;
    if (obj.lang !== lang) return obj;
    const collapsed = !obj.collapsed;
    return { ...obj, collapsed };
  });
  return next;
}

export function clearProject(state, action) {
  const { project } = action;
  const next = state.map(obj => {
    if (obj.project !== project) return obj;
    const entries = Object.entries(obj.translations);
    const remapped = entries.map(arr => [arr[0], '']);
    const pairs = fromPairs(remapped);
    const mtime = Date.now();
    return { ...obj, mtime, translations: pairs };
  });
  return next;
}

export function createKey(state, action) {
  const { key, project } = action;
  const nextState = state.map(obj => {
    if (obj.project !== project) return obj;
    const entries = Object.entries(obj.translations);
    entries.push([key, '']);
    const pairs = fromPairs(entries);
    const mtime = Date.now();
    return { ...obj, mtime, translations: pairs };
  });
  return nextState;
}

export function updateKey(state, action) {
  const { previous, project, update } = action;
  const nextState = state.map(obj => {
    if (obj.project !== project) return obj;
    const value = get(obj, ['translations', previous]);
    const entries = Object.entries(obj.translations);
    entries.push([update, value]);
    const filtered = entries.filter(arr => arr[0] !== previous);
    const pairs = fromPairs(filtered);
    const mtime = Date.now();
    return { ...obj, mtime, translations: pairs };
  });
  return nextState;
}

const languages = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.LANGUAGE_CLEAR:
      return clearLanguage(state, action);
    // case EVENT_TYPES.LANGUAGE_ADD:
    //   return createLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_DELETE:
      return deleteLanguage(state, action);
    // case EVENT_TYPES.PROJECT_CLEAR:
    //   return clearProject(state, action);
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    // case EVENT_TYPES.LANGUAGE_TOGGLE_COLLAPSE:
    //   return toggleCollapse(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
      return deleteKey(state, action);
    // case EVENT_TYPES.LANGUAGE_KEY_CREATE:
    //   return createKey(state, action);
    // case EVENT_TYPES.LANGUAGE_KEY_UPDATE:
    //   return updateKey(state, action);
    case EVENT_TYPES.LANGUAGE_TRANSLATION_UPDATE:
      return updateTranslation(state, action);
    default:
      return state;
  }
};

export default languages;
