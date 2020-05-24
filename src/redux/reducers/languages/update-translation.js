import { checkIsLanguage, updateTime } from './utils';

function updateTranslation(state, action) {
  const { key, lang, project, value } = action;

  const nextState = state.reduce((arr, obj) => {
    // filter languages with project
    const shouldUpdate = checkIsLanguage(obj, lang, project);
    if (!shouldUpdate) return [...arr, obj];

    const translations = { ...obj.translations, [key]: value };
    const update = updateTime({ ...obj, translations });
    return [...arr, update];
  }, []);

  return nextState;
}

export default updateTranslation;
