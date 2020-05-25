import get from 'lodash.get';

function deleteKey(state, action) {
  const { key, project } = action;
  const keys = get(state, project);
  const update = keys.filter(k => k !== key);
  return { ...state, [project]: update };
}

export default deleteKey;
