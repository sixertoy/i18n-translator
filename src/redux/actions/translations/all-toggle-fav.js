import { EVENT_TYPES } from '../../../constants';

const toggleFav = (index: null) => ({
  index: index || 0,
  type: EVENT_TYPES.TRANSLATIONS_ALL_TOGGLE_FAV,
});

export default toggleFav;
