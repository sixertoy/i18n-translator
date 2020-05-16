import get from 'lodash.get';
import { createSelector } from 'reselect';

const getEmail = state => get(state, 'app.mail', null);

const selectSubscribingEmail = createSelector(getEmail, mail => mail);

export default selectSubscribingEmail;
