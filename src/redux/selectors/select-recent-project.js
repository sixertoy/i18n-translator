import get from 'lodash.get';
import { createSelector } from 'reselect';

const getRecents = state => state.recents || null;

const selectProjects = createSelector(getRecents, recents => {
  if (!recents || !recents.length) return null;
  return recents && get(recents, '0');
});

export default selectProjects;
