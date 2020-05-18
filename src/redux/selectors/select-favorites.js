import { createSelector } from 'reselect';

const getFavorites = state => state.favorites;

const selectFavorites = createSelector(getFavorites, favorites => favorites);

export default selectFavorites;
