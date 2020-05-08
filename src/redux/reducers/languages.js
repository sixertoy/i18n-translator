import pick from 'lodash.pick';

import { EVENT_TYPES } from '../../constants';
import MODEL from '../models/language';

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

// export function createTranslation(action) {
//   const { json, lang: id } = action;
//   const fav = false;
//   const values = parseAndSortJSON(json).map(arr => arr[1]);
//   const translation = { fav, id, values };
//   return translation;
// }

// export function updateValue(state, { key, lang, update }) {
//   const next = state.reduce((acc, obj) => {
//     const iscurrent = obj.lang === lang;
//     if (!iscurrent) return [...acc, obj];
//     const dict = { ...obj.dict, [key]: update };
//     return [...acc, { ...obj, dict }];
//   }, []);
//   return next;
// }

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
  const next = hydrateModel(MODEL, action);
  return [...state, next];
}

// export function deleteLanguage(state, { lang }) {
//   const next = state.filter(obj => obj.lang !== lang);
//   return next;
// }

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
    case EVENT_TYPES.LANGUAGE_CLEAR:
      // return clearLanguage(state, action);
      return state;
    case EVENT_TYPES.LANGUAGE_DELETE:
      // return deleteLanguage(state, action);
      return state;
    case EVENT_TYPES.LANGUAGE_UPDATE_VALUE:
      // return updateValue(state, action);
      return state;
    case EVENT_TYPES.LANGUAGE_DELETE_KEY:
      // return deleteKey(state, action);
      return state;
    default:
      return state;
  }
};

export default languages;
