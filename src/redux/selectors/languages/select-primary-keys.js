import { createCachedSelector } from 're-reselect';

import selectTranslations from './select-translations';

const getTranslations = (_, id) => selectTranslations(_, id);

export const makePrimaryKeys = languages => {
  const keys = Object.keys(languages[0].translations);
  return keys;
};

export default createCachedSelector(
  getTranslations,
  makePrimaryKeys
)((_, id) => `project::primary-keys::${id}`);
