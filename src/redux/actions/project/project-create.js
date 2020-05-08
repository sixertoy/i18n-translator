import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../../constants';

const createProject = () => {
  const id = uuidv1();
  return { id, type: EVENT_TYPES.PROJECT_CREATE };
};

export default createProject;
