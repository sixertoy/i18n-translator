import { EVENT_TYPES } from '../../constants';
import hydrate from '../hydrate';
import { draft as model } from '../models';

const createDraftFromProject = action => {
  const { source } = action;
  const nextState = hydrate(model, source);
  return nextState;
};

const favorites = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.DRAFT_HYDRATE:
      return createDraftFromProject(action);
    case EVENT_TYPES.DRAFT_CREATE:
      return { ...action.draft };
    case EVENT_TYPES.DRAFT_UPDATE:
      return { ...state, ...action.value };
    case EVENT_TYPES.LANGUAGE_ADD:
    case EVENT_TYPES.PROJECT_CREATE:
      return {};
    default:
      return state;
  }
};

export default favorites;
