import { EVENT_TYPES } from '../../constants';

const commitDraft = draft => {
  return { draft, type: EVENT_TYPES.PROJECT_CREATE };
};

export default commitDraft;
