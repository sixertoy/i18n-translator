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

const sortByKeysAsc = (a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

const parseAndSortJSON = json => {
  const parsed = JSON.parse(json);
  const sorted = Object.entries(parsed).sort(sortByKeysAsc);
  return sorted;
};

export function createTranslation(action) {
  const { json, lang: id } = action;
  const fav = false;
  const values = parseAndSortJSON(json).map(arr => arr[1]);
  const translation = { fav, id, values };
  return translation;
}

export function createProject({ json, lang: id }) {
  const fav = false;
  const sorted = parseAndSortJSON(json);
  const keys = sorted.map(arr => arr[0]);
  const values = sorted.map(arr => arr[1]);
  const translation = { fav, id, values };
  return { keys, translations: [translation] };
}

const translations = (state = false, action) => {
  let next = state;
  switch (action.type) {
    // NOTE -> Alls
    case EVENT_TYPES.TRANSLATIONS_PROJECT_CREATE:
      next = createProject(action);
      return next;
    case EVENT_TYPES.TRANSLATIONS_PROJECT_TOGGLE_FAV:
      return state;
    // NOTE -> Values
    case EVENT_TYPES.TRANSLATIONS_VALUE_ADD:
      return state;
    case EVENT_TYPES.TRANSLATIONS_VALUE_UPDATE:
      return state;
    case EVENT_TYPES.TRANSLATIONS_VALUE_DELETE:
      return state;
    // NOTE -> Keys
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
