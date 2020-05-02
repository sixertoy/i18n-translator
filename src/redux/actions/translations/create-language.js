import { EVENT_TYPES, LANGS } from '../../../constants';

const createLanguage = (lang, editorValue) => {
  const label = LANGS[lang];
  const dict = JSON.parse(editorValue);
  const translation = { dict, label, lang };
  return {
    translation,
    type: EVENT_TYPES.TRANSLATIONS_PROJECT_CREATE,
  };
};

export default createLanguage;
