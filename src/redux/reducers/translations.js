import { EVENT_TYPES } from '../../constants';

// NOTE data model
// {
//  keys: [],
//  translations: [{
//    id: string,
//    fav: bool,
//    values: string,
//  }]
// }

export function createTranslation(action) {
  const translation = {
    fav: false,
    id: action.lang,
    values: Object.entries(action.json).map(arr => arr[1]),
  };
  return translation;
}

export function createProject({ json, lang }) {
  const parsed = JSON.parse(json);
  const keys = Object.keys(parsed);
  const values = Object.values(parsed);
  const translation = { fav: false, id: lang, values };
  const translations = [translation];
  return { keys, translations };
}

const translations = (state = false, action) => {
  switch (action.type) {
    // NOTE
    // -> Alls
    case EVENT_TYPES.TRANSLATIONS_PROJECT_CREATE:
      return createProject(action);
    case EVENT_TYPES.TRANSLATIONS_PROJECT_TOGGLE_FAV:
      return state;
    // NOTE
    // -> Values
    case EVENT_TYPES.TRANSLATIONS_VALUE_ADD:
      return state;
    case EVENT_TYPES.TRANSLATIONS_VALUE_UPDATE:
      return state;
    case EVENT_TYPES.TRANSLATIONS_VALUE_DELETE:
      return state;
    // NOTE
    // -> Keys
    case EVENT_TYPES.TRANSLATIONS_PRIMARY_KEY_ADD:
      return state;
    case EVENT_TYPES.TRANSLATIONS_PRIMARY_KEY_UPDATE:
      return state;
    case EVENT_TYPES.TRANSLATIONS_PRIMARY_KEY_DELETE:
      return state;
    default:
      return state;
  }
};

export default translations;
