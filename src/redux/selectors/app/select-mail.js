import get from 'lodash.get';
import { createSelector } from 'reselect';

const getMail = state => get(state, 'landing.mail', null);

const selectMail = createSelector(getMail, mail => mail);

export default selectMail;
