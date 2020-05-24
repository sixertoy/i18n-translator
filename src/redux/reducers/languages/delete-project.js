function deleteProject(state, action) {
  const { project } = action;
  const nextState = state.filter(obj => obj.project !== project);
  return nextState;
}

export default deleteProject;
