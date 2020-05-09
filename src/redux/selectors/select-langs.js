import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getProjects = state => get(state, 'projects', []);

const selectLangs = createCachedSelector(getProjects, getId, (projects, id) => {
  const project = projects.find(obj => obj.id === id);
  return get(project, 'langs', []);
})((_, id) => `langs::${id}`);

export default selectLangs;
