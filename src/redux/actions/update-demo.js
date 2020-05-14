import { EVENT_TYPES } from '../../constants';

const updateDemo = demo => {
  return { demo, type: EVENT_TYPES.DEMO_UPDATE };
};

export default updateDemo;
