import hydrate from '../../hydrate';
import { language as model } from '../../models';

const createProject = (state, action) => {
  const { draft, json, label } = action;
  const next = { label, project: draft.id, translations: json };
  const nextState = hydrate(model, draft, next);
  return [...state, nextState];
};

export default createProject;
