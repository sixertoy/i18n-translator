import { createSelector } from 'reselect';

import selectProjects from './select-projects';

const getFavorites = state => state.favorites;

const selectFavorites = createSelector(
  getFavorites,
  selectProjects,
  (favs, projs) => {
    const favorites = projs.filter(obj => obj.isFavorite);
    return favorites;
  }
);

export default selectFavorites;
