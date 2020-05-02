import { createSelector } from 'reselect';

const reduceToHeaders = (acc, { label, lang }) => [...acc, { label, lang }];

const selectHeaders = createSelector(
  state => state.translations,
  translations => {
    const headers = translations.reduce(reduceToHeaders, []);
    return headers;
  }
);

export default selectHeaders;
