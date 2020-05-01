import { EVENT_TYPES } from '../../constants';

export const datas = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.DATAS_CREATE:
      return [
        {
          content: action.content,
          id: action.lang,
          primary: true,
        },
      ];
    case EVENT_TYPES.DATAS_UPDATE:
      return state;
    default:
      return state;
  }
};

export default datas;
