import createCachedSelector from 're-reselect';

const getId = (_, id) => id;
const getProjects = state => state.projects;

const selectProjectLanguages = createCachedSelector(
  getProjects,
  getId,
  (projects, id) => {
    const project = projects.find(obj => obj.id === id);
    return project.langs;
  }
)((_, id) => id);

export default selectProjectLanguages;
