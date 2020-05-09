import storage from 'redux-persist/lib/storage';

import { PERSIST_STORAGE_KEY } from '../constants';
import { getThemeByThemeId } from '../theme';

const INITIAL_VALUES = {
  languages: [],
  loading: false,
  theme: getThemeByThemeId('bali'),
};

export const reduxPersistConfig = {
  blacklist: ['loading'],
  key: PERSIST_STORAGE_KEY,
  storage,
  whitelist: ['theme', 'languages', 'version', 'projects', 'user'],
};

export const getInitialState = () => {
  const initialState = { ...INITIAL_VALUES };
  return initialState;
};
