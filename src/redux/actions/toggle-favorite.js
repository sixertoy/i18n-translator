import { EVENT_TYPES } from '../../constants';

const toggleFavorite = ({ project }) => {
  return { project, type: EVENT_TYPES.PROJECT_TOGGLE_FAV };
};

export default toggleFavorite;
