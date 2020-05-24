import fromPairs from 'lodash.frompairs';

import { checkIsLanguage, updateTime } from './utils';

const pairsToObject = arr => fromPairs(arr);
const objectToPairs = obj => Object.entries(obj);
const clearValuesFromPairs = pairs => pairs.map(([key]) => [key, '']);

function clearLanguage(state, action) {
  const { lang, project } = action;
  const nextState = state.map(obj => {
    // filter languages with project
    const shouldUpdate = checkIsLanguage(obj, lang, project);
    if (!shouldUpdate) return obj;

    // clear translations for this language
    const update = updateTime(obj);
    const pairs = objectToPairs(obj.translations);
    const cleared = clearValuesFromPairs(pairs);
    const translations = pairsToObject(cleared);
    return { ...update, translations };
  });
  return nextState;
}

export default clearLanguage;
