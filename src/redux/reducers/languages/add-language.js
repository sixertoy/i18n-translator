import get from 'lodash.get';

import hydrate from '../../hydrate';
import { language as model } from '../../models';

const getProject = draft => get(draft, 'id');
const getLanguage = draft => get(draft, 'langs.0');

const addLanguage = (state, action) => {
  const { draft, json } = action;
  const lang = getLanguage(draft);
  const project = getProject(draft);
  const next = { lang, project, translations: json };
  const nextState = hydrate(model, draft, next);
  return [...state, nextState];
};

export default addLanguage;
