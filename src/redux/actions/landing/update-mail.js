import { EVENT_TYPES } from '../../../constants';

const updateMail = mail => {
  return { mail, type: EVENT_TYPES.LANDING_UPDATE_MAIL };
};

export default updateMail;
