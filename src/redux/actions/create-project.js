import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';

const createProjectAsync = () => (dispatch, getState) => {
  const { demo } = getState();
  const id = (demo && `demo`) || uuidv1();
  const name = (demo && 'Demo') || ucFirst(getName());
  dispatch({ demo, id, name, type: EVENT_TYPES.PROJECT_CREATE });
  return Promise.resolve(id);
};

export default createProjectAsync;
