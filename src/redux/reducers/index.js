import { combineReducers } from 'redux';

import * as app from './app';
import * as theme from './theme';

function createRootReducer() {
  return combineReducers({
    ...app,
    ...theme,
  });
}

export default createRootReducer;
