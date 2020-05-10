import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';

// NOTE language dict entry
// [key]: {
//   string: string
//   plurals: string
//   context: string
//   developer_comment: string
//   character_limit: number
// }

const model = {
  collapsed: false, // [string]
  ctime: () => Date.now(), // string
  fav: false, // { [key]: 'value' }
  label: () => ucFirst(getName()), // string
  lang: null, // string
  mtime: () => Date.now(), // string
  project: null, // string
  translations: {}, // string
};

export default model;
