import { EVENT_TYPES } from '../../../constants';

const deleteKey = key => ({
  key,
  type: EVENT_TYPES.LANGUAGE_KEY_DELETE,
});

export default deleteKey;
