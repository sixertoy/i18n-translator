import { EVENT_TYPES } from '../../constants';

const updateSubscribingEmail = email => {
  return { type: EVENT_TYPES.APP_UPDATE_SUBSCRIBING_EMAIL, value: email };
};

export default updateSubscribingEmail;
