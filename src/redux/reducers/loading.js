import { EVENT_TYPES } from '../../constants';

const defaultState = false;
export const loading = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.LOADING_START:
      return true;
    case EVENT_TYPES.LOADING_COMPLETE:
      return false;
    default:
      return state;
  }
};

export default loading;
