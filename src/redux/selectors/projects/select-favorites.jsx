import orderBy from 'lodash.orderby';
import { createSelector } from 'reselect';

import selectProjects from './select-projects';

const getFavorites = state => state.favorites;

const selectFavorites = createSelector(
  getFavorites,
  selectProjects,
  (favs, projs) => {
    let favorites = projs.filter(obj => obj.isFavorite);
    favorites = orderBy(favorites, ['name'], 'asc');
    return favorites;
  }
);

export default selectFavorites;
