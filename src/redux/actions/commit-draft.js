import { DEFAULT_LANGUAGES, EVENT_TYPES } from '../../constants';

const commitDraft = draft => {
  const label = DEFAULT_LANGUAGES[draft.lang];
  const json = JSON.parse(draft.content);
  return { draft, json, label, type: EVENT_TYPES.PROJECT_CREATE };
};

export default commitDraft;
