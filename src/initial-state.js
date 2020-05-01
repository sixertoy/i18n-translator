// import queryString from 'query-string';
// import uuidv1 from 'uuid/v1';
import storage from 'redux-persist/lib/storage';

import { getThemeByThemeId } from './theme';

const INITIAL_VALUES = {
  datas: [],
  loading: false,
  theme: getThemeByThemeId('day'),
};

export const reduxPersistConfig = {
  blacklist: ['loading'],
  key: 'i18n_translation_editor::',
  storage,
  whitelist: ['theme', 'datas'],
};

export const getInitialState = () => {
  // const { search } = history.location;
  // const urlparams = queryString.parse(search);
  const initialState = { ...INITIAL_VALUES };
  return initialState;
};