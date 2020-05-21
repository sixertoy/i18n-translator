import { createSelector } from 'reselect';

export const selectUser = createSelector(
  state => state.user,
  user => {
    return user;
  }
);

export default selectUser;
