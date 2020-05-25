import get from 'lodash.get';

import hydrate from '../../hydrate';
import { language as model } from '../../models';

const getProject = draft => get(draft, 'id');
const getLanguage = draft => get(draft, 'langs.0');

const createProject = (state, action) => {
  const { draft, json } = action;
  const lang = getLanguage(draft);
  const project = getProject(draft);
  const update = { lang, project, translations: json };
  const next = hydrate(model, draft, update);
  return [...state, next];
};

export default createProject;
