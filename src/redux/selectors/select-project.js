import { createSelector } from 'reselect';

const getProject = state => state;

export const selectProject = createSelector([getProject], project => {
  return project;
});

export default selectProject;
