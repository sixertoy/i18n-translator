import { combineReducers } from 'redux';

import * as app from './app';
import keys from './keys';
import languages from './languages';
import projects from './projects';
import theme from './theme';
import user from './user';

function createRootReducer() {
  return combineReducers({
    ...app,
    keys,
    languages,
    projects,
    theme,
    user,
  });
}

export default createRootReducer;
