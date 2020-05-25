import { EVENT_TYPES } from '../../../constants';
import addLanguage from './add-language';
import createProject from './create-project';
import deleteLanguage from './delete-language';
import deleteProject from './delete-project';
import updateProjectName from './update-project-name';
import updateProjectTime from './update-project-time';

const projects = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.LANGUAGE_ADD:
      return addLanguage(state, action);
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.LANGUAGE_DELETE:
      return deleteLanguage(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    case EVENT_TYPES.PROJECT_NAME_UPDATE:
      return updateProjectName(state, action);
    case EVENT_TYPES.PROJECT_CLEAR:
    case EVENT_TYPES.LANGUAGE_CLEAR:
    case EVENT_TYPES.PROJECT_TIME_UPDATE:
    case EVENT_TYPES.LANGUAGE_KEY_CREATE:
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
    case EVENT_TYPES.LANGUAGE_KEY_UPDATE:
    case EVENT_TYPES.LANGUAGE_TRANSLATION_UPDATE:
      return updateProjectTime(state, action);
    default:
      return state;
  }
};

export default projects;
