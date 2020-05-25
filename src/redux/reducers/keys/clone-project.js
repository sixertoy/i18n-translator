import get from 'lodash.get';

const getKeys = (state, id) => get(state, id);

function createProject(state, action) {
  const { clone, project } = action;
  const keys = getKeys(state, project);
  return { ...state, [clone.id]: [...keys] };
}

export default createProject;
