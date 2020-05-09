import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

import { LANGUAGES_FREE_MAX } from '../../constants';

const getId = (_, id) => id;
const getUser = state => get(state, 'user', {});
const getProjects = state => get(state, 'projects', []);

const selectLimits = createCachedSelector(
  getUser,
  getProjects,
  getId,
  (user, projects, id) => {
    const isUnlimited = get(user, 'logged', false);
    if (isUnlimited) return -1;
    const project = projects.find(obj => obj.id === id);
    const count = get(project, 'langs.length', 0);
    const remaining = LANGUAGES_FREE_MAX - count;
    return remaining;
  }
)((_, id) => `limits::${id}`);

export default selectLimits;
