import { EVENT_TYPES } from '../../../constants';

const create = (lang, editorContent) => {
  return {
    json: editorContent,
    lang,
    type: EVENT_TYPES.TRANSLATIONS_PROJECT_CREATE,
  };
};

export default create;
