import get from 'lodash.get';
import uniq from 'lodash.uniq';

const getProjectId = draft => get(draft, 'id', null);
const getProjectKeys = (state, id) => get(state, id, []);
const mergeKeys = (keys, json) => [...keys, ...Object.keys(json)];

function addLanguage(state, action) {
  const { draft, json } = action;
  const id = getProjectId(draft);
  const projectKeys = getProjectKeys(state, id);
  const merged = mergeKeys(projectKeys, json);
  const keys = uniq(merged);
  const nextState = { ...state, [id]: keys };
  return nextState;
}

export default addLanguage;
