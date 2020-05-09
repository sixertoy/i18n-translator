import pick from 'lodash.pick';

import { EVENT_TYPES } from '../../constants';
import { project } from '../models';

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

function createProject(state, action) {
  const { logged } = action;
  const next = hydrateModel(project, action);
  // NOTE un user non connecté peut créer 1 seul projet
  if (!logged) return [next];
  return [...state, next];
}

// function deleteProject(state, action) {
//   const { id } = action;
//   const filtered = state.filter(obj => obj.id !== id);
//   return filtered;
// }

// function updateProject(state, action) {
//   return state;
// }

// function updateProjectMTime(state, action) {
//   const { id } = action;
//   const next = state.reduce((acc, obj) => {
//     if (obj.id !== id) return [...acc, obj];
//     const mtime = Date.now();
//     return [...acc, { ...obj, mtime }];
//   }, []);
//   return next;
// }

function addLanguageToProject(state, action) {
  const { lang, project: id } = action;
  const next = state.reduce((acc, obj) => {
    if (obj.id !== id) return [...acc, obj];
    const langs = [...obj.langs, lang];
    return [...acc, { ...obj, langs }];
  }, []);
  return next;
}

const projects = (state = [], action) => {
  switch (action.type) {
    // CRUD
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    // case EVENT_TYPES.PROJECT_DELETE:
    //   return deleteProject(state, action);
    // case EVENT_TYPES.PROJECT_UPDATE:
    //   return updateProject(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
      return addLanguageToProject(state, action);
    // Languages
    // case EVENT_TYPES.LANGUAGE_CLEAR:
    // case EVENT_TYPES.LANGUAGE_CREATE:
    // case EVENT_TYPES.LANGUAGE_DELETE:
    // case EVENT_TYPES.LANGUAGE_KEY_DELETE:
    // case EVENT_TYPES.LANGUAGE_VALUE_UPDATE:
    //   return updateProjectMTime(state, action);
    default:
      return state;
  }
};

export default projects;
