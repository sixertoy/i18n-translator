import fromPairs from 'lodash.frompairs';

import { updateTime } from './utils';

const pairsToObject = arr => fromPairs(arr);
const objectToPairs = obj => Object.entries(obj);
const removeKey = (key, pairs) => pairs.filter(([id]) => id !== key);

function deleteKey(state, action) {
  const { key, project } = action;
  const nextState = state.map(obj => {
    const isProject = obj.project === project;
    if (!isProject) return obj;

    const next = updateTime(obj);
    const pairs = objectToPairs(obj.translations);
    const picked = removeKey(key, pairs);
    const translations = pairsToObject(picked);
    return { ...next, translations };
  });
  return nextState;
}

export default deleteKey;
