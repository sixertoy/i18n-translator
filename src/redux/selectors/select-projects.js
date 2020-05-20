import orderBy from 'lodash.orderby';
import { createSelector } from 'reselect';

const getProjects = state => state.projects;
const getFavorites = state => state.favorites;

const mapIsFavorite = favs => obj => {
  const isFavorite = favs.includes(obj.id);
  return { ...obj, isFavorite };
};

const selectProjects = createSelector(
  getProjects,
  getFavorites,
  (projs, favs) => {
    let projects = projs.map(mapIsFavorite(favs));
    projects = orderBy(projects, ['name']);

    let favorites = projects.filter(obj => obj.isFavorite);
    favorites = orderBy(favorites, ['mtime'], 'asc');

    const recents = orderBy(projects, ['mtime']).slice(0, 4);

    return { favorites, projects, recents };
  }
);

export default selectProjects;
