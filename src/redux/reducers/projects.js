// import uuidv1 from 'uuid/v1';
import { EVENT_TYPES } from '../../constants';

function onProjectCreate(state, action) {
  return state;
}

function onProjectDelete(state, action) {
  return state;
}

function onProjectUpdate(state, action) {
  return state;
}

function onProjectLanguageUpdate(state, action) {
  return state;
}

// NOTE Project Data Model
// {
//    ctime: number
//    mtime: number
//    id: string
//    name: string
// }
const projects = (state = [], action) => {
  switch (action.type) {
    // CRUD
    case EVENT_TYPES.PROJECTS_CREATE:
      return onProjectCreate(state, action);
    case EVENT_TYPES.PROJECTS_DELETE:
      return onProjectDelete(state, action);
    case EVENT_TYPES.PROJECTS_UPDATE:
      return onProjectUpdate(state, action);
    // Languages
    case EVENT_TYPES.LANGUAGE_CLEAR:
    case EVENT_TYPES.LANGUAGE_DELETE:
    case EVENT_TYPES.LANGUAGE_KEY_DELETE:
    case EVENT_TYPES.LANGUAGE_VALUE_UPDATE:
      return onProjectLanguageUpdate(state, action);
    default:
      return state;
  }
};

export default projects;
