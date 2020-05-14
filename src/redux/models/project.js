import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

const model = {
  ctime: () => Date.now(), // number
  demo: false, // boolean
  id: () => uuidv1(), // string
  langs: [], // [string]
  mtime: () => Date.now(), // string
  name: () => ucFirst(getName()), // [string]
};

export default model;
