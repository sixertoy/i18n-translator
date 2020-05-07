import { EVENT_TYPES, LANGS } from '../../../constants';

const createLanguage = (lang, content) => {
  const label = LANGS[lang];
  const dict = JSON.parse(content);
  return {
    dict,
    label,
    lang,
    type: EVENT_TYPES.TRANSLATIONS_PROJECT_CREATE,
  };
};

export default createLanguage;
