// NOTE language dict entry
// [key]: {
//   string: string
//   plurals: string
//   context: string
//   developer_comment: string
//   character_limit: number
// }

const model = {
  collapsed: false,
  ctime: () => Date.now(),
  fav: false,
  label: null,
  lang: null,
  mtime: () => Date.now(),
  project: null,
  translations: {},
};

export default model;
