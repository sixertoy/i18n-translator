import { EVENT_TYPES } from '../../constants';

function toggleFavorite(state, action) {
  const { project } = action;
  const isInclude = state.includes(project);
  if (!isInclude) return [...state, project];
  const filtered = state.filter(id => id !== project);
  return filtered;
}

const favorites = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_TOGGLE_FAV:
      return toggleFavorite(state, action);
    default:
      return state;
  }
};

export default favorites;
