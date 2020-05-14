import { EVENT_TYPES } from '../../constants';

const demo = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.DEMO_UPDATE:
      return action.demo;
    default:
      return state;
  }
};

export default demo;
