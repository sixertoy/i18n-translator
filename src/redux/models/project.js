import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

const model = {
  ctime: () => Date.now(), // number
  id: () => uuidv1(), // string
  mtime: () => Date.now(), // number
  name: () => ucFirst(getName()), // string
};

export default model;
