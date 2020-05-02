import { createSelector } from 'reselect';

// import { LANGS } from '../../constants';
//
// const sortTranslationKeysAsc = (a, b) => {
//   if (a[0] > b[0]) return 1;
//   if (a[0] < b[0]) return -1;
//   return 0;
// };

const selectTranslations = createSelector(
  state => state.translations,
  () => {
    return [];
  }
);

export default selectTranslations;
