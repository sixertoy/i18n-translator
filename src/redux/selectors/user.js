import { createSelector } from 'reselect';

export const selectUser = createSelector(
  state => state.user,
  user => {
    return user;
  }
);

export const selectIsLogged = createSelector(
  state => state.user,
  user => {
    return user.logged;
  }
);
