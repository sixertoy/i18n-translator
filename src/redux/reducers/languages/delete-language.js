function deleteLanguage(state, action) {
  const { lang, project } = action;
  const next = state.filter(obj => {
    const isLanguage = obj.lang === lang;
    const isProject = obj.project === project;
    const shouldDelete = isProject && isLanguage;
    return !shouldDelete;
  });
  return next;
}

export default deleteLanguage;
