import { EVENT_TYPES } from '../../constants';

// {
//  keys: [],
//  translations: [{
//    id: string,
//    fav: bool,
//    values: string,
//  }]
// }

export const translations = (state = false, action) => {
  switch (action.type) {
    // NOTE
    // -> Alls
    case EVENT_TYPES.TRANSLATIONS_ALL_CREATE:
      return state;
    case EVENT_TYPES.TRANSLATIONS_ALL_TOGGLE_FAV:
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
