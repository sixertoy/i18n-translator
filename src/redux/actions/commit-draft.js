import get from 'lodash.get';

import { EVENT_TYPES } from '../../constants';

const getDraftId = draft => get(draft, 'id');
const getProjects = state => get(state, 'projects');
const getTranslations = draft => JSON.parse(draft.content);
const foundExistingProject = (items, id) => items.find(obj => obj.id === id);

const commitDraftAsync = draft => (dispatch, getState) => {
  const stage = getState();
  const id = getDraftId(draft);
  const projects = getProjects(stage);
  const found = foundExistingProject(projects, id);
  const json = getTranslations(draft);

  const shouldCreateProject = !found;
  const type = shouldCreateProject
    ? EVENT_TYPES.PROJECT_CREATE
    : EVENT_TYPES.LANGUAGE_ADD;

  dispatch({ draft, json, type });
  return Promise.resolve(id);
};

export default commitDraftAsync;
