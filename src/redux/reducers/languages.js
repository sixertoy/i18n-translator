import { EVENT_TYPES } from '../../constants';
import hydrate from '../hydrate';
import { language as model } from '../models';

export function createLanguage(state, action) {
  const next = hydrate(model, action);
  return [...state, next];
}

export function updateTranslation(state, { key, lang, project, value }) {
  const next = state.reduce((acc, obj) => {
    const shouldUpdate = obj.project === project && obj.lang === lang;
    if (!shouldUpdate) return [...acc, obj];
    const translations = Object.entries(obj.translations).reduce(
      (ac, [primary, previous]) => {
        const update = primary === key ? value : previous;
        return { ...ac, [primary]: update };
      },
      {}
    );
    const mtime = Date.now();
    return [...acc, { ...obj, mtime, translations }];
  }, []);
  return next;
}

export function deleteProject(state, action) {
  const { project } = action;
  const filtered = state.filter(obj => {
    const notCurrentProject = obj.project !== project;
    return notCurrentProject;
  });
  return filtered;
}

export function deleteLanguage(state, { lang, project }) {
  const next = state.filter(obj => {
    const isCurrentLang = obj.lang === lang;
    const isCurrentProject = obj.project === project;
    return !(isCurrentProject && isCurrentLang);
  });
  return next;
}

export function clearLanguage(state, { lang, project }) {
  const next = state.map(obj => {
    if (obj.project !== project) return obj;
    if (obj.lang !== lang) return obj;
    const translations = Object.entries(obj.translations).reduce(
      (acc, [key]) => ({ ...acc, [key]: '' }),
      {}
    );
    const mtime = Date.now();
    return { ...obj, mtime, translations };
  });
  return next;
}

export function deleteKey(state, { key, project }) {
  const next = state.map(obj => {
    if (obj.project !== project) return obj;
    const translations = Object.entries(obj.translations)
      .filter(([primary]) => primary !== key)
      .reduce((acc, [primary, value]) => ({ ...acc, [primary]: value }), {});
    const mtime = Date.now();
    return { ...obj, mtime, translations };
  });
  return next;
}

export function toggleCollapse(state, { lang, project }) {
  const next = state.map(obj => {
    if (obj.project !== project) return obj;
    if (obj.lang !== lang) return obj;
    const collapsed = !obj.collapsed;
    return { ...obj, collapsed };
  });
  return next;
}

export function clearProject(state, { project }) {
  const next = state.map(obj => {
    if (obj.project !== project) return obj;
    const translations = Object.entries(obj.translations).reduce(
      (acc, [key]) => ({ ...acc, [key]: '' }),
      {}
    );
    const mtime = Date.now();
    return { ...obj, mtime, translations };
  });
  return next;
}

export function createKey(state) {
  return state;
}

const languages = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.LANGUAGE_CLEAR:
      return clearLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
      return createLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_DELETE:
      return deleteLanguage(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    case EVENT_TYPES.PROJECT_CLEAR:
      return clearProject(state, action);
    case EVENT_TYPES.LANGUAGE_TOGGLE_COLLAPSE:
      return toggleCollapse(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
      return deleteKey(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_CREATE:
      return createKey(state, action);
    case EVENT_TYPES.LANGUAGE_TRANSLATION_UPDATE:
      return updateTranslation(state, action);
    default:
      return state;
  }
};

export default languages;
