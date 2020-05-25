import get from 'lodash.get';

import { EVENT_TYPES } from '../../constants';

const commitDraftAsync = draft => (dispatch, getState) => {
  const stage = getState();
  const projects = get(stage, 'projects');
  const found = projects.find(obj => obj.id === draft.id);
  const type = !found ? EVENT_TYPES.PROJECT_CREATE : EVENT_TYPES.LANGUAGE_ADD;
  const json = JSON.parse(draft.content);
  return { draft, json, type };
};

export default commitDraftAsync;
