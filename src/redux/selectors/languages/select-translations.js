import { createCachedSelector } from 're-reselect';

const getTranslations = state => state.translations;
const getId = (_, id) => id;

export const filterValidValues = value => {
  if (!value) return false;
  const isString = typeof value === 'string';
  if (!isString) return false;
  const isNotEmpty = value.trim() !== '';
  if (!isNotEmpty) return false;
  return true;
};

export const filterTranslationsByProject = id => language =>
  language.project === id;

export const makeTranslations = (items, id) => {
  const filtered = items.filter(filterTranslationsByProject(id));
  const translations = filtered.map(language => {
    const values = Object.values(language.translations);
    const total = values.length;
    const count = values.filter(filterValidValues).length;
    return { ...language, count, total };
  });
  return translations;
};

export default createCachedSelector(
  getTranslations,
  getId,
  makeTranslations
)((_, id) => `project::translations::${id}`);
