import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';

const createProjectAsync = () => dispatch => {
  const id = uuidv1();
  const name = ucFirst(getName());
  dispatch({ id, name, type: EVENT_TYPES.PROJECT_CREATE });
  return Promise.resolve(id);
};

export default createProjectAsync;
