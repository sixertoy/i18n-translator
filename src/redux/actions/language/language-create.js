import get from 'lodash.get';

import { EVENT_TYPES, LANGS } from '../../../constants';

const createLanguage = (lang, content, project) => {
  const label = get(LANGS, [lang]);
  const dict = JSON.parse(content);
  return {
    dict,
    label,
    lang,
    project,
    type: EVENT_TYPES.LANGUAGE_CREATE,
  };
};

export default createLanguage;
