import get from 'lodash.get';

const model = {
  ctime: () => Date.now(),
  displayName: null,
  email: null,
  emailVerified: false,
  isAnonymous: true,
  isLogged: false,
  langs: [],
  mtime: () => Date.now(),
  photoURL: null,
  provider: user => {
    return get(user, 'providerData.0.providerId');
  },
  uid: null,
};

export default model;
