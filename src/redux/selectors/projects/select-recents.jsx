import orderBy from 'lodash.orderby';
import { createSelector } from 'reselect';

import selectProjects from './select-projects';

const selectRecents = createSelector(selectProjects, projs => {
  const recents = orderBy(projs, ['mtime'], 'desc');
  return recents;
});

export default selectRecents;
