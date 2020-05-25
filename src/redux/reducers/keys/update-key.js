import get from 'lodash.get';

function updateKey(state, action) {
  const { previous, project, update } = action;
  const keys = get(state, project);
  const next = keys.map(v => (v !== previous ? v : update));
  return { ...state, [project]: next };
}

export default updateKey;
