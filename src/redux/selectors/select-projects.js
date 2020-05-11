import { createSelector } from 'reselect';

const getProjects = state => state.projects;

const selectProjects = createSelector(getProjects, projects => projects);

export default selectProjects;
