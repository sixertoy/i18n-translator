import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getProp = (_, id) => id;
const getSomething = state => get(state, 'something', []);

const selectSomething = createCachedSelector(
  getSomething,
  getProp,
  (something, id) => {
    const next = something.find(obj => obj.id === id);
    return next;
  }
)((_, prop) => `identifier::${prop}`);

export default selectSomething;
