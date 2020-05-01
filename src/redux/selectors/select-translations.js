import { createSelector } from 'reselect';

import { LANGS } from '../../constants';

const sortTranslationKeysAsc = (a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

const selectTranslations = createSelector(
  state => state.datas,
  datas => {
    return datas.reduce((acc, { content, id }) => {
      const values = Object.entries(content)
        .sort(sortTranslationKeysAsc)
        .map(arr => arr[1]);
      const next = { [id]: { label: LANGS[id], values } };
      return { ...acc, ...next };
    }, {});
  }
);

export default selectTranslations;
