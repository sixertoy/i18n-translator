import get from 'lodash.get';

import { checkIsProject, updateTime } from './utils';

const getProjectId = draft => get(draft, 'id', null);
const getLanguage = draft => get(draft, 'langs.0');

function addLanguage(state, action) {
  const { draft } = action;
  const id = getProjectId(draft);
  const lang = getLanguage(draft);

  const nextState = state.map(obj => {
    const isProject = checkIsProject(obj, id);
    if (!isProject) return obj;
    const langs = [...obj.langs, lang];
    const update = { ...obj, langs };
    return updateTime(update);
  });

  return nextState;
}

export default addLanguage;
