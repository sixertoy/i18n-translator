import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getProjects = state => get(state, 'projects', []);
const getPrimaryKeys = state => get(state, 'keys', []);

export default createCachedSelector(
  getProjects,
  getPrimaryKeys,
  getId,
  (projects, primarykeys, id) => {
    const project = projects.find(obj => obj.id === id);
    const keys = get(primarykeys, id, []);
    return { ...project, keys };
  }
)((_, id) => `project::${id}`);
