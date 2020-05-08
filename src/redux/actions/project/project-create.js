import { getName } from 'ikea-name-generator';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../../constants';

const createProject = () => {
  const id = uuidv1();
  const name = getName();
  const ctime = Date.now();
  return {
    ctime,
    id,
    mtime: ctime,
    name,
    type: EVENT_TYPES.PROJECT_CREATE,
  };
};

export default createProject;
