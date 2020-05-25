import hydrate from '../../hydrate';
import { project as model } from '../../models';

function createProject(state, action) {
  const { draft } = action;
  const extend = { langs: [draft.lang] };
  const next = hydrate(model, draft, extend);
  return [...state, next];
}

export default createProject;
