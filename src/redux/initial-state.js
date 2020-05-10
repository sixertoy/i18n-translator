import storage from 'redux-persist/lib/storage';

import { version } from '../../package.json';
import { PERSIST_STORAGE_KEY } from '../constants';
import { getThemeByThemeId } from '../theme';

const INITIAL_REDUCERS = {
  blacklist: {
    loading: false,
  },
  whitelist: {
    keys: {},
    languages: [],
    projects: [],
    theme: getThemeByThemeId('bali'),
    user: {},
    version,
  },
};

export const reduxPersistConfig = {
  blacklist: Object.keys(INITIAL_REDUCERS.blacklist),
  key: PERSIST_STORAGE_KEY,
  storage,
  whitelist: Object.keys(INITIAL_REDUCERS.whitelist),
};

export const getInitialState = () => {
  const { blacklist, whitelist } = INITIAL_REDUCERS;
  const values = { ...whitelist, ...blacklist };
  const initialState = { ...values };
  return initialState;
};
