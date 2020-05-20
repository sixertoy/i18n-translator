import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getLanguages = state => get(state, 'languages', []);
const getKeys = (state, id) => get(state, ['keys', id], []);

const filterNonEmptyValues = v => v && v !== '';

const selectLanguages = createCachedSelector(
  getLanguages,
  getKeys,
  getId,
  (languages, keys, id) => {
    const filtered = languages.filter(obj => obj.project === id);

    const base = keys.reduce((acc, key) => ({ ...acc, [key]: '' }), {});
    const enhanced = filtered.reduce((acc, { translations, ...rest }) => {
      const next = { ...base, ...translations };
      return [...acc, { ...rest, translations: next }];
    }, []);

    const items = enhanced.reduce((acc, { translations, ...rest }) => {
      const values = Object.values(translations);
      const filled = values.filter(filterNonEmptyValues);
      const clearable = filled.length > 0;
      const next = { ...rest, clearable, translations };
      return [...acc, next];
    }, []);

    return items;
  }
)((_, id) => `languages::${id}`);

export default selectLanguages;
