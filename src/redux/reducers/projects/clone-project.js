import { pickup } from '../../../core/utils';
import hydrate from '../../hydrate';
import { project as model } from '../../models';

const foundProject = (state, id) => state.find(obj => obj.id === id);

function createProject(state, action) {
  const { clone, project } = action;
  const found = foundProject(state, project);
  const picked = pickup(found, ['langs']);
  const next = hydrate(model, picked, clone);
  return [...state, next];
}

export default createProject;
