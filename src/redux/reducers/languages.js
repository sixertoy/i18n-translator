import { EVENT_TYPES } from '../../constants';
import hydrate from '../hydrate';
import { language as model } from '../models';

// export function clearLanguage(state, { lang }) {
//   const next = state.reduce((acc, obj) => {
//     const iscurrent = obj.lang === lang;
//     if (!iscurrent) return [...acc, obj];
//     const dict = Object.entries(obj.dict).reduce(
//       (ac, ar) => ({ ...ac, [ar[0]]: '' }),
//       {}
//     );
//     return [...acc, { ...obj, dict }];
//   }, []);
//   return next;
// }

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
  const filtered = state.filter(obj => obj.project !== project);
  return filtered;
}

export function deleteLanguage(state, { lang, project }) {
  const next = state.filter(obj => {
    const hasLang = obj.lang === lang;
    const hasProject = obj.project === project;
    return !hasLang && !hasProject;
  });
  return next;
}

// export function deleteKey(state, { key }) {
//   const next = state.reduce((acc, obj) => {
//     const { dict, ...rest } = obj;
//     const filtered = Object.entries(dict)
//       .filter(arr => arr[0] !== key)
//       .reduce((ac, arr) => ({ ...ac, [arr[0]]: arr[1] }), {});
//     return [...acc, { ...rest, dict: filtered }];
//   }, []);
//   return next;
// }

const languages = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.LANGUAGE_CREATE:
      return createLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_DELETE:
      return deleteLanguage(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteLanguages(state, action);
    case EVENT_TYPES.LANGUAGE_UPDATE_TRANSLATION:
      return updateTranslation(state, action);
    default:
      return state;
  }
};

export default languages;
