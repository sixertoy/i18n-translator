import { createSelector } from 'reselect';

const getProjects = state => state.projects;
const getLastProjectid = state => state.project;

export const makeLastProject = (projects, id) => {
  const project = projects.find(obj => obj.id === id);
  return project;
};

export default createSelector(getProjects, getLastProjectid, makeLastProject);
