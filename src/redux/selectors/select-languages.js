import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getLanguages = state => get(state, 'languages', []);

const filterEmptyValues = v => v && v !== '';

const selectLanguages = createCachedSelector(
  getLanguages,
  getId,
  (languages, id) => {
    const items = languages
      .filter(obj => obj.project === id)
      .reduce((acc, { translations, ...rest }) => {
        const values = Object.values(translations);
        const filtered = values.filter(filterEmptyValues);
        const clearable = filtered.length > 0;
        const next = { ...rest, clearable, translations };
        return [...acc, next];
      }, []);
    return items;
  }
)((_, id) => `languages::${id}`);

export default selectLanguages;
