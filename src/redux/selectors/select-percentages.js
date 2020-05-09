import get from 'lodash.get';
import isEmpty from 'lodash.isempty';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getLanguages = state => get(state, 'languages', []);

const selectPercentages = createCachedSelector(
  getLanguages,
  getId,
  (languages, id) => {
    const counts = languages
      .filter(obj => obj.project === id)
      .reduce((acc, { lang, translations }) => {
        const entries = Object.entries(translations);
        const total = entries.length;
        const count = entries.filter(arr => !isEmpty(arr[1]));
        const next = { [lang]: { count, total } };
        return { ...acc, ...next };
      }, {});
    const overall = Object.entries(counts).reduce((acc, { count, total }) => {
      return { count: acc.count + count, total: acc.total + total };
    }, {});
    return { ...counts, overall };
  }
)((_, id) => `percentage::${id}`);

export default selectPercentages;
