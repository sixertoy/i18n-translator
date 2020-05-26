import get from 'lodash.get';
import { createCachedSelector } from 're-reselect';

const getId = (_, id) => id;
const getLanguages = state => get(state, 'languages', []);

const selectFullscreen = createCachedSelector(
  getLanguages,
  getId,
  (languages, id) => {
    const filtered = languages.filter(obj => obj.project === id);
    const found = filtered.find(obj => obj.fullscreen && obj);
    return Boolean(found);
  }
)((_, id) => `fullscreen::${id}`);

export default selectFullscreen;
