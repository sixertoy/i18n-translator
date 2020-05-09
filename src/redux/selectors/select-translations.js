import { createSelector } from 'reselect';

import selectPrimaryKeys from './select-primary-keys';

const sortDictByAsc = (a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

const mergeKeys = (acc, key) => ({ ...acc, [key]: '' });

const selectTranslations = createSelector(
  state => state.languages,
  selectPrimaryKeys,
  (languages, keys) => {
    const merged = keys.reduce(mergeKeys, {});
    const items = languages.map(({ label, lang, translations }) => {
      const entries = Object.entries({ ...merged, ...translations });
      const values = entries.sort(sortDictByAsc);
      return { label, lang, values };
    });
    return items;
  }
);

export default selectTranslations;
