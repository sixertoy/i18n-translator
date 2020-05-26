import { checkIsLanguage } from './utils';

function toggleCollapse(state, action) {
  const { lang, project } = action;
  const next = state.map(obj => {
    const isProject = checkIsLanguage(obj, lang, project);
    if (!isProject) return obj;

    const fullscreen = !obj.fullscreen;
    return { ...obj, fullscreen };
  });
  return next;
}

export default toggleCollapse;
