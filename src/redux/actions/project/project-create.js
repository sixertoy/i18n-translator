import { getName } from 'ikea-name-generator';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../../constants';

const createProject = () => {
  const now = Date.now();
  return {
    ctime: now,
    id: uuidv1(),
    mtime: now,
    name: getName(),
    type: EVENT_TYPES.PROJECT_CREATE,
  };
};

export default createProject;
