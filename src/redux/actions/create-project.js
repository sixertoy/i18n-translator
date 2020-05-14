import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';

const createProjectAsync = () => (dispatch, getState) => {
  const isDemo = getState().demo;
  const id = (isDemo && 'demo') || uuidv1();
  const name = (isDemo && 'Demo') || ucFirst(getName());
  const type = isDemo
    ? EVENT_TYPES.PROJECT_CREATE_DEMO
    : EVENT_TYPES.PROJECT_CREATE;
  dispatch({ id, name, type });
  return Promise.resolve(id);
};

export default createProjectAsync;
