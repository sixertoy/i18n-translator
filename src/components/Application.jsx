// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { getThemeByThemeKey } from '../theme';
import ApplicationFooter from './layout/application-footer';
import ApplicationHeader from './layout/application-header';

const selectThemeFromKey = createSelector(
  state => state.theme,
  key => getThemeByThemeKey(key)
);

const useStyles = createUseStyles({
  container: {},
});

const Application = () => {
  const theme = useSelector(selectThemeFromKey);
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <ApplicationHeader theme={theme} />
      <ApplicationFooter theme={theme} />
    </div>
  );
};

Application.defaultProps = {};

Application.propTypes = {};

export default Application;
