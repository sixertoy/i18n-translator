import get from 'lodash.get';

const model = {
  ctime: () => Date.now(),
  email: null,
  emailVerified: false,
  isAnonymous: true,
  mtime: () => Date.now(),
  name: user => get(user, 'displayName', null),
  photoURL: null,
  provider: user => get(user, 'providerData.0.providerId', null),
  uid: null,
};

export default model;
