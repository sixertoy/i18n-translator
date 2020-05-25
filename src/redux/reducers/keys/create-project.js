function createProject(state, action) {
  const { draft, json } = action;
  const keys = Object.keys(json);
  return { ...state, [draft.id]: keys };
}

export default createProject;
