import { createSelector } from 'reselect';

import { uniq } from '../../core/utils/array';

const mapKeys = ({ translations }) => Object.keys(translations);
const mergeKeys = (acc, keys) => [...acc, ...keys];

const selectPrimaryKeys = createSelector(
  state => state.translations,
  translations => {
    const keys = translations
      .map(mapKeys)
      .reduce(mergeKeys, [])
      .filter(uniq)
      .sort();
    return keys;
  }
);

export default selectPrimaryKeys;
