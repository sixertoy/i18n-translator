import hydrate from '../../hydrate';
import { language as model } from '../../models';

function updateProject(state, action) {
  const next = hydrate(model, action);
  return [...state, next];
}

export default updateProject;
