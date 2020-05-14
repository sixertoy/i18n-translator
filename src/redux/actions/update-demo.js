import { EVENT_TYPES } from '../../constants';

const updateDemo = useDemo => {
  return { type: EVENT_TYPES.DEMO_UPDATE, useDemo };
};

export default updateDemo;
