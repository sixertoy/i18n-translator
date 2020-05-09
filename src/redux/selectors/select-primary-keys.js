import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

// import { uniq } from '../../core/utils/array';
// const mapKeys = ({ translations }) => Object.keys(translations);
// const mergeKeys = (acc, keys) => [...acc, ...keys];
//
// const selectPrimaryKeys = createSelector(
//   state => state.translations,
//   translations => {
//     const keys = translations
//       .map(mapKeys)
//       .reduce(mergeKeys, [])
//       .filter(uniq)
//       .sort();
//     return keys;
//   }
// );
//
// import selectTranslations from './select-translations';

const getId = (_, id) => id;
const getLanguages = state => state.languages;

const selectPrimaryKeys = createCachedSelector(
  getLanguages,
  getId,
  (languages, id) => {
    const filtered = languages.filter(obj => obj.project === id);
    const first = get(filtered, '0.translations', []);
    const keys = Object.keys(first);
    return keys;
  }
)((_, id) => `primary-keys::${id}`);

export default selectPrimaryKeys;
