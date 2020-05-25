export const updateTime = obj => ({ ...obj, mtime: Date.now() });

export const checkIsProject = (project, obj) => obj.id === project;
