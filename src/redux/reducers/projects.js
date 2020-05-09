import pick from 'lodash.pick';

import { EVENT_TYPES } from '../../constants';
import MODEL from '../models/project';

export function hydrateModel(model, action, extend = {}) {
  const keys = Object.keys(model);
  const picked = pick(action, keys);
  const merged = { ...model, ...picked, ...extend };
  const next = Object.entries(merged).reduce((acc, entry) => {
    const [key, value] = entry;
    const processed = typeof value === 'function' ? value() : value;
    return { ...acc, [key]: processed };
  }, {});
  return next;
}

function onProjectCreate(state, action) {
  const { logged } = action;
  const next = hydrateModel(MODEL, action);
  // NOTE Can create only one project
  // if user is not connected
  return (logged && [...state, next]) || [next];
}

function onProjectDelete(state, action) {
  return state;
}

function onProjectUpdate(state, action) {
  return state;
}

function onProjectLanguageUpdate(state, action) {
  return state;
}

const projects = (state = [], action) => {
  switch (action.type) {
    // CRUD
    case EVENT_TYPES.PROJECT_CREATE:
      return onProjectCreate(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return onProjectDelete(state, action);
    case EVENT_TYPES.PROJECT_UPDATE:
      return onProjectUpdate(state, action);
    // Languages
    // case EVENT_TYPES.LANGUAGE_CLEAR:
    // case EVENT_TYPES.LANGUAGE_CREATE:
    // case EVENT_TYPES.LANGUAGE_DELETE:
    // case EVENT_TYPES.LANGUAGE_KEY_DELETE:
    // case EVENT_TYPES.LANGUAGE_VALUE_UPDATE:
    //   return onProjectLanguageUpdate(state, action);
    default:
      return state;
  }
};

export default projects;
