import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getLanguages = state => state.languages;

export const filterValidValues = value => {
  if (!value) return false;
  const isString = typeof value === 'string';
  if (!isString) return false;
  const isNotEmpty = value.trim() !== '';
  if (!isNotEmpty) return false;
  return true;
};

const selectLanguages = createCachedSelector(
  getLanguages,
  getId,
  (languages, id) => {
    const items = languages
      .filter(obj => obj.project === id)
      .map(obj => {
        const values = Object.values(obj.translations);
        const total = values.length;
        const count = values.filter(filterValidValues).length;
        return { ...obj, count, total };
      });
    return items;
  }
)((_, id) => `languages::${id}`);

export default selectLanguages;
