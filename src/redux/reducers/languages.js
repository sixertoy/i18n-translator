import { EVENT_TYPES } from '../../constants';
import hydrate from '../hydrate';
import { language as model } from '../models';

export function createLanguage(state, action) {
  const next = hydrate(model, action);
  return [...state, next];
}

export function updateTranslation(state, { key, lang, project, value }) {
  const next = state.reduce((acc, language) => {
    const shouldUpdate = language.project === project && language.lang === lang;
    if (!shouldUpdate) return [...acc, language];
    const translations = Object.entries(language.translations).reduce(
      (ac, [primary, previous]) => {
        const update = primary === key ? value : previous;
        return { ...ac, [primary]: update };
      },
      {}
    );
    return [...acc, { ...language, translations }];
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
  return [];
}

export function clearLanguages(state, { project }) {
  return [];
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
