import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getProjects = state => state.projects;
const getLastProject = state => state.project;

export default createCachedSelector(
  getProjects,
  getLastProject,
  getId,
  (projects, lastId, id) => {
    const project = projects.find(obj => obj.id === id);
    if (!project) return null;
    const next = { ...project, isLast: lastId === id };
    return next;
  }
)((_, id) => `project::${id}`);
