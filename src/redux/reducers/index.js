import { combineReducers } from 'redux';

import * as app from './app';
import * as datas from './datas';
import * as theme from './theme';

function createRootReducer() {
  return combineReducers({
    ...app,
    ...datas,
    ...theme,
  });
}

export default createRootReducer;
