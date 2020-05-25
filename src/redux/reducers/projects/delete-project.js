function deleteProject(state, action) {
  const { project } = action;
  const filtered = state.filter(obj => obj.id !== project);
  return filtered;
}

export default deleteProject;
