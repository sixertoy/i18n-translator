import omit from 'lodash.omit';

function deleteProject(state, action) {
  const { project } = action;
  const next = omit(state, [project]);
  return next;
}

export default deleteProject;
