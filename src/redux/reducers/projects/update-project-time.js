import { checkIsProject, updateTime } from './utils';

function updateProjectTime(state, action) {
  const { project } = action;
  const nextState = state.reduce((acc, obj) => {
    const isProject = checkIsProject(obj, project);
    if (!isProject) return [...acc, obj];

    const update = updateTime(obj);
    return [...acc, update];
  }, []);
  return nextState;
}

export default updateProjectTime;
