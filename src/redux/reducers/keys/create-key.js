import get from 'lodash.get';

function createKey(state, action) {
  const { key, project } = action;
  const previous = get(state, project);
  const update = [...previous, key].sort();
  return { ...state, [project]: update };
}

export default createKey;
