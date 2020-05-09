import { createCachedSelector } from 're-reselect';

import selectPrimaryKeys from '../languages/select-primary-keys';
import selectTranslations from '../languages/select-translations';
import selectProject from './select-project';

const getProject = (_, id) => selectProject(_, id);
const getPrimaryKeys = (_, id) => selectPrimaryKeys(_, id);
const getTranslations = (_, id) => selectTranslations(_, id);

export const filterValidValues = value => {
  if (!value) return false;
  const isString = typeof value === 'string';
  if (!isString) return false;
  const isNotEmpty = value.trim() !== '';
  if (!isNotEmpty) return false;
  return true;
};

export const getTotal = (translations, keys) => {
  const total = translations.length * keys.length;
  return total;
};

export const getCount = translations => {
  const count = translations.reduce((acc, obj) => {
    const fitrered = Object.values(obj.dict).filter(filterValidValues);
    const subcount = fitrered.length;
    return acc + subcount;
  }, 0);
  return count;
};

export const makeProjectWithPercentage = (project, keys, translations) => {
  if (!project) return null;
  const count = getCount(translations);
  const total = getTotal(translations, keys);
  const next = { ...project, count, total };
  return next;
};

export default createCachedSelector(
  getProject,
  getPrimaryKeys,
  getTranslations,
  makeProjectWithPercentage
)((_, id) => `project::with::percentage::${id}`);
