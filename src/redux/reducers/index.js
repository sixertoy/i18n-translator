import { combineReducers } from 'redux';

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
