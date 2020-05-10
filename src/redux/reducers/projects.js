import { EVENT_TYPES } from '../../constants';
import hydrate from '../hydrate';
import { project as model } from '../models';

export function createProject(state, action) {
  const { logged } = action;
  const next = hydrate(model, action);
  // NOTE un user non connecté peut créer 1 seul projet
  if (!logged) return [next];
  return [...state, next];
}

export function deleteProject(state, action) {
  const { id } = action;
  const filtered = state.filter(obj => obj.id !== id);
  return filtered;
}

export function updateProjectMtime(state, action) {
  const { project: id } = action;
  const next = state.reduce((acc, project) => {
    if (project.id !== id) return [...acc, project];
    const mtime = Date.now();
    return [...acc, { ...project, mtime }];
  }, []);
  return next;
}

export function updateProjectLang(state, action) {
  const { lang, project } = action;
  const next = state.reduce((acc, obj) => {
    if (obj.id !== project) return [...acc, obj];
    const langs = [...obj.langs, lang];
    const mtime = Date.now();
    return [...acc, { ...obj, langs, mtime }];
  }, []);
  return next;
}

export function deleteProjectLang(state, action) {
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
    case EVENT_TYPES.LANGUAGE_DELETE:
      return deleteProjectLang(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
      return updateProjectLang(state, action);
    case EVENT_TYPES.PROJECT_CLEAR:
    case EVENT_TYPES.LANGUAGE_CLEAR:
    case EVENT_TYPES.LANGUAGE_UPDATE_TRANSLATION:
      return updateProjectMtime(state, action);
    default:
      return state;
  }
};

export default projects;
