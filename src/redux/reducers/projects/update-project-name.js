import { checkIsProject, updateTime } from './utils';

function updateProjectName(state, action) {
  const { name, project } = action;
  const nextState = state.reduce((acc, obj) => {
    const isProject = checkIsProject(project, obj);
    if (!isProject) return [...acc, obj];

    const update = updateTime(obj);
    const next = { ...update, name };
    return [...acc, next];
  }, []);
  return nextState;
}

export default updateProjectName;
