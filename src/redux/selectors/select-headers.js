import { createSelector } from 'reselect';

import selectPercentage from './select-percentages';

const reduceToHeaders = (acc, { label, lang }) => [...acc, { label, lang }];

const mapToPercentages = percentages => ({ lang, ...rest }) => ({
  ...rest,
  ...percentages[lang],
  lang,
});

const selectHeaders = createSelector(
  state => state.translations,
  selectPercentage,
  (translations, percentages) => {
    const headers = translations
      .reduce(reduceToHeaders, [])
      .map(mapToPercentages(percentages));
    return headers;
  }
);

export default selectHeaders;
