import get from 'lodash.get';

import { DEFAULT_LANGUAGES, EVENT_TYPES } from '../../constants';

const createLanguageAsync = (lang, content, pid) => dispatch => {
  const project = pid;
  const label = get(DEFAULT_LANGUAGES, [lang]);
  const translations = JSON.parse(content);
  dispatch({
    label,
    lang,
    project,
    translations,
    type: EVENT_TYPES.LANGUAGE_CREATE,
  });
  return Promise.resolve();
};

export default createLanguageAsync;
