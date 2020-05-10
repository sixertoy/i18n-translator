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
    const limited = !get(user, 'logged', false);
    const project = projects.find(obj => obj.id === id);
    const count = get(project, 'langs.length', 0);
    const remaining = LANGUAGES_FREE_MAX - count;
    const nextCount = remaining - 1;
    const willReach = nextCount <= 0;
    const hasReach = remaining <= 0;
    return { count, hasReach, limited, remaining, willReach };
  }
)((_, id) => `limits::${id}`);

export default selectLimits;
