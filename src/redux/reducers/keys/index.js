import { EVENT_TYPES } from '../../../constants';
import addLanguage from './add-language';
import cloneProject from './clone-project';
import createKey from './create-key';
import createProject from './create-project';
import deleteKey from './delete-key';
import deleteProject from './delete-project';
import updateKey from './update-key';

const keys = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.LANGUAGE_ADD:
      return addLanguage(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_CREATE:
      return createKey(state, action);
    case EVENT_TYPES.PROJECT_CLONE:
      return cloneProject(state, action);
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
      return deleteKey(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    case EVENT_TYPES.LANGUAGE_KEY_UPDATE:
      return updateKey(state, action);
    default:
      return state;
  }
};

export default keys;
