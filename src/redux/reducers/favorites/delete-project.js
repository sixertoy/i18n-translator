function deleteProject(state, action) {
  const { project } = action;
  const nextState = state.filter(id => id !== project);
  return nextState;
}

export default deleteProject;
