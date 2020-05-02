import { createSelector } from 'reselect';

import selectPrimaryKeys from './select-primary-keys';

const sortDictByAsc = (a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

const mergeKeys = (acc, key) => ({ ...acc, [key]: '' });

const selectTranslations = createSelector(
  state => state.translations,
  selectPrimaryKeys,
  (translations, keys) => {
    const merged = keys.reduce(mergeKeys, {});
    const items = translations.map(({ dict, lang }) => {
      const entries = Object.entries({ ...merged, ...dict });
      const values = entries.sort(sortDictByAsc);
      return { lang, values };
    });
    return items;
  }
);

export default selectTranslations;
