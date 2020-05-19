import sortBy from 'lodash.sortby';
import { createSelector } from 'reselect';

const getProjects = state => state.projects;
const getFavorites = state => state.favorites;

const selectProjects = createSelector(
  getProjects,
  getFavorites,
  (pprojects, pfavorites) => {
    const projects = sortBy(pprojects, ['name']);
    const favorites = pprojects.filter(obj => pfavorites.includes(obj.id));
    const recents = sortBy(pprojects, ['mtime']);
    recents.reverse();
    return { favorites, projects };
  }
);

export default selectProjects;
