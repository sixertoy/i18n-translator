import { EVENT_TYPES } from '../../constants';

const updateDraft = obj => {
  return { type: EVENT_TYPES.DRAFT_UPDATE, value: obj };
};

export default updateDraft;
