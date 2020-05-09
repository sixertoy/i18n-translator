import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

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
