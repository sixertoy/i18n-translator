import fromPairs from 'lodash.frompairs';

import { checkIsProject, updateTime } from './utils';

const toPairs = translations => Object.entries(translations);

function createKey(state, action) {
  const { key, project } = action;

  const nextState = state.map(obj => {
    const isProject = checkIsProject(obj, project);
    if (!isProject) return obj;

    const pairs = toPairs(obj.translations);
    const translations = fromPairs([...pairs, [key, '']]);
    const update = updateTime({ ...obj });
    return { ...obj, translations, update };
  });
  return nextState;
}

export default createKey;
