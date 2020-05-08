import { EVENT_TYPES } from '../../../constants';

const deleteKey = key => ({
  key,
  type: EVENT_TYPES.LANGUAGE_DELETE_KEY,
});

export default deleteKey;
