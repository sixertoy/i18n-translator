import get from 'lodash.get';

import { EVENT_TYPES } from '../../constants';

const updateUser = user => {
  // const name = get(user, 'displayName', null);
  // const email = get(user, 'email', null);
  // const isAnonymous = get(user, 'isAnonymous', null);
  // const emailVerified = get(user, 'emailVerified', null);
  // const provider = get(user, 'providerData.0.providerId', null);
  return { type: EVENT_TYPES.USER_UPDATE, user };
};

export default updateUser;
