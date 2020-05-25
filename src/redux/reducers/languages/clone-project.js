import hydrate from '../../hydrate';
import { language as model } from '../../models';

const getLanguages = (state, id) => state.filter(obj => obj.project === id);

const createProject = (state, action) => {
  const { clone, project } = action;
  const languages = getLanguages(state, project);
  const next = languages.map(obj => {
    const { label, lang, translations } = obj;
    const update = {
      label,
      lang,
      project: clone.id,
      translations: { ...translations },
    };
    return hydrate(model, update);
  });
  return [...state, ...next];
};

export default createProject;
