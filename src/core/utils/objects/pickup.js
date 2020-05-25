import fromPairs from 'lodash.frompairs';
import get from 'lodash.get';

const pickup = (obj, keys) => {
  const pairs = keys.map(k => [k, get(obj, k, null)]);
  return fromPairs(pairs);
};

export default pickup;
