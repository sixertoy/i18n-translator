import fromPairs from 'lodash.frompairs';

import { checkIsProject, updateTime } from './utils';

const toPairs = translations => Object.entries(translations);
const clearValues = pairs => pairs.map(([key]) => [key, '']);

function clearProject(state, action) {
  const { project } = action;
  const next = state.map(obj => {
    const isProject = checkIsProject(obj, project);
    if (!isProject) return obj;

    const pairs = toPairs(obj.translations);
    const cleared = clearValues(pairs);
    const translations = fromPairs(cleared);
    const update = updateTime({ translations });
    return { ...obj, ...update };
  });
  return next;
}

export default clearProject;
