import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

const draft = {
  id: () => uuidv1(),
  langs: [],
  name: () => ucFirst(getName()),
  tanslations: [],
};

export default draft;
