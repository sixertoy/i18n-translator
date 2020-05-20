import { EVENT_TYPES } from '../../constants';
import hydrate from '../hydrate';
import { project as model } from '../models';

export function createProject(state, action) {
  const { demo } = action;
  const next = hydrate(model, action);
  // NOTE un user non connecté peut créer 1 seul projet-
  return (demo && [next]) || [...state, next];
}

export function deleteProject(state, action) {
  const { project } = action;
  const filtered = state.filter(obj => obj.id !== project);
  return filtered;
}

export function updateProjectName(state, action) {
  const { name, project } = action;
  const nextState = state.reduce((acc, obj) => {
    if (obj.id !== project) return [...acc, obj];
    const mtime = Date.now();
    const next = { ...obj, mtime, name };
    return [...acc, next];
  }, []);
  return nextState;
}

export function updateProjectTime(state, action) {
  const { project } = action;
  const next = state.reduce((acc, obj) => {
    if (obj.id !== project) return [...acc, obj];
    const mtime = Date.now();
    return [...acc, { ...obj, mtime }];
  }, []);
  return next;
}

export function createLanguage(state, action) {
  const { lang, project } = action;
  const next = state.reduce((acc, obj) => {
    if (obj.id !== project) return [...acc, obj];
    const langs = [...obj.langs, lang];
    const mtime = Date.now();
    return [...acc, { ...obj, langs, mtime }];
  }, []);
  return next;
}

export function deleteLanguage(state, action) {
  const { lang, project } = action;
  const next = state.reduce((acc, obj) => {
    if (obj.id !== project) return [...acc, obj];
    const langs = obj.langs.filter(l => l !== lang);
    const mtime = Date.now();
    return [...acc, { ...obj, langs, mtime }];
  }, []);
  return next;
}

const projects = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    case EVENT_TYPES.PROJECT_NAME_UPDATE:
      return updateProjectName(state, action);
    case EVENT_TYPES.LANGUAGE_DELETE:
      return deleteLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
      return createLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_CLEAR:
    case EVENT_TYPES.LANGUAGE_TRANSLATION_UPDATE:
    case EVENT_TYPES.PROJECT_CLEAR:
    case EVENT_TYPES.PROJECT_TIME_UPDATE:
    case EVENT_TYPES.LANGUAGE_KEY_CREATE:
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
    case EVENT_TYPES.LANGUAGE_KEY_UPDATE:
      return updateProjectTime(state, action);
    default:
      return state;
  }
};

export default projects;
