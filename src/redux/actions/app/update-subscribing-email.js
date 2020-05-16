import { EVENT_TYPES } from '../../../constants';

const updateSubscribingEmail = mail => {
  return { mail, type: EVENT_TYPES.APP_UPDATE_SUBSCRIBING_EMAIL };
};

export default updateSubscribingEmail;
