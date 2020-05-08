import storage from 'redux-persist/lib/storage';

import { PERSIST_STORAGE_KEY } from './constants';
import { getThemeByThemeId } from './theme';

const INITIAL_VALUES = {
  loading: false,
  theme: getThemeByThemeId('bali'),
  translations: [],
};

export const reduxPersistConfig = {
  blacklist: ['loading'],
  key: PERSIST_STORAGE_KEY,
  storage,
  whitelist: ['theme', 'translations', 'version', 'projects', 'logged'],
};

export const getInitialState = () => {
  const initialState = { ...INITIAL_VALUES };
  return initialState;
};
