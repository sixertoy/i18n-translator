import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getKeys = state => state.keys;

const selectPrimaryKeys = createCachedSelector(getKeys, getId, (keys, id) =>
  get(keys, id, [])
)((_, id) => `primary-keys::${id}`);

export default selectPrimaryKeys;
