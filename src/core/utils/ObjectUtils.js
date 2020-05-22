import ObjectEntries from 'object.entries';

// core
import { deduplicate } from './ArrayUtils';

export const entries = obj => {
  try {
    return Object.entries(obj);
  } catch (e) {
    return ObjectEntries(obj);
  }
};

export const has = (obj, propname) =>
  Object.prototype.hasOwnProperty.call(obj, propname);

export const isObject = obj =>
  obj &&
  !Array.isArray(obj) &&
  typeof obj === 'object' &&
  typeof obj !== 'function';

export const toMap = obj => new Map(entries(obj));

export const deepClone = obj => JSON.parse(JSON.stringify(obj));

export const clone = obj => ({ ...obj });

export const fillwith = (obj, keys, defaultvalue = '') => {
  const oclone = clone(obj);
  const missing = Object.keys(obj).concat(keys)
.filter(deduplicate);
  missing.forEach(key => {
    if (!has(oclone, key)) {
      oclone[key] = defaultvalue;
    }
  });
  return oclone;
};

export const update = (dest, src) => {
  const updated = clone(dest);
  Object.keys(src).forEach(k => {
    // copy object
    updated[k] = src[k];
  });
  return updated;
};
