import { createSelector } from 'reselect';

const getProjects = state => state.projects;
const getFavorites = state => state.favorites;

const selectFavorites = createSelector(
  getFavorites,
  getProjects,
  (favorites, projects) => {
    const filtered = projects.filter(obj => favorites.includes(obj.id));
    return filtered;
  }
);

export default selectFavorites;
