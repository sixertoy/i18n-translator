import { combineReducers } from 'redux';

import app from './app';
import demo from './demo';
import favorites from './favorites';
import keys from './keys';
import languages from './languages';
import loading from './loading';
import projects from './projects';
import theme from './theme';
import user from './user';
import version from './version';

function createRootReducer() {
  return combineReducers({
    app,
    demo,
    favorites,
    keys,
    languages,
    loading,
    projects,
    theme,
    user,
    version,
  });
}

export default createRootReducer;
