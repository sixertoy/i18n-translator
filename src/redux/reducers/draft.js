import { EVENT_TYPES } from '../../constants';

const favorites = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.DRAFT_CREATE:
      return { ...action.draft };
    case EVENT_TYPES.DRAFT_UPDATE:
      return { ...state, ...action.value };
    case EVENT_TYPES.PROJECT_CREATE:
      return {};
    default:
      return state;
  }
};

export default favorites;
