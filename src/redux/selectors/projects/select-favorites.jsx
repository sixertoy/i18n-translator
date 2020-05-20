import sortBy from 'lodash.sortby';
import { createSelector } from 'reselect';

import selectProjects from './select-projects';

const getFavorites = state => state.favorites;

const selectFavorites = createSelector(
  getFavorites,
  selectProjects,
  (favs, projs) => {
    let favorites = projs.filter(obj => obj.isFavorite);
    favorites = sortBy(favorites, obj => favs.indexOf(obj.id));
    return favorites;
  }
);

export default selectFavorites;
