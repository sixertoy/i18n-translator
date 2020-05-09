import { combineReducers } from 'redux';

import * as app from './app';
import languages from './languages';
import projects from './projects';
import theme from './theme';
import user from './user';

function createRootReducer() {
  return combineReducers({
    ...app,
    projects,
    theme,
    translations: languages,
    user,
  });
}

export default createRootReducer;
