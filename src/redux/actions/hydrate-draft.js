import get from 'lodash.get';

import { EVENT_TYPES } from '../../constants';
import { pickup } from '../../core/utils';

const reduceToObject = (acc, k) => ({ ...acc, [k]: '' });

const hydrateDraftAsync = ({ project }) => (dispatch, getState) => {
  const stage = getState();
  const projects = get(stage, 'projects');
  const found = projects.find(obj => obj.id === project);
  if (!found) {
    throw new Error('Trying to update a project do not exists');
  }

  const picked = pickup(found, ['id', 'langs', 'name']);
  const keys = get(stage, `keys.${found.id}`, []);
  const translations = keys.reduce(reduceToObject, {});
  const content = JSON.stringify(translations, null, 2);
  const source = { ...picked, content };
  dispatch({
    source,
    type: EVENT_TYPES.DRAFT_HYDRATE,
  });
  return Promise.resolve();
};

export default hydrateDraftAsync;
