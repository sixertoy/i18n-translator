import { EVENT_TYPES } from '../../../constants';

const updateValue = ({ id, lang, udpate }) => {
  return {
    id,
    lang,
    type: EVENT_TYPES.TRANSLATIONS_VALUE_UPDATE,
    udpate,
  };
};

export default updateValue;
