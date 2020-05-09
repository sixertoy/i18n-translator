import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getProjects = state => get(state, 'projects', []);

export default createCachedSelector(getProjects, getId, (projects, id) => {
  const project = projects.find(obj => obj.id === id);
  return { ...project };
})((_, id) => `project::${id}`);
