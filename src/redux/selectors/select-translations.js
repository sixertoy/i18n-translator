import { createSelector } from 'reselect';

import { LANGS } from '../../constants';

const sortTranslationKeysAsc = (a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

const selectTranslations = createSelector(
  state => state.translations,
  translations => {
    return translations.reduce((acc, { content, id: lang }) => {
      const label = LANGS[lang];
      const entries = Object.entries(content).sort(sortTranslationKeysAsc);
      const keys = entries.map(arr => arr[0]);
      const values = entries.map(arr => arr[1]);
      const next = { keys, label, lang, values };
      return [...acc, next];
    }, []);
  }
);

export default selectTranslations;
