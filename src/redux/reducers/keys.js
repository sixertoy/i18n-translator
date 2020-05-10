import omit from 'lodash.omit';

// import uniq from 'lodash.uniq';
import { EVENT_TYPES } from '../../constants';

// export function deleteKey(state, action) {
//   const { key, project } = action;
// }

// export function addKeysToProject(state, action) {
//   const { project } = action;
//   const update = action.keys || [action.key];
//   const merged = [...state.project, ...update];
//   const next = uniq(merged).sort();
//   return { ...state, [project]: next };
// }

export function deleteProject(state, action) {
  const { project } = action;
  const next = omit(state, [project]);
  return next;
}

export function createProject(state, action) {
  const { id } = action;
  return { ...state, [id]: [] };
}

const keys = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    // case EVENT_TYPES.PROJECT_DELETE:
    //   return deleteProject(state, action);
    // case EVENT_TYPES.LANGUAGE_KEY_DELETE:
    //   return deleteKey(state, action);
    // case EVENT_TYPES.LANGUAGE_CREATE:
    // case EVENT_TYPES.LANGUAGE_KEY_CREATE:
    //   return addKeysToProject(state, action);
    default:
      return state;
  }
};

export default keys;
