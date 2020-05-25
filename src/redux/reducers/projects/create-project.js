import hydrate from '../../hydrate';
import { project as model } from '../../models';

function createProject(state, action) {
  const { draft } = action;
  const next = hydrate(model, draft);
  return [...state, next];
}

export default createProject;
