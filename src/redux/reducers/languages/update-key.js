import fromPairs from 'lodash.frompairs';
import get from 'lodash.get';

import { checkIsProject, updateTime } from './utils';

const getTranslations = obj => get(obj, 'translations');
const getTranslationValue = (items, key) => get(items, key);
const removeKey = (items, key) => {
  const pairs = Object.entries(items);
  const cleared = pairs.filter(([k]) => k !== key);
  const object = fromPairs(cleared);
  return object;
};
const addkey = (items, key, value) => ({ ...items, [key]: value });

function updateKey(state, action) {
  const { project, values } = action;
  const nextState = state.map(obj => {
    const isProject = checkIsProject(obj, project);
    if (!isProject) return obj;

    const [previousKey, nextKey] = values;
    const items = getTranslations(obj);
    const value = getTranslationValue(items, previousKey);
    const cleared = removeKey(items, previousKey);
    const translations = addkey(cleared, nextKey, value);
    const next = updateTime({ translations });
    return { ...obj, ...next };
  });
  return nextState;
}

export default updateKey;
