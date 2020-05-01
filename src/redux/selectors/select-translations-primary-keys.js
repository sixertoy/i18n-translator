import { createSelector } from 'reselect';

const selectTranslationsPrimaryKeys = createSelector(
  state => state.datas,
  datas => {
    const primary = datas.find(o => o.primary);
    const json = (primary && primary.content) || {};
    const keys = Object.keys(json).sort();
    return keys.sort();
  }
);

export default selectTranslationsPrimaryKeys;
