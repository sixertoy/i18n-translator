import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getLanguages = state => get(state, 'languages', []);

const selectLanguages = createCachedSelector(
  getLanguages,
  getId,
  (languages, id) => {
    const items = languages.filter(obj => obj.project === id);
    return items;
  }
)((_, id) => `languages::${id}`);

export default selectLanguages;
