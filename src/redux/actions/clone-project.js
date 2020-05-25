import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';

const cloneProject = ({ project }) => dispatch => {
  const id = uuidv1();
  const name = ucFirst(getName());
  const clone = { id, name };
  dispatch({ clone, project, type: EVENT_TYPES.PROJECT_CLONE });
  return Promise.resolve(id);
};

export default cloneProject;
