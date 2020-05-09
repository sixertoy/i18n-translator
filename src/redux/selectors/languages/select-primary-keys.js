import { createCachedSelector } from 're-reselect';

import selectTranslations from './select-translations';

const getTranslations = (_, id) => selectTranslations(_, id);

export const makePrimaryKeys = translations => {
  const keys = Object.keys(translations[0].dict);
  return keys;
};

export default createCachedSelector(
  getTranslations,
  makePrimaryKeys
)((_, id) => `project::primary-keys::${id}`);
