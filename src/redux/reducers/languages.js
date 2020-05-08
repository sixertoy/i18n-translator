import { EVENT_TYPES } from '../../constants';

const MODEL = {
  dict: {}, // { [key]: 'value' }
  label: null, // string
  lang: null, // string
  meta: {
    collapsed: false, // bool
    ctime: () => Date.now(), // number
    fav: false, // bool
    mtime: () => Date.now(), // number
  },
  project: null, // string
};

// export function createTranslation(action) {
//   const { json, lang: id } = action;
//   const fav = false;
//   const values = parseAndSortJSON(json).map(arr => arr[1]);
//   const translation = { fav, id, values };
//   return translation;
// }

export function updateValue(state, { key, lang, update }) {
  const next = state.reduce((acc, obj) => {
    const iscurrent = obj.lang === lang;
    if (!iscurrent) return [...acc, obj];
    const dict = { ...obj.dict, [key]: update };
    return [...acc, { ...obj, dict }];
  }, []);
  return next;
}

export function clearLanguage(state, { lang }) {
  const next = state.reduce((acc, obj) => {
    const iscurrent = obj.lang === lang;
    if (!iscurrent) return [...acc, obj];
    const dict = Object.entries(obj.dict).reduce(
      (ac, ar) => ({ ...ac, [ar[0]]: '' }),
      {}
    );
    return [...acc, { ...obj, dict }];
  }, []);
  return next;
}

export function createLanguage(state, { dict, label, lang }) {
  const next = state.filter(obj => obj.lang !== lang);
  return [...next, { dict, label, lang }];
}

export function deleteLanguage(state, { lang }) {
  const next = state.filter(obj => obj.lang !== lang);
  return next;
}

export function deleteKey(state, { key }) {
  const next = state.reduce((acc, obj) => {
    const { dict, ...rest } = obj;
    const filtered = Object.entries(dict)
      .filter(arr => arr[0] !== key)
      .reduce((ac, arr) => ({ ...ac, [arr[0]]: arr[1] }), {});
    return [...acc, { ...rest, dict: filtered }];
  }, []);
  return next;
}

// NOTE Languages Data Model
// {
//    lang: string
//    fav: bool
//    collapsed: bool
//    project: string
//    dict: { ..key: string }
//    label: string
// }
const translations = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_CREATE:
      return createLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_CLEAR:
      return clearLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_DELETE:
      return deleteLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_UPDATE_VALUE:
      return updateValue(state, action);
    case EVENT_TYPES.LANGUAGE_DELETE_KEY:
      return deleteKey(state, action);
    default:
      return state;
  }
};

export default translations;
