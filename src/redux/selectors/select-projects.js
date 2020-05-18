import { createSelector } from 'reselect';

const getProjects = state => state.projects;

const selectProjects = createSelector(getProjects, projects => {
  return projects;
});

export default selectProjects;
