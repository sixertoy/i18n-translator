import { createSelector } from 'reselect';

const getId = (_, id) => id;
const getProjects = state => state.projects;

const makeSelectProjectSelector = () =>
  createSelector(getProjects, getId, (projects, id) => {
    const project = projects.find(obj => obj.id === id);
    return project || {};
  });

export default makeSelectProjectSelector;
