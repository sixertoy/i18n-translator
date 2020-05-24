function deleteProject(state, action) {
  const { project } = action;
  const filtered = state.filter(obj => {
    const shouldDelete = obj.project === project;
    return !shouldDelete;
  });
  return filtered;
}

export default deleteProject;
