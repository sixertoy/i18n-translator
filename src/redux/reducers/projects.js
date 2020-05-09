import { EVENT_TYPES } from '../../constants';
import hydrate from '../hydrate';
import { project as model } from '../models';

export function updateProjectModifcationTime(project) {
  const mtime = Date.now();
  return { ...project, mtime };
}

function createProject(state, action) {
  const { logged } = action;
  const next = hydrate(model, action);
  // NOTE un user non connecté peut créer 1 seul projet
  if (!logged) return [next];
  return [...state, next];
}

function deleteProject(state, action) {
  const { id } = action;
  const filtered = state.filter(obj => obj.id !== id);
  return filtered;
}

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

function updateProjectLangs(state, action) {
  const { lang, project: id } = action;
  const next = state.reduce((acc, project) => {
    if (project.id !== id) return [...acc, project];
    const langs = [...project.langs, lang];
    let nextProject = { ...project, langs };
    nextProject = updateProjectModifcationTime(nextProject);
    return [...acc, nextProject];
  }, []);
  return next;
}

const projects = (state = [], action) => {
  switch (action.type) {
    // CRUD
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    // case EVENT_TYPES.PROJECT_UPDATE:
    //   return updateProject(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
      return updateProjectLangs(state, action);
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
