// import queryString from 'query-string';
import storage from 'redux-persist/lib/storage';
// import uuidv1 from 'uuid/v1';

const INITIAL_VALUES = {
  loading: false,
};

export const reduxPersistConfig = {
  blacklist: ['loading'],
  key: 'i18translator::',
  storage,
  whitelist: [],
};

export const getInitialState = () => {
  // const { search } = history.location;
  // const urlparams = queryString.parse(search);
  const initialState = { ...INITIAL_VALUES };
  return initialState;
};
