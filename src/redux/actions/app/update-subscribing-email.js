import { EVENT_TYPES } from '../../../constants';

const updateSubscribingEmail = mail => {
  return { type: EVENT_TYPES.APP_UPDATE_SUBSCRIBING_EMAIL, value: mail };
};

export default updateSubscribingEmail;
