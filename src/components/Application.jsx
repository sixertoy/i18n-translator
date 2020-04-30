// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createSelector } from 'reselect';

import { getThemeByThemeKey } from '../theme';
import ApplicationFooter from './layout/application-footer';
import ApplicationHeader from './layout/application-header';
import routes from './routes';

const selectThemeFromKey = createSelector(
  state => state.theme,
  key => getThemeByThemeKey(key)
);

const useStyles = createUseStyles({
  'application-footer': {
    composes: ['flex-0', 'is-full-width', 'is-flex'],
    height: 20,
    maxHeight: 20,
    minHeight: 20,
  },
  'application-header': {
    composes: ['flex-0', 'is-full-width', 'is-flex'],
    height: 100,
    maxHeight: 100,
    minHeight: 100,
  },
  'application-views': {
    composes: ['flex-1', 'is-flex'],
    height: 'auto',
  },
  container: {
    composes: ['flex-rows', 'is-full-layout'],
  },
});

const Application = () => {
  const theme = useSelector(selectThemeFromKey);
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div className={classes['application-header']}>
        <ApplicationHeader theme={theme} />
      </div>
      <div className={classes['application-views']}>
        <Switch>
          {routes.map(obj => {
            return (
              <Route
                key={obj.path}
                component={obj.component}
                exact={obj.exact}
                path={obj.path}
              />
            );
          })}
        </Switch>
      </div>
      <div className={classes['application-footer']}>
        <ApplicationFooter theme={theme} />
      </div>
    </div>
  );
};

Application.defaultProps = {};

Application.propTypes = {};

export default Application;
