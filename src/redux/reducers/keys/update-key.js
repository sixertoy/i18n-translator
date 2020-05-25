import get from 'lodash.get';

const getProjectKeys = (state, id) => get(state, id);

const replaceKey = (keys, values) => {
  const [previousValue, updateValue] = values;
  const next = keys.map(key => (key !== previousValue ? key : updateValue));
  return next;
};

function updateKey(state, action) {
  const { project, values } = action;
  const keys = getProjectKeys(state, project);
  const update = replaceKey(keys, values);
  return { ...state, [project]: update };
}

export default updateKey;
