import { EVENT_TYPES } from '../../constants';

const favorites = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.DRAFT_DELETE:
      return {};
    case EVENT_TYPES.DRAFT_COMMIT:
      return {};
    case EVENT_TYPES.DRAFT_CREATE:
      return {};
    default:
      return state;
  }
};

export default favorites;
