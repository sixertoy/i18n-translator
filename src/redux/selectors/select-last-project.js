import { createSelector } from 'reselect';

const getProjects = state => state.projects;
const getLastProject = state => state.project;

export const selectLastProject = createSelector(
  [getLastProject, getProjects],
  (id, projects) => {
    const project = projects.find(obj => obj.id === id);
    return project || {};
  }
);

export default selectLastProject;
