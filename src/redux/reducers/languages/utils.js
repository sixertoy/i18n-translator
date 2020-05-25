export const updateTime = obj => ({ ...obj, mtime: Date.now() });

export const checkIsProject = (obj, id) => {
  const isProject = obj.project === id;
  return isProject;
};

export const checkIsLanguage = (obj, lang, id) => {
  const isLanguage = obj.lang === lang;
  const isProject = checkIsProject(obj, id);
  const shouldUpdate = isProject && isLanguage;
  return shouldUpdate;
};
