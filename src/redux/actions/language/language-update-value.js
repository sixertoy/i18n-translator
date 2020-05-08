import { EVENT_TYPES } from '../../../constants';

const updateValue = ({ key, lang, update }) => {
  return {
    key,
    lang,
    type: EVENT_TYPES.LANGUAGE_UPDATE_VALUE,
    update,
  };
};

export default updateValue;
