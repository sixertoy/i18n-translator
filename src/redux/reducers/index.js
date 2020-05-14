import { combineReducers } from 'redux';

import demo from './demo';
import favorites from './favorites';
import keys from './keys';
import languages from './languages';
import loading from './loading';
import projects from './projects';
import recents from './recents';
import theme from './theme';
import user from './user';
import version from './version';

function createRootReducer() {
  return combineReducers({
    demo,
    favorites,
    keys,
    languages,
    loading,
    projects,
    recents,
    theme,
    user,
    version,
  });
}

export default createRootReducer;
