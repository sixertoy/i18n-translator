import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';

const createProjectAsync = () => (dispatch, getState) => {
  const time = Date.now();
  const isDemo = getState().demo;
  const id = (isDemo && `demo_${time}`) || uuidv1();
  const name = (isDemo && 'Demo') || ucFirst(getName());
  dispatch({ id, name, type: EVENT_TYPES.PROJECT_CREATE });
  return Promise.resolve(id);
};

export default createProjectAsync;
