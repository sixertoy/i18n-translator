import { createSelector } from 'reselect';

import selectPrimaryKeys from './select-primary-keys';

const sortLanguageByLabelAsc = (a, b) => {
  if (a.label > b.label) return 1;
  if (a.label < b.label) return -1;
  return 0;
};

const filterEmptyValues = v => v && v.trim() !== '';

const reduceToCounts = (acc, { count }) => count + acc;

const reduceToLangs = total => (acc, obj) => {
  const { label, lang, translations } = obj;
  const count = Object.values(translations).filter(filterEmptyValues).length;
  const percent = (count * 100) / total;
  return [...acc, { count, label, lang, percent, total }];
};

const getProject = (total, langs) => {
  const count = langs.reduce(reduceToCounts, 0);
  const percent = (count * 100) / total;
  const project = { count, percent, total };
  return project;
};

const reduceToObjects = (acc, { lang, ...rest }) => ({
  ...acc,
  [lang]: { ...rest },
});

const selectPercentages = createSelector(
  state => state.translations,
  selectPrimaryKeys,
  (translations, keys) => {
    // translations
    let total = keys.length;
    const langs = translations
      .reduce(reduceToLangs(total), [])
      .sort(sortLanguageByLabelAsc);
    // project
    total *= translations.length;
    const project = getProject(total, langs);
    // reduce langs to objects
    const items = langs.reduce(reduceToObjects, {});
    return { ...items, project };
  }
);

export default selectPercentages;
