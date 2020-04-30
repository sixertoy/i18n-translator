// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createSelector } from 'reselect';

import { getThemeByThemeKey } from '../theme';
import ApplicationFooter from './layout/application-footer';
import ApplicationHeader from './layout/application-header';
import Welcome from './layout/views/welcome';

const selectThemeFromKey = createSelector(
  state => state.theme,
  key => getThemeByThemeKey(key)
);

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'is-full-layout'],
  },
  wrapper: {
    composes: ['flex-1'],
    height: 'auto',
  },
});

const Application = () => {
  const theme = useSelector(selectThemeFromKey);
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <ApplicationHeader theme={theme} />
      <div className={classes.wrapper}>
        <Switch>
          <Route component={Welcome} path="/" />
        </Switch>
      </div>
      <ApplicationFooter theme={theme} />
    </div>
  );
};

Application.defaultProps = {};

Application.propTypes = {};

export default Application;
