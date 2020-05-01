import { EVENT_TYPES } from '../../constants';

export const datas = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.DATAS_CREATE:
      return action.content;
    default:
      return state;
  }
};

export default datas;
