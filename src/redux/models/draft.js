import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

const draft = {
  content: '',
  id: () => uuidv1(),
  label: '',
  langs: [],
  name: () => ucFirst(getName()),
};

export default draft;
