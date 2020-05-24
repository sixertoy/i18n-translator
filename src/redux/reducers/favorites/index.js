import { EVENT_TYPES } from '../../../constants';
import deleteProject from './delete-project';
import toggleFavorite from './toggle-favorite';

const favorites = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_DELETE:
      return deleteProject(state, action);
    case EVENT_TYPES.PROJECT_TOGGLE_FAV:
      return toggleFavorite(state, action);
    default:
      return state;
  }
};

export default favorites;
