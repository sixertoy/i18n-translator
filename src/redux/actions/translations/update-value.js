import { EVENT_TYPES } from '../../../constants';

const updateValue = ({ key, lang, update }) => {
  return {
    key,
    lang,
    type: EVENT_TYPES.LANGUAGE_VALUE_UPDATE,
    update,
  };
};

export default updateValue;
