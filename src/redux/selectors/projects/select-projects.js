import orderBy from 'lodash.orderby';
import { createSelector } from 'reselect';

const getProjects = state => state.projects;
const getFavorites = state => state.favorites;

const selectProjects = createSelector(
  getProjects,
  getFavorites,
  (projs, favs) => {
    let projects = projs.map(obj => {
      const isFavorite = favs.includes(obj.id);
      return { ...obj, isFavorite };
    });
    projects = orderBy(projects, ['name']);
    return projects;
  }
);

export default selectProjects;
