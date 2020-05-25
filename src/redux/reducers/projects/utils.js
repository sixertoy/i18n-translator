export const updateTime = obj => ({ ...obj, mtime: Date.now() });

export const checkIsProject = (obj, project) => obj.id === project;
