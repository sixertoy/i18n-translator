import { getName } from 'ikea-name-generator';
import get from 'lodash.get';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';

const createProjectAsync = () => (dispatch, getState) => {
  const id = uuidv1();
  const state = getState();
  const name = ucFirst(getName());
  const logged = get(state, 'user.logged');
  dispatch({ id, logged, name, type: EVENT_TYPES.PROJECT_CREATE });
  return Promise.resolve(id);
};

export default createProjectAsync;
