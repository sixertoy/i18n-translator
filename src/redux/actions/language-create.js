import get from 'lodash.get';

import { EVENT_TYPES, LANGUAGES_FREE } from '../../constants';

const createLanguageAsync = (lang, content, pid) => dispatch => {
  const project = pid;
  const label = get(LANGUAGES_FREE, [lang]);
  const dict = JSON.parse(content);
  dispatch({ dict, label, lang, project, type: EVENT_TYPES.LANGUAGE_CREATE });
  return Promise.resolve();
};

export default createLanguageAsync;
