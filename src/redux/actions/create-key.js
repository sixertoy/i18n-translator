import generate from 'project-name-generator';

import { EVENT_TYPES } from '../../constants';

const createKeyAsync = ({ project }) => dispatch => {
  const key = generate({ number: false, words: 3 })
    .dashed.split('-')
    .join('_')
    .toUpperCase();
  dispatch({ key, project, type: EVENT_TYPES.LANGUAGE_KEY_CREATE });
  return Promise.resolve(key);
};

export default createKeyAsync;
