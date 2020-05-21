import get from 'lodash.get';

const model = {
  ctime: () => Date.now(),
  displayName: null,
  email: null,
  emailVerified: false,
  isAnonymous: true,
  mtime: () => Date.now(),
  photoURL: null,
  provider: user => get(user, 'providerData.0.providerId', null),
  uid: null,
};

export default model;
