import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getPrimaryKeys = state => get(state, 'keys', []);
const getProjects = state => get(state, 'projects', []);
const getFavorites = state => get(state, 'favorites', []);

export default createCachedSelector(
  getProjects,
  getPrimaryKeys,
  getFavorites,
  getId,
  (projects, primarykeys, favorites, id) => {
    const project = projects.find(obj => obj.id === id);
    if (!project) return null;
    const keys = get(primarykeys, id, []);
    const isFavorite = favorites.includes(id);
    return { ...project, isFavorite, keys };
  }
)((_, id) => `project::${id}`);
