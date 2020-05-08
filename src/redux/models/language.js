import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';

const model = {
  collapsed: false, // string
  ctime: () => Date.now(), // { [key]: 'value' }
  dict: {}, // string
  fav: false, // string
  label: () => ucFirst(getName()), // string
  lang: null, // string
  mtime: () => Date.now(), // string
  project: null, // string
};

export default model;
