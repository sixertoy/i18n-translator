import { createSelector } from 'reselect';

export const selectDraft = createSelector(
  state => state.draft,
  draft => draft
);

export default selectDraft;
