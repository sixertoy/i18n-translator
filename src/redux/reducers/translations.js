import { EVENT_TYPES } from '../../constants';

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

// NOTE translation data model
//  {
//    lang: string,
//    fav: bool,
//    dict: { key: string },
//    label: string,
//  ]
const translations = (state = false, action) => {
  switch (action.type) {
    // NOTE -> Alls
    case EVENT_TYPES.TRANSLATIONS_PROJECT_CREATE:
      return [action.translation];
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
