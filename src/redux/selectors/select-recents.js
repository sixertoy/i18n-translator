import { createSelector } from 'reselect';

const milliSecondsInHour = 60 * 1000 * 60;
const milliSecondsInDay = milliSecondsInHour * 24;
const milliSecondsInMonth = milliSecondsInDay * 30;
const milliSecondsInThreeMonths = milliSecondsInMonth * 3;

const getProjects = state => state.projects;

const selectRecents = createSelector(getProjects, projects => {
  const now = Date.now();
  const limit = now - milliSecondsInThreeMonths;
  const filtered = projects.filter(obj => obj.mtime >= limit);
  const lastThreeProjects = filtered.slice(0, 3);
  return lastThreeProjects;
});

export default selectRecents;
