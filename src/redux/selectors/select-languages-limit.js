import { createSelector } from 'reselect';

import { LANGUAGES_FREE_MAX } from '../../constants';
import selectProjectLanguages from './select-project-languages';

const selectLanguagesLimit = createSelector(
  state => state.user,
  selectProjectLanguages,
  (user, langs) => {
    if (user && user.logged) return -1;
    const countMore = LANGUAGES_FREE_MAX - langs.length;
    return countMore;
  }
);

export default selectLanguagesLimit;
