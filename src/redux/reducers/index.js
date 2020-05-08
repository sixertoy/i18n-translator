import { combineReducers } from 'redux';

import * as app from './app';
import translations from './languages';
import projects from './projects';
import theme from './theme';

function createRootReducer() {
  return combineReducers({
    ...app,
    projects,
    theme,
    translations,
  });
}

export default createRootReducer;
