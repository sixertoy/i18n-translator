import { combineReducers } from 'redux';

import * as loading from './loading';

function createRootReducer() {
  return combineReducers({
    ...loading,
  });
}

export default createRootReducer;
