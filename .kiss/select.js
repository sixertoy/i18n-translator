import { createSelector } from 'reselect';

const getSomething = state => state.something;

const selectSomething = createSelector(getSomething, something => something);

export default selectSomething;
