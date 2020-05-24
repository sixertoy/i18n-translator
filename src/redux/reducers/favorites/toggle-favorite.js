const removeProject = (state, project) => {
  return state.filter(id => id !== project);
};
const addProject = (state, project) => {
  return [...state, project];
};

function toggleFavorite(state, action) {
  const { project } = action;
  const nextState = state.includes(project)
    ? removeProject(state, project)
    : addProject(state, project);
  return nextState;
}

export default toggleFavorite;
