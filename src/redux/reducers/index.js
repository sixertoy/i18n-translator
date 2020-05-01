import { combineReducers } from 'redux';

import * as app from './app';
import * as theme from './theme';
import * as translations from './translations';

function createRootReducer() {
  return combineReducers({
    ...app,
    ...translations,
    ...theme,
  });
}

export default createRootReducer;
