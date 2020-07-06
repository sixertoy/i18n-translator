import orderBy from 'lodash.orderby';
import { createSelector } from 'reselect';
import slugify from 'slugify';

const getProjects = state => state.projects;
const getFavorites = state => state.favorites;

const selectProjects = createSelector(
  getProjects,
  getFavorites,
  (projs, favs) => {
    let projects = projs.map(obj => {
      const isFavorite = favs.includes(obj.id);
      const slug = slugify(obj.name).toLowerCase();
      return { ...obj, isFavorite, slug };
    });
    projects = orderBy(projects, ['slug']);
    return projects;
  }
);

export default selectProjects;
