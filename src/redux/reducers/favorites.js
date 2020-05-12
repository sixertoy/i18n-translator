import { EVENT_TYPES } from '../../constants';

export function createProject(state, action) {
  const { id } = action;
  return [...state, id];
}

export function deleteProject(state, action) {
  const { project } = action;
  const filtered = state.filter(obj => obj.id !== project);
  return filtered;
}

const favorites = (state = [], action) => {
  switch (action.type) {
    // case EVENT_TYPES.RECENTS_FLUSH:
    //   return [];
    case EVENT_TYPES.PROJECT_CREATE:
      return createProject(state, action);
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    default:
      return state;
  }
};

export default favorites;
