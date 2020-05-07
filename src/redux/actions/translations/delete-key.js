import { EVENT_TYPES } from '../../../constants';

const deleteKey = key => ({
  key,
  type: EVENT_TYPES.TRANSLATIONS_KEY_DELETE,
});

export default deleteKey;
