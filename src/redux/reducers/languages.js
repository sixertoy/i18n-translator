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

export function deleteLanguages(state, action) {
  const { id: project } = action;
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

export function clearLanguages(state, { project }) {
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

const languages = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.LANGUAGE_CLEAR:
      return clearLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_CREATE:
      return createLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_DELETE:
      return deleteLanguage(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteLanguages(state, action);
    case EVENT_TYPES.PROJECT_CLEAR:
      return clearLanguages(state, action);
    case EVENT_TYPES.LANGUAGE_UPDATE_TRANSLATION:
      return updateTranslation(state, action);
    default:
      return state;
  }
};

export default languages;
