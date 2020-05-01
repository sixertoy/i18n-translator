import { EVENT_TYPES } from '../../constants';

export const translations = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.TRANSLATIONS_CREATE:
      return [
        {
          content: JSON.parse(action.content),
          id: action.lang,
          primary: true,
        },
      ];
    case EVENT_TYPES.TRANSLATIONS_UPDATE:
      return state;
    default:
      return state;
  }
};

export default translations;
