import { combineReducers } from 'redux';

import app from './app';
import favorites from './favorites';
import keys from './keys';
import languages from './languages';
import loading from './loading';
import projects from './projects';
import user from './user';

function createRootReducer() {
  return combineReducers({
    app,
    favorites,
    keys,
    languages,
    loading,
    projects,
    user,
  });
}

export default createRootReducer;
