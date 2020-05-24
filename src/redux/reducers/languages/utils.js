export const updateTime = obj => ({ ...obj, mtime: Date.now() });

export const checkIsLanguage = (obj, lang, project) => {
  const isLanguage = obj.lang === lang;
  const isProject = obj.project === project;
  const shouldUpdate = isProject && isLanguage;
  return shouldUpdate;
};
