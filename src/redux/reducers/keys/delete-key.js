import get from 'lodash.get';

const getProjectKeys = (state, id) => get(state, id);
const removeKey = (key, keys) => keys.filter(k => k !== key);

function deleteKey(state, action) {
  const { key, project } = action;
  const keys = getProjectKeys(state, project);
  const update = removeKey(key, keys);
  const next = { [project]: update };
  return { ...state, ...next };
}

export default deleteKey;
